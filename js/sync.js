// ─────────────────────────────────────────────────────────────
// ADUSEI LABS — PILOT SYNC
// Silently sends quiz scores to Google Sheet webhook
// Also flushes a queue on reconnect (offline-first)
// ─────────────────────────────────────────────────────────────

// ⚠️ PASTE YOUR APPS SCRIPT WEB APP URL HERE (from Part A3)
window.ADUSEI_SYNC_URL = 'https://script.google.com/macros/s/AKfycbxVO0kwEffZL-ajZTj5-EbxjCIKgBMXXMUnEHjvOGz7zuWDGt-Xn4vDmO6CeQk7lA9O/exec';

function _syncIsConfigured() {
  return typeof ADUSEI_SYNC_URL === 'string'
    && ADUSEI_SYNC_URL.startsWith('https://script.google.com/')
    && !ADUSEI_SYNC_URL.includes('PASTE_YOUR_URL_HERE');
}

function _buildSyncPayload(labId, score) {
  const student = (typeof getStorage === 'function') ? getStorage('student', null) : null;
  if (!student) return null;
  return {
    timestamp: new Date().toISOString(),
    school: student.school || 'Unknown',
    name: student.name || '',
    class: student.class || '',
    lab: labId,
    score: Math.round(Number(score) || 0),
    attempts: 1,
    average: Math.round(Number(score) || 0)
  };
}

function _postToSheet(payload) {
  return fetch(window.ADUSEI_SYNC_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });
}

function syncQuizResult(labId, score) {
  if (!_syncIsConfigured()) return;
  const payload = _buildSyncPayload(labId, score);
  if (!payload) return;

  if (!navigator.onLine) {
    _queueSync(labId, score);
    return;
  }

  _postToSheet(payload).catch(() => {
    _queueSync(labId, score);
  });
}

function _queueSync(labId, score) {
  const getS = (typeof getStorage === 'function') ? getStorage : (k, d) => {
    try { const v = localStorage.getItem('adusei_' + k); return v ? JSON.parse(v) : d; }
    catch { return d; }
  };
  const setS = (typeof setStorage === 'function') ? setStorage : (k, v) => {
    localStorage.setItem('adusei_' + k, JSON.stringify(v));
  };
  const queue = getS('syncQueue', []);
  queue.push({ labId, score, ts: Date.now() });
  if (queue.length > 100) queue.shift();
  setS('syncQueue', queue);
}

function flushSyncQueue() {
  if (!_syncIsConfigured()) return;
  const getS = (typeof getStorage === 'function') ? getStorage : (k, d) => {
    try { const v = localStorage.getItem('adusei_' + k); return v ? JSON.parse(v) : d; }
    catch { return d; }
  };
  const setS = (typeof setStorage === 'function') ? setStorage : (k, v) => {
    localStorage.setItem('adusei_' + k, JSON.stringify(v));
  };
  const queue = getS('syncQueue', []);
  if (queue.length === 0) return;
  setS('syncQueue', []);
  for (const item of queue) {
    const payload = _buildSyncPayload(item.labId, item.score);
    if (payload) _postToSheet(payload).catch(() => _queueSync(item.labId, item.score));
  }
}

// Flush on reconnect and shortly after page load
window.addEventListener('online', flushSyncQueue);
if (typeof window.addEventListener === 'function') {
  window.addEventListener('load', () => setTimeout(flushSyncQueue, 2000));
}