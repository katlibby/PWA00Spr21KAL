const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  'index.html',
  './', //alias for index.html
  'css/style.css',
  'js/main.js',
  'sw.js'
];

self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(PRECACHE).then(function(cache){
      return cache.addAll(PRECACHE_URLS);
    })
    };
});
  
self.addEventListener('activate',event => {
  console.log('Service worker activating...');
});
  
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
    );
});
