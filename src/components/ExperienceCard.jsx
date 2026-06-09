// MoreToLive — cartão de uma experiência (lista da home)
// Foto no topo com selo "Popular" (quando aplicável), coração e preço.
// Embaixo: título, data/local com ícones, fotos de quem vai (+contagem) e
// um botão "reservar vaga" largo, com ícone de ingresso.
// O cartão inteiro abre o detalhe (onOpen).

import { useState } from "react"
import Illustration from "./Illustration"
import SaveButton from "./SaveButton"
import { IconCalendar, IconPin, IconTicket } from "./icons"
import { formatPrice, avatarFor } from "../lib/format"

export default function ExperienceCard({
  experience,
  onOpen,
  saved = false,
  onToggleSave = () => {},
}) {
  const { id, title, activity, photo, popular, date, time, location, price } =
    experience

  // se a foto da internet falhar, caímos pra ilustração desenhada
  const [photoFailed, setPhotoFailed] = useState(false)

  // fotos de quem vai (prova social): mostra até 4 e o resto vira "+N"
  const attendees = experience.attendees || []
  const shown = attendees.slice(0, 4)
  const extra = experience.spotsFilled - shown.length

  return (
    <article
      onClick={() => onOpen(id)}
      className="bg-white rounded-[var(--radius-card)] overflow-hidden border border-black/5 cursor-pointer active:scale-[0.99] transition-transform"
    >
      {/* foto no topo (com a ilustração como reserva, caso não carregue) */}
      <div className="relative">
        {photo && !photoFailed ? (
          <img
            src={photo}
            alt={title}
            loading="lazy"
            onError={() => setPhotoFailed(true)}
            className="w-full h-44 object-cover block"
          />
        ) : (
          <div className="w-full h-44">
            <Illustration activity={activity} />
          </div>
        )}

        {/* selo "Popular" (canto superior esquerdo) */}
        {popular && (
          <span className="absolute top-3 left-3 bg-preto text-creme text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </span>
        )}

        {/* salvar (canto superior direito) */}
        <SaveButton
          saved={saved}
          onToggleSave={onToggleSave}
          className="absolute top-3 right-3"
        />

        {/* preço (canto inferior esquerdo da foto) */}
        <span className="absolute bottom-3 left-3 bg-white text-coral text-sm font-bold px-3 py-1 rounded-full">
          {formatPrice(price)}
        </span>
      </div>

      {/* conteúdo */}
      <div className="p-4">
        <h3 className="text-carvao font-extrabold text-base leading-snug">
          {title}
        </h3>

        {/* data e local com ícones */}
        <div className="mt-2 flex items-center gap-3 text-cinza text-xs">
          <span className="flex items-center gap-1 shrink-0">
            <IconCalendar className="w-4 h-4" />
            {date} · {time}
          </span>
          <span className="flex items-center gap-1 min-w-0">
            <IconPin className="w-4 h-4 shrink-0" />
            <span className="truncate">{location}</span>
          </span>
        </div>

        {/* quem vai (fotos) + vagas */}
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center">
            <div className="flex">
              {shown.map((name) => (
                <img
                  key={name}
                  src={avatarFor(name)}
                  alt=""
                  loading="lazy"
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-white -ml-2 first:ml-0"
                />
              ))}
            </div>
            {extra > 0 && (
              <span className="ml-2 text-xs font-bold text-oliva">+{extra}</span>
            )}
          </div>
          <span className="text-xs text-cinza shrink-0">
            {experience.spotsFilled} de {experience.spotsTotal} vagas
          </span>
        </div>

        {/* botão largo de reservar */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onOpen(id)
          }}
          className="mt-4 w-full bg-coral text-preto font-bold text-sm py-3 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <IconTicket className="w-4 h-4" />
          reservar vaga
        </button>
      </div>
    </article>
  )
}
