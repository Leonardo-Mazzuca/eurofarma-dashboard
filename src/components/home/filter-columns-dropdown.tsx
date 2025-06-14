import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { homeFilterItems } from "@/lib/utils";
import { useEffect, useState } from "react";

const FilterColumnsDropDown = ({data,setData}:{data:User[],setData: (users: User[])=> void}) => {


  const [selected, setSelected] = useState("");
  const [initialData, setInitialData] = useState<User[]>([]);

  useEffect(() => {
    setInitialData(data);
  }, [data]);

  const handleFilterChange = (value: string, checked: boolean) => {
    if (checked) {
      setSelected(value);
      setData(data.filter((item) => item.status === value));

      if(value === ""){
        setData(initialData)
      }
    } 
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Filtrar colunas
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {homeFilterItems.map((item, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            className="capitalize flex items-center gap-2"
            checked={selected === item.value}
            onCheckedChange={(checked) =>handleFilterChange (item.value,checked)}
          >
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterColumnsDropDown;
