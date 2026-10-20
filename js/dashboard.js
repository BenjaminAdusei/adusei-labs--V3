// ─────────────────────────────────────────────────────────────
// ADUSEI LABS — DASHBOARD JAVASCRIPT
// Renders labs, handles search & filter, updates stats
// ─────────────────────────────────────────────────────────────

// ─── RENDER LABS ───
function renderLabs(filter = 'all', search = '') {
    const container = document.getElementById('labsContainer');
    if (!container) return;

    const stats = getAllStats();

    // ── Filter labs ──
    let filtered = LABS;
    if (filter !== 'all') {
        filtered = filtered.filter(lab => lab.section === filter);
    }
    if (search.trim()) {
        const q = search.toLowerCase().trim();
        filtered = filtered.filter(lab =>
            lab.name.toLowerCase().includes(q) ||
            lab.section.toLowerCase().includes(q)
        );
    }

    // ── Group by section ──
    const grouped = {};
    for (const lab of filtered) {
        if (!grouped[lab.section]) grouped[lab.section] = [];
        grouped[lab.section].push(lab);
    }

    // ── No results ──
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="glass" style="text-align:center;padding:60px 20px;">
                <div style="font-size:4rem;margin-bottom:16px;">🔍</div>
                <h3 style="color:var(--text-muted);">No labs found</h3>
                <p style="color:var(--text-dim);">Try adjusting your search or filter</p>
            </div>
        `;
        return;
    }

    // ── Build HTML ──
    let html = '';
    for (const [section, labs] of Object.entries(grouped)) {
        const sectionName = SECTION_NAMES[section] || section;
        const completed = labs.filter(l => (stats[l.id]?.attempts || 0) > 0).length;

        html += `
            <div class="section-title">
                ${sectionName}
                <span class="count">${labs.length} labs</span>
                ${completed > 0 ? `<span class="count" style="background:#10b981;">${completed}/${labs.length} done</span>` : ''}
            </div>
            <div class="lab-grid">
        `;

        for (const lab of labs) {
            const labStats = stats[lab.id] || { attempts: 0, average: 0 };
            const completedText = labStats.attempts > 0 ? `${labStats.attempts} attempts · ${labStats.average}%` : 'Not started';

            html += `
                <a href="${lab.path}" class="lab-card">
                    <span class="badge">${lab.section}</span>
                    <div class="icon">${lab.icon}</div>
                    <div class="name">${lab.name}</div>
                    <div class="section-label">${SECTION_NAMES[lab.section]}</div>
                    <div class="status">
                        <span class="dot ${labStats.attempts > 0 ? 'complete' : 'locked'}"></span>
                        ${completedText}
                    </div>
                </a>
            `;
        }

        html += `</div>`;
    }

    container.innerHTML = html;
}

// ─── UPDATE STATS ───
function updateStats() {
    const stats = getAllStats();
    let totalAttempts = 0;
    let completed = 0;
    let totalScore = 0;
    let scoreCount = 0;

    for (const lab of LABS) {
        const s = stats[lab.id];
        if (s) {
            totalAttempts += s.attempts;
            if (s.attempts > 0) completed++;
            if (s.average > 0) {
                totalScore += s.average;
                scoreCount++;
            }
        }
    }

    document.getElementById('totalLabs').textContent = LABS.length;
    document.getElementById('completedLabs').textContent = completed;
    document.getElementById('quizAvg').textContent = scoreCount > 0 ? Math.round(totalScore / scoreCount) + '%' : '0%';
    document.getElementById('totalQuestions').textContent = LABS.length * 10;
}

// ─── SETUP SEARCH ───
function setupSearch() {
    const input = document.getElementById('labSearch');
    if (!input) return;
    input.addEventListener('input', function() {
        const activeFilter = document.querySelector('.filter-btn.active');
        const filter = activeFilter ? activeFilter.dataset.filter : 'all';
        renderLabs(filter, this.value);
    });
}

// ─── SETUP FILTERS ───
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const search = document.getElementById('labSearch')?.value || '';
            renderLabs(this.dataset.filter, search);
        });
    });
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('labsContainer')) {
        renderLabs();
        updateStats();
        setupSearch();
        setupFilters();
    }
});