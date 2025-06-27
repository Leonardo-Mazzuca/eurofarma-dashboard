import ConfigDarkMode from "@/components/config/config-dark-mode";
import ConfigNotifications from "@/components/config/config-notifications";
import UserProfileAvatar from "@/components/config/user-profile-avatar";
import UserProfileCredentials from "@/components/config/user-profile-credentials";
import Header from "@/components/ui/header";


const Line = () => {
  return <div className="w-full h-[2px] bg-gray-200 dark:bg-zinc-600 my-5" />;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
      <h2 className="text-zinc-800 font-semibold text-xl">{children}</h2>
  );
}
const Config = () => {


  return (
    <div className="px-8 py-6 dark:bg-zinc-800">
      <Header title="Configurações" />

      <div>
        <Title>Perfil</Title>

        <UserProfileAvatar />

        <UserProfileCredentials />

        <Line />
      </div>

      <div>
        <Title>Notificações</Title>
        <ConfigNotifications />
        <Line />
      </div>

      <div>
        <Title>Aparência</Title>
        <ConfigDarkMode />
        <Line />
      </div>
    </div>
  );
};

export default Config;
