
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


const FeatureToggleTable = () => {

  const {colaborators} = useColaborators();
  const {channels} = useChannels();

  const columns: ColumnDef<User>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
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
    <div className="mt-10">
      <DataTable columns={columns} table={table} />
    </div>
  )
}

export default FeatureToggleTable