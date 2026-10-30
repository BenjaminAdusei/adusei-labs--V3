// ─────────────────────────────────────────────────────────────
// ADUSEI LABS — GLOBAL JAVASCRIPT
// Navigation, PWA Registration, Shared Utilities
// ─────────────────────────────────────────────────────────────

// ─── LAB DATA ───
const LABS = [
    // ─── Mechanics ───
    { id: 'projectile', name: 'Projectile Motion', section: 'mechanics', icon: '🎯', path: '/labs/mechanics/projectile.html' },
    { id: 'inclined-plane', name: 'Inclined Plane', section: 'mechanics', icon: '📐', path: '/labs/mechanics/inclined-plane.html' },
    { id: 'shm', name: 'Simple Harmonic Motion', section: 'mechanics', icon: '🔄', path: '/labs/mechanics/shm.html' },
    { id: 'elasticity', name: 'Elasticity & Hooke\'s Law', section: 'mechanics', icon: '🔬', path: '/labs/mechanics/elasticity.html' },
    { id: 'properties-matter', name: 'Properties of Matter', section: 'mechanics', icon: '🌊', path: '/labs/mechanics/properties-of-matter.html' },

    // ─── Thermal Physics ───
    { id: 'thermodynamics', name: 'Thermodynamics', section: 'thermal', icon: '🔥', path: '/labs/thermal/thermodynamics.html' },
    { id: 'gas-laws', name: 'Gas Laws', section: 'thermal', icon: '🧪', path: '/labs/thermal/gas-laws.html' },
    { id: 'thermal-expansion', name: 'Thermal Expansion', section: 'thermal', icon: '📏', path: '/labs/thermal/thermal-expansion.html' },

    // ─── Waves ───
    { id: 'wave-simulator', name: 'Wave Simulator', section: 'waves', icon: '🌊', path: '/labs/waves/wave-simulator.html' },
    { id: 'sound-waves', name: 'Sound Waves', section: 'waves', icon: '🔊', path: '/labs/waves/sound-waves.html' },
    { id: 'wave-phenomena', name: 'Wave Phenomena', section: 'waves', icon: '🌈', path: '/labs/waves/wave-phenomena.html' },
    { id: 'optics', name: 'Optics', section: 'waves', icon: '🔍', path: '/labs/waves/optics.html' },

    // ─── Electricity & Magnetism ───
    { id: 'ohms-law', name: 'Ohm\'s Law', section: 'electricity', icon: '⚡', path: '/labs/electricity/ohms-law.html' },
    { id: 'circuits', name: 'Series & Parallel Circuits', section: 'electricity', icon: '🔌', path: '/labs/electricity/circuits.html' },
    { id: 'electrostatics', name: 'Electrostatics', section: 'electricity', icon: '⚡', path: '/labs/electricity/electrostatics.html' },
    { id: 'magnetism', name: 'Magnetism', section: 'electricity', icon: '🧲', path: '/labs/electricity/magnetism.html' },
    { id: 'electromagnetic-induction', name: 'Electromagnetic Induction', section: 'electricity', icon: '⚡', path: '/labs/electricity/electromagnetic-induction.html' },

    // ─── Modern Physics ───
    { id: 'atomic-physics', name: 'Atomic Physics', section: 'modern', icon: '⚛️', path: '/labs/modern/atomic-physics.html' },
    { id: 'radioactivity', name: 'Radioactivity & Nuclear', section: 'modern', icon: '☢️', path: '/labs/modern/radioactivity.html' }
];
const SECTION_NAMES = {
    mechanics: '🔧 Mechanics',
    thermal: '🌡️ Thermal Physics',
    waves: '🌊 Waves',
    electricity: '⚡ Electricity & Magnetism',
    modern: '⚛️ Modern Physics'
};

// ─── GET CURRENT LAB ───
function getCurrentLab() {
    const path = window.location.pathname;
    for (const lab of LABS) {
        if (path.includes(lab.path) || path.includes(lab.id)) {
            return lab;
        }
    }
    return null;
}

