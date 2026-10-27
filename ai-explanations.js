// ─────────────────────────────────────────────────────────────
// ADUSEI LABS — AI EXPLANATION BANK (Phase 3.5)
// Free-form tutor answers to common student questions
// Part 2/3 — Mechanics + Thermal + Waves (12 labs, 96 explanations)
// ─────────────────────────────────────────────────────────────

window.AI_EXPLANATIONS = {

    // ═══════════════ MECHANICS ═══════════════

    projectile: [
        { keywords: ['range','45','maximum','farthest','angle','max range'],
          q: "Why does a projectile go farthest at 45°?",
          a: "Two things must balance: how fast it moves horizontally, AND how long it stays in the air. At 45°, both effects are perfectly combined. Steeper (60°): goes higher but not as far. Shallower (30°): moves sideways fast but lands quickly. 45° is the sweet spot where horizontal speed × airtime is maximized." },
        { keywords: ['horizontal','constant','speed','why constant','velocity stays'],
          q: "Why is horizontal velocity constant?",
          a: "After launch, no horizontal force acts (we ignore air resistance). Gravity only pulls DOWN — it doesn't speed up or slow down the sideways motion. So horizontal velocity stays the same the whole flight. This is why we can treat horizontal and vertical motions as two completely separate problems." },
        { keywords: ['time of flight','time in air','total time','how long in air'],
          q: "How do I calculate time of flight?",
          a: "Time of flight T = 2u·sinθ / g. It's just 'time up' plus 'time down' — each is u·sinθ/g. Only the VERTICAL part of the launch velocity matters for time. Steeper launch = longer time in air (vertical velocity is bigger). Shallower launch = shorter time." },
        { keywords: ['mass','weight','does mass matter','heavy','light','affect motion'],
          q: "Does the mass of a projectile affect its motion?",
          a: "No — ignoring air resistance. All objects fall at the same acceleration g = 9.8 m/s² regardless of mass. Drop a feather and a hammer on the Moon (no air) and they hit the ground together. On Earth, air resistance changes this: light, fluffy objects fall slowly because air pushes up on them." },
        { keywords: ['maximum height','highest','peak','at the top','top of flight'],
          q: "What happens at maximum height?",
          a: "At the very top, vertical velocity is ZERO — the object briefly stops rising and starts falling. But horizontal velocity is unchanged — it's still moving sideways at full speed. So at max height, overall velocity is NOT zero (unless you launched straight up). It's moving horizontally only." },
        { keywords: ['independent','split','separate','horizontal vertical','why split'],
          q: "Why do we split motion into horizontal and vertical?",
          a: "Because the two directions are completely INDEPENDENT. Horizontally: no force → constant velocity. Vertically: gravity → constant acceleration. Neither affects the other. That's why a dropped ball and a horizontally-thrown ball (from the same height, at the same time) hit the ground at exactly the same moment." },
        { keywords: ['basketball','real life','example','sports','football','cannon','firework'],
          q: "What are real-world examples?",
          a: "Basketball free throws, cricket sixes, cannonballs, water from a hose, fireworks, long jumps. Every sport with a ball uses projectile motion. Coaches usually optimize angle + speed for distance or accuracy. Most sports don't use 45° because there are other factors — air resistance, player height, target position." },
        { keywords: ['dropped','thrown forward','hit ground','same time','horizontal throw'],
          q: "Why do a dropped ball and a thrown-forward ball land together?",
          a: "Because vertical motion is unchanged by horizontal motion. Both start with zero vertical velocity, and both fall under gravity for the same height. The forward throw only adds horizontal motion — it doesn't change how fast the object falls. So they hit the ground at exactly the same time. (True when air resistance is negligible.)" }
    ],

    'inclined-plane': [
        { keywords: ['normal force','mg cos','why cos','perpendicular','why not mg'],
          q: "Why is the normal force mg·cosθ and not mg?",
          a: "The normal force only balances the part of the weight that pushes into the surface. Split gravity into two parts: mg·sinθ along the slope (tries to slide it down) and mg·cosθ perpendicular (pushes into the slope). Only mg·cosθ interacts with the surface, so N = mg·cosθ. Flat ground (θ=0): cos0 = 1 → N = mg. Vertical wall (θ=90°): cos90° = 0 → N = 0. Works perfectly." },
        { keywords: ['static','kinetic','friction','difference','which friction'],
          q: "What's the difference between static and kinetic friction?",
          a: "Static friction keeps a stationary object from moving (it can adjust to match any push up to a maximum). Kinetic friction acts once the object is already sliding. Kinetic is usually SMALLER than the maximum static friction — which is why it's harder to START pushing a heavy box than to keep it moving." },
        { keywords: ['steeper','angle','faster','slide faster','steeper angle'],
          q: "Why does a block slide faster at steeper angles?",
          a: "Two reasons work together. (1) The driving force along the slope is mg·sinθ — bigger angle = bigger driving force. (2) The normal force mg·cosθ is SMALLER, so friction is smaller too. Both effects increase acceleration. At 90° (a vertical drop), the block is in free fall with a = g." },
        { keywords: ['ramp','wheelchair','real life','example','why use','why ramps'],
          q: "Why do we use ramps instead of lifting?",
          a: "Ramps trade force for distance. Lifting 100 N straight up 1 m = 100 J of work in one big push. A 2 m ramp spreads that 100 J over 2 m — only ~50 N of force needed. Same work, less effort per meter. That's why ramps, pulleys, and levers all help. Real ramps have friction losses, so you still do MORE total work — but the peak force is smaller." },
        { keywords: ['angle of friction','tan','mu','μ','coefficient'],
          q: "What is the angle of friction?",
          a: "The steepest angle a block can sit on an incline WITHOUT sliding. At this angle, the down-slope weight (mg·sinθ) exactly equals maximum static friction (μ·mg·cosθ). Cancel mg and you get tanθ = μ — so the angle of friction directly gives you the coefficient of friction. If the slope is steeper than this angle, the block slides." },
        { keywords: ['mechanical advantage','ma','l/h','length height','advantage'],
          q: "Why is the mechanical advantage of an incline L/h?",
          a: "MA = load / effort. Load = the weight you're raising (mg). Effort = force you push along the slope (mg·sinθ = mg·h/L). So MA = mg / (mg·h/L) = L/h. A long gentle ramp has a big MA — easy to push. A short steep ramp has small MA — hard to push. Same concept as using a long lever." },
        { keywords: ['block stuck','won t slide','does not slide','stays put'],
          q: "What keeps a block from sliding?",
          a: "Static friction — but only if it's strong enough. The block stays put when the maximum static friction (μ·mg·cosθ) is at least as big as the down-slope pull (mg·sinθ). Cancel mg·cosθ from both sides and you get μ ≥ tanθ. Below this threshold, it slides. That's why a block sits calmly on gentle slopes but shoots down steep ones." },
        { keywords: ['roll','slide','rolling','sphere','ball'],
          q: "Why does a ball roll down an incline?",
          a: "Rolling is a mix of moving forward AND spinning. On a slope, gravity pulls the ball down; friction at the contact point makes it spin. Rolling has an advantage over sliding because rolling doesn't LOSE energy to friction (friction spins it, doesn't slow it). That's why balls roll down slopes instead of sliding — and why round wheels roll more efficiently than square blocks." }
    ],

    shm: [
        { keywords: ['restoring force','why negative','f kx','pulls back','direction'],
          q: "What does 'restoring force' really mean?",
          a: "It's the force that always pushes the object BACK toward the center (equilibrium). Pull a mass on a spring to the right — the spring pulls it left. It swings past center to the left — the spring pulls it right. The minus sign in F = -kx means 'opposite direction to displacement'. It's like a spring always trying to undo your stretch." },
        { keywords: ['mass','pendulum','period mass','why mass doesn','affect','heavier'],
          q: "Why doesn't mass affect a pendulum's period?",
          a: "Heavier bobs need MORE force to accelerate — but gravity pulls them with MORE force too. The two exactly cancel. So a 1 kg bob and a 100 kg bob swing at the same rate (for small angles). That's why T = 2π√(L/g) doesn't contain mass. Amazing, but true — test it with keys on a string vs. a coin on a string." },
        { keywords: ['longer','length','slower','long pendulum','shorter'],
          q: "Why does a longer pendulum swing slower?",
          a: "A longer pendulum travels through a bigger arc — more distance to cover. Gravity pulls it back with the same acceleration, so it takes more time to complete the swing. T = 2π√(L/g) — period grows with the SQUARE ROOT of length. So 4× longer pendulum = 2× slower. That's why old clock pendulums are pretty long (~1 m for a 2-second swing)." },
        { keywords: ['frequency','angular','omega','ω','difference','radians'],
          q: "What's the difference between frequency and angular frequency?",
          a: "Frequency f = how many full cycles per second (Hz). Angular frequency ω = how fast the cycle advances in RADIANS per second. ω = 2πf — the same idea, but scaled by 2π (because one full cycle = 2π radians). Formulas like a = -ω²x use ω because radians make the math cleaner. If you know one, you know the other." },
        { keywords: ['resonance','natural frequency','danger','bridge','swing'],
          q: "What is resonance and why is it dangerous?",
          a: "Resonance = small pushes at the RIGHT TIME add up to big swings. Push a child on a swing at just the right moment, and each small push builds the amplitude. If the frequency matches the system's natural frequency, the amplitude can grow huge. That's why soldiers BREAK STEP on bridges — marching in rhythm could set the bridge swinging dangerously. It's also why opera singers can shatter a glass with the right note." },
        { keywords: ['energy','total energy','conservation','constant','why constant'],
          q: "Why is total energy constant in SHM?",
          a: "Because there's no friction or air resistance (in the ideal case). Energy just swaps between kinetic (KE, motion) and potential (PE, stored in the stretch). At the center: all KE, no PE (moving fastest). At the extremes: all PE, no KE (stopped). Total = ½kA² always. Real systems slowly lose energy to friction (damping) — that's why real swings eventually stop." },
        { keywords: ['real life','example','see','where do we see','applications'],
          q: "Where do we see SHM in real life?",
          a: "Pendulum clocks, spring mattresses, guitar strings (small vibrations), molecules vibrating in a solid, quartz crystals in watches, car shock absorbers, tall buildings swaying in wind, and atoms in a crystal. Most natural vibrations are approximately SHM because — for small amplitudes — the restoring force is proportional to displacement." },
        { keywords: ['what makes','different','not shm','requires','conditions'],
          q: "What makes SHM different from ordinary repeating motion?",
          a: "Two things must be true. (1) There's a restoring force pushing back toward equilibrium. (2) That force is PROPORTIONAL to displacement (F = -kx). A bouncing ball is NOT SHM — its restoring force (gravity) is constant, not proportional. A pendulum at small angles IS SHM (force ≈ proportional). At large angles, pendulums drift away from ideal SHM — which is why the pendulum formula only works for small swings." }
    ],

    elasticity: [
        { keywords: ['stress','strain','difference','what is','what s'],
          q: "What's the difference between stress and strain?",
          a: "Stress = force per unit area (how hard you're pulling). Strain = relative deformation (how much it stretches divided by original length). Stress is what YOU do to the material; strain is how the material RESPONDS. They're linked by Young's modulus: stress = E × strain. Stress has units (Pa), strain is unitless." },
        { keywords: ['elastic limit','why hooke','only within','why only','limit'],
          q: "Why does Hooke's Law only work within the elastic limit?",
          a: "Within the limit, atoms bend out of their resting position and snap back like little springs — fully reversible. Beyond it, atoms start sliding past each other and the material undergoes PERMANENT deformation (yielding). Once yielded, releasing the force won't return the original shape. That's why a spring permanently stretches if you over-pull it: you've pushed it past its elastic limit." },
        { keywords: ['young modulus','what does','stiffness','stiff','E'],
          q: "What does Young's modulus actually tell us?",
          a: "It measures how STIFF a material is — how much it resists stretching. High E = stiff (steel ≈ 200 GPa — barely stretches under huge force). Low E = flexible (rubber ≈ 0.01 GPa — stretches easily). It's a property of the MATERIAL only — independent of shape or size. That's why engineers compare materials by their Young's modulus, not by wire size." },
        { keywords: ['thick wire','thicker','cross section','area','stretch less'],
          q: "Why does a thicker wire stretch less?",
          a: "Stress = Force / Area. A thicker wire has more cross-sectional area, so the SAME force creates LESS stress. Less stress = less strain = less stretch. Think of it as more atoms sharing the load — each atom carries a smaller force. That's why cables and ropes use multiple strands: spreading force over more material avoids overloading any single thread." },
        { keywords: ['spring constant','what is k','k measure','stiffness spring'],
          q: "What is the spring constant really measuring?",
          a: "How much force is needed to stretch the spring a certain distance. k = F/x, measured in N/m. High k = stiff spring (needs lots of force for small stretch). Low k = soft spring (stretches easily). It depends on the material, wire thickness, and number of coils — but NOT on how far you stretch it (within the elastic limit)." },
        { keywords: ['snap','rubber band','break','why snap','fail'],
          q: "Why does a rubber band snap?",
          a: "Once you exceed the elastic limit, the polymer chains inside start sliding past each other. Each chain has a maximum stretch. Keep pulling and you reach the BREAKING POINT — chains snap and the band fails. That's why old rubber bands break easily: their chains have been partially damaged from previous over-stretching. Fresh bands stretch further before snapping." },
        { keywords: ['elastic','plastic','deformation','difference','permanent'],
          q: "What's the difference between elastic and plastic deformation?",
          a: "ELASTIC = reversible. Remove the force and it returns to shape (rubber band). PLASTIC = permanent. Remove the force and it stays deformed (bent paperclip). The transition happens at the elastic limit. Below it: elastic. Above it: plastic. Way above it: breaking point. Engineers design things to stay well below the elastic limit so nothing gets permanently damaged." },
        { keywords: ['graph','curve','force extension','why curve','beyond'],
          q: "Why does a force-extension graph curve beyond a point?",
          a: "Because Hooke's Law (F = kx, a straight line) only holds up to the proportional limit. Beyond that, the material starts yielding — atoms shift irreversibly and the relationship stops being linear. The curve bends upward: each extra bit of stretch needs MORE force. Eventually it reaches the breaking point. Engineering materials are chosen so the working load stays well inside the straight-line region." }
    ],

    'properties-matter': [
        { keywords: ['float','sink','why objects float','why float','buoyancy'],
          q: "Why do some objects float and others sink?",
          a: "Float if density is LESS than the fluid's. When you place an object in water, it displaces some water. If the displaced water weighs MORE than the object, it floats. If it weighs LESS, the object sinks. That's why a steel needle sinks but a steel ship floats — the ship is hollow, so its AVERAGE density is tiny." },
        { keywords: ['needle','coin','surface tension','why needle floats'],
          q: "Why can a needle float on water?",
          a: "Surface tension makes the water behave like a thin skin. If you place a needle GENTLY (flat, not breaking the surface), its weight is spread over a wide area and the 'skin' can hold it — even though steel is denser than water. It's surface tension, not buoyancy, doing the work. Add a drop of soap and the surface tension collapses — the needle instantly sinks. Coins can also float this way if you're careful." },
        { keywords: ['pressure','depth','why pressure increases','fluid','with depth'],
          q: "Why does pressure increase with depth?",
          a: "Because deeper fluid carries the weight of all the fluid above it. Pressure at depth h is ρgh — the weight of a column of fluid of height h on every square meter. Surprisingly, the shape or width of the container doesn't matter — only depth and density. A tall thin pipe can have more pressure at the bottom than a wide shallow tank, as long as the depth is greater." },
        { keywords: ['viscosity','what is viscosity','thick','fluid thickness','honey'],
          q: "What is viscosity in simple terms?",
          a: "It's a fluid's resistance to flowing — 'thickness'. Honey is highly viscous, water is thin. It comes from internal friction between layers of fluid sliding past each other. Heating most liquids reduces viscosity (warm honey flows more easily than cold). Engine oil is chosen carefully so it stays viscous enough to lubricate when the engine is hot." },
        { keywords: ['surface tension','droplet','spherical','round','water drop'],
          q: "Why do water droplets form round shapes?",
          a: "Surface tension always tries to minimize surface area. For a given volume, a sphere has the smallest possible surface area — so water naturally pulls itself into a ball. That's why raindrops, water beads on a leaf, and dew on grass are all round. Air resistance flattens falling raindrops slightly, but the tendency is always spherical." },
        { keywords: ['upthrust','buoyancy','archimedes','what is upthrust','push up'],
          q: "What is upthrust and where does it come from?",
          a: "Upthrust is the upward push a fluid gives to anything inside it. It happens because pressure is HIGHER at the bottom of the object than at the top (deeper fluid = more pressure). The fluid pushes UP harder than it pushes DOWN. Archimedes' principle: upthrust = weight of fluid displaced. Not magic — just pressure differences." },
        { keywords: ['ice','why ice floats','water density','anomalous','freeze'],
          q: "Why does ice float on water?",
          a: "Because ice is LESS dense than liquid water — about 917 kg/m³ vs 1000 kg/m³. When water freezes, molecules arrange into a hexagonal structure with empty space between them — so ice takes up MORE volume for the same mass. Water is unusual in this way (most solids sink in their own liquid). That's also why frozen water bottles burst: water expands on freezing." },
        { keywords: ['ship','why ship floats','heavy','steel ship','huge'],
          q: "Why does a steel ship float when a steel nail sinks?",
          a: "Because 'density' here means AVERAGE density — total mass ÷ total volume including air spaces inside. A ship is mostly hollow air space, so its average density is far below water (like a hollow ball). The nail is solid steel — density about 7800 kg/m³, way above water. Upthrust depends on the VOLUME of water displaced, not the total weight. A ship is shaped to displace a huge volume, so upthrust easily supports its weight." }
    ],

    // ═══════════════ THERMAL PHYSICS ═══════════════

    thermodynamics: [
        { keywords: ['heat','temperature','difference','what is difference','vs'],
          q: "What's the difference between heat and temperature?",
          a: "Heat is energy in motion — energy flowing from hot to cold. Temperature is a measure of the AVERAGE kinetic energy of particles. A bathtub of warm water has more HEAT than a cup of boiling water (because it contains more particles) — even though the cup is at a higher temperature. Heat = total energy; temperature = intensity of that energy. This is why the bathtub can melt more ice, but the cup can burn your tongue." },
        { keywords: ['heat flows','hot to cold','why heat flows','direction'],
          q: "Why does heat always flow from hot to cold?",
          a: "Because the second law of thermodynamics says entropy (disorder) always increases. Hot particles jiggle faster than cold particles — when they collide, fast particles give energy to slow ones. Over time, everything evens out. You can REVERSE this only by doing work (that's what a fridge does — it pumps heat from cold to hot using electricity). But naturally, energy always flows downhill, from hot to cold." },
        { keywords: ['specific heat','heat capacity','difference','what s difference'],
          q: "What's the difference between heat capacity and specific heat capacity?",
          a: "Heat capacity = the total heat needed to raise an object's temperature by 1 °C (whole object). Specific heat capacity = the heat needed per KILOGRAM of that material per °C. So a huge pot has more heat capacity than a small pot of the same metal — same SPECIFIC heat capacity, but more MASS. Specific heat capacity is a property of the MATERIAL. Heat capacity depends on both material AND amount." },
        { keywords: ['water high','specific heat water','water 4200','why water'],
          q: "Why does water have such a high specific heat capacity?",
          a: "Because water molecules form strong hydrogen bonds. To heat water, energy must first break those bonds — you can't just speed up the molecules; you have to loosen their grip on each other. That's why water takes 4200 J to heat 1 kg by 1 °C — one of the highest of any common substance. It's why oceans stabilize climate, why boiling water takes so long, and why sweating is so effective at cooling you down." },
        { keywords: ['latent heat','phase change','temperature stays','why temperature constant','melting'],
          q: "Why does temperature stay constant during phase changes?",
          a: "Because the heat energy is being used to BREAK bonds, not to speed up particles. When ice melts, energy goes into loosening each molecule from its rigid crystal seat — the particles don't speed up, so temperature doesn't rise. Same when water boils: energy goes into turning liquid particles into gas, freeing them from each other. Only after the phase change is complete does extra heat raise the temperature again." },
        { keywords: ['sweat','sweating','cooling','why sweating','why does sweat cool'],
          q: "Why does sweating cool us down?",
          a: "Because evaporation takes energy. When sweat evaporates, the most energetic water molecules escape as vapor — the ones left behind are slower (cooler). That's cooling by evaporation. It works better in dry air because dry air can absorb more vapor; in humid weather, sweat can't evaporate as fast, so we feel hotter. The same principle: blowing on hot food cools it because evaporating moisture carries heat away." },
        { keywords: ['metal','colder','why metal feels colder','touch','feels cold'],
          q: "Why does metal feel colder than wood at the same temperature?",
          a: "Because metal conducts heat away from your hand much faster. The metal is NOT actually colder — it's at room temperature, same as the wood. But metals have free electrons that quickly carry heat away from your fingertip. So your skin cools down, and your brain interprets that as 'cold'. Wood is a poor conductor, so heat builds up locally and it feels 'warm'. This is why touching a metal doorknob in winter feels shocking." },
        { keywords: ['thermos','flask','vacuum','why flask keeps hot','why hot stays hot'],
          q: "How does a thermos flask keep drinks hot or cold?",
          a: "By blocking all three methods of heat transfer. The double-walled glass/steel has a VACUUM between the walls — no air means no conduction or convection. The silvered walls reflect heat radiation back inside. The stopper prevents convection at the top. So a hot drink loses very little heat — and a cold drink can't gain much heat from outside. It's a beautiful example of fighting all three heat-transfer modes at once." }
    ],

    'gas-laws': [
        { keywords: ['boyle','boyle s law','why pv constant','pressure volume','inverse'],
          q: "Why does pressure increase when you compress a gas?",
          a: "Because the same number of molecules hit the walls more often in a smaller space. Compress the gas to half the volume, and each molecule hits the wall twice as often — double the pressure. That's Boyle's law: P × V = constant (at constant temperature). It's not magic — it's just geometry. More molecules per unit volume, more collisions per second, higher pressure." },
        { keywords: ['temperature','pressure increase','hot','why pressure temperature','tyre'],
          q: "Why does heating a gas increase its pressure?",
          a: "Because hot molecules move faster and hit the walls harder, AND more often. Double the absolute temperature (Kelvin) at constant volume, and the pressure doubles. That's the pressure law: P/T = constant. That's why tyre pressure reads higher on a hot day — the trapped air molecules are jiggling faster. It's also why you should NOT over-inflate tyres before a long summer drive." },
        { keywords: ['kelvin','absolute zero','why use kelvin','why not celsius','temperature scale'],
          q: "Why do we use Kelvin in gas laws?",
          a: "Because Kelvin starts at absolute zero — the temperature where molecules have minimum possible energy (no more motion). At 0 K, gas volume theoretically goes to zero (Boyle's law: V/T = constant; if T = 0, V = 0). Celsius has arbitrary zero — you can't divide by -273°C mathematically. Kelvin is just Celsius + 273 and makes the formulas work. Gas laws literally break if you use Celsius (you'd divide by negative numbers)." },
        { keywords: ['hot air rises','rise','why hot air','balloon'],
          q: "Why does hot air rise?",
          a: "Because heating air makes it expand, so it becomes less dense. Warmer air has the same number of molecules in a bigger volume (Charles' law) — so there's less mass per cubic meter. Cold air is heavier, so it sinks below the hot air and pushes it up. That's how hot-air balloons fly, how houses lose heat through ceilings, and how smoke rises up a chimney." },
        { keywords: ['balloon pop','high altitude','expand','why balloon expands'],
          q: "Why do balloons expand (or pop) at high altitude?",
          a: "Because atmospheric pressure is LOWER up there. A balloon is held together by rubber tension; inside, gas pressure pushes out. At sea level, outside air pressure helps keep the balloon balanced. At high altitude, outside pressure drops, so the inner pressure wins — the balloon expands. Weather balloons are designed for this; party balloons pop. This is Boyle's law in action." },
        { keywords: ['spray can','aerosol','cold','why spray cold','expand'],
          q: "Why does a spray can feel cold when used?",
          a: "Because expanding gas cools. When gas escapes from a pressurized can, it EXPANDS rapidly against outside pressure. Expanding gas does work, using its own internal energy — so it loses temperature. The molecules also travel faster apart, but the overall gas becomes colder. Your skin feels this immediately. Same principle behind air conditioners and refrigerators — they work by expanding gas and letting it cool." },
        { keywords: ['moles','n','what is mole','avogadro','amount of gas'],
          q: "What is a mole in the gas equation PV = nRT?",
          a: "A mole is just a counting unit — like 'dozen', but huge (6.02 × 10²³ particles). 1 mole of any gas at STP (0°C, 1 atm) occupies about 22.4 liters. In PV = nRT, n tells you how many moles you have, and R = 8.314 J/(mol·K) ties it all together. So a 2-mole gas sample contains twice as many particles as a 1-mole sample. It makes gas calculations work regardless of which specific gas you have." },
        { keywords: ['ideal','real','difference','ideal gas','not ideal'],
          q: "What's the difference between an ideal and a real gas?",
          a: "Ideal gas: molecules have zero volume, and there's no attraction between them. Real gas: molecules take up space, and they do attract each other (weakly). Ideal gas obeys PV = nRT perfectly. Real gases deviate — especially at high pressure (molecules crushed together) or low temperature (attractions dominate, and the gas condenses). At ordinary conditions, most gases are close enough to ideal that the formula works fine." }
    ],

    'thermal-expansion': [
        { keywords: ['why expand','expand','heated','why things expand','heating'],
          q: "Why do things expand when heated?",
          a: "Because hotter particles vibrate more strongly and push each other further apart. Atoms in a solid sit in tiny potential wells — heat makes them jiggle harder, and the AVERAGE separation grows. So the whole object gets bigger. Different materials expand differently: metals a lot (loose bonds), ceramics and glass less (stiff bonds), and some engineered materials like Invar almost not at all. That's why expansion coefficients matter in engineering." },
        { keywords: ['gap','railway','bridge','why gap','joints'],
          q: "Why do bridges and railways have expansion gaps?",
          a: "Because in summer they'd otherwise buckle and crack. Steel expands about 12 mm per 100 m for every 30 °C rise. A 1 km bridge without gaps could grow 0.36 m in summer heat — enough to warp or snap. Engineers leave expansion joints (visible metal 'fingers' in bridges, small gaps between rails) so the material has room to grow without crushing itself. In winter the same joints close up." },
        { keywords: ['bimetallic','strip','bend','thermostat','why bend'],
          q: "Why does a bimetallic strip bend when heated?",
          a: "Because the two metals expand by different amounts, but they're bonded together — so the strip has to bend to accommodate. Brass expands roughly twice as much as iron for the same temperature rise. Heat it: brass wants to get longer, iron less so. Since they're joined, the strip curls toward the metal that expands LESS (iron). Cool it, and it curls the other way. This is the basis of old thermostats, toasters, and fire alarms — no electronics, just two metals fighting each other." },
        { keywords: ['water','anomalous','4 degrees','ice','weird','why water unusual'],
          q: "Why does water behave so strangely near freezing?",
          a: "Because water has an anomalous expansion — it CONTRACTS from 0°C to 4°C, then expands above 4°C. The reason: ice crystals have an open hexagonal structure. When ice warms up, that structure begins to collapse and molecules pack tighter. Maximum density is at 4°C. Above 4°C, normal thermal expansion takes over. This is why lakes freeze from the TOP down (4°C water sinks, ice floats), letting fish survive underneath. Without this quirk, life in cold climates would be very different." },
        { keywords: ['glass','crack','hot water','boiling','shatter'],
          q: "Why does cold glass crack when you pour hot water in it?",
          a: "Because different parts of the glass expand unevenly. The inside surface heats up and expands immediately. The outside surface is still cold and doesn't expand. The inner surface pushes against the outer surface, creating stress. Ordinary glass is brittle — the stress cracks it. Pyrex/Borosilicate glass has very low expansion coefficient, so it barely expands at all — which is why it can take hot liquids safely." },
        { keywords: ['thermometer','work','how does','mercury','liquid in'],
          q: "How does a thermometer work?",
          a: "By exploiting thermal expansion of liquid in a narrow tube. Mercury (or colored alcohol) expands when heated and rises up the narrow capillary. A tiny volume increase causes a LARGE height increase because the tube is thin (volume = area × length; small area → big length). The stem is calibrated so that height directly maps to temperature. Alcohol thermometers are used in cold places where mercury would freeze (mercury freezes at -39°C)." },
        { keywords: ['area','volume','double triple','alpha beta gamma'],
          q: "Why do we have linear, area, and volume expansion?",
          a: "Because heat expands objects in all THREE dimensions. Linear expansion (α) is the growth in one dimension. Area expansion (β) applies to 2D objects — β ≈ 2α because area involves two linear dimensions. Volume expansion (γ) applies to 3D objects — γ ≈ 3α because volume involves three dimensions. So a solid cube that grows by 1% in length grows by about 2% in area and 3% in volume. Makes sense when you think about it." },
        { keywords: ['metal lid','jar','open','stuck lid','hot water lid'],
          q: "Why does running hot water on a stuck jar lid loosen it?",
          a: "Because the metal lid expands MORE than the glass jar. Metal has a higher expansion coefficient (typically 2–3× the glass's). When you run hot water over both, the metal grows more, breaking its grip on the glass. Add a rubber gripper and a firm twist — physics does most of the work. This is a perfect everyday demonstration of differential thermal expansion." }
    ],

    // ═══════════════ WAVES ═══════════════

    'wave-simulator': [
        { keywords: ['what is wave','really','energy','matter','transfer'],
          q: "What is a wave really?",
          a: "A wave is energy travelling through a medium — without moving the medium itself. Imagine a stadium 'wave' in the crowd: each person stands and sits, but the wave moves around the stadium, not the people. In water waves, water molecules bob up and down but don't travel with the wave. What travels is the DISTURBANCE — pure energy. That's why a floating boat bobs but doesn't get carried offshore with each wave." },
        { keywords: ['frequency constant','why frequency','medium change','colour','refraction wave'],
          q: "Why does frequency stay constant when a wave enters a new medium?",
          a: "Because the wave's source hasn't changed. Frequency is how many waves leave the source per second — that's fixed by the source, not the medium. What DOES change is speed (faster in some media) and therefore wavelength (since v = fλ, if v goes up and f stays fixed, λ must go up too). This is why light changes color when it enters glass? No — colour is fixed by frequency, so it stays the same. Only speed and wavelength change." },
        { keywords: ['transverse','longitudinal','difference','which is','perpendicular'],
          q: "What's the difference between transverse and longitudinal waves?",
          a: "In a TRANSVERSE wave, particles vibrate PERPENDICULAR to the wave's direction. Think of a shaking rope — particles move up/down while the wave moves sideways. Light, water waves (surface), and waves on a string are transverse. In a LONGITUDINAL wave, particles vibrate PARALLEL to the direction. Sound is the classic example — air molecules squash and stretch in the same direction the sound travels." },
        { keywords: ['amplitude','energy','why amplitude','loudness','brighter'],
          q: "Why does amplitude affect energy but not speed?",
          a: "Amplitude is how far particles move from their rest position. More amplitude = more displacement = more energy carried. But the SPEED of the wave depends on the MEDIUM's properties (tension, density, stiffness), not on how big the wave is. A quiet and a loud shout both travel at 340 m/s in air — the loud one just carries more energy. Amplitude affects loudness/brightness, not speed." },
        { keywords: ['wave speed','what determines','depends on','medium','why speed'],
          q: "What determines the speed of a wave?",
          a: "The MEDIUM — how stiff it is and how dense. In water, speed depends on depth (deeper = faster). In a string, speed depends on tension (more tension = faster) and mass per length (heavier = slower). In air, speed depends on temperature (hotter = faster) and density. Sound travels 4× faster in water than in air, and 15× faster in steel — because solids are much stiffer, so the disturbance passes through more quickly." },
        { keywords: ['period','frequency','difference','relationship','f 1/t'],
          q: "What's the relationship between period and frequency?",
          a: "They're inverses of each other. Frequency f = how many cycles per second (Hz). Period T = how many seconds per cycle. So f = 1/T and T = 1/f. If a wave has frequency 5 Hz, its period is 1/5 = 0.2 s. The two are just different ways of describing the same property — like 'how many times per minute' vs 'how long each time' when exercising." },
        { keywords: ['carry matter','does wave carry','particles move','water wave matter'],
          q: "Do waves carry matter?",
          a: "No — waves carry ENERGY, not matter. The particles of the medium just oscillate in place. When an ocean wave passes, the water molecules bob up and down (and slightly forward/back), but they don't travel with the wave. After each wave, the water returns to where it was. This is why a boat doesn't get carried all the way to shore just because a wave passed — it bobs over each wave but stays put. Only the pattern (the disturbance) moves." },
        { keywords: ['v f lambda','wave equation','why v','explain equation','formula'],
          q: "Why is v = fλ?",
          a: "In one period (T seconds), a wave moves forward by exactly one wavelength. So its speed = wavelength / period = λ/T. Since f = 1/T, that's v = fλ. It makes sense: if you're sending out 5 waves per second, and each wave is 2 m long, the 'pattern' advances 5 × 2 = 10 m per second. The equation is just that logic in symbols. It works for every kind of wave — water, sound, light, radio." }
    ],

    'sound-waves': [
        { keywords: ['needs medium','vacuum','why sound','cannot travel','space'],
          q: "Why can't sound travel through space?",
          a: "Because sound is a mechanical wave — it needs particles to squash and stretch. Space is a vacuum — no particles to vibrate. Astronauts in space use radios (which transmit via electromagnetic waves, not sound) to 'talk' to each other. In sci-fi movies where you hear explosions in space — that's wrong. Real space explosions are silent. Sound also can't travel through the airless vacuum part of a thermos flask, which is part of why a thermos keeps things at temperature." },
        { keywords: ['faster','solid','speed','why faster','steel water'],
          q: "Why does sound travel faster in solids than in air?",
          a: "Because solid particles are packed tightly and held by stiff forces — they push each other easily. Air molecules are far apart and only collide occasionally. In steel, sound travels about 5000 m/s; in air, only 340 m/s. That's why you can hear a train coming by putting your ear to the rail LONG before the sound reaches you through the air. Density matters too, but stiffness matters more — which is why steel (dense) is still faster than air (sparse)." },
        { keywords: ['hot air','temperature','speed of sound','hot day','warmer'],
          q: "Why does sound travel faster in hot air?",
          a: "Because hot molecules move faster and are more energetic, so they can pass the disturbance along more quickly. Speed increases by about 0.6 m/s per degree Celsius. At 0 °C: ~331 m/s. At 20 °C: ~343 m/s. Sounds travel noticeably faster on a hot day. This is why concerts on hot evenings sometimes seem brighter — the higher frequencies arrive at slightly different times than the lower ones through different temperature layers." },
        { keywords: ['echo','why echo','reflection sound','hear echo'],
          q: "What is an echo and why does it happen?",
          a: "An echo is a sound wave that reflected off a distant hard surface (cliff, wall, mountain) and came back to you. Sound reflects like light does. You hear the echo if the round trip takes more than ~0.1 s — otherwise your brain blends it with the original sound. To find a cliff's distance: total distance = speed × time, then divide by 2 (because the sound goes there and back). At 340 m/s, 1 second of echo time = 170 m of cliff distance." },
        { keywords: ['doppler','effect','why doppler','ambulance','siren'],
          q: "What is the Doppler effect?",
          a: "It's the change in pitch you hear when a sound source moves relative to you. When an ambulance approaches, the sound waves get bunched up (shorter wavelength = higher pitch). When it passes and drives away, the waves stretch out (longer wavelength = lower pitch). It's not the ambulance changing its siren — it's physics. Same principle is used in police radar, weather radar, and measuring blood flow. Astronomers use it to measure how fast galaxies are moving." },
        { keywords: ['pitch','frequency','why pitch','high low pitch'],
          q: "Why does pitch depend on frequency?",
          a: "Because your ear has hair cells in the cochlea tuned to different frequencies — some fire for low, some for high. The frequency of the sound wave directly determines which cells fire. So pitch IS the brain's interpretation of frequency. Higher frequency = more pressure cycles per second = higher perceived pitch. Doubling frequency = doubling pitch (octave). This is why musicians tune by frequency: A4 is exactly 440 Hz." },
        { keywords: ['thunder','lightning','why thunder after','speed of light'],
          q: "Why do we see lightning before we hear thunder?",
          a: "Because light travels about a million times faster than sound. Light: 300,000,000 m/s. Sound: 340 m/s. The lightning flash reaches your eyes almost instantly. The thunder's rumble crawls through the air at only 340 m/s — so you hear it after. Count the seconds between flash and thunder, and divide by 3: that's roughly the distance in km. 3 seconds per km, 5 seconds per mile. Physics lets you measure a storm's distance from safety." },
        { keywords: ['hear around corners','corner','diffraction sound','sound bends'],
          q: "Why can you hear sounds around corners?",
          a: "Because sound waves DIFFRACT — they bend around obstacles. Diffraction is strongest when the obstacle is comparable in size to the wavelength. Sound wavelengths in air are typically 0.1–10 m, which is about the size of doorways and walls — perfect for bending around them. Light waves are tiny (500 nm) — millions of times smaller — so visible light barely diffracts around human-scale objects. That's why you can HEAR someone through a doorway but not SEE them from around the corner." }
    ],

    'wave-phenomena': [
        { keywords: ['interference','what is','constructive','destructive','add'],
          q: "What is interference?",
          a: "When two waves meet, their displacements ADD together. If crests meet crests, you get constructive interference — bigger wave (brighter, louder). If crest meets trough, they cancel — destructive interference (darker, quieter). It's pure addition — like adding positive and negative numbers. This is how noise-cancelling headphones work: they generate an 'anti-noise' wave that exactly cancels the incoming noise. The two waves sum to zero, and you hear silence." },
        { keywords: ['soap bubble','colors','bubble color','thin film','why colors'],
          q: "Why do soap bubbles show rainbow colors?",
          a: "Because of thin-film interference. Light reflects off BOTH the outer and inner surface of the bubble film. The two reflected waves overlap, but depending on the film's thickness, different colors (wavelengths) constructively or destructively interfere. Where the film is exactly the right thickness for red light to reinforce, you see red; where it's right for blue, you see blue. Film thickness varies slightly across the bubble, so you see swirls of colors. That's why soap bubbles are so beautiful — pure physics." },
        { keywords: ['diffraction','what is','bend','spread','around obstacle'],
          q: "What is diffraction?",
          a: "The spreading of waves when they pass through a narrow gap or around an obstacle. The narrower the gap (relative to wavelength), the more the waves fan out. Sound diffracts around doorways — that's why you can hear people in the next room. Light diffracts too but its wavelength is tiny, so you only notice it with very narrow slits. This is how a CD gets its rainbow: the microscopic pits act as tiny slits, diffracting white light into colors." },
        { keywords: ['polarization','polarized','what is','sunglasses','glare'],
          q: "What is polarization?",
          a: "Light waves vibrate in many directions. A polarizing filter lets only one direction through — like a fence that only lets through planks held a certain way. Polarized sunglasses cut out horizontal glare (which is why they help when driving). 3D movies work by sending different polarizations to each eye. Polarization only works for TRANSVERSE waves — you can't polarize sound, because sound vibrates in the same direction it travels (longitudinal)." },
        { keywords: ['standing wave','node','antinode','stationary wave','what is'],
          q: "What is a standing wave?",
          a: "When two identical waves travel in opposite directions and overlap, they form a pattern that looks like it's standing still. Certain points (NODES) never move — the two waves always cancel there. Other points (ANTINODES) vibrate at maximum amplitude. The pattern doesn't travel — hence 'standing'. Guitar strings form standing waves when plucked: nodes at the ends, antinodes in the middle. This is how the string 'knows' what pitch to produce." },
        { keywords: ['beats','beat frequency','why beats','two sounds','pulsing'],
          q: "Why do two slightly different sounds produce beats?",
          a: "Because the two waves drift in and out of phase. When they're in phase: constructive interference → loud. When they drift out of phase: destructive interference → quiet. This loud-quiet cycle is the 'beat'. Beat frequency = |f₁ - f₂|. Two tuning forks at 440 Hz and 444 Hz produce a beat at 4 Hz — you hear a pulsing every quarter-second. Musicians use this to tune instruments: eliminate the beats, and you've matched the frequencies." },
        { keywords: ['double slit','young','why pattern','bright dark'],
          q: "Why does the double-slit experiment give bright and dark bands?",
          a: "Because light from the two slits interferes. At points where crests from both slits meet, you get constructive interference — a bright band. Where a crest from one slit meets a trough from the other, they cancel — a dark band. The pattern of bright and dark stripes is a direct proof that light behaves as a WAVE. This experiment (Young, 1801) was decisive in establishing the wave nature of light — before we realized light also acts as a particle (wave-particle duality)." },
        { keywords: ['why only transverse','polarize sound','sound polarized','cannot polarize'],
          q: "Why can't sound be polarized?",
          a: "Because polarization requires the wave to vibrate in multiple directions — only transverse waves (like light) can do that. Sound is longitudinal: air molecules vibrate back and forth ALONG the direction of travel. There's only one axis of vibration, so there's nothing to filter out. Sound can be focused, echoed, and diffracted — but never polarized. This is a handy way to remember the difference between transverse and longitudinal." }
    ],

    optics: [
        { keywords: ['why see','see objects','light reflects','vision'],
          q: "Why do we see objects?",
          a: "Because light reflects off them into our eyes. Without light, we see nothing — that's why a cave is pitch dark. When light hits an object, some wavelengths are absorbed and others reflected. A red apple absorbs blue and green but reflects red — that's the colour you see. A mirror reflects almost everything cleanly. A black object absorbs almost all light (that's why black things get hot in the sun). Vision is just light in, brain out." },
        { keywords: ['refract','bend','why light bends','water glass','speed change'],
          q: "Why does light bend when entering water?",
          a: "Because light slows down in water (and in glass, plastic, etc.). Light travels at 300,000,000 m/s in vacuum, but only about 225,000,000 m/s in water — 25% slower. When the light hits the boundary at an angle, the 'front' of the wave is slowed unevenly — like a shopping cart pushed from an angle, the front wheel hits the slower surface first, causing it to turn. This is refraction. The steeper the angle, the more the light bends." },
        { keywords: ['bent','broken','straw water','why looks bent','pencil'],
          q: "Why does a straw look bent in a glass of water?",
          a: "Because of refraction. Light from the submerged part of the straw travels through water, then refracts (bends) as it exits into air, before reaching your eyes. Your brain assumes light travels in straight lines, so it 'reconstructs' the straw at the WRONG position. The apparent bend is an optical illusion — the straw is perfectly straight. This is why pools look shallower than they really are, and why spear fishing is harder than it looks (you must aim BELOW where the fish appears)." },
        { keywords: ['total internal','tir','fiber optic','why light stays','critical angle'],
          q: "What is total internal reflection and why does it matter?",
          a: "When light is inside a denser medium (like glass) and hits the boundary at a STEEP enough angle, it can't escape — it reflects entirely back inside. This happens only when the angle exceeds the critical angle. Fibre-optic cables use this: light bounces along the inside of a glass thread for kilometres without leaking out — carrying internet data at the speed of light. Endoscopes use it to see inside the human body. Diamonds sparkle because of TIR — their high refractive index traps light and bounces it out through the top." },
        { keywords: ['glasses','spectacles','correct vision','short sight','long sight'],
          q: "How do glasses correct vision?",
          a: "By adjusting where light focuses on the retina. In short-sightedness (myopia), the eye's lens is too strong — light focuses IN FRONT of the retina. A CONCAVE (diverging) lens spreads the light slightly, pushing the focus back onto the retina. In long-sightedness (hyperopia), the eye's lens is too weak — light would focus BEHIND the retina. A CONVEX (converging) lens adds extra bending, bringing the focus forward. That's the whole trick — glasses just fine-tune where images land." },
        { keywords: ['concave mirror','shaving','why magnify','makeup mirror','close up'],
          q: "Why do concave mirrors magnify when you're close?",
          a: "Because they bend light inward. When your face is INSIDE the focal length of a concave mirror, the reflected rays diverge — they appear to come from a larger, virtual image behind the mirror. That's why shaving/makeup mirrors are concave: your face is close enough to be magnified. Move further back (beyond the focal point), and the mirror flips to producing real, INVERTED images — the same reason concave mirrors are used in telescopes and headlights." },
        { keywords: ['color','light colour','why red','wavelength color','spectrum'],
          q: "Why do different colours exist?",
          a: "Because different colours are different WAVELENGTHS of light. Red light has long wavelengths (~700 nm), violet has short (~400 nm). Your eye has three types of colour receptors (red, green, blue) — different mixtures trigger different patterns, and your brain interprets them as colours. White light is all wavelengths mixed. A prism splits them because each wavelength refracts by a slightly different amount — a rainbow is nature's prism." },
        { keywords: ['star twinkle','why stars twinkle','twinkle','atmosphere'],
          q: "Why do stars twinkle but planets don't?",
          a: "Because stars are so far away they appear as tiny points of light — their light gets bent by moving air in our atmosphere, causing the point to flicker. Planets are closer, so they appear as small DISCS (not points). The disc has many points of light, each twinkling differently — they average out, so the planet looks steady. It's not the star that's twinkling — it's our atmosphere smearing the light around. Astronauts on the ISS see stars without twinkling, because they're above the atmosphere." }
    ]
};

    // ═══════════════ ELECTRICITY & MAGNETISM ═══════════════

    'ohms-law': [
        { keywords: ['what is ohm','really','why v ir','understand ohm','simple'],
          q: "What does Ohm's Law really mean?",
          a: "It's the rule that current is directly proportional to voltage, if resistance stays constant. Push harder (more voltage) → more current flows. Make the wire harder to push through (more resistance) → less current. V = IR is just math for that. Think of voltage as water pressure, resistance as pipe width, and current as flow rate. Higher pressure pushes more water through the same pipe. Narrower pipe resists flow more. Same water-pipe intuition, just with electrons." },

        { keywords: ['resistance increase','length','longer wire','why longer'],
          q: "Why does a longer wire have more resistance?",
          a: "Because electrons have to travel farther, colliding with more atoms along the way. Every atom is a small obstacle — the longer the path, the more obstacles. That's why R = ρL/A: resistance is directly proportional to length L. A 10 m wire has 10× the resistance of a 1 m wire (same thickness and material). That's why long extension cords waste more energy than short ones." },

        { keywords: ['thick wire','area','why thick','cross section','less resistance'],
          q: "Why does a thicker wire have less resistance?",
          a: "Because there's more 'space' for electrons to flow through. Imagine a highway: more lanes = more cars can pass at once. A wire with twice the cross-sectional area has about half the resistance. That's why power lines are thick (to reduce energy loss) while thin wires are only used for low-power devices. R = ρL/A — resistance is inversely proportional to area A." },

        { keywords: ['resistivity','resistance','difference','what is resistivity','rho'],
          q: "What's the difference between resistance and resistivity?",
          a: "Resistivity is a PROPERTY OF THE MATERIAL — how strongly that metal resists current, regardless of shape. Resistance is a property of a SPECIFIC OBJECT — it depends on the material, length, and thickness. Copper has low resistivity (0.017 μΩ·m) — that's why it's used for wires. Nichrome has high resistivity (1.1 μΩ·m) — that's why it's used for heater coils. Same formula R = ρL/A connects them." },

        { keywords: ['p vi','p i2r','p v2 r','power formula','which power','difference power'],
          q: "Why are there three power formulas?",
          a: "Because they all say the same thing — just solved for different combinations. P = VI (power = voltage × current). P = I²R (substitute V = IR). P = V²/R (substitute I = V/R). Which you use depends on what you know. Know V and I? Use VI. Know I and R? Use I²R. Know V and R? Use V²/R. All three are correct — pick whichever is easiest given your data. Never memorize all three unless you need to — just remember P = VI and Ohm's law, and you can derive the others." },

        { keywords: ['current flow','closed circuit','why closed loop','electron path'],
          q: "Why does current only flow in a closed circuit?",
          a: "Because electrons need a complete path from the battery's negative terminal, through the circuit, back to the positive terminal. Break the path anywhere, and the flow stops instantly everywhere. It's like a bicycle chain — break it anywhere, and it doesn't turn. This is why a switch works: it physically creates a gap. Current doesn't 'leak out' into the environment; it must return to the source." },

        { keywords: ['emf','voltage','difference','what is emf','terminal voltage'],
          q: "What's the difference between EMF and voltage?",
          a: "EMF (electromotive force) is the total energy the battery CAN give per unit charge — the 'ideal' voltage. Voltage (potential difference) is what you actually measure across the terminals when current is flowing. The difference is lost to the battery's own internal resistance: V = EMF − Ir. A 12V battery with 0.5Ω internal resistance reads 12V when nothing's connected, but drops to 10V if 4A is flowing. That's why your car battery might read 12V but struggle to start — its internal resistance has risen with age." },

        { keywords: ['ohmic','non ohmic','non-ohmic','difference ohmic','bulb','filament'],
          q: "What's an ohmic vs non-ohmic conductor?",
          a: "Ohmic: constant resistance — the I-V graph is a straight line through the origin. Copper wires, resistors at constant temperature. Non-ohmic: resistance changes with conditions. A light bulb filament HEATS UP as current flows — its resistance increases, so the I-V curve bends. Diodes only conduct one way — completely non-ohmic. That's why we can't just apply Ohm's law to bulbs: their resistance depends on temperature, which depends on the current." }
    ],

    circuits: [
        { keywords: ['same current','series current','why same','why series'],
          q: "Why is current the same in series?",
          a: "Because there's only ONE path — every electron that leaves the battery must pass through every component in turn. Charge can't pile up or disappear, so the same number of electrons per second flows through each component. Like water in a single pipe: the flow rate is the same everywhere in the pipe. The components share the voltage, but they all experience the same current." },

        { keywords: ['same voltage','parallel voltage','why parallel','same pd'],
          q: "Why is voltage the same across parallel branches?",
          a: "Because both ends of each branch connect to the SAME two points in the circuit. Every branch has the same potential difference between its two ends — that's what 'parallel' means physically. Like two pipes branching from the same two junctions: each branch has the same pressure difference across it, even if the pipes have different widths. That's why voltage is the same — it's about the two endpoints, not the path." },

        { keywords: ['parallel resistance','why less','parallel total','less than'],
          q: "Why is parallel resistance LESS than the smallest resistor?",
          a: "Because adding a parallel branch gives current ANOTHER path to flow through. More paths = less overall obstruction = lower equivalent resistance. Two 10Ω resistors in parallel give 5Ω — half. Three give 3.3Ω. Ten give 1Ω. If you add enough parallel branches, the total resistance approaches zero (a short circuit). This is why parallel circuits are dangerous when something shorts out — the resistance drops dramatically and huge current flows." },

        { keywords: ['ammeter series','voltmeter parallel','why ammeter','why voltmeter'],
          q: "Why is an ammeter in series but a voltmeter in parallel?",
          a: "Because ammeters measure CURRENT — the flow THROUGH a point — so they must be in the path. They have very low resistance so they barely disturb the circuit. Voltmeters measure POTENTIAL DIFFERENCE — the difference between two points — so they must bridge those two points. They have very high resistance so that almost no current diverts into them. If you connected an ammeter in parallel, it would draw huge current (near zero resistance) and blow its fuse. If you connected a voltmeter in series, it would block all the current (near infinite resistance)." },

        { keywords: ['bulbs dimmer','adding bulbs','more bulbs','series dimmer'],
          q: "Why do bulbs get dimmer when you add more in series?",
          a: "Because they share the same voltage, and each one gets a smaller slice. Total voltage stays fixed (battery), but with more resistors in series, total resistance rises, so current falls. Lower current = less power per bulb = dimmer. A 3-bulb string on a 3V battery gives each bulb only 1V worth of brightness (roughly). This is why old Christmas lights were dim — one big series chain. Modern LED strings use parallel so each bulb gets full voltage." },

        { keywords: ['kirchhoff','current law','kcl','junction','node'],
          q: "What is Kirchhoff's current law?",
          a: "The rule that current into a junction equals current out. Electrons can't vanish or pile up at a point, so whatever flows in must flow out. If 3A enters a junction and 1A leaves through one branch, the other branch must carry 2A. It's just conservation of charge, stated at each point. Really useful for solving circuits where series/parallel formulas don't apply cleanly." },

        { keywords: ['short circuit','short','what is short','dangerous','why dangerous'],
          q: "What is a short circuit?",
          a: "A path of very low resistance that bypasses the normal circuit. Current takes the 'easy' route — huge current flows because R is tiny (I = V/R). If your battery is 12V and the short has 0.01Ω, current = 1200A! That's enough to melt wires, start fires, or explode a battery. That's why fuses exist — they sit in the circuit and melt if current exceeds a safe limit, cutting off the flow before damage. Never 'test' a battery with a wire across its terminals — that's a deliberate short circuit." },

        { keywords: ['why series','why parallel','use series','use parallel','home wiring'],
          q: "Why is home wiring parallel, not series?",
          a: "Three big reasons: (1) Each device gets the full mains voltage regardless of what else is on. (2) You can turn off one lamp without turning off the whole house. (3) If one device fails, everything else keeps working — no 'whole string goes dark' effect. The only downside: parallel circuits draw MORE total current as you add devices (current splits into branches and recombines). That's why a house has a main fuse — to protect the incoming supply from too many devices at once." }
    ],

    electrostatics: [
        { keywords: ['like repel','why repel','why opposite attract','attract repel'],
          q: "Why do like charges repel and opposite charges attract?",
          a: "Fundamental property of electric charge in the universe — like gravity always attracts, but electric force can attract OR repel. Same-sign charges (both positive, or both negative) push each other apart. Opposite-sign charges pull together. Nobody's entirely sure WHY at a fundamental level — it's just an observed fact. But it's what makes atoms stable (positive nucleus attracts negative electrons), and what makes chemistry work. Everything around you is holding itself together with electric force." },

        { keywords: ['electric field','what is field','field lines','why field'],
          q: "What is an electric field?",
          a: "A field is a way of describing the FORCE that would act on a charge if one were placed at that point. Put a test charge near a real charge, and it feels a force — the field is the 'force per unit charge' at every point in space. Field lines point the way a POSITIVE test charge would move. So field lines go AWAY from positive charges and TOWARD negative charges. The closer the field lines, the stronger the field. This is why two positive charges have field lines pushing away from each other — the field is describing the repulsion." },

        { keywords: ['inverse square','why inverse square','r squared','coulomb law','why r2'],
          q: "Why is Coulomb's law an inverse-square law?",
          a: "Because the force spreads out over the surface of an imaginary sphere around the charge — and the sphere's surface area grows with r². The field is diluted as 1/r² because it's spread over area that grows as r². This is the same reason gravity is inverse-square. ANY force that radiates uniformly from a point follows 1/r² — light intensity, sound intensity, gravity, electric force. Double the distance, and the force drops to one-quarter. Triple it, and it drops to one-ninth." },

        { keywords: ['electric potential','voltage electrostatic','potential energy','what is potential'],
          q: "What is electric potential?",
          a: "It's the potential ENERGY per unit charge at a point — how much work it would take to bring a +1C charge there from infinity. Measured in volts (J/C). High potential = a positive charge at that point would be 'pushed away' hard. Think of it like altitude in a gravity field: high potential is like high ground, and charges 'want' to roll down to lower potential. Current flows from high potential to low potential, just as water flows downhill. Voltage IS electric potential difference." },

        { keywords: ['capacitor','what is capacitor','how does capacitor','store charge'],
          q: "What is a capacitor and how does it store charge?",
          a: "Two metal plates separated by an insulator. Charge one plate positive and the other negative — they attract each other, so the charge stays put even after you disconnect the battery. It's like storing charge in a bucket. C = Q/V, measured in farads (F). They can release that stored energy very quickly — that's why they're used in camera flashes, defibrillators, and electronic circuits that need sudden bursts of power. They also smooth out voltage fluctuations in power supplies." },

        { keywords: ['conductor insulator','conductor vs insulator','why insulator','which'],
          q: "Why are some materials conductors and others insulators?",
          a: "Because conductors have FREE ELECTRONS that can move easily, while insulators hold their electrons tightly. Metals: electrons in the outer shell are loosely bound, so they form a 'sea' of free electrons that drift through the metal. Glass, plastic, rubber: electrons are locked in place — no easy path. This is why we coat wires in plastic: the plastic insulates the free electrons from escaping or shocking you. Semiconductors are in-between — with the right stimulation, they can switch between conducting and insulating. That's what makes computers possible." },

        { keywords: ['charging induction','induction charge','charge without touching','how does induction'],
          q: "What is charging by induction?",
          a: "Charging a neutral object WITHOUT touching it, by bringing a charged object nearby. Bring a positive rod near a neutral metal sphere — electrons in the sphere are pulled toward the rod, leaving the far side positive. Now ground the far side briefly (or touch it), and electrons flow away from earth. Remove the ground, remove the rod — the sphere is left with a net positive charge. No physical contact with the charged rod ever happened. That's induction. Same principle behind electrostatic precipitators (in power plants) and laser printers." },

        { keywords: ['why lightning','lightning','thunder cloud','static discharge'],
          q: "How does lightning work?",
          a: "Friction between ice particles in storm clouds builds up static charge. Positive charges accumulate at the top of the cloud, negative at the bottom. Once the charge difference gets big enough, the air (normally an insulator) breaks down — becomes a conductor — and a MASSIVE current flows in one flash. That's lightning. It's the same tiny spark you feel when you touch a doorknob after walking on carpet, just a million times bigger. Heating from the current makes the air glow (the flash) and expand violently (the thunder)." }
    ],

    magnetism: [
        { keywords: ['poles','why poles','north south','why two poles','two ends'],
          q: "Why do magnets have two poles?",
          a: "Because magnetic fields always come in loops — field lines exit one end and re-enter the other. There's no way to have a field line that starts and ends at the same point without two poles. Even if you break a bar magnet in half, each piece becomes a smaller magnet with its own two poles. You can't isolate a single north pole from a south pole — they're fundamentally paired. That's why a compass needle always has N and S ends." },

        { keywords: ['monopole','single pole','no monopole','why no monopole','magnetic monopole'],
          q: "Why don't magnetic monopoles exist?",
          a: "As far as we know, magnetic fields always form closed loops — every field line that exits the north pole must re-enter at a south pole somewhere. This means the total 'magnetic flux' through any closed surface is zero (div B = 0). Electric charges CAN be isolated (a single electron, a single proton), but magnetic 'charges' cannot. Physicists have searched for monopoles for over a century — some advanced theories predict they exist, but none have ever been found. This asymmetry between electricity and magnetism is one of the great mysteries of physics." },

        { keywords: ['outside','field lines','n to s','outside magnet','direction field'],
          q: "Why do magnetic field lines go north to south outside a magnet?",
          a: "That's the direction a compass needle's NORTH pole would point — since it's attracted to the earth's south pole (which is near the north geographic pole, confusingly). Inside the magnet, field lines go from south to north, completing the loop. So outside: N → S. Inside: S → N. The field always forms continuous closed loops. That's why a compass always points north — its N pole lines up with the field direction at that point." },

        { keywords: ['electromagnet','how does electromagnet','current magnet','why electromagnet'],
          q: "How does an electromagnet work?",
          a: "Current flowing through a wire creates a magnetic field around it (discovered by Oersted). Coil the wire around an iron core, and all those tiny fields add up into one strong magnetic field. The core amplifies it dramatically — iron atoms align with the field and contribute their own magnetism. Reverse the current: north and south poles flip. Turn off the current: the field disappears (mostly). This is why electromagnets power motors, loudspeakers, cranes, MRI machines, and maglev trains — you can turn them ON and OFF." },

        { keywords: ['qvB','f qvB','force charge magnetic','why force perpendicular'],
          q: "Why is the magnetic force F = qvB (and perpendicular to motion)?",
          a: "Because the magnetic force only acts on MOVING charges, and it always pushes SIDEWAYS — perpendicular to both the velocity and the field. That's just the way magnetic fields interact with moving charge (defined by the right-hand rule). Since the force is perpendicular to motion, it changes the direction but not the speed — so a moving charge bends into a circle, not a straight line. That's why charged particles spiral in magnetic fields (like aurora borealis, or particles in the LHC)." },

        { keywords: ['right hand rule','right-hand rule','flemings','which hand','direction force'],
          q: "What is the right-hand rule?",
          a: "A trick to find the direction of magnetic force on a moving charge. Point your RIGHT thumb in the direction of positive charge motion (velocity). Point your fingers in the direction of the magnetic field. Your PALM points in the direction of the force. Alternatively, for a current-carrying wire: point your thumb along the current, and your curled fingers show the field direction. It's a memory aid — everything's at 90° to everything else, and the right hand gives the right orientation. (If the charge is negative, reverse the answer.)" },

        { keywords: ['earth magnetic','earth field','why does earth','compass earth','magnetic field earth'],
          q: "Why does the Earth have a magnetic field?",
          a: "Because of its molten iron core. The core convects (hot iron rises, cool iron sinks) while the Earth rotates. This churning of a conducting fluid creates electric currents, which create magnetic fields (dynamo effect). It's not fully understood, but it's why we have a magnetic field at all. It protects us from solar wind — the magnetic field deflects charged particles from the sun, which is why auroras happen at the poles (where field lines dive into the atmosphere). Mars and Venus have no molten core, so no protective magnetic shield." },

        { keywords: ['heating demagnetize','heat magnet','why heat','demagnetize','magnet heat'],
          q: "Why does heating a magnet demagnetize it?",
          a: "Because heat disrupts the alignment of the magnetic domains. A permanent magnet works because billions of atoms have their magnetic moments aligned in the same direction. Heating makes atoms vibrate more chaotically — disrupting that alignment. Above a critical temperature (the Curie point, ~770°C for iron), the alignment collapses entirely and the material becomes non-magnetic. Cool it back down, and it might realign, but usually not perfectly. This is also why hammering a magnet repeatedly demagnetizes it — the impact scrambles the domains." }
    ],

    'electromagnetic-induction': [
        { keywords: ['generator','how does generator','electric from motion','power plant'],
          q: "How does an electric generator work?",
          a: "Turn a coil of wire in a magnetic field. The coil sees a CHANGING amount of magnetic flux through it as it rotates — increasing, then decreasing, then reversing. This changing flux INDUCES an EMF in the coil (Faraday's law). Connect the coil to a circuit, and current flows. That's a generator. Every power station — coal, hydro, wind, nuclear — is just spinning a generator. Wind turns blades that spin the coil; steam from coal/nuclear does the same; falling water in a dam does too. All of them convert rotary motion into electricity." },

        { keywords: ['magnetic flux','what is flux','flux','phi','BA'],
          q: "What is magnetic flux?",
          a: "The total magnetic field passing through a given area — literally 'how many field lines pierce the surface'. Φ = BA cos θ, where B is the field strength, A is the area, and θ is the angle between the field and the perpendicular to the surface. If the field is perpendicular to the surface, cos θ = 1, maximum flux. If the field is parallel (grazing the surface), cos θ = 0, no flux. Changing flux is what induces EMF — that's the core of induction. So to induce an EMF, you change B (field strength), A (area), or θ (rotate the coil)." },

        { keywords: ['lenz law','why minus','opposes','negative sign','lenz'],
          q: "Why does Lenz's law say induced current 'opposes' the change?",
          a: "Because energy must be conserved. If induced current ADDED to the change, you'd get runaway energy — free energy forever, which is impossible. Nature forces the induced current to OPPOSE the change that produced it. Push a magnet into a coil: induced current creates a field pushing the magnet back. That's why you feel resistance when you push a magnet through a coil. That's the minus sign in Faraday's law: ε = -N(dΦ/dt). The minus sign IS the physics — it's why generators need a mechanical input to keep spinning." },

        { keywords: ['transformer','how transformer','step up step down','voltage change'],
          q: "How does a transformer work?",
          a: "Two coils of wire wrapped around the same iron core. Alternating current in the primary coil creates a changing magnetic field in the core — which reaches the secondary coil, where it induces an EMF. Since both coils see the same flux change per turn, the voltage ratio equals the turns ratio: Vs/Vp = Ns/Np. More secondary turns → step-up (higher voltage). Fewer secondary turns → step-down (lower voltage). Power is conserved: VpIp ≈ VsIs. So step up voltage → step down current. That's why the national grid transmits at high voltage: less current, less energy lost to wire resistance." },

        { keywords: ['dc motor','commutator','split ring','ac vs dc','why commutator'],
          q: "Why does a DC motor need a commutator?",
          a: "Because the coil would stop turning after half a rotation without it. In a coil, once it aligns with the field, the force has no further turning effect. A commutator (split ring) reverses the current direction every half turn — so the force keeps pushing in the same rotational direction. Constant rotation. If you used slip rings (like an AC generator), the current would reverse alternately and the motor would be AC. Commutator = DC motor. Slip ring = AC generator. Same basic hardware, different connection." },

        { keywords: ['self inductance','inductor','inductance','what is inductor','henry'],
          q: "What is self-inductance?",
          a: "When current flows through a coil, it creates a magnetic field — the coil's own field. When that current CHANGES, the field changes, which induces an EMF in the same coil, opposing the change. That's self-inductance: the coil's tendency to fight changes in its own current. Measured in henries (H). Inductors act like electrical 'flywheels' — they resist quick changes in current, just as mass resists quick changes in velocity. They're used in filters, transformers, and switching circuits." },

        { keywords: ['ac dc','why ac','power grid','why alternating current','tesla edison'],
          q: "Why do we use AC in the power grid instead of DC?",
          a: "Because AC is easy to step up and down with transformers. Step up to thousands of volts for transmission → huge reduction in energy loss over long distances (P_loss = I²R, so smaller current = less loss). Then step down safely for homes. DC can't use transformers, so you can't cheaply change DC voltage. This was the 'War of the Currents' in the 1880s — Tesla (AC) beat Edison (DC) for exactly this reason. Modern technology uses high-voltage DC for some long-distance links, but AC still dominates." },

        { keywords: ['eddy current','eddy currents','what are','why losses','magnetic core'],
          q: "What are eddy currents?",
          a: "Circulating currents induced inside solid conductors when they experience changing magnetic fields. In a transformer's iron core, they swirl around and dissipate energy as heat — reducing efficiency. That's why cores are made of laminated sheets (thin layers separated by insulation) — the laminations break up the eddy paths, forcing the currents into thin loops instead of big ones. Same physics is used USEFULLY in induction cooktops (eddy currents heat the pan) and magnetic braking (eddy currents slow the wheel). It's Faraday's law creating unintended losses or intended heating." }
    ],

    // ═══════════════ MODERN PHYSICS ═══════════════

    'atomic-physics': [
        { keywords: ['quantized','energy levels','why quantized','why discrete','jump'],
          q: "Why are electron energies quantized?",
          a: "Because an electron in an atom is bound — it's trapped in a potential well created by the positive nucleus. Like a guitar string that can only vibrate at specific frequencies (harmonics), a trapped electron's wave can only 'fit' at specific wavelengths around the nucleus. Those allowed wavelengths correspond to specific energy levels. There's no in-between. So electrons can only sit at discrete energy 'floors', and can only jump between them by absorbing or emitting photons with exactly the right energy." },

        { keywords: ['emission spectrum','line spectrum','why lines','why bright lines','colors atom'],
          q: "Why do gases emit only specific colours (line spectra)?",
          a: "Because electrons can only transition between the discrete energy levels of that atom. Each transition has a specific energy difference, which emits a photon of a specific wavelength (E = hf). A hydrogen atom emits specific wavelengths of red, blue-green, blue-violet, etc. That's why every element has its own unique 'fingerprint' of spectral lines. Astronomers use this to determine what stars are made of — the spectrum IS the chemical signature. There's no continuous rainbow from a low-pressure gas — only sharp lines." },

        { keywords: ['photoelectric','photoelectric effect','what is','light eject electron','einstein nobel'],
          q: "What is the photoelectric effect?",
          a: "When light of high enough frequency hits a metal, electrons are ejected. Einstein explained it in 1905 (won him the Nobel Prize) using a revolutionary idea: light comes in packets called PHOTONS, each with energy E = hf. One photon ejects one electron — but only if the photon's energy is high enough to break the electron free (the work function). If you shine low-frequency light, no electrons come out — even if the light is super bright. That's weird in classical wave theory, but makes perfect sense if light is particles. This was the birth of quantum physics." },

        { keywords: ['work function','what is work function','why need minimum','phi'],
          q: "What is the work function?",
          a: "The minimum energy needed to knock an electron out of a metal surface. It's a property of the metal — caesium has a low work function (~2.1 eV, so visible light can eject electrons), platinum has a high one (~6.4 eV, needs ultraviolet). If a photon has energy less than the work function, nothing happens. If more, the electron gets ejected with kinetic energy = hf − φ. It's like a barrier that the photon must 'pay' to free the electron. Everything above that goes into the electron's motion." },

        { keywords: ['de broglie','matter wave','wave particle','wavelength particle','duality'],
          q: "What is the de Broglie wavelength?",
          a: "Every moving particle has an associated wavelength: λ = h/(mv). It's tiny for everyday objects (a thrown baseball has a wavelength ~10⁻³⁴ m — undetectable), but significant for electrons. This is wave-particle duality: matter is both wave AND particle, depending on what you test. The electron's wavelength explains why electrons diffract through crystals (Davisson-Germer experiment, 1927). It's also how electron microscopes work — using 'electron waves' to image things much smaller than visible light can." },

        { keywords: ['balmer','visible','why balmer visible','hydrogen lines','series'],
          q: "Why is the Balmer series visible but Lyman is UV?",
          a: "Because the Balmer series ends at n=2, and the energy differences are exactly in the visible range (~400-700 nm). The Lyman series ends at n=1 (the ground state), which requires much larger energy jumps — corresponding to UV wavelengths. Paschen series ends at n=3, corresponding to infrared. Hydrogen has many spectral series; only Balmer happens to fall in the visible range. This is why stellar spectra show mostly Balmer lines when we look through visible telescopes." },

        { keywords: ['uncertainty','heisenberg','why uncertainty','cannot know'],
          q: "What is the uncertainty principle really about?",
          a: "It's not about imperfect instruments — it's fundamental. To 'see' a tiny particle, you'd need to bounce a photon off it. But bouncing a photon off it GIVES the particle momentum (Compton effect). So the very act of measuring position disturbs momentum, and vice versa. Δx × Δp ≥ h/4π. This isn't a technical limitation — it's a property of the universe. That's why atoms are stable: an electron can't 'fall into' the nucleus because it would have to be in a state of infinitely precise position, which is forbidden. Uncertainty creates the structure of matter." },

        { keywords: ['ground state','excited','excited state','normal state','energy ground'],
          q: "What's the difference between ground state and excited state?",
          a: "Ground state = lowest possible energy — the electron sits at n=1. Excited state = any higher level (n=2, 3, ...). Electrons in excited states are unstable — they spontaneously fall back to the ground state, emitting a photon carrying the energy difference. Most atoms are in the ground state because excited states last only nanoseconds. This is why we see emission spectra: atoms in a flame or discharge get excited by collisions, then fall back and emit their characteristic colours." }
    ],

    radioactivity: [
        { keywords: ['what is radioactivity','really','what causes','why decay','unstable'],
          q: "What really causes radioactivity?",
          a: "Because some nuclei have too much energy — the proton/neutron balance is wrong. The strong nuclear force holds nuclei together, but if there are too many protons (repelling each other) or too many neutrons (destabilizing), the nucleus is unstable. It will spontaneously rearrange itself to reach a more stable configuration. Each rearrangement emits a particle (alpha, beta) or a photon (gamma). That's radioactivity — a nucleus shedding excess energy. It's not 'fuel burning' — the nucleus just becomes more stable over time." },

        { keywords: ['random','why random','cannot predict','when decay','statistical'],
          q: "Why is radioactive decay random?",
          a: "Because decay is quantum tunneling — the nucleus 'tunnels' through an energy barrier that should be impossible classically. It's probabilistic. We can't say when a SINGLE nucleus will decay — only that it will eventually. But across billions of atoms, the statistical behavior is extremely predictable (like actuarial tables for insurance — unpredictable individuals, predictable populations). This randomness is fundamental to quantum mechanics, not just imprecise measurement. Even with perfect measurement, you can't predict when a single atom will decay." },

        { keywords: ['half life','half-life','why half life','constant','why same rate'],
          q: "Why is half-life constant?",
          a: "Because decay doesn't depend on time — a nucleus with a 5-year half-life has exactly the same probability of decaying on day 1 as on day 100. It doesn't 'get old' or 'wear out'. Every moment, each nucleus has a fixed probability of decaying. So the number of decays per second is always proportional to the number currently present. This gives exponential decay. After one half-life: half remain. After two: quarter. After three: eighth. The half-life doesn't change with time, temperature, or chemical state — this stability is what makes radioactive dating reliable." },

        { keywords: ['alpha penetration','why alpha penetrates','why alpha low','penetration alpha'],
          q: "Why does alpha have low penetration but high ionisation?",
          a: "Because alpha particles are heavy (a helium nucleus: 2 protons, 2 neutrons) and carry +2 charge. Being heavy, they don't bounce easily off atoms — but every collision, they rip electrons off (ionize heavily). Since they lose energy with every ionization, they stop quickly — even a sheet of paper stops an alpha particle. Their short range means they deposit all that energy in a tiny volume — causing concentrated damage. That's why alpha emitters are dangerous if INHALED or swallowed (very close to sensitive tissue) but safe externally (skin blocks them)." },

        { keywords: ['beta deflect','alpha deflect','why deflect different','magnetic field alpha beta'],
          q: "Why does beta deflect more than alpha in a magnetic field?",
          a: "Because beta particles (electrons) are ~7000× lighter than alpha particles. They have smaller momentum, so the same magnetic force bends them more sharply (radius of curvature r = mv/(qB) is smaller for smaller m). Also, alpha has +2e charge but much bigger mass — so its radius is huge. Beta deflects in the OPPOSITE direction because it's negatively charged. Gamma rays don't deflect at all — they're uncharged. This is the classic three-particle demonstration: alpha curves one way, beta curves the opposite way (much more), gamma goes straight." },

        { keywords: ['binding energy','mass defect','why energy released','e mc2'],
          q: "Why is energy released in nuclear reactions?",
          a: "Because the products weigh LESS than the reactants — the missing mass (mass defect) has become energy via E = mc². In fusion (small nuclei joining) or fission (large nuclei splitting), the product nuclei have GREATER binding energy per nucleon than the reactants. That extra binding energy corresponds to less total mass. The tiny mass difference × c² gives enormous energy. 1 gram of mass = 9×10¹³ joules — enough to power a city. That's why nuclear reactions release millions of times more energy than chemical reactions: chemical changes rearrange electrons (weak bond energy), while nuclear changes rearrange protons and neutrons (a million times stronger)." },

        { keywords: ['chain reaction','fission chain','how chain reaction','critical mass'],
          q: "How does a nuclear chain reaction work?",
          a: "Each fission of U-235 releases 2-3 neutrons. If those neutrons hit other U-235 nuclei, they cause more fissions, releasing more neutrons, and so on. That's a chain reaction. If it runs uncontrolled: bomb. If controlled (with control rods absorbing some neutrons): reactor — steady heat production. Critical mass is the minimum mass of fissile material to sustain a chain reaction — below that, neutrons escape the surface faster than they cause fissions. That's why nuclear fuel must be enriched and concentrated — natural uranium can't sustain a chain reaction." },

        { keywords: ['carbon dating','carbon-14','dating','why can t date','half life dating'],
          q: "How does carbon-14 dating work, and why can't it date anything?",
          a: "Living things constantly absorb carbon-14 (a radioactive isotope) from the atmosphere through food and breathing. When they die, they stop absorbing it, and the C-14 starts decaying with a 5730-year half-life. So the C-14 amount tells you when something died. But after ~50,000 years (about 9 half-lives), too little C-14 is left to measure — that's the limit. For older things, we use other isotopes: potassium-40 (1.25 billion years), uranium-238 (4.5 billion years). Each isotope works for a specific date range — pick the one whose half-life matches the age you're trying to measure." }
    ]
};