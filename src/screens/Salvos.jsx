// viver — tab "salvos"
// Lista as experiências que a pessoa salvou (tocou no coração).

import ExperienceCard from "../components/ExperienceCard"
import BottomNav from "../components/BottomNav"

export default function Salvos({
  savedExperiences,
  savedIds,
  onToggleSave,
  onOpenExperience,
  onNavigate,
}) {
  const hasSaved = savedExperiences.length > 0

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-sm min-h-screen bg-creme pb-24">
        {/* cabeçalho */}
        <header className="px-5 pt-8 pb-3">
          <h1 className="text-carvao font-extrabold text-2xl leading-tight">
            salvos
          </h1>
          <p className="text-cinza text-sm mt-1">
            experiências que você guardou pra depois
          </p>
        </header>

        {/* lista */}
        <main className="px-5 py-3 flex flex-col gap-5">
          {savedExperiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onOpen={onOpenExperience}
              saved={savedIds.includes(exp.id)}
              onToggleSave={() => onToggleSave(exp.id)}
            />
          ))}

          {!hasSaved && (
            <div className="text-center py-16">
              <p className="text-cinza leading-relaxed">
                nada salvo ainda. 🤍
                <br />
                toque no coração de uma experiência pra guardar aqui.
              </p>
              <button
                onClick={() => onNavigate("explorar")}
                className="mt-4 bg-verde text-menta font-bold text-sm px-4 py-2.5 rounded-full active:scale-[0.98] transition-transform"
              >
                bora explorar 🌱
              </button>
            </div>
          )}
        </main>
      </div>

      <BottomNav active="salvos" onNavigate={onNavigate} />
    </div>
  )
}
