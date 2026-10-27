// ─────────────────────────────────────────────────────────────
// ADUSEI LABS — SERVICE WORKER
// Provides offline support, caching, and fast loading
// v4 — Phase 1: hardened install (optional assets no longer
//      break the SW if missing; forces fresh cache rollout)
// ─────────────────────────────────────────────────────────────

const CACHE_NAME = 'adusei-labs-v4';
const OFFLINE_URL = '/index.html';

// ─── CORE ASSETS (REQUIRED) ───
// Install FAILS if any of these are missing.
// Only add files that must exist for the app to work.
const CORE_ASSETS = [
    // Core files
    '/',
    '/index.html',
    '/manifest.json',
    '/css_global.css',
    '/js/ai-content.js',
    '/js/global.js',
    '/js/dashboard.js',

    // ─── Mechanics Labs (5) ───
    '/labs/mechanics/projectile.html',
    '/labs/mechanics/inclined-plane.html',
    '/labs/mechanics/shm.html',
    '/labs/mechanics/elasticity.html',
    '/labs/mechanics/properties-of-matter.html',

    // ─── Thermal Physics Labs (3) ───
    '/labs/thermal/thermodynamics.html',
    '/labs/thermal/gas-laws.html',
    '/labs/thermal/thermal-expansion.html',

    // ─── Waves Labs (4) ───
    '/labs/waves/wave-simulator.html',
    '/labs/waves/sound-waves.html',
    '/labs/waves/wave-phenomena.html',
    '/labs/waves/optics.html',

    // ─── Electricity & Magnetism Labs (5) ───
    '/labs/electricity/ohms-law.html',
    '/labs/electricity/circuits.html',
    '/labs/electricity/electrostatics.html',
    '/labs/electricity/magnetism.html',
    '/labs/electricity/electromagnetic-induction.html',

    // ─── Modern Physics Labs (2) ───
    '/labs/modern/atomic-physics.html',
    '/labs/modern/radioactivity.html',

    // ─── Notebook (already deployed) ───
    '/notebook/index.html'
];

// ─── OPTIONAL ASSETS (NON-BLOCKING) ───
// Install CONTINUES even if these are missing.
// Used for routes added in future phases, or resources that
// may not be deployed yet. If they exist → cached at install;
// if they don't → first online visit caches them at runtime.
const OPTIONAL_ASSETS = [
    // ─── Teacher Dashboard (Phase 2 — 404s until then) ───
    '/teacher/index.html'
];

// ─── INSTALL ───
// Cache all assets when the service worker is installed
self.addEventListener('install', (event) => {
    console.log('🔧 Service Worker: Installing (v4)...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(async (cache) => {
                // 1. CORE — must succeed or we bail out
                console.log('📦 Caching core assets...');
                await cache.addAll(CORE_ASSETS);

                // 2. OPTIONAL — best-effort; failures don't break install
                console.log('📦 Caching optional assets...');
                const results = await Promise.allSettled(
                    OPTIONAL_ASSETS.map((url) =>
                        cache.add(url).catch((err) => {
                            console.warn('[SW] Optional asset skipped:', url, '—', err.message);
                        })
                    )
                );
                const ok = results.filter(r => r.status === 'fulfilled').length;
                console.log(`📦 Optional assets cached: ${ok}/${OPTIONAL_ASSETS.length}`);
            })
            .then(() => {
                console.log('✅ Service Worker: Installation complete!');
                return self.skipWaiting();
            })
            .catch((err) => {
                // If even CORE fails, log loudly but don't crash.
                // The app still works online via network-first fetch.
                console.error('❌ Service Worker: Installation failed', err);
            })
    );
});

// ─── ACTIVATE ───
// Clean up old caches when a new version is activated
self.addEventListener('activate', (event) => {
    console.log('🔧 Service Worker: Activating...');

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => {
                            console.log('🗑️ Deleting old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => {
                console.log('✅ Service Worker: Activation complete!');
                return self.clients.claim();
            })
    );
});

// ─── FETCH ───
// Network-first for HTML/JS/CSS. Cache-first for images/fonts.
self.addEventListener('fetch', (event) => {
    const request = event.request;

    // Skip cross-origin requests
    if (!request.url.startsWith(self.location.origin)) return;

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Skip browser extensions and analytics
    if (request.url.includes('chrome-extension') ||
        request.url.includes('analytics') ||
        request.url.includes('firebase')) return;

    // 🔥 NETWORK-FIRST for pages, scripts, styles
    const isFreshFirst =
        request.destination === 'document' ||
        request.destination === 'script' ||
        request.destination === 'style' ||
        request.url.endsWith('.html') ||
        request.url.endsWith('.js') ||
        request.url.endsWith('.css') ||
        request.url.endsWith('/');

    if (isFreshFirst) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(request, clone))
                            .catch(() => {});
                    }
                    return response;
                })
                .catch(() => caches.match(request).then(cached => {
                    if (cached) return cached;
                    if (request.headers.get('Accept')?.includes('text/html')) {
                        return caches.match(OFFLINE_URL);
                    }
                    return new Response('Offline', { status: 503 });
                }))
        );
        return;
    }

    // Cache-first for images, fonts, etc.
    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) return cached;
            return fetch(request)
                .then((response) => {
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(request, clone))
                            .catch(() => {});
                    }
                    return response;
                })
                .catch(() => {
                    if (request.headers.get('Accept')?.includes('text/html')) {
                        return caches.match(OFFLINE_URL);
                    }
                    return new Response('Offline', { status: 503 });
                });
        })
    );
});

// ─── MESSAGE HANDLING ───
// Listen for messages from the main thread
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'CLEAR_CACHE') {
        caches.delete(CACHE_NAME)
            .then(() => {
                console.log('🗑️ Cache cleared manually');
                event.ports[0].postMessage({ success: true });
            });
    }
});