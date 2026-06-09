// viver — o "controlador" do app
// Guarda em que tela estamos, qual experiência está aberta e quais já
// foram reservadas. A navegação é simples, feita só com estado do React.
//
// As experiências ficam aqui no "estado" pra que o número de vagas
// possa mudar quando alguém reserva. (Ainda não tem banco de dados, então
// as reservas voltam ao normal se a página for recarregada — tudo certo
// pra esta fase de validação.)

import { useState } from "react"
import { experiences as initialExperiences } from "./data/experiences"
import { currentUser, livedExperiences } from "./data/user"
import { hosts } from "./data/hosts"
import ExploreScreen from "./screens/ExploreScreen"
import ExperienceDetail from "./screens/ExperienceDetail"
import ConfirmationScreen from "./screens/ConfirmationScreen"
import ProfileScreen from "./screens/ProfileScreen"
import HostProfile from "./screens/HostProfile"
import CreateExperience from "./screens/CreateExperience"
import MinhasVagas from "./screens/MinhasVagas"
import Salvos from "./screens/Salvos"

export default function App() {
  const [experiences, setExperiences] = useState(initialExperiences)
  const [screen, setScreen] = useState("explore") // explore | detail | confirmation | profile | host | create
  const [selectedId, setSelectedId] = useState(null)
  const [selectedHostName, setSelectedHostName] = useState(null)
  const [bookedIds, setBookedIds] = useState([]) // ids das experiências já reservadas
  const [savedIds, setSavedIds] = useState([]) // ids das experiências salvas (coração)
  const [hostMode, setHostMode] = useState(false) // "modo anfitrião" ligado?

  const selectedExperience = experiences.find((exp) => exp.id === selectedId)

  // perfil do anfitrião selecionado. se não estiver no mock (ex: o próprio
  // usuário que publicou algo), monta um perfil básico na hora.
  const selectedHost =
    hosts[selectedHostName] || buildFallbackHost(selectedHostName, experiences)

  // abrir uma experiência -> tela de detalhe
  function openExperience(id) {
    setSelectedId(id)
    setScreen("detail")
    window.scrollTo(0, 0)
  }

  // abrir o perfil público de um anfitrião
  function openHost(name) {
    setSelectedHostName(name)
    setScreen("host")
    window.scrollTo(0, 0)
  }

  // voltar pra lista
  function goExplore() {
    setScreen("explore")
  }

  // abrir a tela de criar experiência
  function openCreate() {
    setScreen("create")
    window.scrollTo(0, 0)
  }

  // publicar: adiciona a nova experiência no topo da lista e vai pro explorar
  function publishExperience(newExperience) {
    setExperiences((prev) => [newExperience, ...prev])
    setScreen("explore")
    window.scrollTo(0, 0)
  }

  // navegação da barra de baixo
  function navigate(tab) {
    if (tab === "explorar") setScreen("explore")
    if (tab === "salvos") setScreen("salvos")
    if (tab === "minhasVagas") setScreen("minhasVagas")
    if (tab === "perfil") setScreen("profile")
    window.scrollTo(0, 0)
  }

  // salvar / remover dos salvos (coração)
  function toggleSaved(id) {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  // experiências que a pessoa já reservou (pra "minhas vagas" e perfil)
  const bookedExperiences = experiences.filter((exp) =>
    bookedIds.includes(exp.id)
  )

  // experiências salvas (pra "salvos")
  const savedExperiences = experiences.filter((exp) =>
    savedIds.includes(exp.id)
  )

  // reservar: soma uma vaga, lembra a reserva e mostra a confirmação
  function bookExperience(exp) {
    if (!bookedIds.includes(exp.id)) {
      setExperiences((prev) =>
        prev.map((e) =>
          e.id === exp.id
            ? { ...e, spotsFilled: Math.min(e.spotsFilled + 1, e.spotsTotal) }
            : e
        )
      )
      setBookedIds((prev) => [...prev, exp.id])
    }
    setScreen("confirmation")
    window.scrollTo(0, 0)
  }

  if (screen === "create") {
    return (
      <CreateExperience
        host={currentUser}
        onClose={() => setScreen("profile")}
        onPublish={publishExperience}
      />
    )
  }

  if (screen === "minhasVagas") {
    return (
      <MinhasVagas
        bookedExperiences={bookedExperiences}
        savedIds={savedIds}
        onToggleSave={toggleSaved}
        onOpenExperience={openExperience}
        onNavigate={navigate}
      />
    )
  }

  if (screen === "salvos") {
    return (
      <Salvos
        savedExperiences={savedExperiences}
        savedIds={savedIds}
        onToggleSave={toggleSaved}
        onOpenExperience={openExperience}
        onNavigate={navigate}
      />
    )
  }

  if (screen === "profile") {
    return (
      <ProfileScreen
        user={currentUser}
        lived={livedExperiences}
        bookedExperiences={bookedExperiences}
        hostMode={hostMode}
        onToggleHostMode={setHostMode}
        onCreateExperience={openCreate}
        onOpenExperience={openExperience}
        onNavigate={navigate}
      />
    )
  }

  if (screen === "host" && selectedHost) {
    return (
      <HostProfile
        host={selectedHost}
        hostExperiences={experiences.filter(
          (exp) => exp.host.name === selectedHostName
        )}
        onBack={() => setScreen("detail")}
        onOpenExperience={openExperience}
      />
    )
  }

  if (screen === "confirmation" && selectedExperience) {
    return (
      <ConfirmationScreen experience={selectedExperience} onExplore={goExplore} />
    )
  }

  if (screen === "detail" && selectedExperience) {
    return (
      <ExperienceDetail
        experience={selectedExperience}
        isBooked={bookedIds.includes(selectedExperience.id)}
        saved={savedIds.includes(selectedExperience.id)}
        onToggleSave={() => toggleSaved(selectedExperience.id)}
        onBack={goExplore}
        onBook={bookExperience}
        onOpenHost={openHost}
      />
    )
  }

  return (
    <ExploreScreen
      experiences={experiences}
      savedIds={savedIds}
      onToggleSave={toggleSaved}
      onOpenExperience={openExperience}
      onNavigate={navigate}
    />
  )
}

// monta um perfil básico pra um anfitrião que não está no mock
// (ex: o próprio usuário, quando publica uma experiência).
function buildFallbackHost(name, experiences) {
  if (!name) return null
  const exp = experiences.find((e) => e.host.name === name)
  return {
    name,
    avatar: exp?.host.avatar,
    role: "anfitriã no viver 🌱",
    verified: false,
    bio: "esse perfil está começando agora por aqui. em breve, mais sobre quem organiza essas experiências.",
    rating: "novo",
    reviewsCount: 0,
    students: "0",
    reviews: [],
  }
}
