var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/pwaUm/',
        '/pwaUm/index.html',
        '/pwaUm/manifest.js',
        '/pwaUm/style/bootstrap/dist/css/bootstrap.min.css',
        '/pwaUm/style/font-awesome/css/font-awesome.min.css',
        '/pwaUm/style/Ionicons/css/ionicons.min.css',
        '/pwaUm/dist/css/AdminLTE.min.css',
        '/pwaUm/dist/css/skins/all-skins.min.css',
        '/pwaUm/style/style.css',
        '/pwaUm/dist/css/skins/all-skins.min.css',
        '/pwaUm/style/jquery/dist/jquery.min.js',
        '/pwaUm/dist/js/jquery-ui/jquery-ui.min.js',
        '/pwaUm/dist/js/adminlte.min.js',
        '/pwaUm/dist/js/pages/dashboard.js',
        '/pwaUm/dist/js/demo.js',
        '/pwaUm/style/bootstrap/dist/js/bootstrap.min.js',
        '/pwaUm/dist/js/loadJson.js',
        '/pwaUm/dist/js/parana.js',
        '/pwaUm/dist/js/generator.js',
        '/pwaUm/dist/js/counters.js',
        '/pwaUm/dist/js/graph.js',
        '/pwaUm/dist/js/filters.js',
        '/pwaUm/dist/js/functions.js',
        '/pwaUm/dist/js/utils.js',
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});

