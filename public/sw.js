// MoreToLive — service worker mínimo
// Existe pra tornar o app "instalável" (PWA). Não guarda nada em cache
// de propósito: assim o conteúdo nunca fica desatualizado e cada visita
// pega sempre a versão mais nova do site. (Cache offline é um passo futuro.)

self.addEventListener("install", () => self.skipWaiting())
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim())
)
// um handler de fetch (mesmo que só repasse) é exigido pra ser instalável
self.addEventListener("fetch", () => {})
