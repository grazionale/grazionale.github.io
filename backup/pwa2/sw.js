var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.js',
        '/dist/style/bootstrap/dist/css/bootstrap.min.css',
        '/dist/style/font-awesome/css/font-awesome.min.css',
        '/dist/style/AdminLTE.min.css',
        '/dist/style/style.css',
        '/dist/style/all-skins.min.css',
        '/dist/js/sweetalert/sweetalert2.all.min.js',
        '/dist/js/sweetalert/sweetalert2.min.css',
        '/dist/js/highcharts/highcharts.js',
        '/dist/js/highcharts/exporting.js',
        '/dist/js/highcharts/export-data.js',
        '/dist/js/jquery/dist/jquery.min.js',
        '/dist/js/adminlte.min.js',
        '/dist/style/bootstrap/dist/js/bootstrap.min.js',
        '/dist/js/select2/select2.min.css',
        '/dist/js/select2/select2.min.js',
        '/dist/js/loadJson.js',
        '/dist/js/parana.js',
        '/dist/js/generator.js',
        '/dist/js/counters.js',
        '/dist/js/graph.js',
        '/dist/js/filters.js',
        '/dist/js/functions.js',
        '/dist/js/utils.js'
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

