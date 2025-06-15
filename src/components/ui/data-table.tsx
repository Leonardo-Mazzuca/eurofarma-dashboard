"use client";

import {
  Table as ComponentTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";

type Props<TData, TValue> = {
  variant?: "default" | "stripped"
} & DataTableProps<TData, TValue>

export function DataTable<TData, TValue>({
  columns,
  table,
  variant
}: Props<TData, TValue>) {

  const renderClasses = (index:number) => {
    if( variant === 'stripped' ) {
      return `${index % 2 === 1 ? 'bg-white' : 'bg-gray-200'}`
    }
  }

  return (
    <ComponentTable className="w-full data-table">
      <TableHeader className="data-thead">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="data-tbody">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row,index) => (
            <TableRow
              className={cn("data-table-row",renderClasses(index))}
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  data-label={
                    table
                      .getAllColumns()
                      .filter((column) => column.getCanHide())
                      .find((column) => column.id === cell.column.id)?.id
                  }
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow className="data-table-row">
            <TableCell colSpan={columns.length} className="h-24 text-center">
              Sem resultados.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </ComponentTable>
  );
}
