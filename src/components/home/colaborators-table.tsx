import CardItemContainer from "@/components/ui/card-item-container";
import { useColaborators } from "@/hooks/use-colaborators";
import { DataTable } from "@/components/ui/data-table";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserInicials } from "@/utils/helpers";
import dayjs from "dayjs";
import StatusTag from "@/components/ui/status-tag";
import Loading from "@/components/ui/loading";

import { Input } from "@/components/ui/input";
import { useEffect, useState, type ChangeEvent } from "react";

import HideColumnsDropDown from "@/components/home/hide-columns-dropdown";
import FilterColumnsDropDown from "@/components/home/filter-columns-dropdown";
import SorterButton from "@/components/ui/sorter-button";
import TableBadge from "@/components/ui/table-badge";

const ColaboratorsTable = () => {
  const { colaborators, isLoading } = useColaborators();

  const [colaboratorsData, setColaboratorsData] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (colaborators) setColaboratorsData(colaborators);
  }, [colaborators]);

  const columns: ColumnDef<User>[] = [
    {
      id: "No.",
      accessorKey: "id",
      header: "No.",
      cell: ({ row }) =>
        row.original.id < 10 ? "0" + row.original.id : row.original.id,
    },
    {
      id: "Pontos",
      accessorKey: "points",
      header: ({ column }) => <SorterButton column={column} title="Pontos" />,
      cell: ({ row }) => (
        <TableBadge className="md:w-[150px]">
          {row.original.points}
        </TableBadge>
      ),
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
      id: "Status",
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <StatusTag status={row.original.status} />,
    },
    {
      id: "Tempo",
      accessorKey: "time",
      header: "Tempo",
      cell: ({ row }) => {
        const start = dayjs(row.original.time);
        const now = dayjs();

        const diffInMinutes = now.diff(start, "minute");
        return `${diffInMinutes} min`;
      },
    },
    {
      accessorKey: "id",
      header: undefined,
      enableHiding: false,
      cell: () => <Button className="bg-blue-500">Detalhes</Button>,
    },
  ];

  const table = useReactTable({
    data: colaboratorsData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setColaboratorsData(
      colaborators.filter((colaborator) =>
        colaborator.fullName
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CardItemContainer
      className="mt-5"
      title="Ranking de colaboradores por engajamento"
      contentClasses="flex-col items-start"
    >
      <div className="flex items-center gap-3">
        <Input
          placeholder="Buscar usuários..."
          value={search}
          onChange={(e) => onSearch(e)}
          className="w-[400px]"
        />
        <HideColumnsDropDown table={table}/>
        <FilterColumnsDropDown data={colaborators} setData={setColaboratorsData}/>
      </div>
      <DataTable columns={columns} table={table} />
    </CardItemContainer>
  );
};

export default ColaboratorsTable;
