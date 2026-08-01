// DATA — Session 1: Engineering Mathematics (Section 1) + General Aptitude
// tag: "pyq" (verified past-year), "gen" (paraphrase reconstructed from memory — verify if it matters),
//      "gen" (newly written, original)
// NOTE: given GATE's genuine year-attribution risk, most items below are tagged "gen" rather than
// "pyq" unless the underlying result/question type is so standard it's unmistakably a real recurring GATE item.

function Q(tag, q, options, correct, sol, year){
  return {tag, q, options, correct, sol, year: year || null};
}

const TOPICS = [
{
  id: "linear-algebra", name: "Linear Algebra",
  questions: [
  Q("gen","Sum of eigenvalues of a 3×3 matrix is 12, product is 20. Two eigenvalues are 2 and 4. The third is:",["2.5","6","4","10"],1,"Sum of eigenvalues = trace. 2+4+λ=12 → λ=6."),
  Q("gen","If rank(A)=2 for a 4×4 matrix A, nullity(A) is:",["0","1","2","4"],2,"Rank–nullity: rank+nullity=n=4 → nullity=2."),
  Q("gen","A real symmetric matrix always has:",["Complex eigenvalues","Real eigenvalues; orthogonal eigenvectors for distinct λ","Real eigenvalues but never orthogonal eigenvectors","Only repeated eigenvalues"],1,"Spectral theorem: real symmetric ⇒ real eigenvalues, and eigenvectors of distinct eigenvalues are orthogonal."),
  Q("gen","x+y+z=6, 2x+y+3z=14, x+2y+z=8 has:",["Unique solution","No solution","Infinite solutions","Two solutions"],0,"det(coeff matrix) = -1 ≠ 0 → unique solution (x=1,y=2,z=3)."),
  Q("gen","For A=[[2,0],[0,3]], eigenvector for λ=2 is:",["(1,0)","(0,1)","(1,1)","(1,-1)"],0,"A is diagonal; eigenvalues are diagonal entries, eigenvector for λ=2 is (1,0)."),
  Q("gen","The determinant of a singular matrix is:",["1","-1","0","Undefined"],2,"A matrix is singular precisely when its determinant is 0."),
  Q("gen","If A is 3×3 with det(A)=5, det(2A) equals:",["10","40","20","5"],1,"det(kA)=k^n det(A) for n×n matrix. Here n=3, k=2: 2³×5=40."),
  Q("gen","A matrix A satisfying A^T = -A is called:",["Symmetric","Skew-symmetric","Orthogonal","Idempotent"],1,"By definition, A^T=-A defines a skew-symmetric matrix (diagonal entries must be 0)."),
  Q("gen","Trace of a matrix equals:",["Product of eigenvalues","Sum of eigenvalues","Sum of diagonal minors","Determinant"],1,"Trace (sum of diagonal entries) always equals the sum of the eigenvalues."),
  Q("gen","For a 2×2 matrix with eigenvalues 3 and -2, det(A) equals:",["1","-6","6","-1"],1,"det(A) = product of eigenvalues = 3×(-2) = -6."),
  Q("gen","The rank of a null (zero) matrix of any size is:",["Equal to its order","1","0","Undefined"],2,"A zero matrix has no non-zero rows/columns, so its rank is 0."),
  Q("gen","Vectors (1,2) and (2,4) in R² are:",["Linearly independent","Linearly dependent","Orthogonal","Unit vectors"],1,"(2,4) = 2×(1,2), a scalar multiple, so they are linearly dependent."),
  Q("gen","An n×n matrix A is invertible if and only if:",["det(A)=0","rank(A)<n","det(A)≠0","A is symmetric"],2,"Invertibility ⇔ non-singular ⇔ det(A)≠0 ⇔ rank(A)=n."),
  Q("gen","Eigenvalues of an upper triangular matrix are:",["The off-diagonal entries","The diagonal entries","Always zero","Always equal"],1,"For triangular matrices, the characteristic polynomial factors directly from the diagonal, so eigenvalues = diagonal entries."),
  Q("gen","If Av=λv with v≠0, v is called:",["A basis vector","An eigenvector of A","A null vector","A unit vector"],1,"By definition, a non-zero v satisfying Av=λv is an eigenvector of A with eigenvalue λ."),
  Q("gen","The system Ax=0 has only the trivial solution if:",["det(A)=0","A is singular","det(A)≠0","rank(A)<n"],2,"A homogeneous system has only x=0 as solution exactly when A is non-singular, i.e. det(A)≠0."),
  Q("gen","For a matrix A, (A^{-1})^{-1} equals:",["I","A","A^T","0"],1,"The inverse of the inverse returns the original matrix: (A^-1)^-1 = A."),
  Q("gen","If A and B are both n×n invertible matrices, (AB)^{-1} equals:",["A^{-1}B^{-1}","B^{-1}A^{-1}","(BA)^{-1}","AB"],1,"Standard identity: (AB)^-1 = B^-1 A^-1 (order reverses)."),
  Q("gen","The characteristic equation of a 2×2 matrix A is λ²-5λ+6=0. The eigenvalues are:",["1,6","2,3","-2,-3","5,6"],1,"Factor: (λ-2)(λ-3)=0 → λ=2,3."),
  Q("gen","A square matrix A is idempotent if:",["A²=A","A²=I","A^T=A","A²=0"],0,"By definition, idempotent means A²=A."),
  Q("gen","Cramer's rule for solving Ax=b requires:",["A to be singular","det(A)≠0","A to be symmetric","b=0"],1,"Cramer's rule is only applicable when det(A)≠0 (unique solution exists)."),
  Q("gen","For matrix A=[[1,2],[2,4]], det(A) is:",["0","8","4","-4"],0,"det = 1×4 - 2×2 = 4-4 = 0 (rows are linearly dependent)."),
  Q("gen","A matrix with all eigenvalues positive is called:",["Negative definite","Positive definite","Singular","Skew-symmetric"],1,"A symmetric matrix with all positive eigenvalues is positive definite."),
  Q("gen","The number of linearly independent rows of a matrix equals its:",["Order","Trace","Rank","Determinant"],2,"This is the definition of rank via row space dimension."),
  Q("gen","If A is orthogonal, det(A) equals:",["Only 1","Only -1","±1","0"],2,"Since AA^T=I, (det A)²=1, so det(A) = +1 or -1."),
  Q("gen","For A=[[0,1],[-1,0]], the eigenvalues are:",["1,-1","i,-i","0,0","2,-2"],1,"Char. eq: λ²+1=0 → λ=±i (complex, since A represents a rotation)."),
  Q("gen","A square matrix A for which A²=0 (A≠0) is called:",["Idempotent","Nilpotent","Orthogonal","Involutory"],1,"A matrix with A^k=0 for some positive integer k (here k=2) is nilpotent."),
  Q("gen","Two eigenvectors corresponding to distinct eigenvalues of any square matrix are always:",["Equal","Linearly independent","Orthogonal","Parallel"],1,"Eigenvectors of distinct eigenvalues are always linearly independent (orthogonality only guaranteed for symmetric matrices)."),
  Q("gen","The sum of the eigenvalues of the identity matrix Iₙ is:",["0","1","n","n²"],2,"All n eigenvalues of Iₙ are 1, so their sum is n."),
  Q("gen","If A is a 3×3 matrix with rank 3, the system Ax=b (b≠0) has:",["No solution","A unique solution","Infinite solutions","Only x=0"],1,"Full rank (=n) square matrix is invertible, giving a unique solution x=A^{-1}b for any b.")
  ]
},
{
  id: "calculus", name: "Calculus",
  questions: [
  Q("gen","lim(x→0) (sin 3x)/x equals:",["0","1","3","∞"],2,"= 3·lim (sin3x)/(3x) = 3×1 = 3."),
  Q("gen","f(x)=x³-3x has a local maximum at:",["x=-1","x=1","x=0","x=3"],0,"f'=3x²-3=0→x=±1; f''=6x; f''(-1)=-6<0 → local max at x=-1."),
  Q("gen","Area between y=x² and y=4 is:",["16/3","32/3","8/3","4"],1,"Intersect at x=±2. Area=∫(4-x²)dx from -2 to2 = 32/3."),
  Q("gen","For f(x,y)=x²y+y³, ∂²f/∂x∂y at (1,2) is:",["2","4","1","6"],0,"∂f/∂y=x²+3y²; ∂/∂x of that = 2x = 2 at x=1."),
  Q("gen","Taylor series of eˣ truncated to x² gives e^0.1 ≈:",["1.1000","1.1050","1.1052","1.1200"],1,"1+0.1+0.01/2 = 1.1050."),
  Q("gen","lim(x→0) (1-cos x)/x² equals:",["0","1","1/2","∞"],2,"Using series cos x≈1-x²/2: (1-cosx)/x² → 1/2."),
  Q("gen","∫ x eˣ dx equals:",["eˣ(x-1)+C","eˣ(x+1)+C","xeˣ+C","eˣ+C"],0,"Integration by parts: ∫xeˣdx = xeˣ-∫eˣdx = xeˣ-eˣ+C = eˣ(x-1)+C."),
  Q("gen","The function f(x)=|x| at x=0 is:",["Differentiable","Continuous but not differentiable","Discontinuous","Undefined"],1,"|x| is continuous everywhere but has a corner at x=0, so it's not differentiable there."),
  Q("gen","The radius of curvature is maximum where the curve is:",["Most curved","Straightest (flattest)","Undefined","At an inflection point only"],1,"Radius of curvature is inversely related to curvature; a flatter curve has larger radius of curvature."),
  Q("gen","∂z/∂x for z = x²+xy+y² at (1,1) is:",["2","3","4","1"],1,"∂z/∂x = 2x+y = 2(1)+1 = 3."),
  Q("gen","The Mean Value Theorem requires f to be:",["Continuous on [a,b] and differentiable on (a,b)","Differentiable everywhere on R","Bounded only","Monotonic"],0,"MVT conditions: continuity on closed interval, differentiability on the open interval."),
  Q("gen","∫(0 to 1) x² dx equals:",["1/2","1/3","1","2/3"],1,"∫x²dx = x³/3, evaluated 0 to1 = 1/3."),
  Q("gen","div(grad φ) is also written as:",["curl φ","∇²φ","∇×φ","φ²"],1,"The divergence of the gradient is the Laplacian, ∇²φ."),
  Q("gen","A function has an inflection point where:",["f'=0","f''=0 and changes sign","f=0","f is discontinuous"],1,"Inflection points occur where concavity changes, i.e., f'' changes sign (typically f''=0 there)."),
  Q("gen","∫∫ over region 0≤x≤1, 0≤y≤x of (x+y) dy dx equals:",["1/2","5/12","2/3","1/3"],0,"Inner: ∫0^x(x+y)dy = x²+x²/2=1.5x². Outer: ∫0^1 1.5x²dx = 0.5."),
  Q("gen","curl(grad φ) for any scalar field φ is always:",["φ","0","1","∇²φ"],1,"A standard vector identity: the curl of a gradient is always the zero vector."),
  Q("gen","The length of the curve y=x from x=0 to x=1 is:",["1","√2","2","1/2"],1,"Arc length = ∫√(1+(dy/dx)²)dx = ∫√2 dx from 0to1 = √2."),
  Q("gen","For z=f(x,y), if ∂z/∂x=∂z/∂y=0 at a point, that point is:",["Always a maximum","A critical point","Always a minimum","Not on the surface"],1,"Vanishing first partials define a critical (stationary) point; second-derivative test is needed to classify it."),
  Q("gen","∫ 1/(1+x²) dx equals:",["ln(1+x²)+C","tan⁻¹x+C","sin⁻¹x+C","1/(1+x²)²+C"],1,"Standard integral: ∫dx/(1+x²) = arctan(x)+C."),
  Q("gen","The volume under z=1 over the region 0≤x≤2, 0≤y≤3 is:",["5","6","1","12"],1,"Volume = area of base × height = (2×3)×1 = 6."),
  Q("gen","lim(x→∞) (3x²+2)/(x²+5) equals:",["0","1","3","∞"],2,"Divide num & denom by x²: (3+2/x²)/(1+5/x²) → 3/1 = 3."),
  Q("gen","Divergence of vector field F=(x,y,z) is:",["0","1","3","x+y+z"],2,"div F = ∂x/∂x+∂y/∂y+∂z/∂z = 1+1+1 = 3."),
  Q("gen","The point where f'(x)=0 and f''(x)=0 needs:",["No further test","Higher-order derivative test","Is always a maximum","Is always a minimum"],1,"When both first and second derivatives vanish, a higher-order test (e.g., third or fourth derivative) is needed to classify the point."),
  Q("gen","∫(0 to π) sin x dx equals:",["0","1","2","π"],2,"∫sinx dx = -cosx, evaluated 0 to π = -(-1)-(-1) = 2."),
  Q("gen","The gradient vector ∇φ points in the direction of:",["Steepest decrease of φ","Steepest increase of φ","No change in φ","Along contour lines"],1,"By definition, ∇φ points toward the direction of maximum rate of increase of φ."),
  Q("gen","A saddle point of a two-variable function has:",["Both eigenvalues of Hessian positive","Both eigenvalues negative","Hessian eigenvalues of opposite sign","Zero Hessian"],2,"A saddle point occurs when the Hessian is indefinite — eigenvalues of opposite sign."),
  Q("gen","∫ cos²x dx equals:",["x/2 + sin2x/4 + C","sin2x/2+C","x+C","cos2x/2+C"],0,"Using cos²x=(1+cos2x)/2: ∫ = x/2 + sin(2x)/4 + C."),
  Q("gen","The surface integral of a vector field's divergence over a volume equals (by Gauss theorem):",["The line integral around the boundary","The flux through the closed surface","Zero always","The curl integral"],1,"Gauss (divergence) theorem: volume integral of div F = flux (surface integral) of F over the closed boundary."),
  Q("gen","Stoke's theorem relates:",["A surface integral of curl F to a line integral of F","A volume integral to surface integral","Two volume integrals","Divergence to a scalar field"],0,"Stokes' theorem: ∮F·dr = ∫∫(curl F)·dA over the surface bounded by the curve."),
  Q("gen","The second derivative test fails (is inconclusive) when the Hessian determinant is:",["Positive","Negative","Zero","Undefined only"],2,"A zero Hessian determinant means the second-derivative test cannot classify the critical point; higher-order analysis is needed.")
  ]
},
{
  id: "ode", name: "Ordinary Differential Equations",
  questions: [
  Q("gen","General solution of dy/dx + y = 0 is:",["y=Ceˣ","y=Ce^{-x}","y=Cx","y=C"],1,"Separable: dy/y=-dx → y=Ce^{-x}."),
  Q("gen","d²y/dx²-5(dy/dx)+6y=0 has general solution:",["y=C1e^{2x}+C2e^{3x}","y=C1e^{-2x}+C2e^{-3x}","y=(C1+C2x)e^{5x}","y=C1cos2x+C2sin3x"],0,"m²-5m+6=0→(m-2)(m-3)=0→m=2,3."),
  Q("gen","Euler-Cauchy eqn x²y''+xy'-y=0 has y=xᵐ with m=",["1,-1","1,1","0,1","2,-2"],0,"Substituting gives m²-1=0 → m=±1."),
  Q("gen","IVP dy/dx=y, y(0)=1 gives y(1)=",["1","e","e²","2"],1,"y=eˣ (from ln y=x+c, c=0), y(1)=e."),
  Q("gen","Which is a non-linear ODE?",["y''+3y'+2y=0","(y')²+y=x","y''+xy'=sinx","y'+y=eˣ"],1,"(y')² makes it non-linear (derivative raised to a power)."),
  Q("gen","The integrating factor for dy/dx+P(x)y=Q(x) is:",["e^{∫P dx}","e^{-∫P dx}","∫P dx","P(x)"],0,"Standard first-order linear ODE integrating factor = e^{∫P(x)dx}."),
  Q("gen","d²y/dx²+4y=0 has general solution:",["C1cos2x+C2sin2x","C1e^{2x}+C2e^{-2x}","(C1+C2x)e^{2x}","C1cos4x"],0,"m²+4=0→m=±2i → oscillatory solution C1cos2x+C2sin2x."),
  Q("gen","A first-order ODE with a repeated real root m of its auxiliary equation gives solution form:",["Ce^{mx}","(C1+C2x)e^{mx}","C1cos(mx)+C2sin(mx)","Cx^m"],1,"For repeated roots of a 2nd-order linear ODE, solution is (C1+C2x)e^{mx}."),
  Q("gen","The particular integral of y''-y=eˣ (since eˣ solves the homogeneous part) has form:",["Aeˣ","Axeˣ","Ax²eˣ","A"],1,"Since eˣ solves the homogeneous equation (root m=1), PI is taken as Axeˣ (multiply by x for resonance)."),
  Q("gen","dy/dx = -y/x is a:",["Linear, separable ODE","Non-linear ODE","Second-order ODE","PDE"],0,"It's first-order, separable, and linear in y."),
  Q("gen","The solution of dy/dx = ky (k>0), y(0)=y0 models:",["Exponential decay","Exponential growth","Linear growth","No growth"],1,"y=y0e^{kt} with k>0 is exponential growth (e.g., population growth models)."),
  Q("gen","An ODE containing only ordinary derivatives (not partial) of a single independent variable is called:",["A PDE","An ODE","An integral equation","A difference equation"],1,"That is the definition of an ordinary differential equation."),
  Q("gen","For d²y/dx² + ω²y = 0, the general solution represents:",["Exponential growth","Simple harmonic motion","Damped motion","Linear motion"],1,"This is the classic SHM equation; solution is C1cos(ωx)+C2sin(ωx)."),
  Q("gen","The order of the highest derivative in a differential equation is called its:",["Degree","Order","Rank","Index"],1,"By definition, order = order of the highest derivative present."),
  Q("gen","Bernoulli's equation dy/dx+Py=Qyⁿ is converted to linear form using substitution:",["v=y","v=y^{1-n}","v=y^n","v=1/y"],1,"Standard technique: divide by yⁿ and substitute v=y^{1-n} to linearize."),
  Q("gen","An exact ODE M dx + N dy = 0 satisfies:",["∂M/∂y = ∂N/∂x","M=N","∂M/∂x=∂N/∂y","M+N=0"],0,"Exactness condition: ∂M/∂y = ∂N/∂x."),
  Q("gen","The Wronskian of two solutions y1,y2 of a linear 2nd order ODE is non-zero when:",["Solutions are dependent","Solutions are linearly independent","y1=y2","Never"],1,"A non-zero Wronskian confirms linear independence of the solution pair."),
  Q("gen","d³y/dx³=0 has general solution:",["y=C1+C2x+C3x²","y=Ceˣ","y=C1x","y=0 only"],0,"Integrating three times: y''=C1→y'=C1x+C2→y=C1x²/2+C2x+C3, i.e., a general quadratic in x."),
  Q("gen","In the equation y''+2y'+y=0, the roots of the auxiliary equation are:",["1,1","-1,-1","1,-1","2,2"],1,"m²+2m+1=0→(m+1)²=0→m=-1 (repeated)."),
  Q("gen","A boundary value problem differs from an initial value problem in that:",["Conditions are specified at two different points","No conditions are needed","It's always non-linear","It has no solution"],0,"BVPs specify conditions at two (or more) different values of the independent variable, rather than all at one point."),
  Q("gen","The equation (2x+y)dx+(x+2y)dy=0 is:",["Exact","Not exact","Linear only","Homogeneous only"],0,"∂M/∂y=1, ∂N/∂x=1 — equal, so the equation is exact."),
  Q("gen","The complementary function of y''-3y'+2y=0 is:",["C1e^x+C2e^{2x}","C1e^{-x}+C2e^{-2x}","(C1+C2x)e^{x}","C1cosx+C2sinx"],0,"m²-3m+2=0→(m-1)(m-2)=0→m=1,2."),
  Q("gen","A linear ODE with variable coefficients reduced to constant coefficients by x=eᵗ is the:",["Bernoulli equation","Euler-Cauchy equation","Riccati equation","Clairaut equation"],1,"The Euler-Cauchy (equidimensional) equation is solved via x=eᵗ substitution."),
  Q("gen","For y'=f(x) only (no y term), the general solution is found by:",["Separation of variables/direct integration","Using an integrating factor","Laplace transform only","Undetermined coefficients only"],0,"If the RHS depends only on x, direct integration ∫f(x)dx gives the solution."),
  Q("gen","The particular integral of y''+y = sin x (since sinx is part of the homogeneous solution) takes the form:",["A sinx","Ax cosx (or similar x-multiplied form)","A","Ax²"],1,"Resonance case: since sinx solves the homogeneous eqn, PI includes a factor of x, e.g. Ax cosx + Bx sinx."),
  Q("gen","A first-order linear ODE always has:",["No solution","A unique solution given one initial condition (under standard conditions)","Infinite unrelated solutions","Only trivial solution"],1,"Under standard existence-uniqueness conditions, a first-order linear ODE with one initial condition has a unique solution."),
  Q("gen","For dy/dx = x² + y², separation of variables:",["Is directly applicable","Is not directly applicable (non-separable)","Gives a linear solution","Always fails"],1,"The RHS mixes x and y in a sum, not a product, so it cannot be separated directly."),
  Q("gen","In a series RLC circuit, the governing ODE for charge q(t) is:",["First order","Second order linear","Non-linear PDE","Algebraic only"],1,"L(d²q/dt²)+R(dq/dt)+q/C = V(t) — a standard second-order linear ODE."),
  Q("gen","y=Ce^{-2x} is the general solution of:",["dy/dx=2y","dy/dx=-2y","dy/dx=-2x","d²y/dx²=-2y"],1,"Differentiating y=Ce^{-2x} gives y'=-2Ce^{-2x}=-2y."),
  Q("gen","A linear combination of solutions of a homogeneous linear ODE is:",["Never a solution","Also a solution (superposition principle)","Only valid for 1st order","Always zero"],1,"Superposition principle: for linear homogeneous ODEs, any linear combination of solutions is also a solution.")
  ]
},
{
  id: "pde", name: "Partial Differential Equations",
  questions: [
  Q("gen","∂u/∂t=α∂²u/∂x² is:",["1st order time, 2nd order space","2nd order in both","1st order in both","2nd order time, 1st space"],0,"Order counted separately per variable: time-derivative is 1st order, space-derivative is 2nd order."),
  Q("gen","∂²φ/∂x²+∂²φ/∂y²=0 (Laplace) is:",["Elliptic","Parabolic","Hyperbolic","None"],0,"B²-4AC = 0-4(1)(1) = -4 <0 → elliptic."),
  Q("gen","Separation of variables u=X(x)T(t) applied to ut=αuxx gives:",["T'/(αT)=X''/X=const","T'/X'=const only","X''=T'' always","Not applicable"],0,"Dividing both sides by αXT separates the equation into functions of t alone and x alone, each equal to the same constant."),
  Q("gen","An odd function's Fourier series contains:",["Only cosine terms","Only sine terms","Both equally","Neither"],1,"Odd f(x): cosine coefficients vanish, leaving pure sine series."),
  Q("gen","The 1-D wave equation ∂²u/∂t² = c²∂²u/∂x² is classified as:",["Elliptic","Parabolic","Hyperbolic","Mixed"],2,"B²-4AC>0 for the wave equation → hyperbolic."),
  Q("gen","The general solution of the 1-D wave equation (D'Alembert's solution) is:",["u=f(x+ct)+g(x-ct)","u=f(x)g(t)","u=f(x²+t²)","u=f(x)/g(t)"],0,"D'Alembert's solution expresses u as the sum of two waves travelling in opposite directions."),
  Q("gen","An even function's Fourier series contains:",["Only sine terms","Only cosine terms and a0","Neither term","Only odd harmonics"],1,"Even functions have zero sine (bn) coefficients, leaving cosine terms plus the constant."),
  Q("gen","The heat equation ut=αuxx models:",["Wave propagation","Diffusion/heat conduction","Steady potential flow","Elastic vibration"],1,"This is the standard parabolic diffusion/heat-conduction equation."),
  Q("gen","A steady-state (time-independent) solution of the heat equation reduces it to:",["Laplace's equation","The wave equation","A first-order ODE","An algebraic equation"],0,"Setting ∂u/∂t=0 in ut=αuxx gives uxx=0 (1-D), generalizing to Laplace's equation in higher dimensions."),
  Q("gen","The period of a function's Fourier series over (-L,L) uses basis functions with argument:",["nπx/L","nx","2πx","x/n"],0,"Standard Fourier series on (-L,L) uses cos(nπx/L), sin(nπx/L)."),
  Q("gen","Boundary conditions where the function value itself is specified are called:",["Neumann conditions","Dirichlet conditions","Robin conditions","Cauchy conditions"],1,"Specifying u itself on the boundary = Dirichlet condition (vs. Neumann, which specifies the normal derivative)."),
  Q("gen","Neumann boundary conditions specify:",["The function value","The normal derivative of the function","Both function and derivative","Nothing"],1,"Neumann conditions prescribe the derivative (flux) at the boundary."),
  Q("gen","A PDE is linear if:",["The dependent variable and its partial derivatives appear only to the first power, not multiplied together","It has only 2 variables","It's always separable","Coefficients must be constant"],0,"Same linearity definition as for ODEs, extended to partial derivatives."),
  Q("gen","2-D Laplace's equation in polar coordinates is used for problems with:",["Rectangular symmetry","Circular/cylindrical symmetry","No symmetry","Only 1-D domains"],1,"Polar form is natural for problems with circular boundaries (e.g., circular plates, pipes)."),
  Q("gen","The principle allowing sums of solutions of a linear homogeneous PDE to also be solutions is:",["Duality","Superposition","Separation","Orthogonality"],1,"Superposition principle applies to linear homogeneous PDEs just as it does to linear ODEs."),
  Q("gen","A Fourier half-range sine series is used when the function is defined on:",["(-L,L) and even","(0,L) and extended as an odd function","(0,L) and extended as an even function","All of R"],1,"Half-range sine series arise from extending a function on (0,L) oddly about x=0."),
  Q("gen","D'Alembert's solution of the wave equation is derived using the change of variables:",["ξ=x+ct, η=x-ct","ξ=xt, η=x/t","ξ=x², η=t²","No substitution needed"],0,"This characteristic-line substitution reduces the wave equation to ∂²u/∂ξ∂η=0."),
  Q("gen","The equation uxx+uyy=f(x,y) (non-zero RHS) is called:",["Homogeneous Laplace","Poisson's equation","Wave equation","Heat equation"],1,"Laplace's equation with a non-zero source term is called Poisson's equation."),
  Q("gen","In separation of variables, choosing the wrong sign for the separation constant typically:",["Fails to satisfy standard boundary conditions (e.g., periodic/zero)","Is always correct","Doesn't matter","Makes the PDE linear"],0,"The sign is chosen to produce oscillatory (trig) solutions consistent with typical boundary conditions; the wrong sign gives exponential/hyperbolic solutions that usually fail to satisfy them."),
  Q("gen","Fourier coefficients a0, an, bn are computed using integrals of f(x) multiplied by:",["1, cos(nπx/L), sin(nπx/L) respectively","Only sin terms","Only exponential terms","Random weights"],0,"Standard Euler formulas for Fourier coefficients use these orthogonal basis functions.")
  ]
},
{
  id: "prob-stats", name: "Probability and Statistics",
  questions: [
  Q("gen","A fair die is rolled twice; P(sum=8) is:",["5/36","6/36","1/6","4/36"],0,"Favorable pairs: (2,6)(3,5)(4,4)(5,3)(6,2) = 5 of 36."),
  Q("gen","Median of {4,8,6,5,3,7} is:",["5","5.5","6","6.5"],1,"Sorted: 3,4,5,6,7,8. Median=(5+6)/2=5.5."),
  Q("gen","≈95% of a normal distribution lies within:",["μ±1σ","μ±2σ","μ±3σ","μ±0.5σ"],1,"Empirical rule: 68-95-99.7 for 1,2,3 standard deviations."),
  Q("gen","For independent X,Y: E[XY] equals:",["E[X]E[Y]","E[X]+E[Y]","0","Cov(X,Y)"],0,"Independence implies E[XY]=E[X]E[Y]."),
  Q("gen","Vehicle arrivals at a toll booth are best modeled by:",["Normal","Poisson","Uniform","Binomial(n=2)"],1,"Poisson models counts of independent random events in a fixed interval."),
  Q("gen","Variance of a constant c is:",["c","c²","0","1"],2,"A constant has no spread, so Var(c)=0."),
  Q("gen","For a Binomial(n,p) distribution, the mean is:",["np","np(1-p)","p/n","n/p"],0,"Standard result: mean of Binomial(n,p) = np."),
  Q("gen","P(A∪B) for mutually exclusive A,B equals:",["P(A)P(B)","P(A)+P(B)","P(A)-P(B)","0"],1,"Since P(A∩B)=0 for mutually exclusive events, P(A∪B)=P(A)+P(B)."),
  Q("gen","The standard normal distribution has mean and variance:",["0 and 1","1 and 0","0 and 0","1 and 1"],0,"By definition, the standard normal Z has μ=0, σ²=1."),
  Q("gen","For a data set, if all values are increased by 5, the standard deviation:",["Increases by 5","Stays the same","Becomes 5","Doubles"],1,"Adding a constant shifts the mean but doesn't change the spread; standard deviation is unaffected."),
  Q("gen","Bayes' theorem is used to find:",["Joint probability only","Posterior probability given prior and likelihood","Variance only","Mean only"],1,"Bayes' theorem updates a prior probability using observed evidence (likelihood) to get a posterior."),
  Q("gen","For a continuous random variable, P(X=a) for any specific value a is:",["1","0.5","0","Undefined"],2,"For continuous distributions, the probability of any single exact point is 0."),
  Q("gen","Two dice are rolled; P(both show the same number) is:",["1/6","1/36","6/36","5/36"],0,"6 favorable outcomes out of 36 → 1/6."),
  Q("gen","The coefficient of variation is defined as:",["σ/μ","μ/σ","σ²","σ×μ"],0,"CoV = standard deviation divided by mean, often expressed as a percentage."),
  Q("gen","For events A, B: P(A|B) = ",["P(A∩B)/P(B)","P(A)P(B)","P(A∪B)/P(B)","P(B)/P(A)"],0,"Definition of conditional probability."),
  Q("gen","If Var(X)=4, the standard deviation of X is:",["2","4","16","8"],0,"Standard deviation = √variance = √4 = 2."),
  Q("gen","In a normal Q-Q plot, points falling on a straight line suggest:",["Data is skewed","Data is approximately normal","Data has outliers only","No relationship"],1,"A linear Q-Q plot against normal quantiles indicates the data closely follows a normal distribution."),
  Q("gen","The range of a data set {2,9,4,7,3} is:",["7","9","5","2"],0,"Range = max - min = 9 - 2 = 7."),
  Q("gen","For a Poisson distribution with mean λ=4, the variance is:",["2","4","16","8"],1,"Poisson's defining property: variance = mean = λ = 4."),
  Q("gen","A random sample's sample mean is an unbiased estimator of the population mean because:",["E[sample mean] = population mean","It always equals the population mean exactly","It has zero variance","It's always an integer"],0,"Unbiasedness means the expected value of the estimator equals the true parameter."),
  Q("gen","The correlation coefficient r always lies in the range:",["[0,1]","[-1,1]","(-∞,∞)","[0,∞)"],1,"Pearson's correlation coefficient is bounded between -1 and 1."),
  Q("gen","Skewness of a perfectly symmetric distribution is:",["Positive","Negative","0","Undefined"],2,"A symmetric distribution (like the normal) has zero skewness."),
  Q("gen","If two events A and B are independent, then A and complement of B are:",["Dependent","Also independent","Mutually exclusive","Identical"],1,"Independence of A and B implies independence of A and B' as well."),
  Q("gen","The 50th percentile of a distribution is the:",["Mean","Mode","Median","Range"],2,"The 50th percentile is, by definition, the median."),
  Q("gen","For a uniform distribution on [a,b], the variance is:",["(b-a)²/12","(b-a)/2","(b-a)²/4","(a+b)/2"],0,"Standard result for continuous uniform distribution: Var = (b-a)²/12."),
  Q("gen","In hypothesis testing, a Type I error occurs when:",["A true null hypothesis is rejected","A false null hypothesis is accepted","Both hypotheses are true","No hypothesis is tested"],0,"Type I error = false positive = rejecting H0 when it's actually true.")
  ]
},
{
  id: "numerical", name: "Numerical Methods",
  questions: [
  Q("gen","Trapezoidal rule (n=2,h=1) for ∫(0 to2)x²dx using x=0,1,2 gives:",["2.0","2.5","3.0","8/3"],2,"h/2[f0+2f1+f2]=0.5[0+2+4]=3.0 (exact value is 8/3≈2.667; trapezoidal overestimates for convex f)."),
  Q("gen","Newton-Raphson iteration formula is:",["x_{n+1}=x_n-f(x_n)/f'(x_n)","x_{n+1}=x_n+f(x_n)/f'(x_n)","x_{n+1}=x_n-f'(x_n)/f(x_n)","x_{n+1}=[x_n+f(x_n)]/2"],0,"Derived from first-order Taylor expansion set to zero."),
  Q("gen","Order of convergence of Newton-Raphson (simple root) is:",["Linear","Quadratic","Cubic","None"],1,"For a simple root with f'≠0, NR converges quadratically."),
  Q("gen","Simpson's 1/3 rule requires the number of intervals n to be:",["Any integer","Even","Odd","Multiple of 3"],1,"It fits parabolas over pairs of intervals, requiring an even n."),
  Q("gen","Lagrange interpolation through n+1 points gives a polynomial of degree at most:",["n","n+1","n-1","2n"],0,"Given n+1 points, the unique interpolating polynomial has degree ≤ n."),
  Q("gen","The bisection method for root finding requires:",["f continuous, sign change over [a,b]","f differentiable everywhere","f linear","f monotonic only"],0,"Bisection relies on the Intermediate Value Theorem: f continuous with f(a),f(b) of opposite signs."),
  Q("gen","Simpson's 1/3 rule with h=1 over [0,4] (x=0,1,2,3,4) for ∫x²dx gives:",["64/3","21.0","20.0","22.0"],0,"h/3[f0+4(f1+f3)+2f2+f4] = 1/3[0+40+8+16]=64/3≈21.33."),
  Q("gen","The regula falsi (false position) method differs from bisection in that it:",["Always converges faster with certainty","Uses linear interpolation instead of the midpoint to pick the next point","Requires f differentiable","Cannot guarantee convergence"],1,"Regula falsi uses a secant line between (a,f(a)) and (b,f(b)) instead of simply bisecting the interval."),
  Q("gen","Gauss elimination method solves a system of linear equations by:",["Iterative substitution only","Reducing the augmented matrix to row-echelon form","Computing eigenvalues","Matrix inversion only"],1,"Gauss elimination reduces the system to upper-triangular form, then back-substitutes."),
  Q("gen","The error in Newton's forward difference interpolation is smallest near:",["The end of the data table","The beginning of the data table","The middle only","Anywhere equally"],1,"Forward differences are built from and most accurate near the start of an equally-spaced table."),
  Q("gen","In Newton-Raphson, if f'(x) is close to zero near the root, the method may:",["Converge faster","Diverge or converge slowly/erratically","Always converge quadratically","Be unaffected"],1,"A small derivative causes large steps and potential divergence."),
  Q("gen","The trapezoidal rule fits which shape between data points?",["Parabola","Straight line","Cubic","Circle"],1,"Trapezoidal rule approximates area using straight line segments (trapezoids)."),
  Q("gen","Gauss-Seidel method is a technique to solve systems of equations:",["Directly, in one step","Iteratively, using updated values within each iteration","Only for 2x2 systems","Only for singular matrices"],1,"Gauss-Seidel uses the latest updated values immediately within the same iteration, generally converging faster than Jacobi."),
  Q("gen","Newton-Raphson may fail to converge if:",["The initial guess is very close to the root","f'(x)=0 at or near the iterate","f is smooth","f is a polynomial"],1,"A zero (or near-zero) derivative at the iterate causes numerical instability or divergence."),
  Q("gen","The number of iterations for bisection to reach tolerance ε from interval width L is approximately:",["log2(L/ε)","L/ε","ε/L","Independent of L and ε"],0,"Since bisection halves the interval each step, n ≈ log2(L/ε)."),
  Q("gen","Runge-Kutta 4th order method is used to solve:",["Linear algebraic equations","Initial value problems (ODEs)","Boundary value PDEs only","Eigenvalue problems"],1,"RK4 is a widely used numerical method for solving ODE initial value problems with high accuracy."),
  Q("gen","Interpolation is used to:",["Extrapolate far beyond given data reliably","Estimate values within the range of given data points","Solve differential equations directly","Find eigenvalues"],1,"Interpolation estimates values between known data points; extrapolation beyond the range is generally less reliable."),
  Q("gen","The Jacobi iterative method updates all variables:",["Using only previously updated values in the same iteration","Simultaneously, using values from the previous iteration only","Using random order","One variable per iteration only"],1,"Unlike Gauss-Seidel, Jacobi's method uses only the previous iteration's full set of values."),
  Q("gen","Numerical differentiation using forward difference has truncation error of order:",["O(h)","O(h²)","O(h³)","Exact, no error"],0,"The simple forward-difference formula has first-order (O(h)) truncation error.")
  ]
}
];

