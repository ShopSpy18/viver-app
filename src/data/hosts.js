// ---------------------------------------------------------------
// viver — perfis dos anfitriões (mock)
// Cada experiência tem um host { name, avatar }. Aqui guardamos o
// perfil completo de cada anfitrião (bio, nota, avaliações, reviews),
// usado na tela de perfil público (Tela 5).
//
// A chave do objeto é o NOME do anfitrião (igual ao host.name da
// experiência), pra ser fácil de encontrar.
// ---------------------------------------------------------------

export const hosts = {
  "marina alves": {
    name: "marina alves",
    avatar: "https://i.pravatar.cc/120?img=5",
    role: "instrutora de yoga e meditação",
    verified: true,
    bio: "pratico yoga há 8 anos e ensino há 4. minhas aulas são pra quem acha que 'não tem flexibilidade' — spoiler: ninguém tem no começo. bora destravar esse corpo juntos?",
    rating: "5.0",
    reviewsCount: 38,
    students: "240+",
    reviews: [
      {
        name: "ana n.",
        color: "lilas",
        stars: 5,
        text: "cheguei achando que ia passar vergonha e saí querendo voltar toda semana. a mari acolhe demais.",
      },
      {
        name: "bruno r.",
        color: "ambar",
        stars: 5,
        text: "primeira aula de yoga da minha vida. nunca pensei que ia gostar tanto. recomendo!",
      },
    ],
  },

  "diego ramos": {
    name: "diego ramos",
    avatar: "https://i.pravatar.cc/120?img=13",
    role: "treinador de corrida pra iniciantes",
    verified: true,
    bio: "corri minha primeira prova travado de medo e hoje vivo de ajudar gente a começar. sem cronômetro na cara, sem cobrança: a ideia é você gostar de correr, não sofrer.",
    rating: "4.9",
    reviewsCount: 52,
    students: "300+",
    reviews: [
      {
        name: "pam v.",
        color: "lilas",
        stars: 5,
        text: "nunca tinha corrido 1km sem parar. terminei o treino sorrindo, igual ele prometeu.",
      },
      {
        name: "léo s.",
        color: "ambar",
        stars: 5,
        text: "ritmo super tranquilo, ninguém fica pra trás. virei aluno fixo.",
      },
    ],
  },

  "júlia costa": {
    name: "júlia costa",
    avatar: "https://i.pravatar.cc/120?img=25",
    role: "instrutora de escalada",
    verified: true,
    bio: "escalo há 10 anos e amo ver a cara de quem chega no topo pela primeira vez. levo todo o equipamento e a paciência do mundo — medo de altura é só o ponto de partida.",
    rating: "4.8",
    reviewsCount: 21,
    students: "90+",
    reviews: [
      {
        name: "ian c.",
        color: "lilas",
        stars: 5,
        text: "tava morrendo de medo e a júlia me deixou seguro do começo ao fim. subi mais do que imaginava!",
      },
      {
        name: "duda l.",
        color: "ambar",
        stars: 5,
        text: "experiência incrível pra primeira vez. equipamento impecável e muita paciência.",
      },
    ],
  },

  "carla menezes": {
    name: "carla menezes",
    avatar: "https://i.pravatar.cc/120?img=44",
    role: "instrutora de pilates",
    verified: true,
    bio: "fisioterapeuta e instrutora de pilates. trabalho com corpos reais, travados de tanto trabalhar sentado. movimento simples, sem aparelho complicado, no seu ritmo.",
    rating: "5.0",
    reviewsCount: 44,
    students: "180+",
    reviews: [
      {
        name: "mel c.",
        color: "lilas",
        stars: 5,
        text: "minhas dores nas costas sumiram em poucas semanas. aulas leves e certeiras.",
      },
      {
        name: "rod a.",
        color: "ambar",
        stars: 4,
        text: "ótimo pra quem passa o dia no computador. saí mais solto de cada aula.",
      },
    ],
  },

  "bruno tavares": {
    name: "bruno tavares",
    avatar: "https://i.pravatar.cc/120?img=60",
    role: "guia de trilhas",
    verified: true,
    bio: "biólogo e guia de trilhas há 6 anos. conheço cada cantinho verde de campinas e adoro mostrar que dá pra desconectar sem ir longe. é só calçar um tênis e vir.",
    rating: "4.9",
    reviewsCount: 30,
    students: "150+",
    reviews: [
      {
        name: "lis m.",
        color: "lilas",
        stars: 5,
        text: "trilha linda e super tranquila. perfeita pra quem nunca fez. já quero a próxima.",
      },
      {
        name: "jon p.",
        color: "ambar",
        stars: 5,
        text: "o bruno sabe tudo de mata e deixa o passeio leve. desliguei do celular de verdade.",
      },
    ],
  },
}
