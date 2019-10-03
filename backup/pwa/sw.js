var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/pwa/',
        '/pwa/index.html',
        '/pwa/manifest.js',
        '/pwa/style/bootstrap/dist/css/bootstrap.min.css',
        '/pwa/style/font-awesome/css/font-awesome.min.css',
        '/pwa/style/Ionicons/css/ionicons.min.css',
        '/pwa/dist/css/AdminLTE.min.css',
        '/pwa/dist/css/skins/all-skins.min.css',
        '/pwa/style/style.css',
        '/pwa/dist/css/skins/all-skins.min.css',
        '/pwa/style/jquery/dist/jquery.min.js',
        '/pwa/dist/js/jquery-ui/jquery-ui.min.js',
        '/pwa/dist/js/adminlte.min.js',
        '/pwa/dist/js/pages/dashboard.js',
        '/pwa/dist/js/demo.js',
        '/pwa/style/bootstrap/dist/js/bootstrap.min.js',
        '/pwa/dist/js/loadJson.js',
        '/pwa/dist/js/parana.js',
        '/pwa/dist/js/generator.js',
        '/pwa/dist/js/counters.js',
        '/pwa/dist/js/graph.js',
        '/pwa/dist/js/filters.js',
        '/pwa/dist/js/functions.js',
        '/pwa/dist/js/utils.js',
		'/pwa/dist/js/sweetalert/sweetalert2.all.min.js',
		'/pwa/dist/js/sweetalert/sweetalert2.min.css',
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

