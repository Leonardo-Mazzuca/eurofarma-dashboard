
import { Button } from "./button";
import { ArrowUpDown } from "lucide-react";
import type { Column } from "@tanstack/react-table";

const SorterButton = <TData,>({ title, column }: { title: string, column: Column<TData, unknown> }) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      size={"sm"}
    >
      {title}
      <ArrowUpDown size={14} />
    </Button>
  );
};

export default SorterButton;
