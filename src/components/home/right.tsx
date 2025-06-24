
import DateFilter from "./data-filter"
import ColaboratorsTable from "./colaborators-table"
import LineChart from "@/components/home/line-chart"
import ProfileHeader from "./profile-header"

const HomeRight = () => {
  return (
    <div className="w-full flex-col px-8 p-3 gap-6">
      <div className="max-lg:hidden">
        <ProfileHeader />
      </div>
      <div className="flex flex-col gap-3">
        <DateFilter />
        <ColaboratorsTable />
        <LineChart />
      </div>
    </div>
  )
}

export default HomeRight