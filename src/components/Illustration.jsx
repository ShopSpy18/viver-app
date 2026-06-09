// viver — ilustrações planas (flat) pra cada tipo de experiência
// São desenhos simples em SVG (não fotos), no estilo do mockup:
// cenas leves com bonequinhos de palito. Usam as cores da marca.
//
// Cada cena tem um fundo plano (sem degradê, como pede o CLAUDE.md)
// e um bonequinho fazendo a atividade. Escolhemos a cena pela
// "activity" da experiência (yoga, corrida, escalada...).

// cores da marca MoreToLive reaproveitadas nas cenas
const C = {
  verde: "#6f7d6c", // oliva — verdes da natureza
  menta: "#cdd8c9", // sálvia clara
  mentaClara: "#f7f3ec", // creme — céu/claro
  lilas: "#ffd9cf", // coral bem claro — acentos
  ambar: "#ff7a59", // coral — sol/acentos
  creme: "#f7f3ec",
  neon: "#c6ff00", // verde neon — só pra um acento pontual
  fig: "#1a1a1a", // bonequinho (preto suave)
  pele: "#eebf9d", // cabeça
}

// um bonequinho de palito simples e reutilizável
function Figure({ x, y, scale = 1, pose = "stand" }) {
  // poses diferentes mudam braços e pernas
  const limbs = {
    stand: (
      <>
        <line x1="0" y1="6" x2="-6" y2="20" />
        <line x1="0" y1="6" x2="6" y2="20" />
        <line x1="0" y1="-8" x2="-8" y2="2" />
        <line x1="0" y1="-8" x2="8" y2="2" />
      </>
    ),
    run: (
      <>
        <line x1="0" y1="6" x2="-8" y2="18" />
        <line x1="0" y1="6" x2="8" y2="14" />
        <line x1="0" y1="-6" x2="-9" y2="-2" />
        <line x1="0" y1="-6" x2="9" y2="-10" />
      </>
    ),
    sit: (
      <>
        <line x1="0" y1="6" x2="-12" y2="10" />
        <line x1="0" y1="6" x2="12" y2="10" />
        <line x1="0" y1="-6" x2="-9" y2="4" />
        <line x1="0" y1="-6" x2="9" y2="4" />
      </>
    ),
    climb: (
      <>
        <line x1="0" y1="6" x2="-7" y2="18" />
        <line x1="0" y1="6" x2="8" y2="16" />
        <line x1="0" y1="-8" x2="-7" y2="-14" />
        <line x1="0" y1="-8" x2="8" y2="-13" />
      </>
    ),
  }
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      stroke={C.fig}
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    >
      <line x1="0" y1="-12" x2="0" y2="6" />
      {limbs[pose]}
      <circle cx="0" cy="-18" r="6" fill={C.pele} stroke="none" />
    </g>
  )
}

// cada cena recebe a mesma "moldura" (viewBox) e desenha seu cenário.
// a altura vem do elemento pai (h-full), então a mesma ilustração serve
// pra um cartão grande ou pra uma miniatura no grid do perfil.
function Scene({ children }) {
  return (
    <svg
      viewBox="0 0 320 176"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full block"
      role="img"
    >
      {children}
    </svg>
  )
}

function Yoga() {
  return (
    <Scene>
      <rect width="320" height="176" fill={C.mentaClara} />
      <circle cx="268" cy="44" r="24" fill={C.ambar} opacity="0.55" />
      <path d="M0 122 Q160 96 320 122 L320 176 L0 176 Z" fill={C.menta} />
      <ellipse cx="60" cy="128" rx="20" ry="9" fill={C.verde} opacity="0.25" />
      <ellipse cx="250" cy="134" rx="24" ry="10" fill={C.verde} opacity="0.25" />
      <Figure x="160" y="112" scale="1.5" pose="sit" />
    </Scene>
  )
}

function Corrida() {
  return (
    <Scene>
      <rect width="320" height="176" fill={C.ambar} opacity="0.6" />
      <rect y="118" width="320" height="58" fill={C.menta} />
      <circle cx="58" cy="58" r="30" fill={C.ambar} />
      <Figure x="150" y="118" scale="1.2" pose="run" />
      <Figure x="200" y="124" scale="1" pose="run" />
      <Figure x="240" y="120" scale="1.1" pose="run" />
    </Scene>
  )
}

