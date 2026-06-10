// viver — Tela 6: criar/publicar uma experiência (modo anfitrião)
// Formulário simples que segue o mockup. Ao publicar, monta um objeto de
// experiência e devolve pro App (onPublish), que adiciona na lista do
// Explorar. Sem banco de dados: some se a página recarregar.

import { useState } from "react"
import { categories } from "../data/experiences"

// foto padrão caso a pessoa não escolha nenhuma
const DEFAULT_PHOTO =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop"

export default function CreateExperience({ host, onClose, onPublish }) {
  const [photoUrl, setPhotoUrl] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("wellness")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [spots, setSpots] = useState("")
  const [price, setPrice] = useState("")
  const [location, setLocation] = useState("")

  // a pessoa escolheu uma imagem -> mostra uma prévia (vale só na sessão)
  function handlePhoto(e) {
    const file = e.target.files[0]
    if (file) setPhotoUrl(URL.createObjectURL(file))
  }

  // só dá pra publicar quando os campos principais estão preenchidos
  const canPublish =
    title.trim() &&
    date.trim() &&
    time.trim() &&
    spots.trim() &&
    price.trim() &&
    location.trim()

  function handlePublish() {
    if (!canPublish) return
    const newExperience = {
      id: "user-" + Date.now(),
      title: title.trim(),
      category,
      activity: "yoga", // usado só como reserva da ilustração
      photo: photoUrl || DEFAULT_PHOTO,
      description: description.trim() || "em breve mais detalhes por aqui.",
      host: { name: host.name, avatar: host.avatar },
      date: date.trim(),
      time: time.trim(),
      duration: "1h",
      level: "iniciante",
      location: location.trim(),
      price: parseInt(price.replace(/\D/g, ""), 10) || 0,
      spotsTotal: parseInt(spots, 10) || 1,
      spotsFilled: 0,
      attendees: [],
    }
    onPublish(newExperience)
  }

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-sm lg:max-w-2xl min-h-screen bg-white flex flex-col">
        {/* ---- topo ---- */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
          <button
            onClick={onClose}
            aria-label="fechar"
            className="text-cinza text-2xl leading-none w-8 text-left active:scale-95 transition-transform"
          >
            ×
          </button>
          <span className="text-carvao font-bold text-sm">nova experiência</span>
          <span className="w-8" />
        </div>

        {/* ---- formulário ---- */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {/* foto */}
          <div className="mb-4">
            <label className="block text-carvao font-bold text-xs mb-1.5">
              foto da experiência
            </label>
            <label className="block cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhoto}
              />
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="prévia"
                  className="h-28 w-full object-cover rounded-xl"
                />
              ) : (
                <div className="h-28 bg-creme border border-dashed border-black/20 rounded-xl flex flex-col items-center justify-center gap-1 text-cinza">
                  <span className="text-2xl">📷</span>
                  <span className="text-xs">toque para adicionar uma foto</span>
                </div>
              )}
            </label>
            <p className="text-cinza text-[11px] mt-1.5">
              dica: luz natural, sem texto na foto, mostre as pessoas se
              divertindo
            </p>
          </div>

          {/* título */}
          <Field label="título">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="yoga pra quem não encosta a mão no pé"
              className={inputClass}
            />
            <p className="text-cinza text-[11px] mt-1.5">
              fale a língua de quem nunca fez. seja acolhedor e divertido
            </p>
          </Field>

          {/* categoria */}
          <Field label="categoria">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const on = cat.id === category
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={
                      "px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors " +
                      (on
                        ? "bg-verde text-menta border-verde"
                        : "bg-white text-cinza border-black/10")
                    }
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </Field>

          {/* descrição */}
          <Field label="descrição">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="conte como vai ser, o que a pessoa precisa levar, e por que ela não vai se arrepender..."
              rows={3}
              className={inputClass + " resize-none"}
            />
          </Field>

          {/* data + horário */}
          <div className="flex gap-3">
            <Field label="data" className="flex-1">
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="sáb 14 jun"
                className={inputClass}
              />
            </Field>
            <Field label="horário" className="flex-1">
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="8h"
                className={inputClass}
              />
            </Field>
          </div>

          {/* vagas + preço */}
          <div className="flex gap-3">
            <Field label="vagas" className="flex-1">
              <input
                type="number"
                inputMode="numeric"
                value={spots}
                onChange={(e) => setSpots(e.target.value)}
                placeholder="20"
                className={inputClass}
              />
            </Field>
            <Field label="preço por pessoa" className="flex-1">
              <input
                type="text"
                inputMode="numeric"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="R$ 35 (ou 0)"
                className={inputClass}
              />
            </Field>
          </div>

          {/* local */}
          <Field label="local">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="parque taquaral, campinas"
              className={inputClass}
            />
          </Field>
        </div>

        {/* ---- botão publicar (fixo embaixo) ---- */}
        <div className="px-4 py-3 border-t border-black/5">
          <button
            onClick={handlePublish}
            disabled={!canPublish}
            className={
              "w-full font-bold text-sm py-3.5 rounded-full transition-colors " +
              (canPublish
                ? "bg-verde text-menta active:scale-[0.98]"
                : "bg-black/10 text-cinza cursor-not-allowed")
            }
          >
            publicar experiência
          </button>
        </div>
      </div>
    </div>
  )
}

// estilo padrão dos campos de texto
const inputClass =
  "w-full bg-creme border border-black/10 rounded-xl px-3 py-2.5 text-sm text-carvao placeholder:text-cinza outline-none focus:border-verde/50"

// rótulo + campo
function Field({ label, children, className = "" }) {
  return (
    <div className={"mb-4 " + className}>
      <label className="block text-carvao font-bold text-xs mb-1.5">
        {label}
      </label>
      {children}
    </div>
  )
}
