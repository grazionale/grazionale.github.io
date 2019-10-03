var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
		'/mip.html',
		'/autor.html',
        '/manifest.js',
        '/style/bootstrap/dist/css/bootstrap.min.css',
        '/style/font-awesome/css/font-awesome.min.css',
        '/style/Ionicons/css/ionicons.min.css',
        '/dist/css/AdminLTE.min.css',
        '/dist/css/skins/all-skins.min.css',
        '/style/style.css',
        '/dist/css/skins/all-skins.min.css',
        '/style/jquery/dist/jquery.min.js',
        '/dist/js/jquery-ui/jquery-ui.min.js',
        '/dist/js/adminlte.min.js',
        '/dist/js/pages/dashboard.js',
        '/dist/js/demo.js',
        '/style/bootstrap/dist/js/bootstrap.min.js',
        '/dist/js/loadJson.js',
        '/dist/js/parana.js',
        '/dist/js/generator.js',
        '/dist/js/counters.js',
        '/dist/js/graph.js',
        '/dist/js/filters.js',
        '/dist/js/functions.js',
        '/dist/js/utils.js',
		'/dist/js/sweetalert/sweetalert2.all.min.js',
		'/dist/js/sweetalert/sweetalert2.min.css',
		'/dist/js/highcharts/highcharts.js',
		'/dist/js/highcharts/exporting.js',
		'/dist/js/highcharts/export-data.js',
		'/dist/js/select2/select2.min.css',
		'/dist/js/select2/select2.min.js'
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

