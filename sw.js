/* Assimilate Pro - offline shell for GitHub Pages / WebView */
const CACHE = 'assimilate-pro-2026-v1';
const ASSETS = [
  './',
  './index.html',
  './styles/styles.css',
  './styles/interactive-styles.css',
  './scripts/core/data.core.js',
  './scripts/core/today-essentials.js',
  './scripts/app.js',
  './scripts/navigation.js',
  './scripts/interactive.js',
  './manifest.json',
  './PRIVACY.md'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetched = fetch(req)
        .then((res) => {
          const copy = res.clone();
          if (res.ok && new URL(req.url).origin === self.location.origin) {
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || fetched;
    })
  );
});