// General Aptitude (every GATE paper includes 15 marks of GA — needed for a genuine full-pattern mock)
const GA_QUESTIONS = [
  Q("gen","Choose the word most nearly opposite in meaning to 'ephemeral':",["Fleeting","Permanent","Fragile","Elegant"],1,"Ephemeral means short-lived/transient; its opposite is 'permanent'."),
  Q("gen","If all Zips are Zaps, and some Zaps are Zops, which must be true?",["All Zips are Zops","Some Zips may be Zops","No Zips are Zops","All Zops are Zips"],1,"From the given statements we can only conclude it's possible (not certain) some Zips are Zops."),
  Q("gen","A train travels 60 km in 45 minutes. Its speed in km/h is:",["60","80","75","90"],1,"Speed = distance/time = 60/0.75 = 80 km/h."),
  Q("gen","Complete the series: 2, 6, 12, 20, 30, __",["36","40","42","44"],2,"Differences 4,6,8,10,12: 30+12=42."),
  Q("gen","Choose the correctly spelled word:",["Occassion","Occasion","Ocasion","Occasionn"],1,"'Occasion' is correct."),
  Q("gen","Cost price ₹800, selling price ₹920. Profit percentage is:",["10%","15%","12.5%","20%"],1,"Profit=120. 120/800×100=15%."),
  Q("gen","'All engineers are punctual. Some punctual people are doctors.' Conclusion: 'Some doctors are engineers' is:",["Definitely true","Definitely false","Cannot be determined","Always false"],2,"The premises don't establish a direct link between doctors and engineers; cannot be determined."),
  Q("gen","A can finish work in 10 days, B in 15 days. Together they finish in:",["5 days","6 days","8 days","12 days"],1,"1/10+1/15=1/6 → 6 days."),
  Q("gen","Pen is to Write as Knife is to:",["Sharp","Cut","Kitchen","Blade"],1,"Functional analogy: a pen's function is to write; a knife's is to cut."),
  Q("gen","Average of 5 consecutive integers starting from 10 is:",["10","11","12","13"],2,"10,11,12,13,14 → average 12."),
  Q("gen","If 'CAT' is coded as 'DBU', 'DOG' is coded as:",["EPH","EPI","FQH","EQH"],0,"Each letter shifted +1: D→E, O→P, G→H → EPH."),
  Q("gen","Which number replaces the question mark? 3, 9, 27, 81, ?",["162","243","216","324"],1,"Each term ×3: 81×3=243."),
  Q("gen","A map has scale 1:50,000. 4 cm on the map represents:",["2 km","20 km","0.2 km","200 km"],0,"4×50,000=200,000 cm = 2 km."),
  Q("gen","Choose the synonym of 'meticulous':",["Careless","Thorough","Hasty","Vague"],1,"Meticulous = showing great attention to detail; closest synonym is 'thorough'."),
  Q("gen","In a class of 60 students, 24 are girls. Percentage of boys is:",["36%","40%","60%","64%"],2,"Boys=36. 36/60×100=60%.")
];

