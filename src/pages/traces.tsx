import SearchTraces from "@/components/traces/search-traces"
import TracesChart from "@/components/traces/traces-chart"
import TracesTable from "@/components/traces/traces-table"


const Traces = () => {
  return (
    <section className="flex-1 flex-col py-8 px-6 max-lg:flex-col flex">
      
      <SearchTraces />

      <TracesChart />

      <TracesTable />

    </section>
  )
}

export default Traces