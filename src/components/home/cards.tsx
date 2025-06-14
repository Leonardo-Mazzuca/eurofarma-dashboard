import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import TableBadge from "@/components/ui/table-badge";





const Cards = () => {

    const cardItems = [
        {
          title: "Newsletter (CTR)",
          total: "1294",
          percent: "1.5%",
          up: false,
          footerTitle: "Taxa de cliques",
          footerRight: "25658",
          footerLeft: "Ultima semana",
        },
        {
          title: "Total de acessos",
          total: "1294",
          percent: "2.5%",
          up: true,
          footerTitle: "Comparado a 5240 de ontem",
          footerRight: "22658",
          footerLeft: " Semana passada",
        },
      ];

  return (
  <div className="mt-10 flex flex-col gap-5">
        {cardItems.map((item, index) => (
          <Card className="gap-2" key={index}>
            <div className="px-5">
              <CardHeader className="px-0">
                <CardTitle className="text-2xl text-zinc-500">
                  {item.title}
                </CardTitle>
                <CardAction>
                  <TableBadge>
                    Hoje
                  </TableBadge>
                </CardAction>
              </CardHeader>
              <div className="w-full my-1 h-[1px] bg-zinc-200" />
            </div>
            <CardContent className="mt-0 flex items-center justify-between">
              <h2 className="font-bold text-4xl">{item.total}</h2>
              <p>
                {item.up ? (
                  <span className="text-green-500 flex items-center gap-1 font-semibold">
                    <ArrowUp />
                    {item.percent}
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center gap-1 font-semibold">
                    <ArrowDown />
                    {item.percent}
                  </span>
                )}
              </p>
            </CardContent>
            <CardFooter className="flex-col items-start flex-1 w-full">
              <h4 className="text-zinc-400">
                {item.footerTitle}
              </h4>
              <div className="flex mt-3 w-full justify-between items-center">
                <p className="text-zinc-600 font-medium">
                  {item.footerLeft}
                </p>
                <p className="text-zinc-600 font-medium">
                  {item.footerRight}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
  )
}

export default Cards