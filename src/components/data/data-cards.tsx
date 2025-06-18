
import DataCard from "@/components/data/data-card";
import { useData } from "@/hooks/use-data";

const DataCards = () => {
  const { dataItems } = useData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 items-stretch">
      {dataItems.map((item, index) => (
        <DataCard key={index} data={item} />
      ))}
    </div>
  );
};

export default DataCards;
