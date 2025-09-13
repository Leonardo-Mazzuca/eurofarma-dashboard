
import DataCollaboratorsPointRank from '@/components/data/data-collaborator-points-rank'
import PrizesOrderChart from '@/components/prizes/prizes-orders-chart'
import PrizesOrdersTable from '@/components/prizes/prizes-orders-table'
import PrizesStockTable from '@/components/prizes/prizes-stock-table'
import Header from '@/components/ui/header'

const Prizes = () => {
  return (
    <section className="px-6 dark:bg-zinc-800 py-8">
        <Header
          title="Prêmios"
        />

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
              <div className="flex-1">
                <PrizesOrderChart/>
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
  )
}

export default Prizes