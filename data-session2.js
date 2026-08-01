// DATA — Session 2: Structural Engineering (Section 2) + Geotechnical Engineering (Section 3)
function Q2(tag, q, options, correct, sol, year){ return {tag, q, options, correct, sol, year: year || null}; }

const STRUCT_TOPICS = [
{
  id:"engineering-mechanics", name:"Engineering Mechanics",
  questions:[
  Q2("gen","A force of 100 N acts at 30° to the horizontal. Its horizontal component is:",["50 N","86.6 N","100 N","70.7 N"],1,"Horizontal component = F cosθ = 100 cos30° = 86.6 N."),
  Q2("gen","The centroid of a semicircular area of radius r (measured from the diameter) is at:",["r/2","4r/3π","2r/3","4r/π"],1,"Standard result for a semicircle: ȳ = 4r/(3π) from the diametral base."),
  Q2("gen","For a system of coplanar forces in equilibrium, the necessary conditions are:",["ΣFx=0 only","ΣFx=0, ΣFy=0, ΣM=0","ΣM=0 only","ΣFx=ΣFy"],1,"Static equilibrium in a plane requires zero net force in both x and y directions plus zero net moment."),
  Q2("gen","The coefficient of static friction is generally __ the coefficient of kinetic friction:",["Less than","Greater than or equal to","Unrelated to","Always equal to"],1,"Static friction coefficient is typically greater than or equal to kinetic friction coefficient — it takes more force to start motion than to sustain it."),
  Q2("gen","A ladder leaning against a smooth wall and resting on a rough floor is in equilibrium. The wall reaction is:",["Vertical","Horizontal (normal to wall)","At 45°","Zero"],1,"A smooth (frictionless) wall can only exert a normal (horizontal) reaction on the ladder."),
  Q2("gen","The moment of a force about a point is maximum when the force is applied:",["Along the line to the point","Perpendicular to the line joining the point","At any angle, unaffected","Only at the point itself"],1,"Moment = F×d×sinθ is maximized when θ=90°, i.e., force perpendicular to the position vector."),
  Q2("gen","For two equal and opposite parallel forces separated by a distance d, the net effect is:",["Zero force and zero moment","A couple with moment F×d","A single resultant force","Undefined"],1,"Equal, opposite, non-collinear parallel forces form a couple, producing pure moment F×d with zero net force."),
  Q2("gen","The centre of mass of a uniform triangular lamina lies at:",["The centroid, at 1/3 height from the base","The midpoint of the base","The apex","The circumcenter"],0,"For a uniform triangular lamina, centre of mass coincides with the geometric centroid, located at 1/3 the height from any side."),
  Q2("gen","A block on an inclined plane (angle θ) is on the verge of sliding. The angle of friction equals:",["θ","90°-θ","2θ","θ/2"],0,"At the point of impending slip, the angle of friction φ equals the angle of inclination θ (tanφ = μ = tanθ)."),
  Q2("gen","A free-body diagram shows:",["All forces internal to a body","All external forces and reactions acting on an isolated body","Only the weight of the body","Material properties"],1,"An FBD isolates a body and shows all external forces/reactions acting on it, used to apply equilibrium equations."),
  Q2("gen","The resultant of two forces of equal magnitude P acting at 90° to each other is:",["P","P√2","2P","P/√2"],1,"Resultant = √(P²+P²+2P²cos90°) = √(2P²) = P√2."),
  Q2("gen","Varignon's theorem states that the moment of a resultant force about a point equals:",["Zero","The algebraic sum of moments of its components about that point","The product of all component forces","Undefined"],1,"Varignon's theorem: the moment of a force equals the sum of moments of its components."),
  Q2("gen","A particle in equilibrium under three coplanar forces implies the forces are:",["Parallel","Concurrent (or forming a closed force triangle)","Perpendicular","Unrelated"],1,"For equilibrium under exactly three forces, they must be concurrent (or all parallel) and form a closed triangle when added vectorially."),
  Q2("gen","The unit of moment of a force in SI units is:",["N","N/m","N·m","N·m²"],2,"Moment = force × perpendicular distance → units N·m."),
  Q2("gen","Limiting friction is the friction force:",["At rest, with no applied force","Just before slipping begins (maximum static friction)","During sliding","Always zero"],1,"Limiting friction is the maximum value static friction can reach, just before motion begins."),
  Q2("gen","For a rigid body in equilibrium in 3D space, the number of independent equilibrium equations is:",["3","6","2","9"],1,"3D equilibrium requires 3 force equations (ΣFx=ΣFy=ΣFz=0) and 3 moment equations (ΣMx=ΣMy=ΣMz=0) = 6 total."),
  Q2("gen","The centroid of a quarter circle of radius r lies at a distance from each straight edge of:",["r/2","4r/3π","r/π","2r/3"],1,"Same result as the semicircle case applies along each axis: 4r/(3π) from each straight edge."),
  Q2("gen","A couple can be balanced only by:",["A single force","Another couple of equal and opposite moment","Zero force system","A moment about a different point"],1,"A couple has zero net force but non-zero moment; only another couple (equal, opposite moment) can balance it."),
  Q2("gen","The angle of repose of a granular material equals the angle of:",["Internal friction","External applied load","Zero friction","Elastic deformation"],0,"The angle of repose (max stable slope angle for a loose granular heap) equals the material's angle of internal friction.")
  ]
},
{
  id:"solid-mechanics", name:"Solid Mechanics",
  questions:[
  Q2("gen","A simply supported beam of span L carries a central point load W. The maximum bending moment is:",["WL/4","WL/2","WL/8","WL"],0,"For a central point load on a simply supported beam, Mmax = WL/4 at midspan."),
  Q2("gen","For a simply supported beam with UDL w over span L, maximum bending moment is:",["wL²/8","wL²/4","wL²/2","wL/8"],0,"Standard result: Mmax = wL²/8 at midspan for UDL on simply supported beam."),
  Q2("gen","In Mohr's circle for plane stress, the centre of the circle is located at:",["(σx+σy)/2, 0","(σx-σy)/2, 0","0,0","σx, σy"],0,"Centre of Mohr's circle = average normal stress = (σx+σy)/2 on the σ-axis."),
  Q2("gen","Hooke's law for a linear elastic material states stress is proportional to:",["Strain rate","Strain","Temperature","Time"],1,"Within the elastic limit, σ = Eε — stress is directly proportional to strain."),
  Q2("gen","The maximum shear stress theory (Tresca) is used for:",["Ductile materials","Brittle materials only","Elastic materials only","Fluids"],0,"Tresca's maximum shear stress criterion is a standard yield criterion applied to ductile materials."),
  Q2("gen","For a circular shaft under pure torsion, shear stress is:",["Zero at the centre, maximum at the outer surface","Uniform throughout","Maximum at the centre","Zero everywhere"],0,"Torsional shear stress varies linearly with radius, zero at the centroidal axis and maximum at the outer fibre."),
  Q2("gen","The section modulus Z of a rectangular section (b×d) is:",["bd²/6","bd³/12","bd²/4","bd/6"],0,"Z = I/y_max = (bd³/12)/(d/2) = bd²/6."),
  Q2("gen","The shear centre of a symmetric I-section lies:",["At the centroid","Outside the section","On the axis of symmetry, coincident with centroid","Undefined"],2,"For sections with two axes of symmetry (like a symmetric I-section), shear centre coincides with the centroid."),
  Q2("gen","Euler's buckling load for a column depends on:",["Only the cross-sectional area","E, I, effective length, and end conditions","Only material strength","Only column weight"],1,"Euler's formula: Pcr = π²EI/(Le)², depending on modulus, moment of inertia, and effective (unsupported) length."),
  Q2("gen","For pure bending of a beam, the neutral axis passes through:",["The bottom fibre","The top fibre","The centroid of the cross-section","Outside the section"],2,"For symmetric bending, the neutral axis passes through the centroid of the cross-section."),
  Q2("gen","Combined bending and axial stress in a column-beam is analyzed using the principle of:",["Superposition","Similitude","Virtual work only","Plasticity"],0,"Combined stresses from axial load and bending moment are superimposed (added algebraically) at each fibre."),
  Q2("gen","A material's modulus of rigidity relates:",["Normal stress to normal strain","Shear stress to shear strain","Volumetric stress to volumetric strain","Temperature to strain"],1,"Modulus of rigidity G is defined as the ratio of shear stress to shear strain."),
  Q2("gen","Slenderness ratio of a column is defined as:",["Le/r (effective length / radius of gyration)","L/A","r/Le","A/L"],0,"Slenderness ratio λ = Le/r, a key parameter in Euler's buckling analysis."),
  Q2("gen","For a cantilever beam with a point load W at the free end, maximum bending moment (at the fixed end) is:",["WL","WL/2","WL/4","WL²"],0,"Mmax = W×L, occurring at the fixed support."),
  Q2("gen","The relationship between E, G, and Poisson's ratio ν for isotropic materials is:",["E=2G(1+ν)","E=G(1-ν)","E=2G(1-ν)","G=2E(1+ν)"],0,"Standard elastic relation: E = 2G(1+ν)."),
  Q2("gen","Principal stresses occur on planes where:",["Shear stress is maximum","Shear stress is zero","Normal stress is zero","Both stresses are equal"],1,"By definition, principal planes are those on which shear stress vanishes and normal stress is extremum."),
  Q2("gen","The bending moment diagram for a UDL over the full span of a simply supported beam is a:",["Straight line","Triangle","Parabola","Rectangle"],2,"Since BM varies as a second-degree function of x under UDL, the BMD is a parabola.")
  ]
},
{
  id:"structural-analysis", name:"Structural Analysis",
  questions:[
  Q2("gen","The degree of static indeterminacy of a propped cantilever beam is:",["0","1","2","3"],1,"A propped cantilever has one redundant reaction beyond the 3 equilibrium equations, giving degree 1."),
  Q2("gen","Castigliano's second theorem gives:",["Stress at a point","Deflection as the partial derivative of strain energy w.r.t. load","Only support reactions","Material properties"],1,"Castigliano's 2nd theorem: deflection at a point of load application = ∂U/∂P, where U is total strain energy."),
  Q2("gen","For a perfect (statically determinate) plane truss with j joints, the number of members m satisfies:",["m=2j-3","m=2j","m=3j","m=j-3"],0,"Standard determinacy condition for a plane truss: m = 2j - 3 (for stable, determinate truss with 3 reaction components)."),
  Q2("gen","The moment distribution method is used to analyze:",["Determinate beams only","Statically indeterminate beams and frames","Trusses only","Cables only"],1,"Moment distribution (Hardy Cross method) is a classical technique for analyzing indeterminate beams/frames."),
  Q2("gen","Influence lines are used to determine the effect of:",["Fixed loads only","Moving loads at various positions","Material properties","Temperature changes only"],1,"Influence lines show how a response function (reaction, shear, moment) varies as a unit load moves across the structure."),
  Q2("gen","The stiffness matrix method is also known as the:",["Flexibility method","Displacement method","Force method","Virtual work method"],1,"The stiffness (displacement) method uses displacements as primary unknowns, as opposed to the flexibility (force) method."),
  Q2("gen","A cable under a uniformly distributed load (horizontal) takes the shape of a:",["Circle","Parabola","Catenary","Straight line"],1,"A cable under a UDL along the horizontal span (like a suspension bridge deck) forms a parabola."),
  Q2("gen","The principle of superposition is valid only for:",["Non-linear elastic structures","Linear elastic structures with small deformations","Plastic structures","Any structure"],1,"Superposition requires linear elastic behavior and small deformation assumptions to hold."),
  Q2("gen","For a fixed beam (both ends fixed) with central point load W, fixed-end moments are:",["WL/4 at each end","WL/8 at each end","WL/2 at each end","Zero"],1,"Standard fixed-end moment for central point load on a fixed beam: WL/8 at each support."),
  Q2("gen","The slope-deflection method expresses member end moments in terms of:",["Only external loads","Joint rotations, chord rotation, and fixed-end moments","Only material stiffness","Only span length"],1,"Slope-deflection equations relate end moments to joint rotations, relative displacement (chord rotation), and FEMs."),
  Q2("gen","An arch that has three hinges is:",["Statically indeterminate","Statically determinate","Unstable","Rigid with no rotation"],1,"A three-hinged arch has exactly enough hinges to make it statically determinate (the third hinge removes the extra redundancy of a two-hinged arch)."),
  Q2("gen","The unit load method (virtual work) is used primarily to find:",["Support reactions only","Deflections at a point","Material stress-strain curve","Buckling load only"],1,"The unit load method applies virtual work principles specifically to compute deflections/rotations at a chosen point."),
  Q2("gen","For a two-hinged arch, the redundant (indeterminate) quantity usually solved for is:",["The horizontal thrust","The vertical reaction","The moment at the crown","The arch rise"],0,"A two-hinged arch is indeterminate to degree 1; the horizontal thrust is the typical redundant chosen for analysis."),
  Q2("gen","In the force (flexibility) method, the primary structure is obtained by:",["Adding extra supports","Removing redundant reactions/members to make it determinate","Doubling the span","Removing all loads"],1,"The flexibility method releases redundants to create a statically determinate 'primary' structure, then compensates using compatibility equations."),
  Q2("gen","The degree of kinematic indeterminacy considers unknown:",["Reactions only","Joint displacements/rotations","Member forces only","Material properties"],1,"Kinematic indeterminacy counts unknown displacement degrees of freedom (translations/rotations) at joints.")
  ]
},
{
  id:"concrete-structures", name:"Concrete Structures",
  questions:[
  Q2("gen","In limit state design, the partial safety factor for concrete (as per IS 456) is typically:",["1.15","1.5","1.0","2.0"],1,"IS 456 specifies a partial safety factor of 1.5 for concrete in limit state design."),
  Q2("gen","The partial safety factor for steel reinforcement in limit state design (IS 456) is typically:",["1.5","1.15","1.0","2.5"],1,"IS 456 specifies 1.15 as the partial safety factor for reinforcing steel."),
  Q2("gen","Development length of a bar is required to:",["Increase concrete strength","Transfer bond stress safely from steel to surrounding concrete","Reduce shrinkage","Increase deflection"],1,"Development (anchorage) length ensures adequate bond so the bar can develop its design stress without slipping."),
  Q2("gen","The working stress method uses a factor of safety applied to:",["Ultimate loads","Permissible (allowable) stresses","Strain only","Material cost"],1,"WSM design keeps stresses within permissible limits derived by applying a factor of safety to material strength."),
  Q2("gen","For a singly reinforced rectangular beam in limit state design, the depth of the neutral axis increases with:",["Decreasing steel area","Increasing steel area","Decreasing beam width","No dependency on steel area"],1,"More tension steel area shifts the neutral axis depth deeper (toward the compression zone) to maintain force equilibrium."),
  Q2("gen","An under-reinforced beam section fails by:",["Sudden concrete crushing without warning","Yielding of steel first, giving ductile/warning failure","Shear failure only","Bond failure only"],1,"Under-reinforced design ensures steel yields before concrete crushes, giving a ductile failure mode with visible warning (cracking, deflection)."),
  Q2("gen","Minimum reinforcement in a beam (as per IS 456) is specified mainly to:",["Increase self-weight","Prevent sudden brittle failure at first cracking","Reduce cost","Increase span"],1,"Minimum steel ensures the section can carry the cracking moment without abrupt failure."),
  Q2("gen","Shear reinforcement in RC beams is typically provided as:",["Longitudinal bars only","Stirrups (vertical or inclined)","Bent-up bars only, never stirrups","Not required in any beam"],1,"Shear is primarily resisted by vertical/inclined stirrups, sometimes supplemented with bent-up bars."),
  Q2("gen","The effective span of a simply supported beam is taken as:",["Clear span only","Clear span + effective depth (or centre-to-centre of supports, whichever is less)","Centre-to-centre of supports always","Clear span - effective depth"],1,"IS 456 defines effective span as the lesser of (clear span + effective depth) and (centre-to-centre distance between supports)."),
  Q2("gen","Punching shear is a critical consideration in the design of:",["Beams","Flat slabs / footings around columns","Retaining walls","Staircases"],1,"Punching (two-way) shear failure around a column or concentrated load is critical in flat slabs and isolated footings."),
  Q2("gen","The modular ratio m used in working stress design is defined as:",["Es/Ec","Ec/Es","Es×Ec","1/(Es×Ec)"],0,"Modular ratio m = Es/Ec (ratio of modulus of elasticity of steel to that of concrete)."),
  Q2("gen","Isolated footings are typically designed to resist:",["Only axial column load, spreading it to a safe bearing pressure on soil","Only lateral loads","Only torsion","No loads"],0,"The primary function of an isolated footing is to distribute the column's axial (and sometimes moment) load to the soil within its safe bearing capacity."),
  Q2("gen","Bond stress between concrete and reinforcement primarily depends on:",["Bar diameter, surface characteristics (deformed vs plain), and concrete grade","Only bar length","Only bar colour","Ambient temperature only"],0,"Bond strength depends on bar surface (ribbed/deformed bars bond better), diameter, and concrete strength/grade.")
  ]
},
{
  id:"steel-structures", name:"Steel Structures",
  questions:[
  Q2("gen","In limit state design of steel structures (IS 800), the partial safety factor for yield stress is typically:",["1.10","1.5","1.0","2.0"],0,"IS 800 uses a partial safety factor of about 1.10 for the yield strength of structural steel."),
  Q2("gen","A tension member design is primarily governed by:",["Buckling","Yielding of gross section and rupture of net section","Shear only","Torsion only"],1,"Tension members are checked for yielding (gross section) and rupture (net section at bolt holes/welds) — the lower governs capacity."),
  Q2("gen","Compression members in steel structures are primarily checked against:",["Yielding only","Buckling (instability)","Fatigue only","Bond failure"],1,"Compression member design is governed mainly by buckling — using effective slenderness ratio and IS 800 buckling curves."),
  Q2("gen","In a bolted connection, bearing failure of the plate occurs when:",["Bolt shears off","The plate material crushes locally against the bolt shank","The plate yields in tension away from the hole","Bolt bends"],1,"Bearing failure is local crushing of the plate material in contact with the bolt."),
  Q2("gen","An eccentric bolted connection resists load through:",["Direct shear only","Combined direct shear and shear due to the moment caused by eccentricity","Torsion only","Bending only"],1,"Eccentric connections must resist direct load plus additional shear forces from the moment created by load eccentricity (typically via elastic vector method)."),
  Q2("gen","Plastic analysis of steel structures assumes the material behaves as:",["Purely elastic","Rigid-plastic (with a defined plastic moment capacity)","Brittle","Non-linear elastic only"],1,"Plastic analysis idealizes the material as rigid-plastic, forming plastic hinges once the plastic moment Mp is reached."),
  Q2("gen","The shape factor of a rectangular cross-section is:",["1.0","1.5","2.0","1.7"],1,"Shape factor = Mp/My = 1.5 for a rectangular section (a standard, well-known result)."),
  Q2("gen","A collapse mechanism forms in a structure when:",["One plastic hinge forms","Enough plastic hinges form to convert the structure (or part) into a mechanism","No hinges form","Only elastic deformation occurs"],1,"Collapse occurs when sufficient plastic hinges form so the structure (or a portion) can deform freely as a mechanism."),
  Q2("gen","Fillet welds are designed based on their:",["Throat thickness and effective length","Leg length only","Colour","Base metal thickness only"],0,"Fillet weld strength is computed using the effective throat thickness (≈0.707×leg size) and effective length."),
  Q2("gen","Beam-column members in steel structures resist:",["Axial force only","Combined axial force and bending moment","Shear only","Torsion only"],1,"Beam-columns are subjected to combined axial compression/tension and bending, requiring interaction equation checks."),
  Q2("gen","Column base plates are designed to:",["Transfer column load safely to the foundation, spreading it over a larger area","Increase column height","Resist wind load only","Provide architectural finish only"],0,"Base plates distribute the concentrated column load over a larger footing/foundation area within allowable bearing pressure.")
  ]
}
];

