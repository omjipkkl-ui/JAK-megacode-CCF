// Offline engine for Megacode CCF. Change VERSION whenever you upload a new index.html.
const VERSION='megacode-v20';
const CORE=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    // app files: use network when online (gets updates), fall back to cache offline
    e.respondWith(fetch(req,{cache:'no-store'}).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(req,cp));return r}).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));
  }else if(url.hostname.endsWith('googleapis.com')||url.hostname.endsWith('gstatic.com')){
    // fonts: cache after first use
    e.respondWith(caches.match(req).then(r=>r||fetch(req).then(n=>{const cp=n.clone();caches.open(VERSION).then(c=>c.put(req,cp));return n})));
  }
});
