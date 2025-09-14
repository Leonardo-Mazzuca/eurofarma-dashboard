import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import CardItemContainer from "../ui/card-item-container";
import { useConfig } from "@/context/config-context";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

const PrizesOrderChart = () => {

  const {isDarkMode} = useConfig();

  const data = [
    { month: "JAN", value: 120, goal: 400 },
    { month: "FEB", value: 140, goal: 400 },
    { month: "MAR", value: 130, goal: 400 },
    { month: "APR", value: 250, goal: 400 },
    { month: "MAY", value: 280, goal: 400 },
    { month: "JUN", value: 220, goal: 400 },
    { month: "JUL", value: 260, goal: 400 },
    { month: "AUG", value: 110, goal: 400 },
    { month: "SEP", value: 270, goal: 400 },
    { month: "OCT", value: 330, goal: 400 },
    { month: "NOV", value: 390, goal: 400 },
    { month: "DEC", value: 410, goal: 410 },
  ];

  return (
    <div className=" w-full">
      <CardItemContainer
        title={
          <div>
            <div className="flex w-full items-center justify-between">
              <h2 className="text-gray-500 text-sm dark:text-gray-200 font-medium">
                Pedidos realizados
              </h2>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    className="flex items-center gap-2 p-0"
                    variant={"ghost"}
                  >
                    Mês
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Diario</DropdownMenuItem>
                  <DropdownMenuItem>Semanal</DropdownMenuItem>
                  <DropdownMenuItem>Mensal</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-full h-[1px] my-3 bg-gray-300" />
          </div>
        }
        className="h-full px-0"
        contentClasses="p-0 flex-1 h-full"
      >
        <ResponsiveContainer height={170} width="100%">
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              bottom: 5,
              right: 15,
            }}
            barSize={20}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="80%" stopOpacity={0.9} stopColor="#1B59F8" />
                <stop offset="20%" stopOpacity={0.9} stopColor="#1B59F8" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              scale="point"
              axisLine={false}
              tickLine={false}
              fontWeight={600}
              padding={{ left: 15, right: 15 }}
              fontSize={10}
              interval={0}
            />
            <YAxis
              fontSize={10}
              dataKey={"value"}
              scale={"pow"}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />

            <Bar
              radius={15}
              barSize={10}
              dataKey="value"
              fill="url(#colorUv)"
              background={{ fill: isDarkMode ? "#181818" : "#F2F7FF" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardItemContainer>
    </div>
  );
};

export default PrizesOrderChart;
