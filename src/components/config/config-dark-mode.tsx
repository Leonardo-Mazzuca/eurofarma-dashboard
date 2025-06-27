
import { Switch } from "@/components/ui/switch";
import { useConfig } from "@/context/config-context";

const ConfigDarkMode = () => {
  const {isDarkMode,toggleMode} = useConfig();

  return (
    <div className="mt-5 flex items-center gap-3">
      <Switch onCheckedChange={toggleMode} checked={isDarkMode} />
      <span className="text-gray-500 dark:text-white font-medium">
        Modo escuro
      </span>
    </div>
  );
};

export default ConfigDarkMode;
