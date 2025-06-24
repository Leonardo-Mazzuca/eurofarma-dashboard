import Header from "@/components/ui/header"
import { Switch } from "@/components/ui/switch"
import { useConfig } from "@/context/config-context"



const Config = () => {

  const {toggleMode, isDarkMode} = useConfig();

  return (
    <div className="px-8 py-6">
      <Header
        title="Configurações"
      />

      <div>
        <h2 className="text-zinc-800 font-semibold text-xl">
          Aparência
        </h2>

        <div className="mt-5 flex items-center gap-3">
          <Switch onCheckedChange={toggleMode} checked={isDarkMode} />
          <span className="text-gray-500 font-medium">Modo escuro</span>
        </div>
      </div>
    </div>
  )
}

export default Config