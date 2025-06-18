import { Card, CardContent } from "@/components/ui/card";
import { Colors } from "@/utils/colors";
import { Area } from "recharts";
import { AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const MiniAreaChart = ({ values }: { values: number[] }) => {
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
    {
      name: "Jun",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={40}>
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
        <XAxis hide dataKey="name" />
        <YAxis hide />
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
      </AreaChart>
    </ResponsiveContainer>
  );
};

const DataCard = ({
  data: { description, title, chartData },
}: {
  data: DataItem;
}) => {
  const [mainValue, totalValue] = description.split("/");

  return (
    <Card
      variant="shadow"
      className="w-full rounded-2xl flex flex-col h-[150px] xl:w-[200px] flex-1"
    >
      <CardContent className="flex flex-col justify-between h-full">
        <div>
            <p className="font-semibold text-sm text-zinc-500">{title}</p>

            <h3 className="font-bold text-2xl text-zinc-900 flex items-baseline gap-1">
            {mainValue}
            {totalValue && (
                <span className="text-gray-400 font-semibold text-base">
                /{totalValue}
                </span>
            )}
            </h3>
        </div>

        {chartData && (
          <div className="mt-2">
            <MiniAreaChart values={chartData.values} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DataCard;
