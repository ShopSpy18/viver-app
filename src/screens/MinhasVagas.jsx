// viver — tab "minhas vagas"
// Lista as experiências que a pessoa já confirmou (reservou).

import ExperienceCard from "../components/ExperienceCard"
import BottomNav from "../components/BottomNav"

export default function MinhasVagas({
  bookedExperiences,
  savedIds,
  onToggleSave,
  onOpenExperience,
  onNavigate,
}) {
  const hasVagas = bookedExperiences.length > 0

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-sm lg:max-w-4xl min-h-screen bg-creme pb-24">
        {/* cabeçalho */}
        <header className="px-5 pt-8 pb-3">
          <h1 className="text-carvao font-extrabold text-2xl leading-tight">
            minhas vagas
          </h1>
          <p className="text-cinza text-sm mt-1">
            suas experiências confirmadas
          </p>
        </header>

        {/* lista */}
        <main className="px-5 py-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {bookedExperiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onOpen={onOpenExperience}
              saved={savedIds.includes(exp.id)}
              onToggleSave={() => onToggleSave(exp.id)}
            />
          ))}

          {!hasVagas && (
            <div className="lg:col-span-2 text-center py-16">
              <p className="text-cinza leading-relaxed">
                você ainda não garantiu nenhuma vaga. 🎟️
                <br />
                reserve uma experiência e ela aparece aqui.
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

      <BottomNav active="minhasVagas" onNavigate={onNavigate} />
    </div>
  )
}