// ─── BUILD NAVIGATION ───
function buildNavigation() {
    const header = document.getElementById('global-header');
    if (!header) return;

    const current = getCurrentLab();

    // Lab switcher options
    let optionsHTML = LABS.map(lab =>
        `<option value="${lab.path}" ${current && current.id === lab.id ? 'selected' : ''}>
            ${lab.icon} ${lab.name}
        </option>`
    ).join('');

    header.innerHTML = `
        <nav class="global-nav">
            <div class="nav-inner">
                <a href="/" class="logo" title="Home">
                    🧪 <span>Adusei</span> Labs
                </a>
                <div class="nav-links">
                    <a href="/" class="${!current ? 'active' : ''}">🏠 Dashboard</a>
                    <div class="lab-switcher">
                        <select onchange="navigateToLab(this.value)">
                            <option value="">📋 Switch Lab...</option>
                            ${optionsHTML}
                        </select>
                    </div>
                    <a href="/teacher/" class="${window.location.pathname.includes('/teacher/') ? 'active' : ''}">👨‍🏫 Teacher</a>
                    <a href="/notebook/" class="${window.location.pathname.includes('/notebook/') ? 'active' : ''}">📓 Notebook</a>
                </div>
            </div>
        </nav>
    `;

    // Build footer
    const footer = document.getElementById('global-footer');
    if (footer) {
        footer.innerHTML = `
            <div class="brand">🧪 <span>Adusei Labs</span> | Powered by bksolutions</div>
            <div class="copy">© 2026 Adusei Labs — Complete WAEC Physics Lab Platform</div>
        `;
    }
}

// ─── NAVIGATE TO LAB ───
function navigateToLab(path) {
    if (path) window.location.href = path;
}

// ─── PWA REGISTRATION ───
function registerPWA() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('✅ Service Worker registered'))
            .catch(err => console.log('❌ SW registration failed:', err));
    }

    // Detect install prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        // Show install button if you have one
        const installBtn = document.getElementById('installBtn');
        if (installBtn) {
            installBtn.style.display = 'inline-block';
            installBtn.addEventListener('click', () => {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
            });
        }
    });
}

// ─── STORAGE HELPERS ───
function getStorage(key, defaultVal = null) {
    try {
        const val = localStorage.getItem('adusei_' + key);
        return val ? JSON.parse(val) : defaultVal;
    } catch { return defaultVal; }
}

function setStorage(key, value) {
    localStorage.setItem('adusei_' + key, JSON.stringify(value));
}

// ─── QUIZ SCORE TRACKING ───
function saveQuizScore(labId, score) {
    const scores = getStorage('quizScores', {});
    if (!scores[labId]) scores[labId] = [];
    scores[labId].push(score);
    setStorage('quizScores', scores);
}

function getLabStats(labId) {
    const scores = getStorage('quizScores', {});
    const labScores = scores[labId] || [];
    const avg = labScores.length > 0 ? labScores.reduce((a,b) => a + b, 0) / labScores.length : 0;
    return { attempts: labScores.length, average: Math.round(avg) };
}

function getAllStats() {
    const stats = {};
    for (const lab of LABS) {
        stats[lab.id] = getLabStats(lab.id);
    }
    return stats;
}

// ─── LAB NOTEBOOK ───
function saveNote(labId, note) {
    const notes = getStorage('notebook', {});
    notes[labId] = {
        content: note,
        updated: new Date().toISOString()
    };
    setStorage('notebook', notes);
}

function getNote(labId) {
    const notes = getStorage('notebook', {});
    return notes[labId] || null;
}
// ─────────────────────────────────────────────────────────────
// ─── AI RESPONSE ENGINE (Phase 3 + 3.5 + 4 — consolidated) ───
// ─────────────────────────────────────────────────────────────

// ══════════ PHASE 3 HELPERS ══════════

