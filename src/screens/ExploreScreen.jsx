// viver — tela Explorar (home)
// Saudação, busca, chips de categoria, rótulo "perto de você" e a
// lista de cartões. Recebe "onOpenExperience" pra avisar o App quando
// alguém toca num cartão (aí o App troca pra tela de detalhe).

import { useState } from "react"
import { categories } from "../data/experiences"
import { currentUser } from "../data/user"
import ExperienceCard from "../components/ExperienceCard"
import BottomNav from "../components/BottomNav"
import {
  IconSearch,
  IconFilter,
  IconBell,
  IconWellness,
  IconFood,
  IconCulture,
  IconLearn,
  IconOutdoor,
} from "../components/icons"

// liga o "icon" da categoria ao componente de ícone
const categoryIcons = {
  wellness: IconWellness,
  food: IconFood,
  culture: IconCulture,
  learn: IconLearn,
  outdoor: IconOutdoor,
}

// só o primeiro nome pra saudação ("carol souza" -> "carol")
const firstName = currentUser.name.split(" ")[0]

// saudação que muda conforme a hora do dia
function greeting() {
  const h = new Date().getHours()
  if (h < 12) return "bom dia"
  if (h < 18) return "boa tarde"
  return "boa noite"
}

export default function ExploreScreen({
  experiences,
  savedIds,
  onToggleSave,
  onOpenExperience,
  onNavigate,
}) {
  const [activeCategory, setActiveCategory] = useState("wellness")
  const [query, setQuery] = useState("")

  const visibleExperiences = experiences.filter((exp) => {
    const matchCategory = exp.category === activeCategory
    const matchQuery = exp.title.toLowerCase().includes(query.toLowerCase())
    return matchCategory && matchQuery
  })

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-sm lg:max-w-4xl min-h-screen bg-creme pb-24">
        {/* logo + saudação + cabeçalho */}
        <header className="px-5 pt-8 pb-3">
          <div className="flex items-start justify-between">
            {/* wordmark serifado — uma linha só, lowercase, coral */}
            <p className="font-serif text-coral text-2xl font-bold tracking-tight whitespace-nowrap leading-none">
              more to live
            </p>
            {/* sino de notificações (visual por enquanto) */}
            <button
              aria-label="notificações"
              className="w-9 h-9 rounded-full bg-white border border-black/5 flex items-center justify-center text-preto active:scale-95 transition-transform"
            >
              <IconBell className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-4 text-cinza text-sm font-semibold">
            {greeting()}, {firstName} 👋
          </p>
          <h1 className="mt-1 text-carvao font-extrabold text-2xl leading-tight">
            o que você quer viver hoje?
          </h1>
        </header>

        {/* busca com ícone e atalho de filtros */}
        <div className="px-5">
          <div className="relative lg:max-w-xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cinza">
              <IconSearch className="w-5 h-5" />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="buscar experiências perto de você..."
              className="w-full bg-white border border-black/5 rounded-2xl pl-11 pr-12 py-3 text-sm text-carvao placeholder:text-cinza outline-none focus:border-coral/40"
            />
            <button
              aria-label="filtros"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-cinza active:scale-90 transition-transform"
            >
              <IconFilter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* categorias em ícones */}
        <div className="flex gap-3 overflow-x-auto px-5 py-4 no-scrollbar">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory
            const Icon = categoryIcons[cat.icon]
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="shrink-0 flex flex-col items-center gap-1.5 w-16"
              >
                <span
                  className={
                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-colors " +
                    (isActive
                      ? "bg-coral text-creme"
                      : "bg-white border border-black/5 text-oliva")
                  }
                >
                  {Icon && <Icon className="w-7 h-7" />}
                </span>
                <span
                  className={
                    "text-[11px] font-bold text-center leading-tight " +
                    (isActive ? "text-preto" : "text-oliva")
                  }
                >
                  {cat.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* rótulo da seção + ver todas */}
        <div className="px-5 flex items-center justify-between">
          <p className="text-xs font-bold text-cinza tracking-wide">
            perto de você · campinas
          </p>
          <button
            onClick={() => setQuery("")}
            className="text-coral text-xs font-bold active:opacity-70"
          >
            ver todas
          </button>
        </div>

        {/* lista — uma coluna no celular, grade no desktop */}
        <main className="px-5 py-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {visibleExperiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onOpen={onOpenExperience}
              saved={savedIds.includes(exp.id)}
              onToggleSave={() => onToggleSave(exp.id)}
            />
          ))}

          {visibleExperiences.length === 0 && (
            <p className="lg:col-span-2 text-center text-cinza py-16 leading-relaxed">
              ainda não tem nada por aqui. 🌱
              <br />
              bora ser o primeiro a criar uma experiência?
            </p>
          )}
        </main>
      </div>

      <BottomNav active="explorar" onNavigate={onNavigate} />
    </div>
  )
}
