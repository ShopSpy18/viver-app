// viver — botãozinho de salvar (coração)
// Apagado = contorno cinza; salvo = coração verde "aceso".
// Para o clique de propagar pro cartão (senão abriria o detalhe).

export default function SaveButton({ saved, onToggleSave, className = "" }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        onToggleSave()
      }}
      aria-label={saved ? "remover dos salvos" : "salvar experiência"}
      aria-pressed={saved}
      className={
        "w-9 h-9 rounded-full bg-white/90 flex items-center justify-center active:scale-90 transition-transform " +
        className
      }
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[18px] h-[18px]"
        fill={saved ? "#ff7a59" : "none"}
        stroke={saved ? "#ff7a59" : "#6f7d6c"}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  )
}
