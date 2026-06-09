// viver — Tela 3: confirmação da reserva ("vaga garantida")
// Aparece logo depois de reservar. É comemorativa e simples: mostra um
// resumo do que foi reservado e um botão pra voltar a explorar.
//
// Lembrete: nesta fase não tem pagamento. O combinado é manual, então
// avisamos que o anfitrião vai falar com a pessoa.

import { formatPrice } from "../lib/format"

export default function ConfirmationScreen({ experience, onExplore }) {
  const { title, host, date, time, location, price } = experience

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-sm min-h-screen bg-preto flex flex-col px-6 py-12 text-creme">
        {/* selo de sucesso */}
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-coral text-preto text-4xl flex items-center justify-center">
            ✓
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-white">
            vaga garantida!
          </h1>
          <p className="mt-2 text-creme/80 leading-relaxed">
            tá tudo certo. agora é só aparecer e viver essa. 🌱
          </p>
        </div>

        {/* resumo do que foi reservado */}
        <div className="mt-10 bg-white rounded-[var(--radius-card)] p-5 text-carvao">
          <h2 className="font-extrabold text-lg leading-snug">{title}</h2>

          <div className="mt-3 flex items-center gap-2">
            <img
              src={host.avatar}
              alt={host.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-cinza text-sm">com {host.name}</span>
          </div>

          <div className="mt-4 space-y-1.5 text-sm text-carvao/80">
            <p>📅 {date} · ⏰ {time}</p>
            <p>📍 {location}</p>
            <p>💸 {formatPrice(price)} · combinado direto com {host.name}</p>
          </div>
        </div>

        {/* aviso amigável sobre o pagamento manual */}
        <p className="mt-4 text-center text-creme/70 text-xs leading-relaxed">
          por enquanto o pagamento é combinado na hora, sem cartão pelo app.
        </p>

        {/* botão pra continuar explorando */}
        <button
          onClick={onExplore}
          className="mt-auto w-full bg-coral text-preto font-bold text-base py-4 rounded-full active:scale-[0.98] transition-transform"
        >
          explorar mais experiências
        </button>
      </div>
    </div>
  )
}
