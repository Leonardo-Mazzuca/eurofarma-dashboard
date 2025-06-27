import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { areas } from "@/lib/utils";

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-3 flex flex-col w-full flex-1 gap-3">{children}</div>
  );
};

const UserProfileCredentials = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 items-stretch">
      <InputWrapper>
        <Label>Email</Label>
        <Input
          type="email"
          className="lg:w-[500px] dark:bg-zinc-600 border-0 bg-gray-100 w-full"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Nome completo</Label>
        <Input className="lg:w-[500px] border-0 bg-gray-100 dark:bg-zinc-600 w-full" />
      </InputWrapper>
      <InputWrapper>
        <Label>Usuário</Label>
        <Input className="lg:w-[500px] border-0 bg-gray-100 dark:bg-zinc-600 w-full" />
      </InputWrapper>
      <InputWrapper>
        <div className="flex flex-col gap-3">
          <Label>Área</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="w-[200px] text-gray-700 dark:text-white dark:bg-zinc-600 border-0 bg-gray-100 flex justify-between items-center"
                variant={"ghost"}
              >
                Selecione <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {areas.map((item, index) => (
                <DropdownMenuItem key={index}>
                 {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </InputWrapper>
    </div>
  );
};

export default UserProfileCredentials;
