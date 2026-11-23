// cache-first: the index and every sample page a student has opened stay available offline
const C='xrflib-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['index.html','manifest.webmanifest','assets/mdru_logo.png','assets/icon-192.png','assets/icon-512.png','assets/apple-touch-icon.png','assets/favicon.png'])));self.skipWaiting();});
self.addEventListener('fetch',e=>{e.respondWith(caches.open(C).then(async c=>{const r=await c.match(e.request);if(r)return r;const n=await fetch(e.request);if(n.ok)c.put(e.request,n.clone());return n;}));});
