// ΛογοΣύνθεση Admin — Service Worker (minimal, enables PWA install)
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
