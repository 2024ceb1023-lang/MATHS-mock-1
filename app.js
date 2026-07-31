// APP.JS
document.addEventListener('DOMContentLoaded', () => {

  // ---------- Navigation ----------
  const navItems = document.querySelectorAll('.nav-item, .section-card');
  navItems.forEach(el => {
    el.addEventListener('click', () => {
      const view = el.getAttribute('data-view');
      if (!view) return;
      document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.getAttribute('data-view') === view));
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById('view-' + view).classList.add('active');
      window.scrollTo({top:0, behavior:'smooth'});
    });
  });

  const TAG_LABEL = {pyq:'PYQ', recreated:'Recreated', gen:'Original', free:'Free-source'};
  const TAG_CLASS = {pyq:'chip-pyq', recreated:'chip-free', gen:'chip-gen', free:'chip-free'};

  function chip(tag, extra){
    const label = TAG_LABEL[tag] || tag;
    const cls = TAG_CLASS[tag] || 'chip-gen';
    return `<span class="legend-chip ${cls}">${label}</span>${extra ? `<span class="mono" style="font-size:0.75rem;color:var(--ink-soft);">${extra}</span>` : ''}`;
  }

  function renderQuestion(qd, idx){
    const optsHtml = qd.options.map((o,i) => `<li class="${i===qd.correct?'correct':''}">${String.fromCharCode(65+i)}. ${o}</li>`).join('');
    return `
      <div class="q-card">
        <div class="q-meta">${chip(qd.tag, qd.year || qd.source || '')}<span class="mono" style="font-size:0.75rem;color:var(--ink-soft);">Q${idx+1}</span></div>
        <div class="q-text">${qd.q}</div>
        <ul class="options">${optsHtml}</ul>
        <details class="sol"><summary>Show solution</summary><div class="sol-body">${qd.sol}</div></details>
      </div>`;
  }

  // ---------- Topic-wise ----------
  const topicContainer = document.getElementById('topicwise-container');
  window.DATA.TOPICS.forEach(topic => {
    const block = document.createElement('div');
    block.className = 'topic-block';
    block.innerHTML = `
      <div class="topic-header">
        <h4>${topic.name}</h4>
        <span class="count">${topic.questions.length} questions</span>
      </div>
      <div class="topic-body">${topic.questions.map((q,i)=>renderQuestion(q,i)).join('')}</div>`;
    block.querySelector('.topic-header').addEventListener('click', () => {
      block.querySelector('.topic-body').classList.toggle('open');
    });
    topicContainer.appendChild(block);
  });

  // ---------- Subject-wise (Engineering Mathematics combined) ----------
  const subjContainer = document.getElementById('subjectwise-container');
  const allMathQ = window.DATA.TOPICS.flatMap(t => t.questions.map(q => ({...q, topicName:t.name})));
  const subjBlock = document.createElement('div');
  subjBlock.className = 'topic-block';
  subjBlock.innerHTML = `
    <div class="topic-header">
      <h4>Engineering Mathematics — combined set</h4>
      <span class="count">${allMathQ.length} questions across 6 topics</span>
    </div>
    <div class="topic-body open">${allMathQ.map((q,i)=>renderQuestion(q,i)).join('')}</div>`;
  subjBlock.querySelector('.topic-header').addEventListener('click', () => {
    subjBlock.querySelector('.topic-body').classList.toggle('open');
  });
  subjContainer.appendChild(subjBlock);

  // ---------- Additional practice ----------
  const addContainer = document.getElementById('additional-container');
  addContainer.innerHTML = window.DATA.ADDITIONAL.map((q,i)=>renderQuestion(q,i)).join('');

  // ---------- Mocks list ----------
  const mocksContainer = document.getElementById('mocks-container');
  const mockCard = document.createElement('div');
  mockCard.className = 'mock-card';
  mockCard.innerHTML = `
    <h4>${window.DATA.MOCK_1.title}</h4>
    <div class="meta">${window.DATA.MOCK_1.info}</div>
    <button class="btn" id="start-mock-1">Start test</button>`;
  mocksContainer.appendChild(mockCard);

  for (let i = 2; i <= 6; i++){
    const c = document.createElement('div');
    c.className = 'mock-card';
    c.innerHTML = `<h4>Mock Test ${i}</h4><div class="meta">Arrives once the matching subjects are built (see Build roadmap).</div><button class="btn locked" disabled>Not yet built</button>`;
    mocksContainer.appendChild(c);
  }

  document.getElementById('start-mock-1').addEventListener('click', startMock1);

  // ---------- Mock test runner ----------
  function buildMockQuestions(){
    // Core: 25 one-mark + 30 two-mark, sampled round-robin across the 6 math topics for spread
    const pool = window.DATA.TOPICS.flatMap(t => t.questions);
    // shuffle deterministically-ish (simple shuffle, fine for practice purposes)
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const core1 = shuffled.slice(0, 25).map(q => ({...q, marks:1}));
    const core2 = shuffled.slice(25, 55).map(q => ({...q, marks:2}));
    const ga = window.DATA.GA_QUESTIONS;
    const ga1 = ga.slice(0,5).map(q => ({...q, marks:1}));
    const ga2 = ga.slice(5,10).map(q => ({...q, marks:2}));
    return [...ga1, ...ga2, ...core1, ...core2];
  }

  function startMock1(){
    const questions = buildMockQuestions();
    const answers = new Array(questions.length).fill(null);
    let current = 0;
    let timeLeft = window.DATA.MOCK_1.duration_min * 60;
    let submitted = false;

    const mocksView = document.getElementById('view-mocks');
    mocksView.innerHTML = `
      <div class="test-runner">
        <div class="test-bar">
          <div><strong>${window.DATA.MOCK_1.title}</strong></div>
          <div class="timer" id="mock-timer">--:--</div>
        </div>
        <div class="test-body">
          <div class="test-q-nav" id="test-q-nav"></div>
          <div id="test-q-area"></div>
          <div style="margin-top:18px; display:flex; gap:10px;">
            <button class="btn ghost" id="prev-q">Previous</button>
            <button class="btn ghost" id="next-q">Next</button>
            <button class="btn" id="submit-test" style="margin-left:auto;">Submit test</button>
          </div>
        </div>
      </div>`;

    const navEl = document.getElementById('test-q-nav');
    const qArea = document.getElementById('test-q-area');
    const timerEl = document.getElementById('mock-timer');

    function renderNav(){
      navEl.innerHTML = questions.map((_,i) =>
        `<button data-i="${i}" class="${answers[i]!==null?'answered':''} ${i===current?'current':''}">${i+1}</button>`
      ).join('');
      navEl.querySelectorAll('button').forEach(b => b.addEventListener('click', () => { current = +b.dataset.i; renderQ(); }));
    }

    function renderQ(){
      const qd = questions[current];
      qArea.innerHTML = `
        <div class="q-meta"><span class="mono" style="font-size:0.78rem;color:var(--ink-soft);">Q${current+1} of ${questions.length} · ${qd.marks} mark${qd.marks>1?'s':''}</span></div>
        <div class="q-text" style="font-size:1.05rem;">${qd.q}</div>
        <ul class="options" id="mc-options">
          ${qd.options.map((o,i)=>`<li data-i="${i}" style="cursor:pointer;${answers[current]===i?'border-color:var(--accent);background:var(--accent-soft);':''}">${String.fromCharCode(65+i)}. ${o}</li>`).join('')}
        </ul>`;
      qArea.querySelectorAll('#mc-options li').forEach(li => {
        li.addEventListener('click', () => {
          answers[current] = +li.dataset.i;
          renderQ(); renderNav();
        });
      });
      renderNav();
    }

    document.getElementById('prev-q').addEventListener('click', () => { if(current>0){current--; renderQ();} });
    document.getElementById('next-q').addEventListener('click', () => { if(current<questions.length-1){current++; renderQ();} });
    document.getElementById('submit-test').addEventListener('click', () => finishTest());

    function tick(){
      if (submitted) return;
      timeLeft--;
      const m = Math.floor(timeLeft/60), s = timeLeft%60;
      timerEl.textContent = `${m}:${s.toString().padStart(2,'0')}`;
      if (timeLeft <= 0) finishTest();
    }
    const timerInterval = setInterval(tick, 1000);
    tick();

    function finishTest(){
      if (submitted) return;
      submitted = true;
      clearInterval(timerInterval);
      let score = 0, correct=0, wrong=0, unattempted=0;
      questions.forEach((qd,i) => {
        if (answers[i] === null){ unattempted++; return; }
        if (answers[i] === qd.correct){ score += qd.marks; correct++; }
        else { score -= qd.marks/3*(qd.marks===1?1:2); wrong++; }
      });
      score = Math.round(score*100)/100;
      const maxScore = questions.reduce((s,q)=>s+q.marks,0);

      mocksView.innerHTML = `
        <div class="page-head"><h2>Mock Test 1 — Results</h2></div>
        <div class="stat-row" style="margin-bottom:30px;">
          <div class="stat"><div class="num">${score}/${maxScore}</div><div class="label">Score</div></div>
          <div class="stat"><div class="num">${correct}</div><div class="label">Correct</div></div>
          <div class="stat"><div class="num">${wrong}</div><div class="label">Wrong</div></div>
          <div class="stat"><div class="num">${unattempted}</div><div class="label">Unattempted</div></div>
        </div>
        <div id="review-container"></div>
        <button class="btn ghost" id="back-to-mocks" style="margin-top:20px;">Back to mock tests</button>`;

      const reviewEl = document.getElementById('review-container');
      reviewEl.innerHTML = questions.map((qd,i) => {
        const yourAns = answers[i];
        const isCorrect = yourAns === qd.correct;
        const optsHtml = qd.options.map((o,oi) => {
          let style = '';
          if (oi === qd.correct) style = 'border-color:var(--good);background:var(--good-soft);';
          else if (oi === yourAns) style = 'border-color:var(--alert);background:var(--alert-soft);';
          return `<li style="${style}">${String.fromCharCode(65+oi)}. ${o}${oi===yourAns?' (your answer)':''}</li>`;
        }).join('');
        return `<div class="q-card">
          <div class="q-meta"><span class="mono" style="font-size:0.75rem;color:${isCorrect?'var(--good)':'var(--alert)'};">Q${i+1} · ${qd.marks} mark${qd.marks>1?'s':''} · ${yourAns===null?'Unattempted':(isCorrect?'Correct':'Wrong')}</span></div>
          <div class="q-text">${qd.q}</div>
          <ul class="options">${optsHtml}</ul>
          <details class="sol"><summary>Show solution</summary><div class="sol-body">${qd.sol}</div></details>
        </div>`;
      }).join('');

      document.getElementById('back-to-mocks').addEventListener('click', () => location.reload());
    }

    renderQ();
  }

});
