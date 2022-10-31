let cacheName = "v1.0";

let cacheAssets = [
    'index.html',
    'informacion.html',
    'portafolio.html',
    'servicios.html',
    'contacto.php',
    'assets/css/style.css',

    'assets/js/menu.js',
    'assets/js/vermas.js',

    'assets/img/binoculars.png',
    'assets/img/headerhome.jpg',
    'assets/img/imagen1.jpg',
    'assets/img/Imagen2.jpg',
    'assets/img/Imagen3.jpg',
    'assets/img/Imagen4.jpg',
    'assets/img/Imagen5.jpg',
    'assets/img/Imagen6.jpg',
    'assets/img/mision.jpg',
    'assets/img/product1.png',
    'assets/img/product2.png',
    'assets/img/product3.webp',
    'assets/img/Quienes-somos.jpg',
    'assets/img/Quienes-somos.jpg',
    'assets/img/target-audience.png',
    'assets/img/target.png',
    'assets/img/valor1.jpg',
    'assets/img/valor2.jpg',
    'assets/img/valor3.jpg',
    'assets/img/valor4.png',
    'assets/img/vision.jpg'
]

self.addEventListener('install', e => {
    console.log('Service Worker Instalado');
    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker Cacheados');
                cache.addAll(cacheAssets);
            })
            .then(()=>self.skipWaiting())
    )
})

self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
})

self.addEventListener('fetch', e => {
    console.log('Service Worker Encontrado');
    e.respondWith(fetch(e.request).catch(()=> caches.match(e.request)));
})