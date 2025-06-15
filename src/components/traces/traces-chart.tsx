import CardItemContainer from "@/components/ui/card-item-container";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,

  ResponsiveContainer,
} from "recharts";

const TracesChart = () => {
  const data = Array.from({ length: 24 }, (_, i) => {
    const hour = `${String(i).padStart(2, "0")}:00`;
    return {
      hour,
      uv: Math.floor(Math.random() * 5000) + 1000,
      pv: Math.floor(Math.random() * 5000) + 1000,
      amt: Math.floor(Math.random() * 5000) + 1000,
    };
  });

  return (
    <CardItemContainer
      className="border border-gray-200 my-10 shadow-none"
      variant="default"
      title={<div>
        <h2 className="font-semibold mb-2 text-zinc-600">
          Atividade
        </h2>
        <div className="w-full h-[1px] bg-gray-200" />
      </div>}
    >
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
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
            dataKey="hour"
            scale="point"
            padding={{ left: 25, right: 25 }}
            axisLine={false}
            tickLine={false}
            fontWeight={600}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            fontWeight={600}
          />
          <Tooltip />

          <Bar
            radius={10}
            dataKey="pv"
            fill="url(#colorUv)"
            background={{ fill: "#F2F7FF" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </CardItemContainer>
  );
};

export default TracesChart;
