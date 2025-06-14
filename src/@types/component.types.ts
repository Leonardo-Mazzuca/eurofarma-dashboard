import {
    type ColumnDef,
    type Table,
  } from "@tanstack/react-table"

declare global {


    interface DataTableProps<TData, TValue> {
        columns: ColumnDef<TData, TValue>[]
        table:Table<TData>
      }

    type DataTablePropsWithoutColumns<TValue, TData> = Omit<DataTableProps<TData, TValue>, "columns">
    type DataTablePropsWithoutTable<TValue, TData> = Omit<DataTableProps<TData, TValue>, "table">

}

export {}