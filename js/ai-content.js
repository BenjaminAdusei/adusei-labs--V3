// ─────────────────────────────────────────────────────────────
// ADUSEI LABS — AI CONTENT BASE
// Complete knowledge base for all 19 labs with WAEC questions
// ─────────────────────────────────────────────────────────────

const AI_CONTENT = {

    // ─── MECHANICS ──────────────────────────────────────────────

    projectile: {
        name: "Projectile Motion",
        description: "Projectile motion is the motion of an object thrown or projected into the air, subject to only the acceleration of gravity.",
        keyConcepts: [
            "Horizontal motion: constant velocity (v_x = u_x = u cos θ)",
            "Vertical motion: constant acceleration (g = 9.8 m/s²)",
            "Time of flight: T = 2u sin θ / g",
            "Maximum height: H = u² sin²θ / 2g",
            "Range: R = u² sin 2θ / g",
            "Maximum range occurs at 45°"
        ],
        formulas: [
            "v_x = u cos θ (horizontal velocity)",
            "v_y = u sin θ - gt (vertical velocity)",
            "x = u cos θ × t (horizontal displacement)",
            "y = u sin θ × t - ½gt² (vertical displacement)",
            "R = u² sin 2θ / g (range)",
            "H = u² sin²θ / 2g (maximum height)",
            "T = 2u sin θ / g (time of flight)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "A projectile is fired at an angle of 30° to the horizontal with a velocity of 40 m/s. What is the time of flight? (g = 10 m/s²)",
                options: ["2 s", "4 s", "6 s", "8 s"],
                answer: "2 s",
                solution: "T = 2u sin θ / g = 2 × 40 × sin30° / 10 = 2 × 40 × 0.5 / 10 = 4 s"
            },
            {
                type: "objective",
                question: "The range of a projectile is maximum when the angle of projection is:",
                options: ["30°", "45°", "60°", "90°"],
                answer: "45°",
                solution: "Maximum range occurs at 45° because R = u² sin 2θ / g, and sin 90° = 1"
            },
            {
                type: "theory",
                question: "A stone is thrown horizontally from the top of a cliff 20 m high with a velocity of 15 m/s. Calculate: (a) the time it takes to reach the ground (b) the horizontal distance from the base of the cliff where it lands. (g = 10 m/s²)",
                solution: "(a) Using y = ½gt², 20 = ½ × 10 × t², t = √4 = 2s\n(b) x = u_x × t = 15 × 2 = 30 m"
            },
            {
                type: "objective",
                question: "In projectile motion, the horizontal component of velocity:",
                options: ["Increases", "Decreases", "Remains constant", "Varies with height"],
                answer: "Remains constant",
                solution: "There is no horizontal acceleration, so horizontal velocity remains constant."
            },
            {
                type: "objective",
                question: "A projectile is fired with velocity u at angle θ. The maximum height reached is:",
                options: ["u²sin²θ/g", "u²sin²θ/2g", "u²sin2θ/g", "u²cos²θ/2g"],
                answer: "u²sin²θ/2g",
                solution: "H = u² sin²θ / 2g"
            }
        ],
        examTips: [
            "Always resolve velocity into horizontal and vertical components",
            "Time of flight depends only on vertical component",
            "Range depends on both horizontal and vertical components",
            "At maximum height, vertical velocity is zero",
            "Horizontal acceleration is always zero"
        ]
    },

    'inclined-plane': {
        name: "Inclined Plane",
        description: "An inclined plane is a flat surface tilted at an angle to the horizontal. It reduces the force needed to lift an object.",
        keyConcepts: [
            "Component of weight parallel to plane: mg sin θ",
            "Component of weight perpendicular to plane: mg cos θ",
            "Acceleration down the plane (no friction): a = g sin θ",
            "Friction on inclined plane: f = μR = μmg cos θ",
            "Mechanical advantage: MA = 1/sin θ"
        ],
        formulas: [
            "mg sin θ (component parallel to plane)",
            "mg cos θ (component perpendicular to plane)",
            "a = g sin θ (acceleration, no friction)",
            "a = g(sin θ - μ cos θ) (acceleration with friction)",
            "MA = 1/sin θ (mechanical advantage)",
            "Work input = Work output (ideal machine)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "A block of mass 5 kg is placed on a smooth inclined plane of angle 30°. What is the acceleration down the plane? (g = 10 m/s²)",
                options: ["2 m/s²", "5 m/s²", "8.7 m/s²", "10 m/s²"],
                answer: "5 m/s²",
                solution: "a = g sin θ = 10 × sin30° = 10 × 0.5 = 5 m/s²"
            },
            {
                type: "objective",
                question: "The mechanical advantage of an inclined plane of length 10 m and height 2 m is:",
                options: ["2", "5", "10", "20"],
                answer: "5",
                solution: "MA = length/height = 10/2 = 5"
            },
            {
                type: "theory",
                question: "A box of mass 20 kg is pushed up a smooth inclined plane of length 5 m and height 2 m. Calculate the force required to push the box up the plane at constant speed. (g = 10 m/s²)",
                solution: "F = mg sin θ = 20 × 10 × (2/5) = 80 N"
            },
            {
                type: "objective",
                question: "On an inclined plane, the normal reaction is equal to:",
                options: ["mg sin θ", "mg cos θ", "mg", "mg tan θ"],
                answer: "mg cos θ",
                solution: "The perpendicular component of weight is mg cos θ"
            },
            {
                type: "objective",
                question: "If friction is present on an inclined plane, the acceleration down the plane is:",
                options: ["g sin θ", "g cos θ", "g(sin θ - μ cos θ)", "g(sin θ + μ cos θ)"],
                answer: "g(sin θ - μ cos θ)",
                solution: "a = g sin θ - μg cos θ = g(sin θ - μ cos θ)"
            }
        ],
        examTips: [
            "Resolve weight into parallel and perpendicular components",
            "Normal reaction is always perpendicular to the plane",
            "Friction opposes motion up or down the plane",
            "Mechanical advantage = length/height",
            "Velocity ratio = length/height"
        ]
    },

    shm: {
        name: "Simple Harmonic Motion",
        description: "Simple Harmonic Motion (SHM) is a periodic motion where the restoring force is directly proportional to the displacement and acts in the opposite direction.",
        keyConcepts: [
            "F = -kx (restoring force)",
            "Period of spring-mass system: T = 2π√(m/k)",
            "Period of simple pendulum: T = 2π√(l/g)",
            "Frequency: f = 1/T",
            "Angular frequency: ω = 2πf = √(k/m)",
            "Energy in SHM: E = ½kA² = ½mω²A²"
        ],
        formulas: [
            "F = -kx (restoring force)",
            "T = 2π√(m/k) (spring-mass period)",
            "T = 2π√(l/g) (pendulum period)",
            "f = 1/T (frequency)",
            "ω = 2πf = √(k/m) (angular frequency)",
            "v_max = ωA (maximum velocity)",
            "a_max = ω²A (maximum acceleration)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "A simple pendulum has a period of 2 s. What is its length? (g = 10 m/s²)",
                options: ["0.5 m", "1.0 m", "1.5 m", "2.0 m"],
                answer: "1.0 m",
                solution: "T = 2π√(l/g), 2 = 2π√(l/10), √(l/10) = 1/π, l/10 = 1/π², l = 10/9.87 ≈ 1.0 m"
            },
            {
                type: "objective",
                question: "In SHM, the total mechanical energy is proportional to:",
                options: ["Amplitude", "Amplitude²", "Frequency", "Frequency²"],
                answer: "Amplitude²",
                solution: "E = ½kA², so energy is proportional to amplitude squared"
            },
            {
                type: "theory",
                question: "A mass of 0.5 kg attached to a spring oscillates with a period of 0.5 s. Calculate: (a) the spring constant (b) the frequency.",
                solution: "(a) T = 2π√(m/k), 0.5 = 2π√(0.5/k), k = 4π² × 0.5 / 0.25 = 78.96 N/m\n(b) f = 1/T = 1/0.5 = 2 Hz"
            },
            {
                type: "objective",
                question: "The maximum velocity of a particle in SHM occurs at:",
                options: ["Extreme position", "Mean position", "Quarter position", "Half position"],
                answer: "Mean position",
                solution: "Velocity is maximum at the mean position (equilibrium)"
            },
            {
                type: "objective",
                question: "A pendulum swings with SHM. Its acceleration is maximum at:",
                options: ["The equilibrium position", "The extreme positions", "Midway between equilibrium and extreme", "Everywhere"],
                answer: "The extreme positions",
                solution: "Acceleration is maximum at extreme positions (a = ω²A)"
            }
        ],
        examTips: [
            "SHM occurs when F ∝ -x (restoring force)",
            "At equilibrium, velocity is maximum, acceleration is zero",
            "At extreme positions, velocity is zero, acceleration is maximum",
            "Period of pendulum is independent of mass",
            "Period of spring depends on mass"
        ]
    },

    elasticity: {
        name: "Elasticity & Hooke's Law",
        description: "Hooke's Law states that the force needed to extend or compress a spring is directly proportional to the extension or compression, within the elastic limit.",
        keyConcepts: [
            "F = kx (Hooke's Law)",
            "Elastic limit: maximum force without permanent deformation",
            "Spring constant (k): measure of stiffness (N/m)",
            "Elastic potential energy: E = ½kx²",
            "Young's modulus: Y = (F/A) / (ΔL/L₀)",
            "Stress = F/A, Strain = ΔL/L₀"
        ],
        formulas: [
            "F = kx (Hooke's Law)",
            "k = F/x (spring constant)",
            "E = ½kx² (elastic potential energy)",
            "Y = (F/A) / (ΔL/L₀) (Young's modulus)",
            "Stress = F/A",
            "Strain = ΔL/L₀"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "A spring extends by 0.05 m when a 2 N force is applied. What is the spring constant?",
                options: ["20 N/m", "40 N/m", "60 N/m", "80 N/m"],
                answer: "40 N/m",
                solution: "k = F/x = 2/0.05 = 40 N/m"
            },
            {
                type: "objective",
                question: "The energy stored in a spring stretched by 0.02 m with k = 100 N/m is:",
                options: ["0.01 J", "0.02 J", "0.04 J", "0.08 J"],
                answer: "0.02 J",
                solution: "E = ½kx² = 0.5 × 100 × 0.02² = 0.02 J"
            },
            {
                type: "theory",
                question: "A spring of natural length 0.20 m extends to 0.30 m when a mass of 2 kg is hung from it. Calculate: (a) the spring constant (b) the extension when a mass of 3 kg is hung. (g = 10 m/s²)",
                solution: "(a) F = mg = 2 × 10 = 20 N, x = 0.30 - 0.20 = 0.10 m, k = F/x = 20/0.10 = 200 N/m\n(b) F = 3 × 10 = 30 N, x = F/k = 30/200 = 0.15 m"
            },
            {
                type: "objective",
                question: "If the spring constant doubles, the energy stored for the same extension:",
                options: ["Doubles", "Halves", "Quadruples", "Stays same"],
                answer: "Doubles",
                solution: "E = ½kx², so if k doubles, E doubles"
            },
            {
                type: "objective",
                question: "Hooke's Law is valid:",
                options: ["Only in the elastic limit", "Only beyond the elastic limit", "At all extensions", "Only for compression"],
                answer: "Only in the elastic limit",
                solution: "Hooke's Law only applies within the elastic limit"
            }
        ],
        examTips: [
            "Hooke's Law: F = kx (force proportional to extension)",
            "Spring constant (k) measures stiffness",
            "Elastic limit is the point where permanent deformation begins",
            "Young's modulus measures material stiffness",
            "Stress = F/A, Strain = ΔL/L₀"
        ]
    },

    'properties-matter': {
        name: "Properties of Matter",
        description: "Properties of matter include density, upthrust (Archimedes' Principle), viscosity, surface tension, and pressure in fluids.",
        keyConcepts: [
            "Density: ρ = m/V (kg/m³)",
            "Archimedes' Principle: Upthrust = weight of displaced fluid",
            "Upthrust: Fᵦ = ρ_f × V × g",
            "Viscosity: internal friction between fluid layers",
            "Surface tension: force per unit length (γ = F/L)",
            "Pressure in fluids: P = ρgh"
        ],
        formulas: [
            "ρ = m/V (density)",
            "Fᵦ = ρ_f × V × g (upthrust)",
            "F = η·A·(dv/dy) (viscous force)",
            "γ = F/L (surface tension)",
            "P = ρgh (pressure in fluids)",
            "P = F/A (pressure definition)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "A solid of mass 500 g has a volume of 200 cm³. What is its density in kg/m³?",
                options: ["2500 kg/m³", "500 kg/m³", "2000 kg/m³", "250 kg/m³"],
                answer: "2500 kg/m³",
                solution: "ρ = m/V = 0.5/(200×10⁻⁶) = 0.5/0.0002 = 2500 kg/m³"
            },
            {
                type: "objective",
                question: "An object of volume 0.02 m³ is immersed in water (ρ = 1000 kg/m³). What is the upthrust? (g = 10 m/s²)",
                options: ["100 N", "200 N", "300 N", "400 N"],
                answer: "200 N",
                solution: "Fᵦ = ρ_f × V × g = 1000 × 0.02 × 10 = 200 N"
            },
            {
                type: "theory",
                question: "A solid of mass 1.2 kg and density 6000 kg/m³ is completely immersed in a liquid of density 1200 kg/m³. Calculate: (a) the volume of the solid (b) the upthrust on the solid. (g = 10 m/s²)",
                solution: "(a) V = m/ρ = 1.2/6000 = 2×10⁻⁴ m³\n(b) Fᵦ = ρ_l × V × g = 1200 × 2×10⁻⁴ × 10 = 2.4 N"
            },
            {
                type: "objective",
                question: "The surface tension of water is 0.072 N/m. The force required to lift a needle of length 0.05 m from water is: (assume two surfaces)",
                options: ["0.0036 N", "0.0072 N", "0.0144 N", "0.036 N"],
                answer: "0.0072 N",
                solution: "F = 2 × γ × L = 2 × 0.072 × 0.05 = 0.0072 N"
            },
            {
                type: "objective",
                question: "Pressure in a fluid increases with:",
                options: ["Depth", "Surface area", "Volume", "Temperature"],
                answer: "Depth",
                solution: "P = ρgh, so pressure increases with depth"
            }
        ],
        examTips: [
            "Density = mass/volume (kg/m³)",
            "Upthrust = weight of displaced fluid",
            "Objects float if density < fluid density",
            "Surface tension is force per unit length",
            "Pressure in fluids depends on depth only"
        ]
    },

    // ─── THERMAL PHYSICS ──────────────────────────────────────────

    thermodynamics: {
        name: "Thermodynamics",
        description: "Thermodynamics is the study of heat, work, and temperature, and their relation to energy, entropy, and the physical properties of matter.",
        keyConcepts: [
            "Heat is energy transfer due to temperature difference",
            "Specific heat capacity: Q = mcΔT",
            "Latent heat: Q = mL",
            "Thermal equilibrium: heat lost = heat gained",
            "Zeroth law: thermal equilibrium",
            "First law: ΔU = Q - W"
        ],
        formulas: [
            "Q = mcΔT (heat transfer)",
            "Q = mL (latent heat)",
            "ΔU = Q - W (first law of thermodynamics)",
            "Efficiency = (output/input) × 100%",
            "Heat capacity C = mc"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "How much heat is required to raise the temperature of 2 kg of water from 20°C to 80°C? (c_w = 4200 J/kg°C)",
                options: ["504 kJ", "420 kJ", "504 J", "420 J"],
                answer: "504 kJ",
                solution: "Q = mcΔT = 2 × 4200 × (80-20) = 2 × 4200 × 60 = 504000 J = 504 kJ"
            },
            {
                type: "objective",
                question: "The specific latent heat of vaporization of water is 2.26×10⁶ J/kg. The energy required to vaporize 0.5 kg of water is:",
                options: ["1.13×10⁶ J", "2.26×10⁶ J", "0.5×10⁶ J", "4.52×10⁶ J"],
                answer: "1.13×10⁶ J",
                solution: "Q = mL = 0.5 × 2.26×10⁶ = 1.13×10⁶ J"
            },
            {
                type: "theory",
                question: "A 200 g copper block at 100°C is placed in 500 g of water at 20°C. What is the final temperature of the mixture? (c_cu = 400 J/kg°C, c_w = 4200 J/kg°C)",
                solution: "Heat lost by copper = Heat gained by water\n0.2 × 400 × (100 - T) = 0.5 × 4200 × (T - 20)\n80(100 - T) = 2100(T - 20)\n8000 - 80T = 2100T - 42000\n50000 = 2180T\nT = 22.94°C"
            },
            {
                type: "objective",
                question: "The first law of thermodynamics states that:",
                options: ["Energy is always lost", "Energy can be created", "ΔU = Q - W", "Heat always flows from hot to cold"],
                answer: "ΔU = Q - W",
                solution: "The first law: ΔU = Q - W"
            },
            {
                type: "objective",
                question: "Heat capacity is defined as:",
                options: ["Q/ΔT", "mc", "Q/mΔT", "Q/T"],
                answer: "Q/ΔT",
                solution: "Heat capacity = Q/ΔT"
            }
        ],
        examTips: [
            "Specific heat capacity: amount of heat to raise 1 kg by 1°C",
            "Latent heat: heat for phase change at constant temperature",
            "Thermal equilibrium occurs when temperatures equalize",
            "Heat lost = heat gained (no heat loss to surroundings)",
            "Efficiency = (useful output / total input) × 100%"
        ]
    },

    'gas-laws': {
        name: "Gas Laws",
        description: "The gas laws describe the relationships between pressure (P), volume (V), temperature (T), and amount of gas (n).",
        keyConcepts: [
            "Boyle's Law: P₁V₁ = P₂V₂ (T constant)",
            "Charles's Law: V₁/T₁ = V₂/T₂ (P constant)",
            "Pressure Law: P₁/T₁ = P₂/T₂ (V constant)",
            "Ideal Gas Equation: PV = nRT",
            "R = 8.314 J/mol·K = 0.0821 L·atm/mol·K",
            "Absolute zero: 0 K = -273.15°C"
        ],
        formulas: [
            "P₁V₁ = P₂V₂ (Boyle's Law)",
            "V₁/T₁ = V₂/T₂ (Charles's Law)",
            "P₁/T₁ = P₂/T₂ (Pressure Law)",
            "PV = nRT (Ideal Gas Equation)",
            "PV = NkT (Boltzmann form)",
            "Combined Gas Law: P₁V₁/T₁ = P₂V₂/T₂"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "A gas occupies 2 L at 1 atm and 300 K. What volume will it occupy at 2 atm and 300 K?",
                options: ["1 L", "2 L", "3 L", "4 L"],
                answer: "1 L",
                solution: "Boyle's Law: P₁V₁ = P₂V₂, 1×2 = 2×V₂, V₂ = 1 L"
            },
            {
                type: "objective",
                question: "At constant pressure, if temperature increases from 300 K to 600 K, the volume:",
                options: ["Doubles", "Halves", "Quadruples", "Stays same"],
                answer: "Doubles",
                solution: "Charles's Law: V₁/T₁ = V₂/T₂, so V₂ = V₁ × T₂/T₁ = V₁ × 2"
            },
            {
                type: "theory",
                question: "A gas occupies 0.5 m³ at 27°C and 1 atm. Calculate the volume at 127°C and 2 atm.",
                solution: "P₁V₁/T₁ = P₂V₂/T₂\n1 × 0.5 / 300 = 2 × V₂ / 400\n0.5/300 = 2V₂/400\nV₂ = (0.5 × 400) / (300 × 2) = 200/600 = 0.333 m³"
            },
            {
                type: "objective",
                question: "The value of the gas constant R is approximately:",
                options: ["8.314 J/mol·K", "0.0821 J/mol·K", "8.314 L·atm/mol·K", "0.0821 m³·Pa/mol·K"],
                answer: "8.314 J/mol·K",
                solution: "R = 8.314 J/mol·K"
            },
            {
                type: "objective",
                question: "At constant volume, if temperature doubles, pressure:",
                options: ["Doubles", "Halves", "Quadruples", "Stays same"],
                answer: "Doubles",
                solution: "Pressure Law: P₁/T₁ = P₂/T₂, so P₂ = P₁ × T₂/T₁ = P₁ × 2"
            }
        ],
        examTips: [
            "Always convert temperature to Kelvin",
            "R = 8.314 J/mol·K (for SI units)",
            "R = 0.0821 L·atm/mol·K (for L and atm)",
            "Boyle's Law: P ∝ 1/V at constant T",
            "Charles's Law: V ∝ T at constant P",
            "Pressure Law: P ∝ T at constant V"
        ]
    },

    'thermal-expansion': {
        name: "Thermal Expansion",
        description: "Thermal expansion is the tendency of matter to change in size or volume in response to a change in temperature.",
        keyConcepts: [
            "Linear expansion: ΔL = αL₀ΔT",
            "Volume expansion: ΔV = βV₀ΔT",
            "β ≈ 3α for solids",
            "α depends on material (metal > glass)",
            "Bimetallic strip: different α makes it bend when heated"
        ],
        formulas: [
            "ΔL = αL₀ΔT (linear expansion)",
            "ΔV = βV₀ΔT (volume expansion)",
            "β = 3α (for solids)",
            "L = L₀(1 + αΔT) (final length)",
            "V = V₀(1 + βΔT) (final volume)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "A metal rod of length 2 m is heated from 20°C to 70°C. If α = 12×10⁻⁶/°C, the expansion is:",
                options: ["0.0012 m", "0.0024 m", "0.012 m", "0.024 m"],
                answer: "0.0012 m",
                solution: "ΔL = αL₀ΔT = 12×10⁻⁶ × 2 × 50 = 0.0012 m"
            },
            {
                type: "objective",
                question: "For a solid, the coefficient of volume expansion β is related to α by:",
                options: ["β = α", "β = 2α", "β = 3α", "β = α²"],
                answer: "β = 3α",
                solution: "For isotropic solids, β = 3α"
            },
            {
                type: "theory",
                question: "A steel bridge has a length of 100 m. Calculate the expansion when the temperature increases from 10°C to 40°C. (α_steel = 12×10⁻⁶/°C)",
                solution: "ΔL = αL₀ΔT = 12×10⁻⁶ × 100 × 30 = 0.036 m = 3.6 cm"
            },
            {
                type: "objective",
                question: "A bimetallic strip bends when heated because:",
                options: ["Both metals expand equally", "One metal expands more than the other", "It contracts", "It is magnetic"],
                answer: "One metal expands more than the other",
                solution: "Different α values cause different expansions"
            },
            {
                type: "objective",
                question: "The SI unit of α is:",
                options: ["/°C", "m/°C", "°C/m", "m"],
                answer: "/°C",
                solution: "α has units of per degree Celsius (/°C)"
            }
        ],
        examTips: [
            "Different materials have different α values",
            "Metals generally have higher α than glass",
            "Invar has very low α (≈1.2×10⁻⁶/°C)",
            "Bimetallic strips are used in thermostats",
            "Expansion gaps are needed in bridges and railways"
        ]
    },

    // ─── WAVES ──────────────────────────────────────────────────────

    'wave-simulator': {
        name: "Wave Simulator",
        description: "Waves are disturbances that transfer energy from one place to another without transferring matter.",
        keyConcepts: [
            "Wave equation: v = fλ",
            "Transverse waves: displacement perpendicular to direction",
            "Longitudinal waves: displacement parallel to direction",
            "Speed depends on medium",
            "Amplitude: maximum displacement from equilibrium",
            "Wavelength: distance between consecutive crests/troughs"
        ],
        formulas: [
            "v = fλ (wave equation)",
            "T = 1/f (period)",
            "λ = v/f (wavelength)",
            "f = v/λ (frequency)",
            "v = √(T/μ) (wave speed on a string)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "A wave has frequency 5 Hz and wavelength 2 m. What is its speed?",
                options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
                answer: "10 m/s",
                solution: "v = fλ = 5 × 2 = 10 m/s"
            },
            {
                type: "objective",
                question: "The time for one complete oscillation is called:",
                options: ["Frequency", "Period", "Amplitude", "Wavelength"],
                answer: "Period",
                solution: "Period (T) is the time for one complete oscillation"
            },
            {
                type: "theory",
                question: "A sound wave travels at 340 m/s with a frequency of 170 Hz. Calculate its wavelength.",
                solution: "λ = v/f = 340/170 = 2 m"
            },
            {
                type: "objective",
                question: "In a transverse wave, the particles of the medium vibrate:",
                options: ["Parallel to wave direction", "Perpendicular to wave direction", "In circles", "At 45°"],
                answer: "Perpendicular to wave direction",
                solution: "Transverse waves have perpendicular displacement"
            },
            {
                type: "objective",
                question: "The maximum displacement of a wave from equilibrium is called:",
                options: ["Wavelength", "Frequency", "Amplitude", "Period"],
                answer: "Amplitude",
                solution: "Amplitude is the maximum displacement"
            }
        ],
        examTips: [
            "v = fλ is the fundamental wave equation",
            "Wave speed depends on the medium",
            "Frequency is determined by the source",
            "Wavelength depends on speed and frequency",
            "Amplitude determines energy"
        ]
    },

    'sound-waves': {
        name: "Sound Waves",
        description: "Sound is a longitudinal wave that travels through a medium (air, water, solids). It requires a medium to propagate.",
        keyConcepts: [
            "Sound requires a medium (cannot travel in vacuum)",
            "Speed of sound in air: v = 331.5 + 0.6T m/s",
            "Pitch depends on frequency (higher f = higher pitch)",
            "Loudness depends on amplitude (larger A = louder)",
            "Doppler effect: apparent frequency changes with relative motion",
            "Echo: reflection of sound"
        ],
        formulas: [
            "v = 331.5 + 0.6T (speed of sound in air)",
            "f' = f(v ± v_o)/(v ∓ v_s) (Doppler effect)",
            "v = fλ (wave equation)",
            "Echo: distance = speed × time / 2"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "The speed of sound in air at 20°C is approximately:",
                options: ["340 m/s", "343 m/s", "350 m/s", "360 m/s"],
                answer: "343 m/s",
                solution: "v = 331.5 + 0.6 × 20 = 343.5 m/s ≈ 343 m/s"
            },
            {
                type: "objective",
                question: "Sound cannot travel through:",
                options: ["Air", "Water", "Vacuum", "Steel"],
                answer: "Vacuum",
                solution: "Sound requires a medium; vacuum has no medium"
            },
            {
                type: "theory",
                question: "A person claps and hears an echo 0.4 s later from a building. How far is the building from the person? (v_sound = 340 m/s)",
                solution: "Distance = v × t / 2 = 340 × 0.4 / 2 = 68 m"
            },
            {
                type: "objective",
                question: "The pitch of a sound increases when its:",
                options: ["Amplitude increases", "Frequency increases", "Wavelength increases", "Speed increases"],
                answer: "Frequency increases",
                solution: "Pitch is determined by frequency"
            },
            {
                type: "objective",
                question: "The Doppler effect causes a change in:",
                options: ["Speed", "Amplitude", "Apparent frequency", "Wavelength"],
                answer: "Apparent frequency",
                solution: "Doppler effect changes apparent frequency"
            }
        ],
        examTips: [
            "Sound is a longitudinal wave",
            "Requires a medium to travel",
            "Speed increases with temperature",
            "Echo: time for sound to go and return",
            "Doppler effect: frequency changes with relative motion"
        ]
    },

    'wave-phenomena': {
        name: "Wave Phenomena",
        description: "Wave phenomena include interference, diffraction, polarization, and standing waves — behaviors that occur when waves interact with each other or with obstacles.",
        keyConcepts: [
            "Interference: superposition of waves (constructive/destructive)",
            "Young's double slit: Δy = λL/d",
            "Diffraction: bending of waves around obstacles",
            "Single slit minima: a sin θ = mλ",
            "Polarization: restriction of wave oscillations to one plane",
            "Malus's Law: I = I₀ cos²θ",
            "Standing waves: nodes (zero displacement) and antinodes (max displacement)"
        ],
        formulas: [
            "Δy = λL/d (fringe spacing, double slit)",
            "mλ = d sin θ (constructive interference)",
            "(m+½)λ = d sin θ (destructive interference)",
            "a sin θ = mλ (single slit minima)",
            "I = I₀ cos²θ (Malus's Law)",
            "L = n·λ/2 (standing waves)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "In Young's double slit experiment, the fringe spacing is:",
                options: ["λL/d", "dL/λ", "λd/L", "L/λd"],
                answer: "λL/d",
                solution: "Δy = λL/d (fringe spacing formula)"
            },
            {
                type: "objective",
                question: "Diffraction of waves occurs when they:",
                options: ["Reflect", "Refract", "Bend around obstacles", "Interfere"],
                answer: "Bend around obstacles",
                solution: "Diffraction is the bending of waves around obstacles"
            },
            {
                type: "theory",
                question: "A double slit has separation 0.5 mm and is 1 m from a screen. If light of wavelength 600 nm is used, what is the fringe spacing?",
                solution: "Δy = λL/d = (600×10⁻⁹ × 1) / (0.5×10⁻³) = 1.2×10⁻³ m = 1.2 mm"
            },
            {
                type: "objective",
                question: "Malus's Law states that I = I₀ cos²θ, where θ is the angle between:",
                options: ["Light source and polarizer", "Polarizer and analyzer", "Incident and reflected rays", "Two polarizers"],
                answer: "Polarizer and analyzer",
                solution: "θ is the angle between the polarizer and analyzer"
            },
            {
                type: "objective",
                question: "In a standing wave, a node is a point of:",
                options: ["Maximum displacement", "Zero displacement", "Maximum velocity", "Zero velocity"],
                answer: "Zero displacement",
                solution: "A node is a point of zero displacement"
            }
        ],
        examTips: [
            "Interference: constructive (bright) and destructive (dark)",
            "Diffraction: bending of waves",
            "Polarization: restricts wave oscillation to one plane",
            "Malus's Law: I = I₀ cos²θ",
            "Standing waves: nodes and antinodes"
        ]
    },

    optics: {
        name: "Optics",
        description: "Optics is the study of light behavior — reflection, refraction, lenses, and mirrors. Light travels in straight lines (rectilinear propagation).",
        keyConcepts: [
            "Reflection: angle of incidence = angle of reflection",
            "Refraction: Snell's Law (n₁ sin θ₁ = n₂ sin θ₂)",
            "Critical angle: sin C = n₂/n₁",
            "Lens formula: 1/f = 1/v - 1/u",
            "Lens power: P = 1/f (diopters)",
            "Magnification: m = v/u"
        ],
        formulas: [
            "n₁ sin θ₁ = n₂ sin θ₂ (Snell's Law)",
            "sin C = n₂/n₁ (critical angle)",
            "1/f = 1/v - 1/u (lens formula)",
            "P = 1/f (lens power)",
            "m = v/u (magnification)",
            "n = c/v (refractive index)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "The angle of incidence equals the angle of reflection in:",
                options: ["Refraction", "Reflection", "Diffraction", "Interference"],
                answer: "Reflection",
                solution: "Reflection follows: θ_i = θ_r"
            },
            {
                type: "objective",
                question: "A lens has a focal length of 0.5 m. Its power is:",
                options: ["0.5 D", "1 D", "2 D", "4 D"],
                answer: "2 D",
                solution: "P = 1/f = 1/0.5 = 2 D"
            },
            {
                type: "theory",
                question: "An object is placed 20 cm from a converging lens of focal length 15 cm. Calculate the image distance and magnification.",
                solution: "1/f = 1/v - 1/u\n1/15 = 1/v - 1/(-20)\n1/v = 1/15 - 1/20 = (4-3)/60 = 1/60\nv = 60 cm\nm = v/u = 60/20 = 3"
            },
            {
                type: "objective",
                question: "Snell's Law is mathematically expressed as:",
                options: ["n₁ sin θ₁ = n₂ sin θ₂", "n₁ sin θ₂ = n₂ sin θ₁", "sin θ₁/sin θ₂ = n₁/n₂", "sin θ₁/sin θ₂ = n₂/n₁"],
                answer: "n₁ sin θ₁ = n₂ sin θ₂",
                solution: "Snell's Law: n₁ sin θ₁ = n₂ sin θ₂"
            },
            {
                type: "objective",
                question: "The critical angle occurs when the angle of refraction is:",
                options: ["0°", "45°", "90°", "180°"],
                answer: "90°",
                solution: "Critical angle occurs when the refracted ray is at 90°"
            }
        ],
        examTips: [
            "Reflection: θ_i = θ_r",
            "Refraction: Snell's Law (n₁ sin θ₁ = n₂ sin θ₂)",
            "Critical angle: sin C = n₂/n₁",
            "Lens formula: 1/f = 1/v - 1/u (sign convention important)",
            "Power of lens: P = 1/f (diopters)"
        ]
    },

    // ─── ELECTRICITY & MAGNETISM ──────────────────────────────────

    'ohms-law': {
        name: "Ohm's Law",
        description: "Ohm's Law states that the current through a conductor between two points is directly proportional to the voltage across the two points, provided the temperature remains constant.",
        keyConcepts: [
            "V = IR (Ohm's Law)",
            "I = V/R (current)",
            "R = V/I (resistance)",
            "Power: P = VI = I²R = V²/R",
            "Resistance depends on material, length, cross-section",
            "Ohmic materials obey Ohm's Law"
        ],
        formulas: [
            "V = IR (Ohm's Law)",
            "I = V/R (current)",
            "R = V/I (resistance)",
            "P = VI (power)",
            "P = I²R (power)",
            "P = V²/R (power)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "A circuit has a voltage of 12 V and a resistance of 3 Ω. What is the current?",
                options: ["36 A", "4 A", "0.25 A", "15 A"],
                answer: "4 A",
                solution: "I = V/R = 12/3 = 4 A"
            },
            {
                type: "objective",
                question: "A resistor of 10 Ω draws a current of 2 A. The power dissipated is:",
                options: ["20 W", "40 W", "10 W", "5 W"],
                answer: "40 W",
                solution: "P = I²R = 2² × 10 = 40 W"
            },
            {
                type: "theory",
                question: "A 240 V heater draws a current of 5 A. Calculate (a) the resistance (b) the power rating.",
                solution: "(a) R = V/I = 240/5 = 48 Ω\n(b) P = VI = 240 × 5 = 1200 W"
            },
            {
                type: "objective",
                question: "If the voltage across a resistor doubles while resistance stays constant, the current:",
                options: ["Doubles", "Halves", "Quadruples", "Stays same"],
                answer: "Doubles",
                solution: "I = V/R, so doubling V doubles I"
            },
            {
                type: "objective",
                question: "The resistance of a conductor depends on:",
                options: ["Length only", "Cross-sectional area only", "Length, area, and material", "Temperature only"],
                answer: "Length, area, and material",
                solution: "R = ρL/A, so it depends on length, area, and material"
            }
        ],
        examTips: [
            "V = IR (Ohm's Law)",
            "Power: P = VI = I²R = V²/R",
            "Resistance depends on: material, length, cross-section, temperature",
            "Ohmic materials have constant resistance",
            "Non-ohmic materials have changing resistance with voltage"
        ]
    },

    circuits: {
        name: "Series & Parallel Circuits",
        description: "Circuits can be arranged in series (components in a single path) or parallel (components in multiple paths).",
        keyConcepts: [
            "Series: same current through all components",
            "Parallel: same voltage across all branches",
            "Series total resistance: R_T = R₁ + R₂ + R₃",
            "Parallel total resistance: 1/R_T = 1/R₁ + 1/R₂ + 1/R₃",
            "Ammeter is connected in series",
            "Voltmeter is connected in parallel"
        ],
        formulas: [
            "R_T = R₁ + R₂ + R₃ (series)",
            "1/R_T = 1/R₁ + 1/R₂ + 1/R₃ (parallel)",
            "V_T = V₁ + V₂ + V₃ (series)",
            "I_T = I₁ + I₂ + I₃ (parallel)",
            "P_T = P₁ + P₂ + P₃ (total power)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "Two resistors of 10 Ω and 20 Ω are connected in series. The total resistance is:",
                options: ["10 Ω", "20 Ω", "30 Ω", "40 Ω"],
                answer: "30 Ω",
                solution: "R_T = 10 + 20 = 30 Ω"
            },
            {
                type: "objective",
                question: "In a parallel circuit, the voltage across each branch is:",
                options: ["Different", "The same", "Zero", "Proportional to resistance"],
                answer: "The same",
                solution: "In parallel, voltage is the same across all branches"
            },
            {
                type: "theory",
                question: "A 12 V battery is connected to a 4 Ω and 6 Ω resistor in series. Calculate (a) total resistance (b) current (c) voltage across each resistor.",
                solution: "(a) R_T = 4 + 6 = 10 Ω\n(b) I = V/R = 12/10 = 1.2 A\n(c) V₄ = IR = 1.2×4 = 4.8 V, V₆ = 1.2×6 = 7.2 V"
            },
            {
                type: "objective",
                question: "An ammeter must be connected in:",
                options: ["Parallel", "Series", "Either", "Not connected"],
                answer: "Series",
                solution: "Ammeters are connected in series"
            },
            {
                type: "objective",
                question: "In a parallel circuit, adding more resistors:",
                options: ["Increases total resistance", "Decreases total resistance", "No change", "Doubles total resistance"],
                answer: "Decreases total resistance",
                solution: "1/R_T = 1/R₁ + 1/R₂ + ... so more resistors decrease total resistance"
            }
        ],
        examTips: [
            "Series: same current, voltage divides",
            "Parallel: same voltage, current divides",
            "Ammeter in series, Voltmeter in parallel",
            "Total resistance in series = sum",
            "Total resistance in parallel = 1/(sum of 1/R)"
        ]
    },

    electrostatics: {
        name: "Electrostatics",
        description: "Electrostatics deals with electric charges at rest and the forces, fields, and potentials they produce.",
        keyConcepts: [
            "Like charges repel, opposite charges attract",
            "Coulomb's Law: F = kq₁q₂/r²",
            "Electric field: E = F/q = kQ/r²",
            "Electric potential: V = kQ/r",
            "Charge is quantized (e = 1.6×10⁻¹⁹ C)",
            "Conservation of charge"
        ],
        formulas: [
            "F = kq₁q₂/r² (Coulomb's Law)",
            "k = 8.99×10⁹ N·m²/C²",
            "E = F/q = kQ/r² (electric field)",
            "V = kQ/r (electric potential)",
            "W = qV (work done)",
            "F = qE (force in electric field)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "Two charges of +2 μC and -3 μC are separated by 0.1 m. What is the force between them? (k = 9×10⁹ N·m²/C²)",
                options: ["5.4 N", "5.4×10⁻³ N", "5.4×10⁻⁵ N", "5.4×10⁻⁷ N"],
                answer: "5.4 N",
                solution: "F = kq₁q₂/r² = 9×10⁹ × 2×10⁻⁶ × 3×10⁻⁶ / 0.1² = 5.4 N"
            },
            {
                type: "objective",
                question: "Electric field lines point from:",
                options: ["Negative to positive", "Positive to negative", "Both directions", "No direction"],
                answer: "Positive to negative",
                solution: "Field lines go from positive to negative charges"
            },
            {
                type: "theory",
                question: "Calculate the electric field at a point 0.5 m from a charge of +5 μC. (k = 9×10⁹)",
                solution: "E = kQ/r² = 9×10⁹ × 5×10⁻⁶ / 0.5² = 1.8×10⁵ N/C"
            },
            {
                type: "objective",
                question: "The unit of electric field is:",
                options: ["N/C", "C/N", "J/C", "V"],
                answer: "N/C",
                solution: "Electric field is N/C"
            },
            {
                type: "objective",
                question: "The charge of an electron is:",
                options: ["+1.6×10⁻¹⁹ C", "-1.6×10⁻¹⁹ C", "0 C", "9.11×10⁻³¹ C"],
                answer: "-1.6×10⁻¹⁹ C",
                solution: "Electron charge is -1.6×10⁻¹⁹ C"
            }
        ],
        examTips: [
            "Coulomb's Law: F = kq₁q₂/r²",
            "Electric field: E = kQ/r²",
            "Electric potential: V = kQ/r",
            "Field lines go from + to -",
            "Charge is conserved"
        ]
    },

    magnetism: {
        name: "Magnetism",
        description: "Magnetism is the study of magnetic fields, forces, and materials. Magnets have north and south poles.",
        keyConcepts: [
            "Like poles repel, unlike poles attract",
            "Magnetic field lines go from N to S (outside)",
            "Electromagnet: current in coil produces magnetic field",
            "Force on charge in magnetic field: F = qvB",
            "Right-hand rule for current and field direction",
            "Earth has a magnetic field"
        ],
        formulas: [
            "F = qvB (force on charge)",
            "F = BIL (force on wire)",
            "B = μ₀nI (solenoid field)",
            "Φ = BA (magnetic flux)",
            "ε = -NΔΦ/Δt (Faraday's Law)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "Magnetic field lines outside a bar magnet go from:",
                options: ["S to N", "N to S", "Both directions", "No direction"],
                answer: "N to S",
                solution: "Outside a magnet, field lines go from N to S"
            },
            {
                type: "objective",
                question: "An electromagnet works because:",
                options: ["It has permanent magnets", "Current produces a magnetic field", "It is heated", "It is cooled"],
                answer: "Current produces a magnetic field",
                solution: "Electromagnets use current to produce a magnetic field"
            },
            {
                type: "theory",
                question: "A charge of 1.6×10⁻¹⁹ C moves at 2×10⁶ m/s perpendicular to a magnetic field of 0.5 T. Calculate the force.",
                solution: "F = qvB = 1.6×10⁻¹⁹ × 2×10⁶ × 0.5 = 1.6×10⁻¹³ N"
            },
            {
                type: "objective",
                question: "The right-hand rule is used to determine:",
                options: ["Direction of electric field", "Direction of magnetic field around current", "Direction of force", "Direction of electron flow"],
                answer: "Direction of magnetic field around current",
                solution: "Right-hand rule determines magnetic field direction around current"
            },
            {
                type: "objective",
                question: "The force on a current-carrying wire in a magnetic field is given by:",
                options: ["F = BIL", "F = qvB", "F = kq₁q₂/r²", "F = ma"],
                answer: "F = BIL",
                solution: "F = BIL (force on wire in magnetic field)"
            }
        ],
        examTips: [
            "Magnetic field lines: N → S (outside)",
            "Electromagnet: current produces field",
            "Force on charge: F = qvB",
            "Force on wire: F = BIL",
            "Right-hand rule for current and field"
        ]
    },

    'electromagnetic-induction': {
        name: "Electromagnetic Induction",
        description: "Electromagnetic induction is the production of an electromotive force (EMF) across a conductor in a changing magnetic field.",
        keyConcepts: [
            "Faraday's Law: ε = -NΔΦ/Δt",
            "Lenz's Law: induced current opposes the change",
            "Generator: converts mechanical to electrical energy",
            "Transformer: Vₛ/Vₚ = Nₛ/Nₚ",
            "AC = Alternating Current, DC = Direct Current",
            "Self-induction: changing current induces EMF"
        ],
        formulas: [
            "ε = -NΔΦ/Δt (Faraday's Law)",
            "Φ = BA cos θ (magnetic flux)",
            "Vₛ/Vₚ = Nₛ/Nₚ (transformer)",
            "Pₚ = Pₛ (ideal transformer)",
            "Efficiency = (VₛIₛ)/(VₚIₚ) × 100%"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "Faraday's Law states that induced EMF is proportional to:",
                options: ["Magnetic field", "Rate of change of flux", "Current", "Resistance"],
                answer: "Rate of change of flux",
                solution: "ε = -NΔΦ/Δt"
            },
            {
                type: "objective",
                question: "Lenz's Law states that induced current:",
                options: ["Supports the change", "Opposes the change", "Has no effect", "Doubles the change"],
                answer: "Opposes the change",
                solution: "Induced current opposes the change that produced it"
            },
            {
                type: "theory",
                question: "A transformer has 100 turns on the primary and 200 turns on the secondary. If the primary voltage is 120 V, what is the secondary voltage?",
                solution: "Vₛ/Vₚ = Nₛ/Nₚ\nVₛ/120 = 200/100\nVₛ = 120 × 2 = 240 V (Step-up transformer)"
            },
            {
                type: "objective",
                question: "A generator converts:",
                options: ["Electrical to mechanical", "Mechanical to electrical", "Heat to electrical", "Light to electrical"],
                answer: "Mechanical to electrical",
                solution: "Generator converts mechanical energy to electrical"
            },
            {
                type: "objective",
                question: "In a step-up transformer:",
                options: ["Nₛ < Nₚ", "Nₛ > Nₚ", "Nₛ = Nₚ", "Vₛ < Vₚ"],
                answer: "Nₛ > Nₚ",
                solution: "Step-up: Nₛ > Nₚ, Vₛ > Vₚ"
            }
        ],
        examTips: [
            "Faraday's Law: ε = -NΔΦ/Δt",
            "Lenz's Law: opposes the change",
            "Transformer: Vₛ/Vₚ = Nₛ/Nₚ",
            "Generator: mechanical → electrical",
            "AC alternates direction, DC flows one way"
        ]
    },

    // ─── MODERN PHYSICS ────────────────────────────────────────────

    'atomic-physics': {
        name: "Atomic Physics",
        description: "Atomic physics studies the structure of atoms, including the nucleus, electron configuration, energy levels, and atomic spectra.",
        keyConcepts: [
            "Bohr model: electrons in discrete energy levels",
            "Eₙ = -13.6/n² eV (Hydrogen)",
            "Emission: electron jumps down → photon emitted",
            "Absorption: electron jumps up → photon absorbed",
            "Lyman series: n≥2 → n=1 (UV)",
            "Balmer series: n≥3 → n=2 (Visible)",
            "Paschen series: n≥4 → n=3 (IR)"
        ],
        formulas: [
            "Eₙ = -13.6/n² eV (energy levels)",
            "ΔE = hf = hc/λ (photon energy)",
            "1/λ = R(1/n₁² - 1/n₂²) (Rydberg)",
            "E = hf (Planck's equation)",
            "λ = hc/ΔE (wavelength)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "The ground state energy of Hydrogen is:",
                options: ["-13.6 eV", "-3.4 eV", "-1.5 eV", "0 eV"],
                answer: "-13.6 eV",
                solution: "E₁ = -13.6/1² = -13.6 eV"
            },
            {
                type: "objective",
                question: "The Balmer series corresponds to transitions to:",
                options: ["n=1", "n=2", "n=3", "n=4"],
                answer: "n=2",
                solution: "Balmer series: transitions to n=2"
            },
            {
                type: "theory",
                question: "Calculate the energy required to ionize a Hydrogen atom from the ground state.",
                solution: "Ionization energy = 0 - (-13.6) = 13.6 eV"
            },
            {
                type: "objective",
                question: "When an electron jumps from a higher to a lower energy level:",
                options: ["A photon is emitted", "A photon is absorbed", "Nothing happens", "The atom splits"],
                answer: "A photon is emitted",
                solution: "Emission occurs when electron jumps down"
            },
            {
                type: "objective",
                question: "The Lyman series lies in the:",
                options: ["Visible region", "Ultraviolet region", "Infrared region", "Microwave region"],
                answer: "Ultraviolet region",
                solution: "Lyman series is in the UV region"
            }
        ],
        examTips: [
            "Eₙ = -13.6/n² eV",
            "Emission = photon released",
            "Absorption = photon absorbed",
            "Lyman: UV (n≥2→1)",
            "Balmer: Visible (n≥3→2)",
            "Paschen: IR (n≥4→3)"
        ]
    },

    radioactivity: {
        name: "Radioactivity & Nuclear Physics",
        description: "Radioactivity is the spontaneous emission of radiation from unstable atomic nuclei to become more stable.",
        keyConcepts: [
            "Alpha (α): helium nucleus (²⁴He), low penetration, high ionization",
            "Beta (β): electron or positron, medium penetration",
            "Gamma (γ): high-energy photon, high penetration, low ionization",
            "Half-life: time for half of the nuclei to decay",
            "N = N₀(½)^(t/t₁/₂) (decay equation)",
            "Activity: A = λN (Becquerels)"
        ],
        formulas: [
            "N = N₀(½)^(t/t₁/₂) (decay)",
            "λ = ln(2)/t₁/₂ (decay constant)",
            "A = λN (activity)",
            "m = m₀(½)^(t/t₁/₂) (mass decay)",
            "t₁/₂ = ln(2)/λ (half-life)"
        ],
        waecQuestions: [
            {
                type: "objective",
                question: "The half-life of a radioactive substance is 5 s. After 15 s, what fraction remains?",
                options: ["1/2", "1/4", "1/8", "1/16"],
                answer: "1/8",
                solution: "3 half-lives: (½)³ = 1/8"
            },
            {
                type: "objective",
                question: "Gamma radiation is:",
                options: ["Helium nucleus", "High-energy photon", "Electron", "Neutron"],
                answer: "High-energy photon",
                solution: "Gamma rays are high-energy photons"
            },
            {
                type: "theory",
                question: "A sample contains 1000 radioactive nuclei with a half-life of 2 minutes. How many remain after 6 minutes?",
                solution: "6 minutes = 3 half-lives\nN = 1000 × (½)³ = 125 nuclei"
            },
            {
                type: "objective",
                question: "Alpha particles have:",
                options: ["Low penetration, high ionization", "High penetration, low ionization", "Medium penetration", "No ionization"],
                answer: "Low penetration, high ionization",
                solution: "Alpha has low penetration but high ionization"
            },
            {
                type: "objective",
                question: "The unit of activity is:",
                options: ["Becquerel", "Joule", "Watt", "Newton"],
                answer: "Becquerel",
                solution: "Activity is measured in Becquerels (Bq)"
            }
        ],
        examTips: [
            "Alpha: ²⁴He, low penetration, high ionization",
            "Beta: electron, medium penetration",
            "Gamma: photon, high penetration, low ionization",
            "Half-life: time for half to decay",
            "N = N₀(½)^(t/t₁/₂)"
        ]
    }
};

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────

// Get content for a specific lab
function getLabContent(labId) {
    return AI_CONTENT[labId] || null;
}

// Search for a topic across all labs
function searchAIContent(query) {
    const results = [];
    const q = query.toLowerCase();

    for (const [labId, content] of Object.entries(AI_CONTENT)) {
        let score = 0;
        const keywords = [content.name, content.description, ...content.keyConcepts, ...content.formulas];

        // Check for matches
        for (const keyword of keywords) {
            if (keyword.toLowerCase().includes(q)) score += 2;
        }

        // Check WAEC questions
        for (const qItem of content.waecQuestions || []) {
            if (qItem.question.toLowerCase().includes(q)) score += 3;
        }

        if (score > 0) {
            results.push({ labId, content, score });
        }
    }

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 5);
}

// Get WAEC questions for a lab
function getWAECQuestions(labId) {
    const content = AI_CONTENT[labId];
    return content ? content.waecQuestions : null;
}

// Get exam tips for a lab
function getExamTips(labId) {
    const content = AI_CONTENT[labId];
    return content ? content.examTips : null;
}