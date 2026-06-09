// viver — Tela 2: detalhe da experiência
// Foto grande com botão de voltar, título, anfitrião, infos (data,
// hora, duração, nível, local), barra de vagas, "quem vai", descrição
// e um botão fixo embaixo "bora? reservar vaga".
//
// O botão de reservar chama onBook (que vamos ligar na próxima etapa,
// pra mostrar a tela de confirmação). Por enquanto ele ainda não faz nada.

import { useState } from "react"
import Illustration from "../components/Illustration"
import SaveButton from "../components/SaveButton"
import { formatPrice, initials } from "../lib/format"

const circleColors = ["bg-coral/25", "bg-oliva/25", "bg-coral/15", "bg-oliva/15"]

export default function ExperienceDetail({
  experience,
  isBooked,
  saved,
  onToggleSave,
  onBack,
  onBook,
  onOpenHost,
}) {
  const [photoFailed, setPhotoFailed] = useState(false)

  const {
    title,
    activity,
    photo,
    description,
    host,
    date,
    time,
    duration,
    level,
    location,
    price,
  } = experience

  const spotsLeft = experience.spotsTotal - experience.spotsFilled
  const fillPercent = (experience.spotsFilled / experience.spotsTotal) * 100

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-sm min-h-screen bg-creme pb-28 relative">
        {/* ---- foto grande no topo ---- */}
        <div className="relative">
          {photo && !photoFailed ? (
            <img
              src={photo}
              alt={title}
              onError={() => setPhotoFailed(true)}
              className="w-full h-72 object-cover block"
            />
          ) : (
            <div className="h-72">
              <Illustration activity={activity} />
            </div>
          )}

          {/* botão de voltar */}
          <button
            onClick={onBack}
            aria-label="voltar"
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 text-carvao text-xl flex items-center justify-center active:scale-95 transition-transform"
          >
            ←
          </button>

          {/* preço + salvar */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="bg-white text-verde text-sm font-bold px-3 py-1.5 rounded-full">
              {formatPrice(price)}
            </span>
            <SaveButton saved={saved} onToggleSave={onToggleSave} />
          </div>
        </div>

        {/* ---- conteúdo ---- */}
        <div className="px-5 pt-5">
          <h1 className="text-carvao font-extrabold text-2xl leading-tight">
            {title}
          </h1>

          {/* anfitrião — toca pra abrir o perfil público */}
          <button
            onClick={() => onOpenHost(host.name)}
            className="mt-4 flex items-center gap-3 w-full text-left active:opacity-80"
          >
            <img
              src={host.avatar}
              alt={host.name}
              className="w-11 h-11 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-carvao font-bold text-sm">{host.name}</p>
              <p className="text-cinza text-xs">ver perfil ›</p>
            </div>
          </button>

          {/* infos rápidas */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="bg-white border border-black/5 rounded-full px-3 py-1.5 text-xs font-semibold text-carvao">
              📅 {date}
            </span>
            <span className="bg-white border border-black/5 rounded-full px-3 py-1.5 text-xs font-semibold text-carvao">
              ⏰ {time} · {duration}
            </span>
            <span className="bg-white border border-black/5 rounded-full px-3 py-1.5 text-xs font-semibold text-carvao">
              🌱 {level}
            </span>
          </div>

          {/* local */}
          <p className="mt-3 text-cinza text-sm">📍 {location}</p>

          {/* barra de vagas */}
          <div className="mt-6">
            <div className="h-2.5 w-full bg-black/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-ambar rounded-full"
                style={{ width: `${fillPercent}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-cinza">
              {spotsLeft > 0
                ? `${spotsLeft} vagas ainda livres de ${experience.spotsTotal}`
                : "essa já lotou 😢"}
            </p>
          </div>

          {/* quem vai
             privacidade: a identidade de quem confirmou só aparece pra
             quem também confirmou. quem ainda não reservou vê avatares
             borrados e só a contagem (incentiva a reservar). */}
          <section className="mt-6">
            <h2 className="text-carvao font-extrabold text-base">quem vai</h2>

            {isBooked ? (
              // confirmado: mostra rostos e primeiros nomes
              <div className="mt-3 flex flex-wrap gap-3">
                {experience.attendees.map((name, i) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-1 w-12"
                  >
                    <span
                      className={
                        "w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-preto " +
                        circleColors[i % circleColors.length]
                      }
                    >
                      {initials(name)}
                    </span>
                    <span className="text-[10px] text-cinza text-center leading-tight truncate w-full">
                      {name.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              // ainda não confirmou: avatares borrados + contagem
              <div className="mt-3 flex items-center gap-3">
                <div className="flex">
                  {experience.attendees.slice(0, 4).map((name, i) => (
                    <span
                      key={name}
                      aria-hidden="true"
                      className={
                        "w-11 h-11 rounded-full ring-2 ring-creme blur-[5px] -ml-3 first:ml-0 " +
                        circleColors[i % circleColors.length]
                      }
                    />
                  ))}
                </div>
                <p className="text-carvao font-bold text-sm">
                  +{experience.spotsFilled} confirmadas
                </p>
              </div>
            )}

            {!isBooked && (
              <p className="mt-2 text-cinza text-xs">
                reserve sua vaga pra ver quem vai 👀
              </p>
            )}
          </section>

          {/* descrição */}
          <section className="mt-6">
            <h2 className="text-carvao font-extrabold text-base">sobre</h2>
            <p className="mt-2 text-carvao/80 text-sm leading-relaxed">
              {description}
            </p>
          </section>
        </div>

        {/* ---- botão fixo de reservar ---- */}
        <div className="fixed bottom-0 inset-x-0 mx-auto max-w-sm bg-creme/95 backdrop-blur border-t border-black/5 px-5 py-4 flex items-center gap-4">
          <div className="leading-tight">
            <p className="text-carvao font-extrabold text-lg">
              {formatPrice(price)}
            </p>
            <p className="text-cinza text-xs">por pessoa</p>
          </div>

          {/* 3 estados: já reservei / esgotado / reservar */}
          {isBooked ? (
            <button
              onClick={() => onBook(experience)}
              className="flex-1 bg-oliva text-creme font-bold text-base py-3.5 rounded-full active:scale-[0.98] transition-transform"
            >
              vaga garantida ✓
            </button>
          ) : spotsLeft <= 0 ? (
            <button
              disabled
              className="flex-1 bg-black/10 text-cinza font-bold text-base py-3.5 rounded-full cursor-not-allowed"
            >
              esgotado
            </button>
          ) : (
            <button
              onClick={() => onBook(experience)}
              className="flex-1 bg-verde text-menta font-bold text-base py-3.5 rounded-full active:scale-[0.98] transition-transform"
            >
              bora? reservar vaga
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
