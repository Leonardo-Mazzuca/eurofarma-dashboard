import CardItemContainer from "../ui/card-item-container";
import TableBadge from "@/components/ui/table-badge";
import { Colors } from "@/utils/colors";
import { ArrowDown, ArrowUp } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";

const DonutChart = () => {
  const data = [
    { name: "Completos", value: 400, color: Colors.default.blue },
    { name: "Em andamento", value: 300, color: Colors.default.green },
    { name: "Não iniciados", value: 300, color: Colors.default.red },
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <CardItemContainer
      className="mt-5"
      title={
        <div className="flex w-full  justify-between items-center gap-2">
          <h2>Treinamentos</h2>
          <TableBadge>Hoje</TableBadge>
        </div>
      }
      contentClasses="flex flex-col justify-center"
    >
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          cx={90}
          cy={90}
          innerRadius={50}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex flex-col w-full gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex w-full justify-between gap-2">
            <div className="flex items-center gap-2">
              <div
                style={{ backgroundColor: item.color }}
                className="h-[15px] w-[15px] rounded-full"
              />
              <p>{item.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>{(item.value / total) * 100}%</p>
              <span>
                {item.value < 350 ? (
                  <ArrowUp color={Colors.default.green} size={18} />
                ) : (
                  <ArrowDown color={Colors.default.red} size={18} />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </CardItemContainer>
  );
};

export default DonutChart;
