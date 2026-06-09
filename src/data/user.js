// ---------------------------------------------------------------
// viver — dados de mentira (mock) do usuário e do histórico
// Ainda não tem login. Este é o "perfil" da pessoa que está usando o
// app. Troque o nome/cidade aqui se quiser ver outro perfil.
// ---------------------------------------------------------------

export const currentUser = {
  name: "carol souza",
  avatar: "https://i.pravatar.cc/120?img=47",
  city: "campinas, sp",
  joined: "jan 2026",
  // números do topo do perfil (mock por enquanto)
  // obs: uma métrica de pessoas/conexões volta aqui quando existir a
  // parte social do app.
  stats: {
    experiencias: 7,
    categorias: 4,
  },
}

// "já vivi" — experiências passadas, só pra mostrar no grid do perfil.
// São datadas no passado (as 6 da home são futuras, pra reservar).
// "activity" escolhe a ilustração.
export const livedExperiences = [
  { id: "lived-yoga", title: "yoga no parque", when: "mai 2026", activity: "yoga" },
  {
    id: "lived-escalada",
    title: "primeira escalada",
    when: "abr 2026",
    activity: "escalada",
  },
  {
    id: "lived-ceramica",
    title: "aula de cerâmica",
    when: "mar 2026",
    activity: "ceramica",
  },
  {
    id: "lived-corrida",
    title: "corrida 5km",
    when: "fev 2026",
    activity: "corrida",
  },
]
