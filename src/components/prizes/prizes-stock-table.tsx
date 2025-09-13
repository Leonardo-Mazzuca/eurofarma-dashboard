import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import CardItemContainer from "../ui/card-item-container";
import { usePrizes } from "@/hooks/use-prizes";
import { DataTable } from "../ui/data-table";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import StatusInfo from "../ui/status-info";
import Loading from "../ui/loading";

const PrizesStockTable = () => {
  const { prizes, isLoading } = usePrizes();

  const columns: ColumnDef<PrizeProduct>[] = [
    {
      id: "Cod",
      header: "Cod",
      accessorKey: "id",
      size: 20,
      cell: ({row}) => (
        row.original.id < 10 ? "0" + row.original.id : row.original.id
      )
    },
    {
      id: "quantity",
      header: "Estoque",
      accessorKey: "quantity",
      size: 20,
      cell: ({ row }) => (
        <div className="flex items-center w-full">
        <Badge className="bg-zinc-100 w-[50px] rounded-sm dark:bg-zinc-700 dark:text-white text-black">
          {row.original.quantity}
        </Badge>
      </div>
      ),
    },
    {
      id: "ordereds",
      accessorKey: "ordereds",
      header: () => 'Resgatados',
      cell: ({ row }) => (
        <div className="flex items-center w-full">
          <StatusInfo status={row.original.avaliable} />
          <Badge className="bg-zinc-100 w-[50px] rounded-sm dark:bg-zinc-700 dark:text-white text-black">
            {row.original.ordereds}
          </Badge>
        </div>
      ),
    },
    {
      id: "name",
      header: "Nome",
      accessorKey: "name",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Avatar className="w-4 h-4">
            <AvatarImage src={row.original.image} />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          <p>{row.original.name}</p>
        </div>
      ),
    },
    {
      accessorKey: "id",
      header: undefined,
      enableHiding: false,
      cell: () => <Button className="bg-blue-500 ms-12">Detalhes</Button>,
    },
  ];

  const table = useReactTable({
    data: prizes,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
  });

  if(isLoading){
    return <Loading /> 
  }

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
      contentClasses="w-full flex flex-col"
    >
      <DataTable columns={columns} table={table} />
      <Button variant={"ghost"} className="me-auto text-blue-500">
        Ver todos os produtos
      </Button>
    </CardItemContainer>
  );
};

export default PrizesStockTable;
