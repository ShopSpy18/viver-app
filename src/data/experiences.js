// ---------------------------------------------------------------
// viver — dados de mentira (mock) das experiências
// Não é um banco de dados de verdade ainda. É só uma lista aqui no
// código pra montar as telas. Depois trocamos por algo real.
//
// Cada experiência tem os campos do CLAUDE.md: título, categoria,
// ilustração (pela "activity"), descrição, anfitrião (host), data,
// hora, duração, nível, local, preço, total de vagas, vagas
// preenchidas e a lista de quem vai.
// ---------------------------------------------------------------

// Categorias gerais que aparecem como "chips" no topo (igual ao mockup).
// Por enquanto só "wellness" tem experiências — as outras mostram um
// estado vazio simpático. Vamos preenchendo conforme o app cresce.
export const categories = [
  { id: "wellness", label: "wellness", icon: "wellness" },
  { id: "gastronomia", label: "gastronomia", icon: "food" },
  { id: "cultura", label: "cultura", icon: "culture" },
  { id: "aprendizado", label: "aprendizado", icon: "learn" },
  { id: "ar-livre", label: "ao ar livre", icon: "outdoor" },
]

export const experiences = [
  {
    id: "yoga-pe",
    title: "yoga pra quem não encosta a mão no pé",
    category: "wellness",
    activity: "yoga",
    popular: true,
    photo:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop",
    description:
      "uma aula tranquila pra começar do zero, sem pose difícil e sem aquela cobrança. a gente respira, alonga devagar e ri das próprias limitações. vem do jeito que você está.",
    host: { name: "marina alves", avatar: "https://i.pravatar.cc/120?img=5" },
    date: "sáb 14 jun",
    time: "8h",
    duration: "1h",
    level: "iniciante",
    location: "parque taquaral, campinas",
    price: 35,
    spotsTotal: 12,
    spotsFilled: 7,
    attendees: ["ana nogueira", "bruno reis", "clara dias", "rafa luz", "tom sá"],
  },
  {
    id: "corrida-escada",
    title: "corrida pra quem cansa de subir escada",
    category: "wellness",
    activity: "corrida",
    photo:
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80&auto=format&fit=crop",
    description:
      "treino leve de corrida e caminhada pra quem tá começando agora. ritmo de bate-papo, ninguém fica pra trás. a meta é terminar sorrindo, não esfolado.",
    host: { name: "diego ramos", avatar: "https://i.pravatar.cc/120?img=13" },
    date: "dom 15 jun",
    time: "7h",
    duration: "50min",
    level: "iniciante",
    location: "lagoa do taquaral, campinas",
    price: 0,
    spotsTotal: 20,
    spotsFilled: 11,
    attendees: ["thais k.", "léo souza", "pam vieira", "gui melo", "nina paz"],
  },
  {
    id: "escalada-primeira",
    title: "primeira vez na escalada (sem cair, prometo)",
    category: "wellness",
    activity: "escalada",
    photo:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80&auto=format&fit=crop",
    description:
      "experimenta escalada num ambiente seguro, com todo o equipamento e alguém segurando a corda o tempo todo. medo de altura é bem-vindo — a gente vai no seu tempo.",
    host: { name: "júlia costa", avatar: "https://i.pravatar.cc/120?img=25" },
    date: "sáb 21 jun",
    time: "16h",
    duration: "1h30",
    level: "iniciante",
    location: "ginásio vertical, cambuí",
    price: 60,
    spotsTotal: 8,
    spotsFilled: 6,
    attendees: ["mateus f.", "rafa p.", "duda lima", "ian cruz", "bia rocha"],
  },
  {
    id: "meditacao-tarde",
    title: "respira: meditação no fim da tarde",
    category: "wellness",
    activity: "meditacao",
    photo:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
    description:
      "20 minutos pra desacelerar a cabeça depois de um dia corrido. nada de misticismo complicado, só você, a respiração e um pôr do sol bonito. traga uma canga.",
    host: { name: "marina alves", avatar: "https://i.pravatar.cc/120?img=5" },
    date: "qua 18 jun",
    time: "18h",
    duration: "40min",
    level: "iniciante",
    location: "praça arautos da paz, campinas",
    price: 20,
    spotsTotal: 15,
    spotsFilled: 4,
    attendees: ["sofia m.", "caio reis", "lara b.", "edu nunes"],
  },
  {
    id: "pilates-comecar",
    title: "pilates sem frescura pra começar",
    category: "wellness",
    activity: "pilates",
    popular: true,
    photo:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80&auto=format&fit=crop",
    description:
      "fortalece o corpo com movimentos simples no solo. ótimo pra quem passa o dia sentado e sente as dores de quem passa o dia sentado. roupa confortável e bora.",
    host: { name: "carla menezes", avatar: "https://i.pravatar.cc/120?img=44" },
    date: "ter 17 jun",
    time: "19h",
    duration: "1h",
    level: "iniciante",
    location: "estúdio leve, barão geraldo",
    price: 45,
    spotsTotal: 10,
    spotsFilled: 9,
    attendees: ["paula g.", "rod alves", "mel costa", "vini sá", "babi luz"],
  },
  {
    id: "trilha-leve",
    title: "trilha leve pra respirar fora da cidade",
    category: "wellness",
    activity: "trilha",
    photo:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80&auto=format&fit=crop",
    description:
      "uma caminhada gostosa na mata, sem subida puxada e com várias paradas pra foto. perfeito pra desconectar do celular e conhecer gente que curte o mesmo. leva água!",
    host: { name: "bruno tavares", avatar: "https://i.pravatar.cc/120?img=60" },
    date: "dom 22 jun",
    time: "8h30",
    duration: "3h",
    level: "iniciante",
    location: "mata de santa genebra, campinas",
    price: 30,
    spotsTotal: 16,
    spotsFilled: 5,
    attendees: ["fê dias", "rui melo", "kátia s.", "jon paz", "lis moura"],
  },
]
