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
    <section className="px-6 dark:bg-zinc-800 py-8">
      <Header
        title="Dados"
        leftChildren={
          <Button className="lg:me-[300px] dark:text-white" variant={"ghost"}>
            <Download />
            Download
          </Button>
        }
      />

      <article className="w-full">
        <DataFilters />

        <section className="flex gap-6 xl:flex-row flex-col mt-5">
          <div className="flex w-full gap-6 flex-col xl:w-[1100px]">
            <div className="flex flex-col gap-6 w-full">
              <div className="grid w-full gap-6 xl:grid-cols-4 items-stretch">
                <div className="col-span-2">
                  <DataCards />
                </div>
                <div className="col-span-2 h-full">
                  <DataEngajementChart />
                </div>
              </div>
              <DataProgressItems />
            </div>
            <div className="flex xl:flex-row flex-col items-stretch gap-6 w-full">
              <div className="flex-1">
                <DataRankItem
                  title="% de acertos + engajamento por colaborador"
                  rankItems={rankMock}
                />
              </div>
              <div className="flex-1">
                <DataRankItem
                  title="% de acertos + engajamento por área"
                  rankItems={rankMock}
                />
              </div>
            </div>
          </div>

          <div className="flex max-xl:w-full flex-col items-stretch gap-5">
            <DataRankItem
              title="Engajamento programas por colaborador"
              rankItems={rankMock}
              wrapperClasses="h-[800px]"
            />

            <Button
              className="flex items-center text-blue-500 gap-2"
              variant={"ghost"}
            >
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
