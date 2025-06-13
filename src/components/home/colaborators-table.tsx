import CardItemContainer from "@/components/ui/card-item-container";
import { useColaborators } from "@/hooks/use-colaborators";
import { DataTable } from "@/components/ui/data-table";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserInicials } from "@/utils/helpers";

const ColaboratorsTable = () => {

  const { colaborators, isLoading } = useColaborators();

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "id",
      header: "No.",
      cell: ({ row }) =>
        row.original.id < 10 ? "0" + row.original.id : row.original.id,
    },
    {
      accessorKey: "points",
      header: "Pontos",
      cell: ({ row }) => (
        <Badge className="bg-zinc-200/50 w-full text-zinc-700 rounded-sm">
          {row.original.points}
        </Badge>
      ),
    },
    {
      accessorKey: "fullName",
      header: "Colaborador",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={row.original.image} />
            <AvatarFallback>{getUserInicials(row.original.fullName)}</AvatarFallback>
          </Avatar>
          <p>{row.original.fullName}</p>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "time",
      header: "Tempo",
    },
    {
      id: "id",
      cell: () => <Button className="bg-blue-500">Detalhes</Button>,
    },
  ];

  return (
    <CardItemContainer
      className="mt-5"
      title="Ranking de colaboradores por engajamento"
    >
      <DataTable columns={columns} data={colaborators} />
    </CardItemContainer>
  );
};

export default ColaboratorsTable;
