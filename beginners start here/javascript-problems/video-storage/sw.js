self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/script.js',
        '/style.css'
        // '/videos/frogger.mp4', ->UNABLE TO WORK WITH - REDUNDANT @Client-side Storage IndexedDB
        // '/memory.mp4' ->UNABLE TO WORK WITH - REDUNDANT @Client-side Storage IndexedDB
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
