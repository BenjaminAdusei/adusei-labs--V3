// ─────────────────────────────────────────────────────────────
// ADUSEI LABS — LANGUAGE DETECTION (Phase 4)
// Detects Twi / Ga / Ewe / Dagbani from typed text
// ─────────────────────────────────────────────────────────────

window.detectLanguage = function(text) {
    const t = String(text || '').toLowerCase().trim();
    if (!t || t.length < 3) return 'english';

    // ── Distinctive characters (highest confidence) ──
    // ɖ is unique to Ewe, ɣ is unique to Dagbani
    if (/ɖ/.test(t)) return 'ewe';
    if (/ɣ/.test(t)) return 'dagbani';

    // ── Function-word scoring based on native phrases ──
    const scores = { twi: 0, ga: 0, ewe: 0, dagbani: 0 };

    const twi_words = ['akwaaba','medaase','mepa','kyɛw','me','wo','yɛ','ne','na','sɛ','nso','bi','koraa','paa','kɛkɛ','sɛn','adiɛ','din','ɛ','hwɛ', 'mente', 'aseɛ', 'abisa'];
    const ga_words = ['oo','mi','bo','kɛ','ji','oma','mli','ni','nɔ','fee','wɔ','ba','kpɛ','mɛni','nuu', 'wɔmiifɔ̃', 'nine', 'manyɛ', 'mabi', 'noko'];
    const ewe_words = ['woezɔ','nyee','nye','gbe','dzi','me','nɔ','ɖe','kɔ','va','nu','akpɔ','nusɔsrɔ̃','kpɔ','ƒe', 'woezↄ', 'kuku', 'mate', 'abia'];
    const dagbani_words = ['maraba','nyɛla','sɔŋ','tooi','zangama','binshɛɣu','bɔra','baŋ','maa','pahi','shee','yɛla', 'aamaaraabaa', 'gaafara', 'tumi', 'taali', 'sɔŋmi'];

    const words = t.split(/[^a-zɛɔɖɣŋ]+/).filter(w => w.length > 0);

    for (const w of words) {
        if (twi_words.includes(w))     scores.twi += 2;
        if (ga_words.includes(w))      scores.ga += 2;
        if (ewe_words.includes(w))     scores.ewe += 2;
        if (dagbani_words.includes(w)) scores.dagbani += 2;
    }

    // ɛ/ɔ shared bonus — only help whichever language is already winning
    if (/[ɛɔ]/.test(t)) {
        const lead = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
        if (lead && lead[1] > 0) scores[lead[0]] += 1;
    }

    // ── Pick the winner if confidence is high enough ──
    const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    if (best && best[1] >= 2) return best[0];

    return 'english';
};