function _normalizeQuery(q) {
    return String(q || '')
        .toLowerCase()
        .replace(/[?!.,;:'"()[\]{}]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function _expandContractions(q) {
    return q
        .replace(/\bwhats\b/g, 'what is')
        .replace(/\bwheres\b/g, 'where is')
        .replace(/\bthats\b/g, 'that is')
        .replace(/\bdont\b/g, 'do not')
        .replace(/\bcant\b/g, 'can not')
        .replace(/\bwont\b/g, 'will not')
        .replace(/\bim\b/g, 'i am')
        .replace(/\bdidnt\b/g, 'did not')
        .replace(/\bdoesnt\b/g, 'does not')
        .replace(/\bisnt\b/g, 'is not')
        .replace(/\barent\b/g, 'are not')
        .replace(/\bhavent\b/g, 'have not')
        .replace(/\buh\b/g, '')
        .replace(/\bum\b/g, '');
}

function _levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const m = [];
    for (let i = 0; i <= a.length; i++) m[i] = [i];
    for (let j = 0; j <= b.length; j++) m[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + cost);
        }
    }
    return m[a.length][b.length];
}

const _LAB_KEYWORDS_V2 = {
    'projectile': ['projectile', 'range', 'time of flight', 'maximum height', 'trajectory', 'launch', 'angle of projection'],
    'inclined-plane': ['inclined plane', 'incline', 'slope', 'ramp', 'plank', 'friction on incline'],
    'shm': ['shm', 'simple harmonic', 'pendulum', 'spring', 'oscillation', 'period', 'frequency'],
    'elasticity': ['hooke', 'hookes', 'spring constant', 'elastic', 'extension', 'stress', 'strain', 'young modulus'],
    'properties-matter': ['density', 'upthrust', 'archimedes', 'viscosity', 'surface tension', 'pressure', 'fluids', 'floating'],
    'thermodynamics': ['thermodynamics', 'heat', 'specific heat', 'latent heat', 'thermal equilibrium', 'conduction', 'convection', 'radiation', 'boiling', 'melting'],
    'gas-laws': ['gas law', 'boyle', 'charles', 'pressure law', 'ideal gas', 'pv nrt', 'gas', 'mole'],
    'thermal-expansion': ['thermal expansion', 'expansion', 'coefficient', 'bimetallic', 'linear expansivity', 'volume expansivity'],
    'wave-simulator': ['wave', 'frequency', 'wavelength', 'amplitude', 'transverse', 'longitudinal', 'period'],
    'sound-waves': ['sound', 'echo', 'doppler', 'pitch', 'loudness', 'speed of sound'],
    'wave-phenomena': ['interference', 'diffraction', 'polarization', 'polarisation', 'standing wave', 'malus', 'beats'],
    'optics': ['optics', 'lens', 'mirror', 'reflection', 'refraction', 'snell', 'critical angle', 'total internal', 'focal length'],
    'ohms-law': ['ohm', 'ohms', 'voltage', 'current', 'resistance', 'power', 'v ir'],
    'circuits': ['series', 'parallel', 'circuit', 'ammeter', 'voltmeter', 'kirchhoff'],
    'electrostatics': ['electrostatics', 'coulomb', 'charge', 'electric field', 'potential', 'capacitor', 'capacitance', 'coulomb law'],
    'magnetism': ['magnetic', 'magnet', 'field', 'electromagnet', 'right hand rule', 'flux', 'magnetic field'],
    'electromagnetic-induction': ['induction', 'faraday', 'lenz', 'generator', 'transformer', 'induced emf', 'emf'],
    'atomic-physics': ['atomic', 'bohr', 'energy level', 'spectra', 'lyman', 'balmer', 'photoelectric', 'photon', 'work function'],
    'radioactivity': ['radioactivity', 'half life', 'alpha', 'beta', 'gamma', 'decay', 'nuclear', 'fission', 'fusion']
};

