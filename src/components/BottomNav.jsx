// MoreToLive — barra de navegação de baixo
// 4 abas: explorar / salvos / minhas vagas / perfil (sem "mensagens").
// Ícones de linha; aba ativa em coral, inativas em oliva.

import { IconCompass, IconHeartNav, IconTicket, IconUser } from "./icons"

const items = [
  { id: "explorar", label: "explorar", Icon: IconCompass },
  { id: "salvos", label: "salvos", Icon: IconHeartNav },
  { id: "minhasVagas", label: "minhas vagas", Icon: IconTicket },
  { id: "perfil", label: "perfil", Icon: IconUser },
]

export default function BottomNav({ active = "explorar", onNavigate }) {
  return (
    <nav className="fixed bottom-0 inset-x-0 mx-auto max-w-sm bg-white border-t border-black/5 lg:bottom-5 lg:max-w-md lg:rounded-2xl lg:border lg:overflow-hidden">
      <ul className="flex">
        {items.map((item) => {
          const isActive = item.id === active
          const Icon = item.Icon
          return (
            <li key={item.id} className="flex-1">
              <button
                onClick={() => onNavigate && onNavigate(item.id)}
                className={
                  "w-full py-2.5 flex flex-col items-center gap-1 transition-colors " +
                  (isActive ? "text-coral" : "text-oliva")
                }
              >
                <Icon className="w-6 h-6" />
                <span className="text-[10px] font-bold">{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
