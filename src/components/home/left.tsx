import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import localizedFormat from "dayjs/plugin/localizedFormat";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

dayjs.extend(localizedFormat);
dayjs.locale("pt-br");

const HomeHeader = () => {
  const today = dayjs();
  return (
    <div>
      <h2 className="text-2xl text-zinc-600 font-semibold">Hoje</h2>
      <p className="text-muted-foreground">
        {today.format("ddd, DD MMM, YYYY, hh.mm A")}
      </p>
    </div>
  );
};

const HomeLeft = () => {
  const cardItems = [
    {
      title: "Newsletter (CTR)",
      total: "1294",
      percent: "1.5%",
      up: false,
      bottom: <div></div>,
    },
    {
      title: "Total de acessos",
      total: "1294",
      percent: "2.5%",
      up: true,
      bottom: <div></div>,
    },
  ];

  return (
    <div className="bg-neutral-100 py-8 px-6 h-screen w-[400px]">
      <HomeHeader />

      <div className="mt-10 flex flex-col gap-5">
        {cardItems.map((item, index) => (
          <Card className="gap-2" key={index} >
            <div className="px-5">
              <CardHeader className="px-0">
                <CardTitle className="text-2xl text-zinc-500">{item.title}</CardTitle>
                <CardAction className="bg-zinc-100 px-4 text-zinc-500 rounded-sm">Hoje</CardAction>
              </CardHeader>
              <div className="w-full my-1 h-[1px] bg-zinc-200" />
            </div>
            <CardContent className="mt-0 flex items-center justify-between">
              <h2 className="font-bold text-4xl">
                {item.total}
              </h2>
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
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeLeft;
