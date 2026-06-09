// viver — funçõezinhas de formatação reaproveitadas em várias telas

// preço amigável: "grátis" quando é 0
export function formatPrice(price) {
  return price === 0 ? "grátis" : `R$ ${price}`
}

// iniciais de um nome: "ana nogueira" -> "AN"
export function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

// foto de avatar consistente pra um nome (serviço gratuito pravatar).
// o mesmo nome sempre cai na mesma foto.
export function avatarFor(name) {
  return `https://i.pravatar.cc/100?u=${encodeURIComponent(name)}`
}
