import DataCards from "@/components/data/data-cards";
import DataEngajementChart from "@/components/data/data-engajement-chart";
import DataFilters from "@/components/data/data-filter";
import DataProgressItems from "@/components/data/data-progress-items";
import DataRankItem from "@/components/data/data-rank-item";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import rankMock from "@/utils/mock";
import { ChevronRight, Download } from "lucide-react";

const Data = () => {
  return (
    <section className="px-6 py-8">
        <Header
          title="Dados"
          leftChildren={
            <Button className="lg:me-[300px]" variant={"ghost"}>
              <Download />
              Download
            </Button>
          }
        />
   

      <article className="w-full">
        <DataFilters />

        <section className="flex gap-6 xl:flex-row flex-col mt-5">
          <div className="flex w-full xl:w-[1100px] gap-6 flex-col">
            <div className="flex xl:flex-row flex-col gap-5 items-stretch">
              <DataCards />
              <DataEngajementChart />
            </div>

            <DataProgressItems />
            <div className="flex xl:flex-row flex-col items-center gap-6 w-full">
              <DataRankItem
                title="% de acertos + engajamento por colaborador"
                rankItems={rankMock}
              />
              <DataRankItem
                title="% de acertos + engajamento por área"
                rankItems={rankMock}
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <DataRankItem
              title="Engajamento programas por colaborador"
              rankItems={rankMock}
              wrapperClasses="h-[800px]"
            />

            <Button className="flex items-center text-blue-500 gap-2" variant={"ghost"}>
              Ver rank completo
              <ChevronRight />
            </Button>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Data;
