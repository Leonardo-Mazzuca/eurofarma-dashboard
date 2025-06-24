import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dataLineTimeFilter, dataTopicFilters } from "@/lib/utils";
import { useState } from "react";

const DataFilters = () => {
  const [lineTimeItem, setLineTimeItem] = useState(dataLineTimeFilter[0].value);
  const [topicItem, setTopicItem] = useState(dataTopicFilters[0].value);

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="font-medium text-gray-500 dark:text-gray-200" variant="outline">
            Linha do tempo:{" "}
            <span className="text-black dark:text-gray-400 font-bold">
              {
                dataLineTimeFilter.find((item) => item.value === lineTimeItem)
                  ?.label
              }
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          {dataLineTimeFilter.map((item, index) => (
            <DropdownMenuCheckboxItem
              checked={item.value === lineTimeItem}
              onCheckedChange={() => setLineTimeItem(item.value)}
              key={index}
            >
              {item.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="font-medium text-gray-500 dark:text-gray-200" variant="outline">
            Topicos:{" "}
            <span className="text-black dark:text-gray-400 font-bold">
              {dataTopicFilters.find((item) => item.value === topicItem)?.label}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          {dataTopicFilters.map((item, index) => (
            <DropdownMenuCheckboxItem
              checked={item.value === topicItem}
              onCheckedChange={() => setTopicItem(item.value)}
              key={index}
            >
              {item.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DataFilters;
