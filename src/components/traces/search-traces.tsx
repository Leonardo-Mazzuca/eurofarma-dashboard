import SearchInput from "@/components/ui/search-input";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchTraces = () => {

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold my-5 dark:text-white">800 hits</h2>
      <div className="flex flex-wrap w-full gap-5 items-center">
        <div className="my-3">
          <SearchInput
            iconPosition="start"
            className="border md:w-[700px] border-gray-400 dark:border-none h-[45px]"
            placeholder="Procurar endpoint..."
          />
        </div>
        <div>
          <DatePicker triggerClasses="h-[45px]" enableTime={false} />
        </div>
        <Button
          className={cn("flex items-center gap-2 h-[45px] bg-blue-500")}
        >
          <Search />
          Pesquisar
        </Button>

      </div>
      
    </div>
  );
};

export default SearchTraces;
