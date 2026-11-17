// Minimal service worker so the app can be installed. It caches nothing,
// so shoppers always see the latest shops, prices and stock.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
