// ─────────────────────────────────────────────────────────────
// ADUSEI LABS — SERVICE WORKER
// Provides offline support, caching, and fast loading
// ─────────────────────────────────────────────────────────────

const CACHE_NAME = 'adusei-labs-v3';
const OFFLINE_URL = '/index.html';

// ─── ASSETS TO CACHE ───
// These files will be available offline
const ASSETS = [
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

    // ─── Teacher & Notebook ───
    '/teacher/index.html',
    '/notebook/index.html'
];

// ─── INSTALL ───
// Cache all assets when the service worker is installed
self.addEventListener('install', (event) => {
    console.log('🔧 Service Worker: Installing...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('📦 Caching assets...');
                return cache.addAll(ASSETS);
            })
            .then(() => {
                console.log('✅ Service Worker: Installation complete!');
                return self.skipWaiting();
            })
            .catch((err) => {
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