const GEO_TOPICS = [
{
  id:"soil-properties-classification", name:"Soil Properties, Classification & Compaction",
  questions:[
  Q2("gen","The void ratio of a soil is defined as the ratio of:",["Volume of voids to total volume","Volume of voids to volume of solids","Volume of solids to total volume","Volume of water to volume of voids"],1,"Void ratio e = Vv/Vs (volume of voids to volume of solids) — distinct from porosity, which uses total volume."),
  Q2("gen","Porosity n and void ratio e are related by:",["n = e/(1+e)","n = e(1+e)","n = 1/e","n = e-1"],0,"Standard relation: n = e/(1+e), derived from their respective definitions."),
  Q2("gen","The plasticity index (PI) of a soil is defined as:",["Liquid limit - Plastic limit","Liquid limit + Plastic limit","Plastic limit - Shrinkage limit","Liquid limit / Plastic limit"],0,"PI = LL - PL, representing the range of water content over which soil behaves plastically."),
  Q2("gen","In the Unified Soil Classification System (USCS), the symbol 'CH' denotes:",["Well-graded gravel","Poorly graded sand","Inorganic clay of high plasticity","Organic silt"],2,"USCS: C=clay, H=high plasticity → CH is inorganic clay of high plasticity."),
  Q2("gen","Specific gravity of soil solids for most inorganic soils typically ranges around:",["1.0-1.5","2.65-2.75","4.0-5.0","0.5-1.0"],1,"Typical specific gravity of soil solids (mineral grains) is about 2.65 to 2.75 for most inorganic soils."),
  Q2("gen","Standard Proctor compaction test determines:",["Shear strength of soil","Optimum moisture content and maximum dry density","Permeability of soil","Liquid limit"],1,"The Proctor test establishes the compaction curve, from which OMC and MDD (max dry density) are found."),
  Q2("gen","As compactive effort increases, the optimum moisture content generally:",["Increases","Decreases","Remains unchanged","Becomes infinite"],1,"Higher compactive effort (e.g., Modified vs Standard Proctor) generally decreases OMC and increases max dry density."),
  Q2("gen","The zero air voids line on a compaction curve represents:",["Fully saturated soil with no air voids, for a given specific gravity","Fully dry soil","Maximum possible density at any moisture","An empirical curve only"],0,"The ZAV (100% saturation) line is a theoretical curve showing dry density if there were zero air voids at each moisture content."),
  Q2("gen","Consistency limits (Atterberg limits) are determined for:",["Coarse-grained soils only","Fine-grained (cohesive) soils","Rock only","Gravel only"],1,"Atterberg limits (LL, PL, SL) characterize the plasticity behavior of fine-grained/cohesive soils."),
  Q2("gen","A soil with liquidity index (LI) close to 1 is:",["Near its plastic limit, stiff","Near its liquid limit, soft/nearly liquid","Completely dry","Over-consolidated and very stiff"],1,"LI = (w-PL)/(LL-PL). LI≈1 means natural water content is close to the liquid limit — soft, low-strength soil."),
  Q2("gen","Relative density Dr is used primarily to describe the state of:",["Cohesive soils","Cohesionless (granular) soils","Rock","Organic soils only"],1,"Relative density quantifies the denseness of cohesionless soils relative to their loosest and densest states."),
  Q2("gen","In the IS soil classification, group symbol 'SW' denotes:",["Well-graded sand","Poorly graded sand","Well-graded gravel","Silty sand"],0,"S=sand, W=well-graded → SW is well-graded sand.")
  ]
},
{
  id:"permeability-seepage", name:"Permeability, Seepage & Effective Stress",
  questions:[
  Q2("gen","Darcy's law states that the discharge velocity v is proportional to:",["The square of the hydraulic gradient","The hydraulic gradient i (v = ki)","The permeability squared","The void ratio only"],1,"Darcy's law: v = k·i, where k is the coefficient of permeability and i is the hydraulic gradient."),
  Q2("gen","In a flow net, flow lines and equipotential lines intersect at:",["Random angles","Right angles (90°)","Parallel, never intersecting","45° always"],1,"A properly drawn flow net has flow lines and equipotential lines forming curvilinear squares, intersecting orthogonally."),
  Q2("gen","Effective stress σ' is defined as:",["Total stress + pore pressure","Total stress − pore water pressure","Pore pressure only","Total stress × pore pressure"],1,"Terzaghi's effective stress principle: σ' = σ − u."),
  Q2("gen","The quicksand condition occurs when:",["Effective stress becomes zero due to upward seepage force equaling submerged weight","Soil dries completely","Permeability is zero","Effective stress is maximum"],0,"Quicksand occurs when upward seepage pressure equals the submerged unit weight, making effective stress zero and soil loses shear strength."),
  Q2("gen","The coefficient of permeability of clay is typically:",["Higher than sand","Much lower than sand","Equal to sand","Independent of soil type"],1,"Clay has very fine pores/low permeability, several orders of magnitude lower than sand."),
  Q2("gen","Seepage force per unit volume is given by:",["γw × i (unit weight of water × hydraulic gradient)","γw only","i only","γsat × i"],0,"Seepage force per unit volume = γw·i, acting in the direction of flow."),
  Q2("gen","In a flow net with Nf flow channels and Nd equipotential drops, the seepage discharge q per unit width is:",["q = k·h·(Nf/Nd)","q = k·h·(Nd/Nf)","q = k·h·Nf·Nd","q = k/h·(Nf/Nd)"],0,"Standard flow net formula: q = k·H·(Nf/Nd), where H is total head loss."),
  Q2("gen","Capillary rise in soil is generally greater in:",["Coarse sand","Fine-grained soils with smaller pore sizes","Gravel","Rock fragments"],1,"Smaller pore sizes (as in silts/clays) produce greater capillary rise due to higher surface tension effects relative to pore size."),
  Q2("gen","Piping failure in earthen dams/levees is caused primarily by:",["Excess compaction","Progressive internal erosion due to seepage exceeding critical gradient","Overloading from traffic","Chemical weathering only"],1,"Piping occurs when seepage gradient exceeds critical gradient, eroding soil particles and forming channels (pipes) that can lead to failure."),
  Q2("gen","Uplift pressure beneath a hydraulic structure is calculated using:",["Total stress only","Residual head at each point along the flow path (from the flow net)","Effective stress only","Surface runoff data"],1,"Uplift pressure at the base of a hydraulic structure is found from the residual (piezometric) head values derived from the flow net.")
  ]
},
{
  id:"consolidation-shear-strength", name:"Consolidation & Shear Strength",
  questions:[
  Q2("gen","One-dimensional consolidation theory (Terzaghi) assumes:",["Soil is fully dry","Flow of water is only in the vertical direction","Soil has zero compressibility","No excess pore pressure develops"],1,"Terzaghi's 1-D theory assumes vertical-only drainage/flow and gradual dissipation of excess pore water pressure."),
  Q2("gen","The coefficient of consolidation cv controls:",["The magnitude of settlement","The rate/time of consolidation settlement","The shear strength","The permeability only, unrelated to time"],1,"cv governs how quickly consolidation (and thus settlement) proceeds over time, via the time factor Tv."),
  Q2("gen","The time factor Tv in consolidation theory is a function of:",["cv, drainage path length, and time","Only void ratio","Only overburden pressure","Only water content"],0,"Tv = cv·t/Hdr², combining coefficient of consolidation, time, and drainage path length."),
  Q2("gen","The Mohr-Coulomb failure criterion is expressed as:",["τf = c + σ tanφ","τf = σ/c","τf = c×σ","τf = c - σtanφ"],0,"Standard shear strength equation: τf = c + σ·tanφ, where c is cohesion and φ is angle of internal friction."),
  Q2("gen","For a normally consolidated clay, the effective angle of friction φ' is generally:",["Higher than for overconsolidated clay of the same soil","Lower than for overconsolidated clay","Zero","Independent of stress history"],1,"Overconsolidated clays often show higher apparent friction/cohesion behavior at low stress due to stress history, though φ' itself is a material property; NC clays typically show comparatively higher pore pressure development affecting behavior — commonly tested framing is used in GATE-style questions."),
  Q2("gen","In an unconfined compression test, the soil sample is tested under:",["Zero confining (lateral) pressure","High confining pressure","Saturated drained conditions with backpressure","Constant volume with drainage"],0,"UCC test applies axial load with no lateral confining pressure (σ3=0), commonly used for saturated clays."),
  Q2("gen","A stress path is a plot representing the locus of:",["Stress states during loading, typically in p-q or similar stress-invariant space","Strain only","Time vs displacement","Water content vs time"],0,"Stress paths trace the sequence of stress states (e.g., in p'-q space) a soil element experiences during a test or loading history."),
  Q2("gen","Pre-consolidation pressure is the:",["Current overburden pressure","Maximum past effective stress the soil has experienced","Pressure at failure","Zero pressure state"],1,"Pre-consolidation pressure σ'c represents the maximum effective stress a soil has historically been subjected to."),
  Q2("gen","Over-consolidation ratio (OCR) is defined as:",["Present effective stress / pre-consolidation pressure","Pre-consolidation pressure / present effective stress","Void ratio ratio","Water content ratio"],1,"OCR = σ'c / σ'0 (pre-consolidation pressure divided by current effective overburden stress)."),
  Q2("gen","The vane shear test is primarily used to determine the in-situ:",["Permeability of sand","Undrained shear strength of soft clay","Compaction characteristics","Bearing capacity of rock"],1,"The vane shear test measures undrained shear strength (cu) of soft/sensitive clays in-situ.")
  ]
},
{
  id:"earth-pressure-slope-investigation", name:"Earth Pressure, Slope Stability & Sub-surface Investigation",
  questions:[
  Q2("gen","Rankine's theory for active earth pressure assumes the wall is:",["Rough and inclined","Smooth, vertical, with a horizontal backfill (in its simplest form)","Curved","Always battered"],1,"The classical Rankine formulation assumes a frictionless (smooth) vertical wall with horizontal ground surface; extensions exist for other geometries."),
  Q2("gen","Coulomb's earth pressure theory, unlike Rankine's, accounts for:",["Only vertical walls","Wall friction and inclined wall/backfill surfaces","Zero friction only","Only cohesionless soils in a special limited case"],1,"Coulomb's theory is more general, incorporating wall friction and arbitrary wall/backfill inclinations."),
  Q2("gen","The coefficient of active earth pressure Ka for a cohesionless soil (horizontal backfill, Rankine) is:",["tan²(45°+φ/2)","tan²(45°-φ/2)","sin φ","1-sinφ"],1,"Ka = tan²(45° − φ/2) (Rankine active case)."),
  Q2("gen","The coefficient of passive earth pressure Kp (Rankine, horizontal backfill) is:",["tan²(45°+φ/2)","tan²(45°-φ/2)","1/Ka is not simply related","sinφ"],0,"Kp = tan²(45° + φ/2) (Rankine passive case; note Kp = 1/Ka for the same φ)."),
  Q2("gen","Bishop's method for slope stability analysis accounts for:",["Only the weight of the slice","Inter-slice normal forces (simplified, ignoring inter-slice shear)","No slices at all","Only cohesion, ignoring friction"],1,"Bishop's simplified method considers inter-slice normal forces while neglecting inter-slice shear forces, improving on the ordinary method of slices."),
  Q2("gen","The factor of safety in slope stability analysis is generally defined as:",["Driving moment / Resisting moment","Resisting moment (or shear strength) / Driving moment (or mobilized shear)","Always equal to 1","Weight of soil / cohesion"],1,"FoS = available shear strength (resisting) / mobilized shear stress (driving) along the failure surface."),
  Q2("gen","An infinite slope analysis is applicable when:",["The slope has a small height compared to the failure surface depth/extent, allowing edge effects to be ignored","Only for very small slopes","Never used in practice","Only for saturated clay"],0,"Infinite slope analysis assumes a long uniform slope where end effects are negligible — used for shallow translational slides in residual soils."),
  Q2("gen","Standard Penetration Test (SPT) N-value is used to estimate:",["Only permeability","Relative density/consistency and approximate bearing capacity of soil","Only Atterberg limits","Water table depth precisely"],1,"SPT N-value is widely correlated with relative density (sands) and consistency (clays), and used in empirical bearing capacity/settlement formulas."),
  Q2("gen","A plate load test is primarily used to estimate:",["Grain size distribution","In-situ bearing capacity and settlement behavior of soil","Liquid limit","Permeability only"],1,"The plate load test directly measures load-settlement behavior at the test location, used to estimate bearing capacity/settlement."),
  Q2("gen","Sheet piles are primarily used for:",["Deep foundations under buildings","Retaining earth/water in excavations, cofferdams, and waterfront structures","Increasing soil permeability","Soil sampling"],1,"Sheet piles form continuous walls to retain soil or water, commonly used in excavations, cofferdams, and waterfront/retaining structures.")
  ]
},
{
  id:"foundations", name:"Foundations — Shallow & Deep",
  questions:[
  Q2("gen","Terzaghi's bearing capacity theory assumes the failure surface is:",["A straight line only","A general shear failure surface with specific zones (elastic wedge, radial shear, passive zone)","Undefined","Always circular"],1,"Terzaghi's theory divides the failure mechanism into an elastic wedge below the footing, a radial shear zone, and a passive Rankine zone."),
  Q2("gen","Ultimate bearing capacity in Terzaghi's equation (strip footing) is generally expressed as:",["qu = cNc + qNq + 0.5γBNγ","qu = cNc only","qu = γB only","qu = qNq only"],0,"Terzaghi's classic bearing capacity equation combines cohesion, surcharge, and self-weight terms with respective bearing capacity factors."),
  Q2("gen","Meyerhof's bearing capacity theory, compared to Terzaghi's, additionally accounts for:",["Nothing extra","Shape, depth, and inclination factors for more general footing/load conditions","Only cohesionless soils","Only circular footings"],1,"Meyerhof extended Terzaghi's approach with correction factors for footing shape, depth of embedment, and load inclination."),
  Q2("gen","A raft (mat) foundation is typically used when:",["Soil bearing capacity is high and loads are light","Column loads are heavy and/or soil bearing capacity is low, requiring a large combined footing","Only for single isolated columns","Never combined with basements"],1,"Raft foundations spread heavy or closely-spaced loads over a large area, suited to low bearing capacity soils."),
  Q2("gen","Negative skin friction on a pile occurs when:",["The pile settles more than surrounding soil","Surrounding soil settles more than the pile, dragging it down (adding load)","The pile is in rock","No settlement occurs anywhere"],1,"Negative skin friction develops when surrounding soil (e.g., consolidating fill) settles more than the pile, adding downward drag load on the pile."),
  Q2("gen","Pile group efficiency is generally __ 1 for closely spaced piles in clay:",["Greater than","Less than or equal to","Always exactly equal to","Unrelated to"],1,"Group efficiency is typically ≤1 for piles in clay due to overlapping stress zones reducing combined capacity versus isolated piles."),
  Q2("gen","Static pile capacity formulas estimate ultimate load as the sum of:",["Skin friction resistance and end bearing resistance","Only skin friction","Only end bearing","Only pile weight"],0,"Qu = Qs (skin friction) + Qp (point/end bearing) is the standard static capacity formulation."),
  Q2("gen","A pile load test is conducted to:",["Determine ultimate/allowable load capacity of a pile directly in the field","Measure only the pile material strength","Measure soil permeability","Measure water table depth"],0,"Pile load tests directly verify load-carrying capacity and settlement behavior of an installed pile."),
  Q2("gen","Ground improvement techniques like stone columns and vibro-compaction are primarily used to:",["Increase soil density/strength and reduce settlement/liquefaction potential","Decrease soil strength intentionally","Increase permeability only, with no strength benefit","Replace the need for foundations entirely"],0,"Ground improvement methods densify or reinforce weak/loose soils to improve bearing capacity and reduce settlement or liquefaction risk."),
  Q2("gen","Settlement of shallow foundations on sand is primarily:",["Immediate (elastic) settlement, occurring quickly upon loading","Long-term consolidation settlement over years","Zero always","Only due to creep"],0,"Cohesionless (sandy) soils drain quickly, so settlement occurs largely immediately upon load application, unlike the slow consolidation settlement typical of clays.")
  ]
}
];

