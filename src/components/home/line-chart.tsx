import CardItemContainer from "@/components/ui/card-item-container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { homeLineChartFilter } from "@/lib/utils";
import { Colors } from "@/utils/colors";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Area, CartesianGrid, Tooltip } from "recharts";
import { AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const [filterItem, setfilterItem] = useState("now");

  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 7400,
      amt: 2400,
    },
    {
      name: "Fev",
      uv: 3000,
      pv: 5398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 8000,
      pv: 7800,
      amt: 2290,
    },
    {
      name: "Abr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Maio",
      uv: 9890,
      pv: 10800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jun",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <CardItemContainer
      className="mt-5"
      title={
        <div className="flex w-full items-center gap-5">
          <h2>Acessos</h2>
          <div className="flex w-full pe-10 justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex ps-5 items-center gap-2 text-sm">
                <span className="text-muted-foreground">
                  {
                    homeLineChartFilter.find(
                      (item) => item.value === filterItem
                    )?.label
                  }
                </span>
                <ChevronDown size={20} className="text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {homeLineChartFilter.map((item, index) => (
                  <DropdownMenuItem
                    onClick={() => setfilterItem(item.value)}
                    key={index}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="h-[10px] w-[10px] rounded-full bg-blue-500" />
                <p className="text-gray-400 font-normal text-sm">Período atual</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-[10px] w-[10px] rounded-full bg-gray-400" />
                <p className="text-gray-400 font-normal text-sm">Mesmo Período 6 mêses atrás</p>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={Colors.default.blue}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={Colors.default.blue}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="natural"
            dataKey="uv"
            strokeWidth={3}
            stroke={Colors.default.blue}
            fillOpacity={1}
            fillRule="inherit"
            stackId="1"
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#A3A3A3"
            strokeDasharray="4 4"
            strokeWidth={2}
            fillOpacity={0.05}
            name="Mesmo período ano passado"
            stackId="1"
          />
    
   
        </AreaChart>
      </ResponsiveContainer>
    </CardItemContainer>
  );
};

export default LineChart;