function _findTargetLab(normalizedQuery, currentLab) {
    for (const [labId, keywords] of Object.entries(_LAB_KEYWORDS_V2)) {
        for (const kw of keywords) {
            if (normalizedQuery.includes(kw)) return { lab: labId, confidence: 1 };
        }
    }
    const words = normalizedQuery.split(' ').filter(w => w.length >= 3);
    let best = null;
    for (const [labId, keywords] of Object.entries(_LAB_KEYWORDS_V2)) {
        for (const kw of keywords) {
            if (kw.length < 3) continue;
            for (const word of words) {
                const dist = _levenshtein(word, kw);
                const tol = Math.max(1, Math.floor(kw.length / 3));
                if (dist <= tol) {
                    const conf = 1 - dist / kw.length;
                    if (!best || conf > best.confidence) best = { lab: labId, confidence: conf };
                }
            }
        }
    }
    if (best && best.confidence >= 0.5) return best;
    return currentLab ? { lab: currentLab, confidence: 0.5 } : null;
}

function _detectIntent(q) {
    if (/^(hi|hello|hey|yo|sup|good morning|good afternoon|good evening)\b/.test(q)) return 'greeting';
    if (/(help|what can you do|commands|how do i use|what do you do)/.test(q)) return 'help';
    if (/(waec|past question|exam question|jamb)/.test(q)) return 'waec';
    if (/(formula|equation|expression|derive)/.test(q)) return 'formula';
    if (/(tip|advice|common mistake|trick|hint)/.test(q)) return 'tip';
    if (/(example|show me|demonstrate|illustrate)/.test(q)) return 'example';
    if (/(calculate|solve|find|what is the value|compute|how much|answer this)/.test(q)) return 'problem';
    if (/(do not understand|confused|not clear|do not get|struggling with|stuck on|hard time|difficult)/.test(q)) return 'confusion';
    if (/(what is|define|meaning of|definition of)/.test(q)) return 'definition';
    if (/(explain|how does|how do|why does|why do|tell me about)/.test(q)) return 'explanation';
    return 'general';
}

// ══════════ PHASE 3.5 HELPER ══════════

function _matchExplanation(bank, normalizedQuery) {
    if (!bank || bank.length === 0) return null;
    let best = null;
    for (const item of bank) {
        let score = 0;
        for (const kw of (item.keywords || [])) {
            const kl = kw.toLowerCase();
            if (normalizedQuery.includes(kl)) {
                score += 5;
            } else if (kl.length >= 4) {
                for (const w of normalizedQuery.split(/\s+/)) {
                    if (w.length >= 3 && _levenshtein(w, kl) <= 1) {
                        score += 2;
                        break;
                    }
                }
            }
        }
        if (!best || score > best.score) best = { explanation: item, score };
    }
    return best;
}

// ══════════ PHASE 4 WRAPPER ══════════

function getAIResponse(query, currentLab = null) {
    const lang = (typeof detectLanguage === 'function') ? detectLanguage(query) : 'english';
    const response = _getAIResponseEnglish(query, currentLab);
    if (lang === 'english') return response;
    return _decorateResponseForLanguage(response, lang);
}

function _decorateResponseForLanguage(response, lang) {
    const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) ? TRANSLATIONS[lang] : null;
    if (!t) return response;

    if (response.startsWith('👋')) {
        return t.greeting_title + '\n\n' +
            '• 📚 19 WAEC Physics Labs\n' +
            '• 📝 ' + t.try_asking + ' "start quiz"\n' +
            '• 📊 "dashboard"\n' +
            '• 📄 "report"\n\n' +
            t.try_asking + ' anything about physics.';
    }
    if (response.startsWith('🤖')) {
        return '🤖 **' + t.help_intro + '**\n\n' +
            '• "What is Ohm\'s law?" — get concepts\n' +
            '• "Show me WAEC questions on SHM" — exam questions\n' +
            '• "Formula for waves" — key equations\n' +
            '• "Exam tips for projectile motion" — common mistakes\n' +
            '• "I don\'t understand electrostatics" — simplified breakdown';
    }
    if (response.startsWith('🙌')) {
        return '🙌 ' + t.no_worries + '\n\n' +
            response.replace(/^🙌[^\n]*\n+/, '').trim();
    }
    return response
        .replace(/^\*\*📚 (.+?)\*\*\n/, '**📚 $1**\n\n_' + t.content_lang_note + '_\n\n')
        .replace(/\*\*Core concepts:\*\*/g, '**' + t.core_concepts + ':**')
        .replace(/\*\*Key formulas:\*\*/g, '**' + t.key_formulas + ':**')
        .replace(/\*\*Exam tips for ([^*]+):\*\*/g, '**' + t.exam_tips + ' ($1):**')
        .replace(/\*\*Formulas for ([^*]+):\*\*/g, '**' + t.formulas_for + ' $1:**')
        .replace(/\*\*WAEC questions on ([^*]+):\*\*/g, '**' + t.waec_questions_on + ' $1:**');
}