// Additional GA questions (second set, for Mock 2 — avoids reusing Mock 1's exact GA items)
const GA_QUESTIONS_2 = [
  Q2("gen","Choose the word closest in meaning to 'concise':",["Verbose","Brief","Vague","Loud"],1,"Concise means expressing much in few words; closest synonym is 'brief'."),
  Q2("gen","A sum of ₹5000 is divided among A, B, C in ratio 2:3:5. B's share is:",["₹1000","₹1500","₹2000","₹2500"],1,"Total parts=10. B's share = 3/10 × 5000 = ₹1500."),
  Q2("gen","Find the odd one out: Square, Rectangle, Triangle, Rhombus",["Square","Rectangle","Triangle","Rhombus"],2,"Square, Rectangle, and Rhombus are all quadrilaterals (4 sides); Triangle has 3 sides — the odd one out."),
  Q2("gen","If today is Wednesday, what day will it be after 15 days?",["Wednesday","Thursday","Friday","Tuesday"],1,"15 mod 7 = 1, so one day after Wednesday = Thursday."),
  Q2("gen","Choose the correctly punctuated sentence:",["Its a nice day, isnt it","It's a nice day, isn't it?","Its a nice day isnt it","It's a nice day isn't it."],1,"Correct apostrophe usage for contractions (It's, isn't) and proper punctuation with a question mark."),
  Q2("gen","A person spends 60% of income and saves the rest. If savings are ₹8000, the income is:",["₹18,000","₹20,000","₹22,000","₹16,000"],1,"Savings=40% of income. 0.4×income=8000 → income=20,000."),
  Q2("gen","Statement: 'No cats are dogs. All dogs are animals.' Conclusion: 'No cats are animals' is:",["True","False","Cannot be determined from these premises as stated","Always true"],1,"The premises don't support this conclusion — cats could still be animals; the conclusion as stated is false/invalid given the premises say nothing excluding cats from being animals."),
  Q2("gen","Find the next term: 1, 4, 9, 16, 25, __",["30","36","32","28"],1,"These are perfect squares (1²,2²,3²,4²,5²); next is 6²=36."),
  Q2("gen","A clock shows 3:15. The angle between the hour and minute hands is:",["0°","7.5°","15°","30°"],1,"Minute hand at 90° (15min×6°). Hour hand at 3×30+15×0.5=97.5°. Difference=7.5°."),
  Q2("gen","Which word does NOT belong: Carpenter, Mason, Plumber, Umbrella",["Carpenter","Mason","Plumber","Umbrella"],3,"Carpenter, Mason, and Plumber are all skilled trades/occupations; Umbrella is an object, not an occupation.")
];

