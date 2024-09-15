
const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/image.gif',
]

// Installation Process
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    )
})

// Ensuring the fetch requests are passed through Service Worker, 
// If fetch call are performed for the cached urls than no network call will be performed
// Data will be returned from cache only
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response ?? fetch(event.request)
            })
    )
})