// Additional practice — free-source-style / originals, kept separate from PYQs
const ADDITIONAL = [
  {tag:"free", source:"NPTEL-style assignment practice (modeled)", q:"The rank of [[1,2,3],[2,4,6],[1,1,1]] is:", options:["1","2","3","0"], correct:1,
   sol:"Row2 = 2×Row1 (dependent). Rows 1 and 3 are independent. Rank = 2."},
  {tag:"free", source:"Open test-series style (modeled)", q:"∫(0 to π/2) sin²x dx equals:", options:["π/4","π/2","1","π"], correct:0,
   sol:"sin²x=(1-cos2x)/2 → ∫ = [x/2 - sin2x/4] from 0 to π/2 = π/4."},
  {tag:"gen", q:"X~Binomial(n=10,p=0.5). Mean of X is:", options:["5","10","2.5","0.5"], correct:0, sol:"Mean = np = 10×0.5 = 5."},
  {tag:"free", source:"Open test-series style (modeled)", q:"General solution of y''+4y=0 is:", options:["C1cos2x+C2sin2x","C1e^{2x}+C2e^{-2x}","(C1+C2x)e^{2x}","C1cos4x"], correct:0,
   sol:"m²+4=0→m=±2i → y=C1cos2x+C2sin2x."},
  {tag:"gen", q:"Newton-Raphson with x0=2 for f(x)=x²-2, x1 equals:", options:["1.5","1.4142","1.75","1.6"], correct:0,
   sol:"x1 = 2-(4-2)/4 = 2-0.5=1.5."},
  {tag:"free", source:"NPTEL-style assignment practice (modeled)", q:"P(A)=0.4, P(B)=0.5, P(A∩B)=0.2. P(A∪B) equals:", options:["0.7","0.9","0.2","1.0"], correct:0,
   sol:"P(A∪B)=0.4+0.5-0.2=0.7."},
  {tag:"free", source:"Open test-series style (modeled)", q:"For the ODE y'=2x, y(0)=1, y(2) equals:", options:["3","5","4","8"], correct:1,
   sol:"y=x²+C, y(0)=1→C=1, y=x²+1. y(2)=5."},
  {tag:"gen", q:"det of triangular matrix [[3,0],[5,4]] is:", options:["12","15","20","7"], correct:0, sol:"det = product of diagonal entries = 3×4=12."}
];

// Mock Test 1 — built to real GATE pattern: 65 Q, 100 marks (GA: 10Q/15 marks; Core: 55Q/85 marks)
// Core section draws from Engineering Mathematics only, since that's the only subject built so far —
// clearly a partial-syllabus mock until later sessions add the other 7 subjects into the core mix.
const MOCK_1 = {
  id: "mock-1",
  title: "Mock Test 1 — GATE Pattern (GA + Engineering Mathematics core)",
  duration_min: 180,
  info: "65 questions · 100 marks · GA: 10Q (5×1-mark + 5×2-mark) = 15 marks · Core: 55Q (25×1-mark + 30×2-mark) = 85 marks. Core section currently draws from Engineering Mathematics only — later mocks mix in the other 7 subjects as they're built. Negative marking: −1/3 for a wrong 1-mark MCQ, −2/3 for a wrong 2-mark MCQ."
};

window.DATA = {
  SUBJECTS: [
    { id: "engineering-mathematics", name: "Engineering Mathematics", topics: TOPICS }
  ],
  GA_QUESTIONS, ADDITIONAL, MOCK_1
};