// Additional practice — new items for Structural + Geotechnical
const ADDITIONAL_2 = [
  {tag:"free", source:"Open test-series style (modeled)", q:"For a cantilever beam of length L with UDL w over full span, max bending moment is:", options:["wL²/2","wL²/8","wL²/4","wL²"], correct:0,
   sol:"For a cantilever with UDL, Mmax (at fixed end) = wL²/2."},
  {tag:"gen", q:"The modular ratio for M20 concrete (Es=2×10^5 MPa, Ec via IS 456 approx 5000√fck) is approximately:", options:["9.35","13.33","18.67","6.5"], correct:1,
   sol:"Ec ≈ 5000√20 ≈ 22360 MPa (IS 456 short-term modulus). Working-stress modular ratio conventionally uses Ec≈700×(σcbc/3) giving m≈13.33 for M20 as per IS 456 Table — the commonly quoted textbook value."},
  {tag:"free", source:"NPTEL-style assignment practice (modeled)", q:"A footing transfers a column load of 500 kN to soil with safe bearing capacity 100 kN/m². The minimum required footing area is:", options:["3 m²","5 m²","10 m²","50 m²"], correct:1,
   sol:"Area = Load / SBC = 500/100 = 5 m²."},
  {tag:"gen", q:"For Ka=0.3 (Rankine active), a vertical wall of height 5m retains dry sand of unit weight 18 kN/m³. Total active thrust per metre length is:", options:["67.5 kN","135 kN","40.5 kN","270 kN"], correct:0,
   sol:"Pa = 0.5×Ka×γ×H² = 0.5×0.3×18×25 = 67.5 kN per metre run."},
  {tag:"free", source:"Open test-series style (modeled)", q:"A soil sample has void ratio e=0.6 and specific gravity Gs=2.7. Its porosity is:", options:["0.375","0.6","0.25","0.45"], correct:0,
   sol:"n = e/(1+e) = 0.6/1.6 = 0.375."}
];

