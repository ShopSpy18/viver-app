// viver — Tela 5: perfil público do anfitrião
// Segue o mockup: capa colorida com voltar, avatar, nome, função,
// selo verificado, barra de nota/avaliações/alunos, bio, as
// experiências que ele oferece e os reviews ("o que dizem").

import Illustration from "../components/Illustration"
import { formatPrice, initials } from "../lib/format"

// cor de fundo + texto das bolinhas de review (tons suaves da marca)
const reviewColors = {
  lilas: "bg-coral/25 text-preto",
  ambar: "bg-oliva/25 text-preto",
  menta: "bg-coral/25 text-preto",
}

export default function HostProfile({
  host,
  hostExperiences,
  onBack,
  onOpenExperience,
}) {
  const firstName = host.name.split(" ")[0]

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-sm min-h-screen bg-creme pb-12">
        {/* ---- capa ---- */}
        <div className="relative h-20 bg-coral">
          <button
            onClick={onBack}
            aria-label="voltar"
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white text-carvao text-lg flex items-center justify-center active:scale-95 transition-transform"
          >
            ←
          </button>
        </div>

        {/* ---- cabeçalho (avatar sobre a capa) ----
           z-10 faz o avatar ficar ACIMA da capa. sem isso, a capa (que é
           "relative", por causa do botão voltar) é pintada por cima e
           corta o topo do avatar. */}
        <div className="relative z-10 px-5 -mt-8">
          <div className="w-16 h-16 rounded-full bg-preto border-4 border-creme text-coral font-extrabold text-xl flex items-center justify-center">
            {initials(host.name)}
          </div>
          <p className="mt-2 text-carvao font-extrabold text-lg leading-tight">
            {host.name}
          </p>
          <p className="text-cinza text-sm">{host.role}</p>
          {host.verified && (
            <span className="mt-1 inline-flex items-center gap-1 text-verde text-xs font-bold">
              ✓ perfil verificado
            </span>
          )}
        </div>

        {/* ---- barra de nota ---- */}
        <div className="mt-4 flex items-center justify-around py-3 border-y border-black/5">
          <div className="text-center">
            <p className="text-carvao font-bold text-base leading-none">
              {host.rating}
            </p>
            <p className="text-cinza text-[11px] mt-1">avaliação</p>
          </div>
          <div className="w-px h-7 bg-black/10" />
          <div className="text-center">
            <p className="text-carvao font-bold text-base leading-none">
              {host.reviewsCount}
            </p>
            <p className="text-cinza text-[11px] mt-1">avaliações</p>
          </div>
          <div className="w-px h-7 bg-black/10" />
          <div className="text-center">
            <p className="text-carvao font-bold text-base leading-none">
              {host.students}
            </p>
            <p className="text-cinza text-[11px] mt-1">alunos</p>
          </div>
        </div>

        {/* ---- sobre ---- */}
        <section className="px-5 pt-4">
          <h2 className="text-carvao font-bold text-sm mb-2">sobre</h2>
          <p className="text-cinza text-sm leading-relaxed">{host.bio}</p>
        </section>

        {/* ---- experiências do anfitrião ---- */}
        <section className="px-5 pt-5">
          <h2 className="text-carvao font-bold text-sm mb-2">
            experiências de {firstName}
          </h2>
          <div className="flex flex-col gap-2">
            {hostExperiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => onOpenExperience(exp.id)}
                className="w-full flex gap-3 border border-black/5 rounded-2xl overflow-hidden bg-white text-left active:scale-[0.99] transition-transform"
              >
                <div className="w-[72px] shrink-0">
                  <Illustration activity={exp.activity} />
                </div>
                <div className="py-2 pr-3 flex flex-col justify-center">
                  <p className="text-carvao font-bold text-xs leading-snug">
                    {exp.title}
                  </p>
                  <p className="text-cinza text-[11px] mt-1">
                    {exp.date} · {exp.time} · {exp.location.split(",")[0]} ·{" "}
                    <span className="text-verde font-bold">
                      {formatPrice(exp.price)}
                    </span>
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ---- reviews ---- */}
        <section className="px-5 pt-5">
          <h2 className="text-carvao font-bold text-sm mb-1">o que dizem</h2>
          <div>
            {host.reviews.map((r) => (
              <div
                key={r.name + r.text}
                className="border-t border-black/5 first:border-t-0 py-3"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={
                      "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold " +
                      (reviewColors[r.color] || reviewColors.menta)
                    }
                  >
                    {initials(r.name)}
                  </span>
                  <span className="text-carvao font-bold text-xs">{r.name}</span>
                  <span className="text-coral text-[10px] tracking-tight">
                    {"★".repeat(r.stars)}
                  </span>
                </div>
                <p className="text-cinza text-xs leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
