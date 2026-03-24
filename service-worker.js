const CACHE_NAME = "reloj-pwa-cache-v1";

const ARCHIVOS_A_CACHEAR = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icono.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARCHIVOS_A_CACHEAR);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((nombresCache) => {
      return Promise.all(
        nombresCache.map((nombreCache) => {
          if (nombreCache !== CACHE_NAME) {
            return caches.delete(nombreCache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((respuesta) => {
      return respuesta || fetch(event.request);
    })
  );
});