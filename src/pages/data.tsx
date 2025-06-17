import DataCard from "@/components/data/data-card";
import DataEngajementChart from "@/components/data/data-engajement-chart";
import DataFilters from "@/components/data/data-filter";
import { Button } from "@/components/ui/button";
import { useData } from "@/hooks/use-data";
import { Download } from "lucide-react";

const Data = () => {
  const { dataItems } = useData();

  return (
    <section className="px-6 py-8">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between  gap-2">
          <h2 className="font-bold text-2xl">Dados</h2>
          <Button className="lg:me-[300px]" variant={"ghost"}>
            <Download />
            Download
          </Button>
        </div>
        <div className="w-full my-5 h-[2px] bg-gray-200" />
      </div>

      <article className="w-full">
        <DataFilters />

        <section className="flex w-full gap-6">
          <div className="grid grid-cols-3 mt-3 gap-3">
            {dataItems.map((item, index) => (
              <DataCard key={index} data={item} />
            ))}
          </div>
          <div className="w-[400px]">
            <DataEngajementChart />
          </div>
        </section>
      </article>
    </section>
  );
};

export default Data;
