// ─────────────────────────────────────────────────────────────
// ADUSEI LABS — GENERAL PHYSICS CONCEPTS
// Cross-cutting topics that don't map to one specific lab
// Falls back before "I'm not sure" when no lab matches
// 33 concepts: fundamentals + basics of each topic area
// ─────────────────────────────────────────────────────────────

window.GENERAL_CONCEPTS = {

  // ═══════════════ MECHANICS FUNDAMENTALS ═══════════════

  momentum: {
    keywords: ['momentum','impulse','quantity of motion','p = mv','conservation of momentum'],
    q: "What is momentum?",
    a: "Momentum (p = mv) is 'quantity of motion' — mass × velocity. It's a VECTOR (has direction). A heavy slow object can have the same momentum as a light fast one. Key law: TOTAL momentum is conserved in any collision. Impulse = change in momentum = force × time. That's why airbags work — they extend collision time, reducing the force on your body."
  },

  energy: {
    keywords: ['energy','kinetic energy','potential energy','joules','conservation of energy','forms of energy'],
    q: "What is energy?",
    a: "Energy is the capacity to do work — measured in joules (J). Two main types: KINETIC (energy of motion, KE = ½mv²) and POTENTIAL (stored energy, e.g. PE = mgh for height). Energy is CONSERVED: it changes form but the total stays constant. A falling ball converts PE to KE. At the bottom of the fall, all PE has become KE. That's why impact speed depends only on height, not mass."
  },

  work: {
    keywords: ['work','work done','w = fd','joules work','work formula'],
    q: "What is work?",
    a: "Work = force × distance moved in the direction of the force. W = F·d·cosθ. Measured in joules (J). If you push a box 5 m with 10 N of force, you've done 50 J of work. No movement = no work, even if you're pushing hard against a wall. Work is how energy is transferred from one object to another."
  },

  power: {
    keywords: ['power','watt','p = w/t','power formula','rate of work'],
    q: "What is power?",
    a: "Power is the RATE of doing work: P = W/t = E/t. Measured in watts (W). 1 W = 1 J/s. A 100 W bulb uses 100 J every second. Higher power = same work done faster. A 2000 W kettle boils water faster than an 800 W kettle because it delivers energy more quickly. Power also = force × velocity for a moving object (P = Fv)."
  },

  force: {
    keywords: ['force','newton','f = ma','push pull','what is force'],
    q: "What is force?",
    a: "Force is a push or pull that can change an object's motion — measured in newtons (N). 1 N is the force that gives a 1 kg mass an acceleration of 1 m/s². Forces are vectors (have direction). Newton's 2nd law: F = ma. Net force = zero means no acceleration (object stays at rest or moves at constant velocity)."
  },

  'newtons-laws': {
    keywords: ["newton's laws","newtons laws","three laws","law of inertia","action reaction","f=ma law"],
    q: "What are Newton's three laws of motion?",
    a: "1st (Inertia): An object stays at rest or moves uniformly unless acted on by a net force. 2nd (F = ma): Force equals mass × acceleration. 3rd (Action-Reaction): Every action has an equal and opposite reaction. Example: when you push a wall, the wall pushes you back with the same force. That's why rockets work — they push gas backward, gas pushes rocket forward."
  },

  'scalar-vector': {
    keywords: ['scalar','vector','magnitude direction','scalars vectors','scalar vs vector'],
    q: "What's the difference between scalar and vector?",
    a: "SCALAR: only magnitude (size). Examples: mass, temperature, speed, distance, time, energy, work. VECTOR: magnitude AND direction. Examples: velocity, acceleration, force, momentum, displacement, weight. Scalars add like normal numbers. Vectors need direction-aware addition — 5 N east + 3 N west = 2 N east."
  },

  'mass-weight': {
    keywords: ['mass','weight','mass vs weight','kilogram newton','difference mass weight'],
    q: "What's the difference between mass and weight?",
    a: "MASS is the amount of matter in an object — measured in kilograms (kg). It's constant everywhere. WEIGHT is the force of gravity on that mass — measured in newtons (N). W = mg. Your mass is 60 kg on Earth AND on the Moon. But your weight is 600 N on Earth, only 100 N on the Moon. That's why astronauts bounce — low g, low weight, same mass."
  },

  'distance-displacement': {
    keywords: ['distance','displacement','path','shortest path','distance vs displacement'],
    q: "What's the difference between distance and displacement?",
    a: "DISTANCE: total path length covered (scalar, always positive). DISPLACEMENT: straight-line distance from start to finish, with direction (vector). Walk 3 m east then 4 m west: distance = 7 m, displacement = 1 m west. Run a full lap of a track: distance = 400 m, displacement = 0. Speed uses distance, velocity uses displacement."
  },

  'speed-velocity': {
    keywords: ['speed','velocity','average speed','average velocity','speed vs velocity'],
    q: "What's the difference between speed and velocity?",
    a: "SPEED: how fast you're moving — scalar (no direction). VELOCITY: how fast + direction — vector. 60 km/h is speed. 60 km/h north is velocity. You can have constant speed but changing velocity — e.g. driving in a circle at constant 60 km/h. Direction changes, so velocity changes. That's why circular motion has acceleration even when speed is constant."
  },

  acceleration: {
    keywords: ['acceleration','deceleration','retardation','rate of change velocity','m/s²'],
    q: "What is acceleration?",
    a: "Acceleration is the rate of change of velocity: a = (v − u)/t, in m/s². Speeding up: positive. Slowing down: negative (also called deceleration or retardation). Changing direction: also acceleration (since velocity is a vector). Free fall: g ≈ 9.8 m/s² (or 10 for WAEC calculations). Under gravity, all objects accelerate at the SAME rate regardless of mass."
  },

  gravity: {
    keywords: ['gravity','gravitational','free fall','earth gravity','9.8'],
    q: "What is gravity?",
    a: "Gravity is the attractive force between objects with mass. On Earth's surface, gravity pulls everything down with acceleration g ≈ 9.8 m/s² (often 10 in WAEC). The force = mg. Gravity is the weakest of the four fundamental forces, but it dominates on large scales because mass always adds (no cancelling). Newton: F = Gm₁m₂/r². Einstein: mass curves spacetime."
  },

  friction: {
    keywords: ['friction','static friction','kinetic friction','coefficient of friction','frictional force'],
    q: "What is friction?",
    a: "Friction is a force that opposes motion between two surfaces in contact. STATIC friction acts on stationary objects (must be overcome to start motion). KINETIC friction acts on moving objects (smaller than maximum static). Formula: F = μN, where μ is the coefficient and N is the normal force. Friction is useful (walking, braking) and wasteful (energy lost as heat in engines)."
  },

  inertia: {
    keywords: ['inertia','resistance to change','newtons first law','stay at rest','stay moving'],
    q: "What is inertia?",
    a: "Inertia is an object's resistance to changes in its motion — Newton's first law. Objects at rest want to stay at rest. Objects in motion want to keep moving at the same velocity. Mass measures inertia — more mass = more inertia = harder to accelerate. That's why a loaded truck takes longer to stop than a small car, even at the same speed. And why you lurch forward when a bus brakes suddenly."
  },

  'terminal-velocity': {
    keywords: ['terminal velocity','maximum speed falling','skydiver','air resistance balance'],
    q: "What is terminal velocity?",
    a: "The constant maximum speed reached by a falling object when air resistance equals its weight. Net force = 0, so no more acceleration. A skydiver reaches ~50 m/s terminal velocity in spread position, ~90 m/s in dive position. Terminal velocity is higher for heavier objects (more weight to balance) and lower for larger area (more drag). That's why a feather falls slowly but a stone falls fast — not because gravity is different, but air resistance is."
  },

  // ═══════════════ MATTER & PRESSURE ═══════════════

  pressure: {
    keywords: ['pressure','p = f/a','pascal','atmospheric pressure','pressure formula'],
    q: "What is pressure?",
    a: "Pressure = force per unit area: P = F/A. Measured in pascals (Pa) — 1 Pa = 1 N/m². Same force over smaller area = higher pressure. That's why a sharp knife cuts better (small area) and snowshoes let you walk on snow (large area). In fluids, pressure at depth h is P = ρgh. Atmospheric pressure at sea level is about 100,000 Pa (or 1 atm)."
  },

  'atmospheric-pressure': {
    keywords: ['atmospheric pressure','air pressure','barometer','1 atm','sea level pressure'],
    q: "What is atmospheric pressure?",
    a: "The weight of air pressing down on everything at Earth's surface. Standard value at sea level: ~101,325 Pa or 1 atmosphere (atm). It's caused by air molecules colliding with surfaces. Decreases with altitude (less air above you). Measured by a barometer. It's WHY water boils at 100°C at sea level but at ~93°C in the mountains — lower pressure means less energy needed for saturated vapour pressure to reach external pressure."
  },

  temperature: {
    keywords: ['temperature','celsius','kelvin','degree','how hot','how cold','absolute zero'],
    q: "What is temperature?",
    a: "Temperature measures the AVERAGE kinetic energy of particles — how fast they move on average. Measured in °C, K, or °F. Absolute zero (0 K = −273.15°C) is where particles have minimum possible energy. Convert: K = °C + 273. Temperature is NOT the same as heat — a bathtub of warm water has more heat than a cup of boiling water, because it has more particles. Temperature is intensity, heat is total energy."
  },

  heat: {
    keywords: ['heat','heat energy','heat transfer','thermal energy','difference heat temperature'],
    q: "What is heat?",
    a: "Heat is energy transferred due to a temperature difference — it flows from hot to cold. Measured in joules (J). Three transfer methods: CONDUCTION (through solids), CONVECTION (through fluids via circulation), RADIATION (via electromagnetic waves, doesn't need a medium). Formula for heat exchange: Q = mcΔT (specific heat) or Q = mL (latent heat). Unlike temperature, heat is a form of energy transfer, not a state."
  },

  density: {
    keywords: ['density','ρ = m/v','mass per volume','kg/m³','density formula'],
    q: "What is density?",
    a: "Density = mass per unit volume: ρ = m/V. Measured in kg/m³. Water = 1000 kg/m³. Iron = 7800 kg/m³ (heavy for its size). Air = 1.2 kg/m³ (light for its size). Objects float in water if their density is LESS than 1000 kg/m³. Density explains why a steel ship floats (average density including air pockets is low) but a steel nail sinks (solid steel is dense)."
  },

  buoyancy: {
    keywords: ['buoyancy','buoyant force','upthrust','archimedes principle','float sink'],
    q: "What is buoyancy?",
    a: "Buoyancy (upthrust) is the upward force a fluid exerts on an object in it. Archimedes' Principle: upthrust = weight of fluid displaced. Caused by pressure differences — pressure is higher at the bottom of an object than the top. If upthrust > weight, object floats. If upthrust < weight, object sinks. That's why a rock sinks (weight > upthrust) but a boat floats (weight < upthrust, thanks to its large displaced volume)."
  },

  // ═══════════════ ELECTRICITY FUNDAMENTALS ═══════════════

  'electric-charge': {
    keywords: ['charge','electric charge','coulomb','electron charge','positive negative'],
    q: "What is electric charge?",
    a: "Charge is a fundamental property of matter — measured in coulombs (C). Two types: POSITIVE (protons) and NEGATIVE (electrons). Like charges repel, opposite attract. Charge is QUANTIZED: it always comes in multiples of the elementary charge e = 1.6 × 10⁻¹⁹ C. Electrons carry −e; protons carry +e. Total charge in a closed system is conserved. Current is simply the flow of charge: I = Q/t."
  },

  current: {
    keywords: ['current','electric current','ampere','i = q/t','flow of charge'],
    q: "What is electric current?",
    a: "Current is the RATE of flow of electric charge: I = Q/t. Measured in amperes (A). 1 A = 1 coulomb per second. Conventional current flows from positive to negative (opposite to electron flow). Current is measured with an ammeter (connected in series). The current through a conductor depends on the voltage and resistance: I = V/R (Ohm's law)."
  },

  voltage: {
    keywords: ['voltage','potential difference','volt','p.d.','emf vs voltage'],
    q: "What is voltage?",
    a: "Voltage (potential difference) is the energy per unit charge between two points: V = W/Q. Measured in volts (V). 1 V = 1 joule per coulomb. Think of it as 'electrical pressure' that pushes charges through a circuit. A 9 V battery gives 9 J of energy to each coulomb of charge flowing through it. Higher voltage = more push = more current (for the same resistance). Measured with a voltmeter (connected in parallel)."
  },

  resistance: {
    keywords: ['resistance','ohm','r = v/i','resistor','opposition to current'],
    q: "What is resistance?",
    a: "Resistance is the opposition to electric current flow: R = V/I. Measured in ohms (Ω). Every material resists current to some extent. Formula: R = ρL/A — resistance is proportional to length, inversely proportional to area. Longer wire = more resistance. Thicker wire = less resistance. Heating a wire usually increases its resistance. That's why filament bulbs work — they heat up and their resistance rises."
  },

  'electric-field': {
    keywords: ['electric field','field lines','field strength','newtons per coulomb'],
    q: "What is an electric field?",
    a: "A region around a charge where another charge would feel a force. Field strength E = F/q (measured in N/C). Field lines show the direction a POSITIVE test charge would move — so they point away from + charges and toward − charges. Field strength from a point charge: E = kQ/r². Electric field is a VECTOR — has both magnitude and direction. Uniform fields (like between parallel plates) have the same strength everywhere between them."
  },

  // ═══════════════ WAVES FUNDAMENTALS ═══════════════

  'wave-basics': {
    keywords: ['what is a wave','wave definition','wave types','waves explained'],
    q: "What is a wave?",
    a: "A wave is a disturbance that transfers ENERGY (not matter) from one place to another. Two types: TRANSVERSE (particles vibrate perpendicular to wave direction — e.g. light, water waves) and LONGITUDINAL (particles vibrate parallel — e.g. sound). Wave equation: v = fλ. Speed depends on the medium — light in vacuum is 3×10⁸ m/s, sound in air is ~340 m/s. Waves can be mechanical (need medium) or electromagnetic (don't need medium)."
  },

  frequency: {
    keywords: ['frequency','hertz','cycles per second','hz','f = 1/t'],
    q: "What is frequency?",
    a: "Frequency = number of complete wave cycles per second. Measured in hertz (Hz). 1 Hz = 1 cycle per second. Higher frequency = more waves per second = higher pitch (for sound) or higher energy (for light). Related to period by: f = 1/T. Related to wavelength by: v = fλ. In SHM, f = 1/T. Frequency is determined by the SOURCE, not the medium — so a wave keeps its frequency when it moves from one medium to another."
  },

  wavelength: {
    keywords: ['wavelength','lambda','distance between crests','distance between peaks'],
    q: "What is wavelength?",
    a: "Wavelength (λ) = distance between two consecutive identical points on a wave — e.g. crest to crest, or trough to trough. Measured in metres (m). Related to frequency by v = fλ. Long wavelength = low frequency (like radio waves). Short wavelength = high frequency (like X-rays). Wavelength changes when a wave enters a new medium (because speed changes), but frequency stays the same."
  },

  amplitude: {
    keywords: ['amplitude','maximum displacement','wave height','peak to center'],
    q: "What is amplitude?",
    a: "Amplitude = maximum displacement from the equilibrium (rest) position. Measured in metres. For sound, amplitude determines LOUDNESS. For light, amplitude determines BRIGHTNESS. For a wave on a string, amplitude is how far the string moves from rest. Energy of a wave is proportional to amplitude SQUARED (E ∝ A²). So doubling amplitude quadruples the energy — that's why loud sounds can be dangerously energetic."
  },

  reflection: {
    keywords: ['reflection','reflection of light','law of reflection','mirror','angle of incidence'],
    q: "What is reflection?",
    a: "Reflection is when a wave bounces off a surface. Law of reflection: angle of incidence = angle of reflection (both measured from the normal). Two types of reflection: SPECULAR (smooth surface like a mirror — preserves image) and DIFFUSE (rough surface — scatters light, no clear image). Mirrors, echoes, and seeing objects all depend on reflection. Light reflects off surfaces so we can see them — that's why the Moon shines (it reflects sunlight)."
  },

  refraction: {
    keywords: ['refraction','bending of light','snell law','refractive index','bending of wave'],
    q: "What is refraction?",
    a: "Refraction is the bending of waves when they enter a new medium (where speed changes). Snell's law: n₁sinθ₁ = n₂sinθ₂. Light bends TOWARD the normal when going into a denser medium (like air → glass) and AWAY from the normal going into a less dense medium. This is why a straw looks bent in water, why pools look shallower, and how lenses focus light. Frequency stays constant; wavelength and speed change."
  },

  sound: {
    keywords: ['sound','sound wave','speed of sound','echo','doppler','pitch'],
    q: "What is sound?",
    a: "Sound is a LONGITUDINAL mechanical wave — it needs a medium (solid, liquid, or gas) to travel. Cannot cross a vacuum. Speed: ~340 m/s in air at 20°C, ~1500 m/s in water, ~5000 m/s in steel. Frequency determines PITCH (high frequency = high pitch). Amplitude determines LOUDNESS. Sound reflects (echoes), refracts, diffracts around corners, and shows the Doppler effect. Human hearing range: 20 Hz to 20,000 Hz."
  },

  light: {
    keywords: ['light','what is light','speed of light','em wave','visible light','light spectrum'],
    q: "What is light?",
    a: "Light is an electromagnetic wave — a transverse wave of oscillating electric and magnetic fields. Travels at 3 × 10⁸ m/s in vacuum (fastest possible speed). Visible light spans wavelengths ~400 nm (violet) to ~700 nm (red). Light shows both wave and particle behaviour (wave-particle duality) — it diffracts like a wave but also comes in packets (photons) with energy E = hf. Colours are just different wavelengths of light."
  },

  'electromagnetic-spectrum': {
    keywords: ['electromagnetic spectrum','em spectrum','radio waves','microwaves','infrared','ultraviolet','x-rays','gamma rays'],
    q: "What is the electromagnetic spectrum?",
    a: "The full range of electromagnetic waves, ordered by wavelength (longest to shortest): Radio → Microwave → Infrared → Visible → Ultraviolet → X-ray → Gamma ray. All travel at the speed of light in vacuum. All are transverse waves of oscillating electric and magnetic fields. Increasing frequency (shorter wavelength) means more energy — that's why UV, X-rays, and gamma rays are dangerous (they can ionize atoms and damage DNA), while radio waves are harmless."
  },

  // ═══════════════ MACHINES & EFFICIENCY ═══════════════

  efficiency: {
    keywords: ['efficiency','useful energy','machine efficiency','percent efficiency','energy wasted'],
    q: "What is efficiency?",
    a: "Efficiency = useful output / total input × 100%. No real machine is 100% efficient — some energy is always lost to friction, heat, or sound. A car engine is about 25% efficient (75% lost as heat). An electric motor can be ~90% efficient. LEDs are more efficient than filament bulbs (LED converts ~80% to light, filament ~5%). The less useful the output, the lower the efficiency — that's why reducing friction improves efficiency."
  },

  'mechanical-advantage': {
    keywords: ['mechanical advantage','ma','output force input force','lever advantage'],
    q: "What is mechanical advantage?",
    a: "MA = load / effort (output force ÷ input force). A machine with MA > 1 lets you lift a heavy load with small effort. Example: a lever with effort arm 2 m and load arm 0.5 m has MA = 4 (you lift 4× heavier load than your effort). MA is about FORCE amplification. Related to velocity ratio (VR) — VR is about distance, MA is about force. Efficiency = MA/VR × 100%."
  }

};