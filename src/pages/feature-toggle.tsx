import FeatureToggleFilter from "@/components/feature-toggle/feature-toggle-filter";
import FeatureToggleTable from "@/components/feature-toggle/feature-toggle-table";
import Header from "@/components/ui/header";

const FeatureToggle = () => {
  return (
    <section className="px-6 py-8">
      <Header title="Permissões" />
      <div>
        <FeatureToggleFilter />
        <FeatureToggleTable />
      </div>
    </section>
  );
};

export default FeatureToggle;
