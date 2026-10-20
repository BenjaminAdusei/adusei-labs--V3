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
// ─── AI RESPONSE ENGINE ─────────────────────────────────────
// ─────────────────────────────────────────────────────────────

function getAIResponse(query, currentLab = null) {
    const q = query.toLowerCase();

    // ── Check if AI content is loaded ──
    if (typeof AI_CONTENT === 'undefined') {
        return "⚠️ AI content is still loading. Please try again in a moment.";
    }

    // ── Lab keywords mapping ──
    const labKeywords = {
        'projectile': ['projectile', 'range', 'time of flight', 'maximum height'],
        'inclined-plane': ['inclined plane', 'incline', 'slope', 'ramp'],
        'shm': ['shm', 'simple harmonic', 'pendulum', 'spring', 'oscillation'],
        'elasticity': ['hooke', 'spring constant', 'elastic', 'extension', 'stress', 'strain'],
        'properties-matter': ['density', 'upthrust', 'archimedes', 'viscosity', 'surface tension', 'pressure in fluid'],
        'thermodynamics': ['thermodynamics', 'heat', 'specific heat', 'latent heat', 'thermal equilibrium'],
        'gas-laws': ['gas law', 'boyle', 'charles', 'pressure law', 'ideal gas', 'pv=nrt'],
        'thermal-expansion': ['thermal expansion', 'expansion', 'coefficient', 'bimetallic'],
        'wave-simulator': ['wave', 'frequency', 'wavelength', 'amplitude', 'transverse', 'longitudinal'],
        'sound-waves': ['sound', 'echo', 'doppler', 'pitch', 'loudness'],
        'wave-phenomena': ['interference', 'diffraction', 'polarization', 'standing wave', 'malus'],
        'optics': ['optics', 'lens', 'mirror', 'reflection', 'refraction', 'snell', 'critical angle'],
        'ohms-law': ['ohm', 'voltage', 'current', 'resistance', 'power', 'v=ir'],
        'circuits': ['series', 'parallel', 'circuit', 'ammeter', 'voltmeter'],
        'electrostatics': ['electrostatics', 'coulomb', 'charge', 'electric field', 'potential'],
        'magnetism': ['magnetic', 'magnet', 'field', 'electromagnet', 'right hand rule'],
        'electromagnetic-induction': ['induction', 'faraday', 'lenz', 'generator', 'transformer'],
        'atomic-physics': ['atomic', 'bohr', 'energy level', 'spectra', 'lyman', 'balmer'],
        'radioactivity': ['radioactivity', 'half-life', 'alpha', 'beta', 'gamma', 'decay']
    };

    // ── Find which lab the query is about ──
    let targetLab = currentLab;
    for (const [labId, keywords] of Object.entries(labKeywords)) {
        for (const keyword of keywords) {
            if (q.includes(keyword)) {
                targetLab = labId;
                break;
            }
        }
        if (targetLab !== currentLab) break;
    }

    // ── Get content for the lab ──
    const content = getLabContent(targetLab);
    if (content) {
        const name = content.name;
        const desc = content.description;

        // ── WAEC Questions ──
        if (q.includes('waec') || q.includes('past question') || q.includes('exam question')) {
            const questions = content.waecQuestions || [];
            if (questions.length > 0) {
                let response = `📚 **WAEC Past Questions on ${name}**\n\n`;
                for (let i = 0; i < Math.min(3, questions.length); i++) {
                    const qItem = questions[i];
                    const typeLabel = qItem.type === 'objective' ? '📝 Objective' : '📝 Theory';
                    response += `**${i+1}. ${typeLabel}**\n`;
                    response += `${qItem.question}\n`;
                    if (qItem.options) {
                        response += `A) ${qItem.options[0]}  B) ${qItem.options[1]}  C) ${qItem.options[2]}  D) ${qItem.options[3]}\n`;
                        response += `✅ **Answer:** ${qItem.answer}\n`;
                    }
                    response += `\n`;
                }
                response += `\n💡 Want more? Try "More WAEC questions on ${name}"`;
                return response;
            }
        }

        // ── Formulas ──
        if (q.includes('formula') || q.includes('equation')) {
            let response = `📐 **Key Formulas for ${name}**\n\n`;
            for (const formula of content.formulas || []) {
                response += `• ${formula}\n`;
            }
            return response;
        }

        // ── Exam Tips ──
        if (q.includes('tip') || q.includes('advice') || q.includes('common mistake')) {
            let response = `💡 **Exam Tips for ${name}**\n\n`;
            for (const tip of content.examTips || []) {
                response += `• ${tip}\n`;
            }
            return response;
        }

        // ── Concepts ──
        if (q.includes('concept') || q.includes('explain') || q.includes('what is') || q.includes('define') || q.includes('how')) {
            let response = `🧠 **${name} — Key Concepts**\n\n`;
            response += `📖 ${desc}\n\n`;
            for (const concept of content.keyConcepts || []) {
                response += `• ${concept}\n`;
            }
            return response;
        }

        // ── Default: Overview ──
        let response = `**📚 ${name}**\n\n`;
        response += `📖 ${desc}\n\n`;
        response += `**Key Formulas:**\n`;
        for (const formula of (content.formulas || []).slice(0, 4)) {
            response += `• ${formula}\n`;
        }
        response += `\n💡 Try asking:\n• "Show me WAEC questions on ${name}"\n• "Give me formulas for ${name}"\n• "Explain ${name} concepts"`;
        return response;
    }

    // ── Search across all labs ──
    const results = searchAIContent(q);
    if (results.length > 0) {
        let response = `🔍 **Found ${results.length} relevant topics:**\n\n`;
        for (const result of results.slice(0, 3)) {
            response += `**${result.content.name}**\n`;
            response += `📖 ${result.content.description.slice(0, 80)}...\n\n`;
        }
        response += `💡 Try asking about a specific lab, e.g., "Explain projectile motion" or "Show me WAEC questions on waves"`;
        return response;
    }

    // ── Help response ──
    return `🤔 I couldn't find specific information on that topic. I have detailed content on all 19 WAEC Physics labs.\n\n` +
        `**Try these examples:**\n` +
        `• "Explain projectile motion"\n` +
        `• "Show me WAEC questions on waves"\n` +
        `• "Give me formulas for thermodynamics"\n` +
        `• "What is half-life?"\n` +
        `• "Exam tips for circuits"`;
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