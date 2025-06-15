import { DataTable } from "@/components/ui/data-table";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import dayjs from "dayjs";
import ResultStatusTag from "../ui/result-status-tag";
import SorterButton from "../ui/sorter-button";

type Props = {
  traces: Trace[];
};
const TracesTable = ({ traces }: Props) => {
  const columns: ColumnDef<Trace>[] = [
    {
      accessorKey: "time",
      cell: ({ row }) => dayjs(row.original.time).format("DD/MM/YYYY HH:mm:ss"),
      header: ({ column }) => <SorterButton column={column} title="Data" />,
    },
    {
      header: ({ column }) => <SorterButton column={column} title="Usuário" />,
      accessorKey: "username",
    },
    {
      accessorKey: "endpoint",
      header: "Endpoint",
    },
    {
      accessorKey: "resultStatus",
      header: ({ column }) => <SorterButton column={column} title="Status" />,
      cell: ({ row }) => (
      
          <ResultStatusTag status={row.original.resultStatus} />

      ),
    },
    {
      accessorKey: "enviroment",
      header: "Ambiente",
    },
  ];

  const table = useReactTable({
    data: traces,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
  });

  return (
    <div className="px-5">
      <DataTable variant="stripped" columns={columns} table={table} />
    </div>
  );
};

export default TracesTable;
