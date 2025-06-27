
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const UserProfileAvatar = () => {
  return (
    <div className="flex max-md:flex-col justify-between w-full gap-6 my-3">
      <div className="flex gap-2 items-center">
        <Avatar className="w-[100px] h-[100px]">
          <AvatarImage src="https://github.com/leonardo-mazzuca.png" />
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-zinc-800 font-semibold dark:text-white text-2xl">
            Leonardo de Souza Mazzuca
          </h2>
          <p className="text-gray-500 dark:text-gray-300">
            leonardo.mazzuca@eurofarma.com
          </p>
        </div>
      </div>
      <Button className="bg-blue-500">Editar</Button>
    </div>
  );
};

export default UserProfileAvatar;
