import DataCollaboratorsPointRank from "@/components/data/data-collaborator-points-rank";
import DataProgressItem from "@/components/data/data-progress-item";
import PrizesOrderChart from "@/components/prizes/prizes-orders-chart";
import PrizesOrdersTable from "@/components/prizes/prizes-orders-table";
import PrizesStockTable from "@/components/prizes/prizes-stock-table";
import Header from "@/components/ui/header";

const Prizes = () => {
  const firstRowItems = [
    {
      title: "Moleton",
      progress: 74,
      image: "https://picsum.photos/id/238/100/100",
      firstColor: "#FFA500",
      secondColor: "#FF92A5",
    },
    {
      title: "Teclado",
      progress: 52,
      image: "https://picsum.photos/id/237/100/100",
      firstColor: "#FF4D4D",
      secondColor: "#FF92A5",
    },
    {
      title: "Pass de academia",
      progress: 36,
      image: "https://picsum.photos/id/236/100/100",
      firstColor: "#FF4D4D",
      secondColor: "#FF92A5",
    },
  ];

  return (
    <section className="px-6 dark:bg-zinc-800 py-8">
      <Header title="Prêmios" />

      <article className="w-full">
        <section className="flex gap-6 xl:flex-row flex-col mt-5">
          <div className="flex w-full gap-6 flex-col xl:w-[1400px]">
            <div className="flex flex-col gap-6 w-full">
              <div className="grid w-full gap-6 xl:grid-cols-12 items-stretch">
                <div className="col-span-8">
                  <PrizesStockTable />
                </div>
                <div className="col-span-4 h-full">
                  <DataCollaboratorsPointRank />
                </div>
              </div>
            </div>
            <div className="flex xl:flex-row flex-col items-stretch gap-6 w-full">
              <div className="flex-1">
                <PrizesOrdersTable />
              </div>
              <div className="flex-1 flex gap-3 flex-col">
                <PrizesOrderChart />

                <DataProgressItem
                  items={firstRowItems}
                  title={"Prêmios com mais taxa de pedidos"}
                />
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Prizes;
