// Service Worker per a la PWA de Ciències Aplicades I (FP Bàsica)
const CACHE_NAME = 'ca1-pwa-v3';

const STATIC_ASSETS = [
  './',
  './index.html',
  './pissarra-interactiva.html',
  './pissarra-interactiva.js',
  './manifest.json',
  './img/icon-192.png',
  './img/icon-512.png',
  './img/icon.svg',
  './sidebar.json',
  './ut01/index.html',
  './ut02/index.html',
  './ut03/index.html',
  './ut04/index.html',
  './ut05/index.html',
  './ut06/index.html',
  './ut07/index.html',
  './ut08/index.html',
  './ut09/index.html'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('Cache addAll warning (alguns fitxers poden carregar-se dinàmicament):', err);
      });
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Xarxa primer per a documents HTML (per a rebre canvis recents), cau de reserva si no hi ha connexió
  if (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then(res => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
          return res;
        })
        .catch(() => caches.match(req).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  // Per a imatges, estils i fonts: Cau primer, actualitzant en segon pla (Stale-While-Revalidate)
  event.respondWith(
    caches.match(req).then(cachedResponse => {
      const fetchPromise = fetch(req).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
        }
        return networkResponse;
      }).catch(() => {});

      return cachedResponse || fetchPromise;
    })
  );
});
