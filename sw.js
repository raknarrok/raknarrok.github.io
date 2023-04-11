const CACHE_NAME = 'v1_cache_mipekicha',
urlsToCache = [
    './',
    './css/style.css',
    './css/fontawsome/css/all.css',
    './css/webfonts/fa-brands-400.ttf',
    './css/webfonts/fa-brands-400.woff2',
    './css/webfonts/fa-regular-400.ttf',
    './css/webfonts/fa-regular-400.woff2',
    './css/webfonts/fa-solid-900.ttf',
    './css/webfonts/fa-solid-900.woff2',
    './css/webfonts/fa-v4compatibility.ttf',
    './css/webfonts/fa-v4compatibility.woff2',
    './scss/style.scss',
    './scripts/utility.js',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js',
    'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v4.0',
    'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v4.0',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'

]

// Add to Cache all the static files
self.addEventListener('install', e => {
    e.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return cache.addAll(urlsToCache)
            .then(() => self.skipWaiting())
        })
        .catch(err => console.log('Falló registro de cache', err))
    )
  })

// After SW is installed, this actuvate and search the downloaded cache data to work without Network (Offline)
self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME]
  
    e.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              // Delete Old Data
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName)
              }
            })
          )
        })
        // SW Activate the actual Cache data
        .then(() => self.clients.claim())
    )
  })

// If we have Network, this function will retrive the information from our site on internet.
self.addEventListener('fetch', e => {

    // Responce from cache
    e.respondWith(
        caches.match(e.request)
        .then(res=>{
            if(res){
                // Retrieve Correctly Cache data
                return res
            }

            // In case to retrieve the information from a URL
            return fetch(e.request)
        })
    )
})