// Mock Test 2 — GATE pattern, core drawn from Structural + Geotechnical
const MOCK_2 = {
  id: "mock-2",
  title: "Mock Test 2 — GATE Pattern (GA + Structural & Geotechnical Engineering core)",
  duration_min: 180,
  info: "65 questions · 100 marks · GA: 10Q (5×1-mark + 5×2-mark) = 15 marks · Core: 55Q (25×1-mark + 30×2-mark) drawn from Structural + Geotechnical Engineering. Negative marking: −1/3 for a wrong 1-mark MCQ, −2/3 for a wrong 2-mark MCQ.",
  gaSlice: [10, 20] // uses a different 10 GA questions than Mock 1
};

// Merge into window.DATA (data.js must load before this file)
window.DATA.SUBJECTS.push(
  { id: "structural-engineering", name: "Structural Engineering", topics: STRUCT_TOPICS },
  { id: "geotechnical-engineering", name: "Geotechnical Engineering", topics: GEO_TOPICS }
);
window.DATA.GA_QUESTIONS = window.DATA.GA_QUESTIONS.concat(GA_QUESTIONS_2);
window.DATA.ADDITIONAL = window.DATA.ADDITIONAL.concat(ADDITIONAL_2);
window.DATA.MOCK_2 = MOCK_2;