// ══════════ PHASE 3 CORE LOGIC ══════════

function _getAIResponseEnglish(query, currentLab = null) {
    if (typeof AI_CONTENT === 'undefined') {
        return "⚠️ AI content is still loading. Please try again in a moment.";
    }
    if (!query || !query.trim()) {
        return "🤔 I didn't catch that. Ask me about a lab, formula, or WAEC question.";
    }

    const normalized = _expandContractions(_normalizeQuery(query));
    const intent = _detectIntent(normalized);
    const target = _findTargetLab(normalized, currentLab);

    if (intent === 'greeting') {
        return "👋 Hello! I'm your Physics AI Tutor.\n\nI can help with:\n• 🔧 Mechanics\n• 🌡️ Thermal Physics\n• 🌊 Waves\n• ⚡ Electricity & Magnetism\n• ⚛️ Modern Physics\n\nOr type \"help\" to see what I can do.";
    }

    if (intent === 'help') {
        return "🤖 **Here's what I can do:**\n\n" +
            "• \"What is Ohm's law?\" — get concepts\n" +
            "• \"Show me WAEC questions on SHM\" — see exam questions\n" +
            "• \"Formula for waves\" — key equations\n" +
            "• \"Exam tips for projectile motion\" — common mistakes\n" +
            "• \"I don't understand electrostatics\" — simplified breakdown\n\n" +
            "Or open any lab from the grid above.";
    }

    if (!target) {
        const results = typeof searchAIContent === 'function' ? searchAIContent(normalized) : [];
        if (results.length > 0) {
            let r = `🔍 **Found ${results.length} related topic${results.length === 1 ? '' : 's'}:**\n\n`;
            for (const x of results.slice(0, 3)) {
                r += `**${x.content.name}**\n${x.content.description.slice(0, 100)}...\n\n`;
            }
            return r + '💡 Ask me about any of these.';
        }
        return "🤔 I'm not sure what you're asking about.\n\nTry:\n" +
            "• \"What is momentum?\"\n" +
            "• \"Explain Ohm's law\"\n" +
            "• \"WAEC questions on waves\"\n" +
            "• \"Formula for gas laws\"\n" +
            "• \"I don't understand SHM\"\n\n" +
            "Or type \"help\" to see everything.";
    }

    const content = typeof getLabContent === 'function' ? getLabContent(target.lab) : null;
    if (!content) {
        return `I matched **${target.lab}** but couldn't load details. Try again or open the lab from the grid.`;
    }
    const labName = content.name || target.lab;
    const desc = content.description || `Explore ${labName} in the interactive lab.`;
    const concepts = content.keyConcepts || [];
    const formulas = content.formulas || [];
    const tips = content.examTips || [];
    const waecQs = content.waecQuestions || [];

    // ── Phase 3.5: explanation bank match ──
    const _skipExpl = ['formula', 'waec', 'tip', 'help', 'greeting'].includes(intent);
    if (!_skipExpl && typeof AI_EXPLANATIONS !== 'undefined' && AI_EXPLANATIONS[target.lab]) {
        const m = _matchExplanation(AI_EXPLANATIONS[target.lab], normalized);
        if (m && m.score >= 4) {
            return `💡 **${m.explanation.q}**\n\n${m.explanation.a}`;
        }
    }

    if (intent === 'confusion') {
        return `🙌 No worries — ${labName} trips up a lot of students.\n\n` +
            `**Simplest breakdown:**\n${desc}\n\n` +
            `**Start with these core ideas:**\n` + concepts.slice(0, 3).map(c => `• ${c}`).join('\n') +
            `\n\n💡 Open the **${labName}** lab to see it in action, or ask "formula for ${labName}".`;
    }

    if (intent === 'problem') {
        return `🧮 **${labName} — formulas to use:**\n\n` + formulas.map(f => `• ${f}`).join('\n') +
            `\n\n**Tip:** Write down what you know, what you need to find, then pick the formula that connects them.`;
    }

    if (intent === 'formula') {
        return `📐 **Formulas for ${labName}:**\n\n` + formulas.map(f => `• ${f}`).join('\n');
    }

    if (intent === 'waec') {
        const liveBank = (typeof LAB_QUESTIONS !== 'undefined' && LAB_QUESTIONS[target.lab]) || null;
        const source = liveBank || waecQs;
        if (!source || source.length === 0) {
            return `📚 WAEC questions for **${labName}** are being added. Try the quiz in the lab itself, or ask "formula for ${labName}".`;
        }
        let r = `📚 **WAEC questions on ${labName}:**\n\n`;
        for (let i = 0; i < Math.min(3, source.length); i++) {
            const q = source[i];
            const qText = q.q || q.question;
            const qOpts = q.o || q.options;
            const qAns = q.a || q.answer;
            const qSol = q.e || q.solution;
            r += `**${i + 1}.** ${qText}\n`;
            if (qOpts) {
                r += `A) ${qOpts[0]}  B) ${qOpts[1]}  C) ${qOpts[2]}  D) ${qOpts[3]}\n`;
                r += `✅ **Answer:** ${qAns}\n`;
                if (qSol) r += `💡 **Why:** ${qSol}\n`;
            }
            r += '\n';
        }
        return r + `💡 Ask again for more questions, or open the **${labName}** lab to take the quiz.`;
    }

    if (intent === 'tip') {
        return `💡 **Exam tips for ${labName}:**\n\n` + tips.map(t => `• ${t}`).join('\n');
    }

    if (intent === 'example') {
        return `📖 **${labName} — context:**\n\n${desc}\n\n` +
            `**Focus on:**\n` + concepts.slice(0, 2).map(c => `• ${c}`).join('\n') +
            `\n\n💡 Open **${labName}** from the lab grid for worked examples.`;
    }

    if (intent === 'definition') {
        return `📚 **${labName} — definition:**\n\n${desc}\n\n` +
            `**Key concepts:**\n` + concepts.map(c => `• ${c}`).join('\n') +
            `\n\n💡 Ask "formula for ${labName}" or "WAEC questions on ${labName}".`;
    }

    let r = `**📚 ${labName}**\n\n${desc}\n\n`;
    r += `**Core concepts:**\n` + concepts.slice(0, 3).map(c => `• ${c}`).join('\n');
    r += `\n\n**Key formulas:**\n` + formulas.slice(0, 3).map(f => `• ${f}`).join('\n');

    if (target.confidence < 0.75) {
        r += `\n\n_💡 I matched "${labName}" — if you meant something else, ask more specifically._`;
    } else {
        r += `\n\n**Try asking:**\n• "WAEC questions on ${labName}"\n• "Exam tips for ${labName}"\n• "Explain ${labName} concepts"`;
    }

    return r;
}

// ─── SYNONYMS FOR getAIResponse ───
function processAIQuery(query) {
    // This is an alias for compatibility with existing code
    return getAIResponse(query);
}

// ─── WRAPPER FOR sendAIMessage ───
// This function should be called from your chat interface
function generateAIResponse(userMessage, currentLabId = null) {
    // Check if AI content is loaded
    if (typeof AI_CONTENT === 'undefined') {
        return "⚠️ AI content is loading. Please wait a moment and try again.";
    }
    return getAIResponse(userMessage, currentLabId);
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', function() {
    buildNavigation();
    registerPWA();

    // Check if AI content is loaded
    if (typeof AI_CONTENT === 'undefined') {
        console.log('⏳ AI Content not yet loaded...');
    } else {
        console.log('✅ AI Content loaded successfully!');
    }
});