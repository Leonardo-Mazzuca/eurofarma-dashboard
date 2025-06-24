
import { DataTable } from "@/components/ui/data-table";
import { useColaborators } from "@/hooks/use-colaborators";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import SorterButton from "@/components/ui/sorter-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserInicials } from "@/utils/helpers";
import { useChannels } from "@/hooks/use-channels";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";


const FeatureToggleTable = () => {

  const {colaborators} = useColaborators();
  const {channels} = useChannels();

  const columns: ColumnDef<User>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <div className="flex items-center gap-2">
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="cursor-pointer"
            data-slot="checkbox"
            
          />
          {table.getSelectedRowModel().rows.length > 0 && (
            <div className="flex items-center gap-2">
              <span>
                {table.getSelectedRowModel().rows.length} Selecionados
              </span>
              <Button className="w-[25px] h-[25px] rounded-sm" size={"icon"} variant={"destructive"}>
                <Trash size={16}/>
              </Button>
            </div>
          )}
        </div>
      ),
      
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select line"
        />
      ),
    },
    {
      id: "id",
      accessorKey: "id",
      header: ({ column }) => <SorterButton column={column} title="ID" />,
      cell: ({ row }) =>
        row.original.id < 10 ? "0" + row.original.id : row.original.id,
    },
    {
      id: "Colaborador",
      accessorKey: "fullName",
      header: ({ column }) => <SorterButton column={column} title="Colaborador" />,
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={row.original.image} />
            <AvatarFallback>
              {getUserInicials(row.original.fullName)}
            </AvatarFallback>
          </Avatar>
          <p>{row.original.fullName}</p>
        </div>
      ),
    },
    {
      id: "email",
      accessorKey: "email",
      header: "Email"
    },
    {
      id: "phone",
      accessorKey: "phone_number",
      header: "Telefone",
    },
    {
      id: "area",
      accessorKey: "channel_id",
      header: "Área",
      cell: ({row}) => (
        <p>{channels.find(channel => channel.id === row.original.channel_id)?.name}</p>
      )
    },
  ];

  const table = useReactTable({
    data: colaborators,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    enableRowSelection: true,
  });

  return (
    <div className="mt-10 shadow-2xs rounded-lg xl:w-[1200px]">
      <DataTable theadClasses="shadow-md" tableCellClasses="border-gray-100 dark:border-zinc-700" columns={columns} table={table} />
    </div>
  )
}

export default FeatureToggleTable