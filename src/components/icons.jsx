// viver/MoreToLive — ícones de linha (monocromáticos)
// Todos usam currentColor, então a cor vem do text-... do elemento pai.
// Tamanho pela className (ex: className="w-6 h-6").

function Svg({ className = "w-6 h-6", sw = 1.8, children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

/* ---- cabeçalho / busca ---- */
export const IconSearch = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <line x1="20" y1="20" x2="16.5" y2="16.5" />
  </Svg>
)

export const IconFilter = (p) => (
  <Svg {...p}>
    <line x1="4" y1="8" x2="20" y2="8" />
    <circle cx="9" cy="8" r="2.2" />
    <line x1="4" y1="16" x2="20" y2="16" />
    <circle cx="15" cy="16" r="2.2" />
  </Svg>
)

export const IconBell = (p) => (
  <Svg {...p}>
    <path d="M18 8.5a6 6 0 0 0-12 0c0 7-2.5 8.5-2.5 8.5h17S18 15.5 18 8.5z" />
    <path d="M13.7 20.5a2 2 0 0 1-3.4 0" />
  </Svg>
)

/* ---- info do cartão ---- */
export const IconCalendar = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
    <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
    <line x1="8" y1="3" x2="8" y2="6.5" />
    <line x1="16" y1="3" x2="16" y2="6.5" />
  </Svg>
)

export const IconPin = (p) => (
  <Svg {...p}>
    <path d="M20 10.5c0 6-8 11.5-8 11.5s-8-5.5-8-11.5a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10.5" r="2.7" />
  </Svg>
)

export const IconTicket = (p) => (
  <Svg {...p}>
    <path d="M3 9.5a2.5 2.5 0 0 0 0 5V17A1.5 1.5 0 0 0 4.5 18.5h15A1.5 1.5 0 0 0 21 17v-2.5a2.5 2.5 0 0 1 0-5V7A1.5 1.5 0 0 0 19.5 5.5h-15A1.5 1.5 0 0 0 3 7z" />
    <line x1="13" y1="6" x2="13" y2="18" strokeDasharray="1.5 2.5" />
  </Svg>
)

/* ---- categorias ---- */
export const IconWellness = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="6" r="2.3" />
    <path d="M12 8.5c-2.4 0-4.4 1.7-4.9 4-.1.6.4 1.2 1 1.2h7.8c.6 0 1.1-.6 1-1.2-.5-2.3-2.5-4-4.9-4z" />
    <path d="M4 16c2 1.4 5 2.2 8 2.2s6-.8 8-2.2" />
  </Svg>
)

export const IconFood = (p) => (
  <Svg {...p}>
    <path d="M3.5 11.5h17a8.5 8.5 0 0 1-17 0z" />
    <line x1="2.5" y1="11.5" x2="21.5" y2="11.5" />
    <path d="M9 3.5c0 1-1 1.5-1 2.5" />
    <path d="M13 3.5c0 1-1 1.5-1 2.5" />
  </Svg>
)

export const IconCulture = (p) => (
  <Svg {...p}>
    <path d="M6 4.5h12v6.5a6 6 0 0 1-12 0z" />
    <circle cx="9.5" cy="9" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="9" r="0.8" fill="currentColor" stroke="none" />
    <path d="M9.5 12.5a3 3 0 0 0 5 0" />
  </Svg>
)

export const IconLearn = (p) => (
  <Svg {...p}>
    <path d="M12 6.5v13" />
    <path d="M12 6.5C10 5 7 4.7 4 5.7v12.6c3-1 6-.7 8 .7" />
    <path d="M12 6.5c2-1.5 5-1.8 8-.8v12.6c-3-1-6-.7-8 .7" />
  </Svg>
)

export const IconOutdoor = (p) => (
  <Svg {...p}>
    <path d="M12 3l4.5 7H14l3.5 5.5H6.5L10 10H7.5z" />
    <line x1="12" y1="15.5" x2="12" y2="21" />
  </Svg>
)

/* ---- navegação de baixo ---- */
export const IconCompass = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5.5-5.5 2 2-5.5z" />
  </Svg>
)

export const IconHeartNav = (p) => (
  <Svg {...p}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" />
  </Svg>
)

export const IconUser = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
  </Svg>
)
