// viver — Tela 4: perfil do usuário
// Segue o mockup: topo "meu perfil", cabeçalho com avatar, três
// estatísticas, a "próxima experiência" (puxada das reservas reais que
// o app guarda) e o grid "já vivi" com o histórico.

import Illustration from "../components/Illustration"
import BottomNav from "../components/BottomNav"
import { initials } from "../lib/format"

// emoji pra cada tipo de experiência (usado no card da próxima)
const activityEmoji = {
  yoga: "🧘",
  corrida: "🏃",
  escalada: "🧗",
  meditacao: "🌬️",
  pilates: "🤸",
  trilha: "🌳",
  ceramica: "🏺",
}

// switch simples de liga/desliga (modo anfitrião)
function Toggle({ on, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className={
        "w-11 h-6 rounded-full p-0.5 shrink-0 transition-colors " +
        (on ? "bg-verde" : "bg-black/15")
      }
    >
      <span
        className={
          "block w-5 h-5 rounded-full bg-white transition-transform " +
          (on ? "translate-x-5" : "translate-x-0")
        }
      />
    </button>
  )
}

export default function ProfileScreen({
  user,
  lived,
  bookedExperiences,
  hostMode,
  onToggleHostMode,
  onCreateExperience,
  onOpenExperience,
  onNavigate,
}) {
  const stats = [
    { n: user.stats.experiencias, l: "experiências" },
    { n: user.stats.categorias, l: "categorias" },
  ]

  const hasBookings = bookedExperiences.length > 0

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-sm min-h-screen bg-creme pb-24">
        {/* ---- topo ---- */}
        <div className="flex justify-between items-center px-5 pt-8 pb-2">
          <span className="text-carvao font-extrabold text-lg">meu perfil</span>
          <button
            aria-label="configurações"
            className="text-cinza text-xl active:scale-95 transition-transform"
          >
            ⚙
          </button>
        </div>

        {/* ---- cabeçalho do perfil ---- */}
        <div className="flex items-center gap-4 px-5 py-3">
          <div className="w-16 h-16 rounded-full bg-preto text-coral font-extrabold text-xl flex items-center justify-center shrink-0">
            {initials(user.name)}
          </div>
          <div>
            <p className="text-carvao font-extrabold text-lg leading-tight">
              {user.name}
            </p>
            <p className="text-cinza text-sm">
              {user.city} · entrou em {user.joined}
            </p>
          </div>
        </div>

        {/* ---- estatísticas ---- */}
        <div className="flex gap-2 px-5 py-3">
          {stats.map((s) => (
            <div
              key={s.l}
              className="flex-1 bg-white border border-black/5 rounded-2xl py-3 text-center"
            >
              <p className="text-verde font-extrabold text-xl leading-none">
                {s.n}
              </p>
              <p className="text-cinza text-[11px] mt-1">{s.l}</p>
            </div>
          ))}
        </div>

        {/* ---- modo anfitrião ---- */}
        <div className="px-5 py-3">
          <div className="bg-white border border-black/5 rounded-2xl p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-carvao font-bold text-sm">modo anfitrião</p>
                <p className="text-cinza text-xs mt-0.5">
                  publique experiências e receba gente
                </p>
              </div>
              <Toggle on={hostMode} onChange={onToggleHostMode} />
            </div>

            {hostMode && (
              <button
                onClick={onCreateExperience}
                className="mt-3 w-full bg-verde text-menta font-bold text-sm py-3 rounded-full active:scale-[0.98] transition-transform"
              >
                + publicar uma experiência
              </button>
            )}
          </div>
        </div>

        {/* ---- próxima experiência (reservas reais) ---- */}
        <section className="px-5 pt-3">
          <h2 className="text-carvao font-bold text-sm mb-2">
            {bookedExperiences.length > 1
              ? "próximas experiências"
              : "próxima experiência"}
          </h2>

          {hasBookings ? (
            <div className="flex flex-col gap-2">
              {bookedExperiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => onOpenExperience(exp.id)}
                  className="w-full flex items-center gap-3 bg-coral/10 rounded-2xl p-3 text-left active:scale-[0.99] transition-transform"
                >
                  <span className="w-11 h-11 rounded-xl bg-coral/20 flex items-center justify-center text-xl shrink-0">
                    {activityEmoji[exp.activity] || "✨"}
                  </span>
                  <div className="min-w-0">
                    <p className="text-carvao font-bold text-sm leading-snug truncate">
                      {exp.title}
                    </p>
                    <p className="text-oliva text-xs mt-0.5">
                      {exp.date} · {exp.time} · {exp.location}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            // estado vazio: ninguém reservou nada ainda
            <div className="bg-white border border-dashed border-black/10 rounded-2xl p-5 text-center">
              <p className="text-cinza text-sm">
                você ainda não garantiu nenhuma vaga.
              </p>
              <button
                onClick={() => onNavigate("explorar")}
                className="mt-3 bg-verde text-menta font-bold text-sm px-4 py-2 rounded-full active:scale-[0.98] transition-transform"
              >
                bora explorar 🌱
              </button>
            </div>
          )}
        </section>

        {/* ---- já vivi (histórico) ---- */}
        <section className="px-5 pt-5">
          <h2 className="text-carvao font-bold text-sm mb-2">já vivi</h2>
          <div className="grid grid-cols-2 gap-2">
            {lived.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-black/5 overflow-hidden bg-white"
              >
                <div className="w-full h-16">
                  <Illustration activity={item.activity} />
                </div>
                <div className="px-2.5 py-2">
                  <p className="text-[11px] font-bold text-carvao leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-cinza mt-0.5">{item.when}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav active="perfil" onNavigate={onNavigate} />
    </div>
  )
}
