import { Input, type InputProps } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
    onButtonClick: () => void
} & InputProps
const ChatInput = ({ onButtonClick,...rest }: Props) => {
  return (
    <Input
      onKeyDown={(e) => e.key === "Enter" && onButtonClick()}
      placeholder="O que melhorou do mês passado para o mês atual?"
      className="bg-gray-200 border-none h-[50px] rounded-sm mx-auto mt-auto w-full"
      suffixIcon={
        <Button  variant={"ghost"} onClick={onButtonClick}>
          <SendHorizontal />
        </Button>
      }
      {...rest}
    />
  );
};

export default ChatInput;
