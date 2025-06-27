import { Switch } from "@/components/ui/switch"



const ConfigNotifications = () => {
  return (
    <div className="my-3">
      <div className="mt-5 flex items-center gap-3">
          <Switch  />
          <span className="text-gray-500 dark:text-white font-medium">
            Permitir notificações
          </span>
        </div>
    </div>
  )
}

export default ConfigNotifications