function Escalada() {
  const holds = [
    [90, 50, C.lilas],
    [150, 70, C.ambar],
    [210, 48, C.neon],
    [120, 110, C.menta],
    [190, 120, C.lilas],
    [240, 90, C.ambar],
    [80, 130, C.verde],
  ]
  return (
    <Scene>
      <rect width="320" height="176" fill="#aeb8c0" />
      <line
        x1="160"
        y1="0"
        x2="160"
        y2="176"
        stroke="#7f8a92"
        strokeWidth="2"
        strokeDasharray="6 7"
      />
      {holds.map(([cx, cy, fill], i) => (
        <circle key={i} cx={cx} cy={cy} r="7" fill={fill} />
      ))}
      <Figure x="160" y="104" scale="1.3" pose="climb" />
    </Scene>
  )
}

function Meditacao() {
  return (
    <Scene>
      <rect width="320" height="176" fill={C.lilas} opacity="0.5" />
      <circle cx="160" cy="150" r="60" fill={C.ambar} opacity="0.6" />
      <rect y="140" width="320" height="36" fill={C.verde} opacity="0.85" />
      <circle cx="70" cy="40" r="2" fill="#fff" />
      <circle cx="250" cy="34" r="2" fill="#fff" />
      <circle cx="210" cy="60" r="1.6" fill="#fff" />
      <Figure x="160" y="132" scale="1.5" pose="sit" />
    </Scene>
  )
}

function Pilates() {
  return (
    <Scene>
      <rect width="320" height="176" fill={C.mentaClara} />
      <rect y="120" width="320" height="56" fill={C.creme} />
      <rect
        x="110"
        y="126"
        width="100"
        height="14"
        rx="7"
        fill={C.lilas}
      />
      {/* figura deitada alongando (perna pra cima) */}
      <g
        stroke={C.fig}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        transform="translate(160 120)"
      >
        <line x1="-30" y1="0" x2="6" y2="0" />
        <line x1="6" y1="0" x2="22" y2="-24" />
        <line x1="-30" y1="0" x2="-44" y2="-12" />
        <circle cx="-38" cy="-2" r="6" fill={C.pele} stroke="none" />
      </g>
    </Scene>
  )
}

function Trilha() {
  return (
    <Scene>
      <rect width="320" height="176" fill={C.mentaClara} />
      <circle cx="262" cy="40" r="20" fill={C.ambar} opacity="0.55" />
      <path d="M0 120 L70 70 L140 120 Z" fill={C.menta} />
      <path d="M120 130 L210 60 L300 130 Z" fill={C.verde} opacity="0.8" />
      {/* trilhinha clara */}
      <path
        d="M150 176 Q160 150 140 130 Q120 112 150 96"
        stroke={C.creme}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      {/* arvorezinha */}
      <g transform="translate(60 120)">
        <rect x="-3" y="0" width="6" height="16" fill={C.verde} />
        <circle cx="0" cy="-4" r="14" fill={C.verde} />
      </g>
      <Figure x="150" y="150" scale="1.1" pose="stand" />
    </Scene>
  )
}

function Ceramica() {
  return (
    <Scene>
      <rect width="320" height="176" fill="#f3e3da" />
      <rect y="120" width="320" height="56" fill="#e2b89a" />
      {/* peça de cerâmica girando no torno */}
      <ellipse cx="160" cy="120" rx="44" ry="12" fill="#9c6a48" />
      <path
        d="M120 120 Q120 80 160 78 Q200 80 200 120 Z"
        fill="#b9805e"
      />
      <ellipse cx="160" cy="80" rx="26" ry="8" fill="#8a5c3d" />
    </Scene>
  )
}

const scenes = {
  yoga: Yoga,
  corrida: Corrida,
  escalada: Escalada,
  meditacao: Meditacao,
  pilates: Pilates,
  trilha: Trilha,
  ceramica: Ceramica,
}

export default function Illustration({ activity }) {
  const Comp = scenes[activity] || Yoga
  return <Comp />
}
