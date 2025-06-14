

import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import { Check, X } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const HideColumnsDropDown = <TData, TValue>({table}:DataTablePropsWithoutColumns<TData, TValue>) => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="ml-auto">
        Esconder coluna
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {table
        .getAllColumns()
        .filter((column) => column.getCanHide())
        .map((column) => {
          return (
            <DropdownMenuCheckboxItem
              key={column.id}
              className="capitalize flex items-center gap-2"
              checked={column.getIsVisible()}
              onCheckedChange={(value) =>
                column.toggleVisibility(!!value)
              }
            >
              {column.getIsVisible() ? (
                <Check size={16} />
              ) : (
                <X size={16} />
              )}
              {column.id}
            </DropdownMenuCheckboxItem>
          );
        })}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default HideColumnsDropDown