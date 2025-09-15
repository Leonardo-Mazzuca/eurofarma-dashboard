import CardItemContainer from "@/components/ui/card-item-container";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getUserInicials } from "@/utils/helpers";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {
  title: string;
  rankItems: {
    image: string;
    rank: number;
    name: string;
    description: string;
  }[];
  wrapperClasses?: string;
};

const DataRankItem = ({ wrapperClasses, rankItems, title }: Props) => {
  return (
    <CardItemContainer
      className={"w-full flex flex-col"}
      title={<h2 className="text-gray-500 dark:text-gray-200 text-sm font-medium">{title}</h2>}
      contentClasses="w-full"
    >
      <div className={cn("flex-1 h-[500px] overflow-y-auto scrollbar-hide",wrapperClasses)}>
        <div className="flex flex-col gap-3">
          {rankItems.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <Avatar className="w-10 h-10">
                <AvatarImage src={item.image} />
                <AvatarFallback>{getUserInicials(item.name)}</AvatarFallback>
              </Avatar>

              <div className="flex items-center justify-between w-full">
                <div>
                  <h2 className="text-zinc-800 dark:text-gray-400 my-0 text-sm font-bold">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-300 text-sm font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <span>{item.rank}</span>
                  {item.rank % 2 === 0 ? (
                    <ChevronUp size={16} className="text-green-500" />
                  ) : (
                    <ChevronDown size={16} className="text-red-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="text-blue-500" variant={"ghost"}>
          Ver todos os colaboradores
        </Button>
      </div>
    </CardItemContainer>
  );
};

export default DataRankItem;
