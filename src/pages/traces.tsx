import SearchTraces from "@/components/traces/search-traces";
import TracesChart from "@/components/traces/traces-chart";
import TracesTable from "@/components/traces/traces-table";
import Loading from "@/components/ui/loading";
import { useTraces } from "@/hooks/use-traces";

const Traces = () => {
  const { isLoading, traces } = useTraces();

  return (
    <section className="flex-1 flex-col py-8 px-6 max-lg:flex-col flex">
      <SearchTraces />

      <TracesChart />

      {isLoading ? <Loading /> : <TracesTable traces={traces} />}
    </section>
  );
};

export default Traces;
