import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import CardItemContainer from "../ui/card-item-container";
import SorterButton from "../ui/sorter-button";
import StatusTag from "../ui/status-tag";
import { DataTable } from "../ui/data-table";
import { useColaborators } from "@/hooks/use-colaborators";

const DataCollaboratorsPointRank = () => {

  const {dataPointsItems} = useColaborators();

  const columns: ColumnDef<DataPointsItem>[] = [
    {
        id: 'No.',
        accessorKey: "user_id",
        header: "No.",
        cell: ({ row }) =>
          row.original.id < 10 ? "0" + row.original.id : row.original.id,
    },
    {
        id: "Pontos",
        accessorKey: "points",
        header: ({ column }) => <SorterButton column={column} title="Pontos" />,
    },
    {
        id: "Colaborador",
        accessorKey: "username",
        header: "Colaborador",
    },
    {
        id: "Status",
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <StatusTag status={row.original.status} />,
    }
  ];

  const table = useReactTable({
    data: dataPointsItems,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
  });

  return (
    <CardItemContainer
      className={"w-full flex flex-col"}
      
      title={
        <div>
            <h2 className="text-zinc-700 dark:text-gray-200 text-sm font-semibold">
             Ranking de colaboradores por ponto
            </h2>
        </div>
      }
      contentClasses="w-full h-[400px]"
    >

        <DataTable columns={columns} table={table} />
    </CardItemContainer>
  );
};

export default DataCollaboratorsPointRank;
