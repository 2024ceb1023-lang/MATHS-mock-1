// APP.JS
document.addEventListener('DOMContentLoaded', () => {

  // ---------- Navigation ----------
  document.querySelectorAll('.nav-item, .section-card').forEach(el => {
    el.addEventListener('click', () => {
      const view = el.getAttribute('data-view');
      if (!view) return;
      document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.getAttribute('data-view') === view));
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById('view-' + view).classList.add('active');
      window.scrollTo({top:0, behavior:'smooth'});
    });
  });

  const TAG_LABEL = {gen:'Original', free:'Free-source style'};
  const TAG_CLASS = {gen:'chip-gen', free:'chip-free'};
  let qUidCounter = 0;

  function chip(tag, extra){
    const label = TAG_LABEL[tag] || tag;
    const cls = TAG_CLASS[tag] || 'chip-gen';
    return `<span class="legend-chip ${cls}">${label}</span>${extra ? `<span class="mono" style="font-size:0.75rem;color:var(--ink-soft);">${extra}</span>` : ''}`;
  }

  // Click-to-reveal question card. Options are inert until clicked; clicking one
  // locks the question, marks it correct/incorrect, and reveals the right answer.
  function renderQuestion(qd){
    const uid = 'pq' + (qUidCounter++);
    const optsHtml = qd.options.map((o,i) =>
      `<li class="mcq-opt" data-uid="${uid}" data-i="${i}">${String.fromCharCode(65+i)}. ${o}</li>`
    ).join('');
    return `
      <div class="q-card" id="${uid}" data-correct="${qd.correct}">
        <div class="q-meta">${chip(qd.tag, qd.source || '')}</div>
        <div class="q-text">${qd.q}</div>
        <ul class="options">${optsHtml}</ul>
        <details class="sol"><summary>Show solution</summary><div class="sol-body">${qd.sol}</div></details>
      </div>`;
  }

  // Event delegation for practice-mode click-to-reveal options
  document.addEventListener('click', (e) => {
    const li = e.target.closest('.mcq-opt');
    if (!li) return;
    const card = document.getElementById(li.dataset.uid);
    if (!card || card.classList.contains('revealed')) return;
    card.classList.add('revealed');
    const correctIdx = +card.dataset.correct;
    const clickedIdx = +li.dataset.i;
    card.querySelectorAll('.mcq-opt').forEach(opt => {
      const i = +opt.dataset.i;
      if (i === correctIdx) opt.classList.add('correct');
      if (i === clickedIdx && i !== correctIdx) opt.classList.add('incorrect');
    });
  });

  function renderTopicBlock(topic){
    const block = document.createElement('div');
    block.className = 'topic-block';
    block.innerHTML = `
      <div class="topic-header">
        <h4>${topic.name}</h4>
        <span class="count">${topic.questions.length} questions</span>
      </div>
      <div class="topic-body">${topic.questions.map(renderQuestion).join('')}</div>`;
    block.querySelector('.topic-header').addEventListener('click', () => {
      block.querySelector('.topic-body').classList.toggle('open');
    });
    return block;
  }

  // ---------- Topic-wise (grouped by subject) ----------
  const topicContainer = document.getElementById('topicwise-container');
  window.DATA.SUBJECTS.forEach(subject => {
    const heading = document.createElement('h3');
    heading.style.cssText = 'color:var(--primary); margin:28px 0 12px 0; font-size:1.2rem;';
    heading.textContent = subject.name;
    topicContainer.appendChild(heading);
    subject.topics.forEach(topic => topicContainer.appendChild(renderTopicBlock(topic)));
  });

  // ---------- Subject-wise combined sets ----------
  const subjContainer = document.getElementById('subjectwise-container');
  window.DATA.SUBJECTS.forEach(subject => {
    const allQ = subject.topics.flatMap(t => t.questions);
    const block = document.createElement('div');
    block.className = 'topic-block';
    block.innerHTML = `
      <div class="topic-header">
        <h4>${subject.name} — combined set</h4>
        <span class="count">${allQ.length} questions across ${subject.topics.length} topics</span>
      </div>
      <div class="topic-body">${allQ.map(renderQuestion).join('')}</div>`;
    block.querySelector('.topic-header').addEventListener('click', () => {
      block.querySelector('.topic-body').classList.toggle('open');
    });
    subjContainer.appendChild(block);
  });

  // ---------- Additional practice ----------
  const addContainer = document.getElementById('additional-container');
  addContainer.innerHTML = window.DATA.ADDITIONAL.map(renderQuestion).join('');

  // ---------- Mocks list ----------
  const mocksContainer = document.getElementById('mocks-container');

  function mockCardHtml(mock, unlocked){
    const card = document.createElement('div');
    card.className = 'mock-card';
    if (unlocked){
      card.innerHTML = `<h4>${mock.title}</h4><div class="meta">${mock.info}</div><button class="btn start-mock" data-mock="${mock.id}">Start test</button>`;
    } else {
      card.innerHTML = `<h4>${mock.title}</h4><div class="meta">${mock.info}</div><button class="btn locked" disabled>Coming soon</button>`;
    }
    return card;
  }

  mocksContainer.appendChild(mockCardHtml(window.DATA.MOCK_1, true));
  mocksContainer.appendChild(mockCardHtml(window.DATA.MOCK_2, true));
  const upcomingMocks = [
    {id:'mock-3', title:'Mock Test 3', info:'Covers Water Resources and Environmental Engineering once those subjects are published.'},
    {id:'mock-4', title:'Mock Test 4', info:'Covers Transportation and Geomatics Engineering once those subjects are published.'},
    {id:'mock-5', title:'Mock Test 5', info:'Covers Construction Materials & Management once that subject is published.'},
    {id:'mock-6', title:'Mock Test 6', info:'A second full-length test spanning all eight subjects, once the full syllabus is published.'}
  ];
  upcomingMocks.forEach(m => mocksContainer.appendChild(mockCardHtml(m, false)));

  document.querySelectorAll('.start-mock').forEach(btn => {
    btn.addEventListener('click', () => startMock(btn.dataset.mock === 'mock-1' ? window.DATA.MOCK_1 : window.DATA.MOCK_2));
  });

  // ---------- Mock test runner ----------
  function buildMockQuestions(mock){
    // Core: 25 one-mark + 30 two-mark, sampled across the relevant subjects' topics
    let subjectIds;
    if (mock.id === 'mock-1') subjectIds = ['engineering-mathematics'];
    else subjectIds = ['structural-engineering', 'geotechnical-engineering'];

    const pool = window.DATA.SUBJECTS
      .filter(s => subjectIds.includes(s.id))
      .flatMap(s => s.topics.flatMap(t => t.questions));

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const core1 = shuffled.slice(0, 25).map(q => ({...q, marks:1}));
    const core2 = shuffled.slice(25, 55).map(q => ({...q, marks:2}));

    const gaSlice = mock.gaSlice || [0, 10];
    const gaPool = window.DATA.GA_QUESTIONS.slice(gaSlice[0], gaSlice[1]);
    const ga1 = gaPool.slice(0,5).map(q => ({...q, marks:1}));
    const ga2 = gaPool.slice(5,10).map(q => ({...q, marks:2}));

    return [...ga1, ...ga2, ...core1, ...core2];
  }

  function startMock(mock){
    const questions = buildMockQuestions(mock);
    const answers = new Array(questions.length).fill(null);
    let current = 0;
    let timeLeft = mock.duration_min * 60;
    let submitted = false;

    const mocksView = document.getElementById('view-mocks');
    mocksView.innerHTML = `
      <div class="test-runner">
        <div class="test-bar">
          <div><strong>${mock.title}</strong></div>
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
        <div class="q-meta"><span class="mono" style="font-size:0.78rem;color:var(--ink-soft);">Question ${current+1} of ${questions.length} · ${qd.marks} mark${qd.marks>1?'s':''}</span></div>
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

    // Negative marking: wrong 1-mark MCQ costs 1/3 mark, wrong 2-mark MCQ costs 2/3 mark. No penalty for unattempted.
    function finishTest(){
      if (submitted) return;
      submitted = true;
      clearInterval(timerInterval);
      let score = 0, correct=0, wrong=0, unattempted=0;
      questions.forEach((qd,i) => {
        if (answers[i] === null){ unattempted++; return; }
        if (answers[i] === qd.correct){ score += qd.marks; correct++; }
        else { score -= (qd.marks === 1 ? (1/3) : (2/3)); wrong++; }
      });
      score = Math.round(score*100)/100;
      const maxScore = questions.reduce((s,q)=>s+q.marks,0);

      mocksView.innerHTML = `
        <div class="page-head"><h2>${mock.title} — Results</h2></div>
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
          <div class="q-meta"><span class="mono" style="font-size:0.75rem;color:${isCorrect?'var(--good)':'var(--alert)'};">Question ${i+1} · ${qd.marks} mark${qd.marks>1?'s':''} · ${yourAns===null?'Unattempted':(isCorrect?'Correct':'Wrong')}</span></div>
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
