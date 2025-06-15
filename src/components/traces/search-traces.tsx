import SearchInput from "@/components/ui/search-input";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Colors } from "@/utils/colors";

const SearchTraces = () => {
  const bgColor = Colors.default.darkBlue;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold my-5">800 hits</h2>
      <div className="flex w-full gap-5 items-center">
      <div>
          <SearchInput
            iconPosition="start"
            className="border w-[700px] border-gray-400 h-[45px]"
            placeholder="Procurar endpoint..."
          />
        </div>
        <div>
          <DatePicker triggerClasses="h-[45px]" enableTime={false} />
        </div>
        <Button
          className={cn("flex items-center gap-2 h-[45px]", `bg-[${bgColor}]`)}
        >
          <Search />
          Pesquisar
        </Button>

      </div>
      
    </div>
  );
};

export default SearchTraces;
