
import DateFilter from "./data-filter"
import ColaboratorsTable from "./colaborators-table"
import LineChart from "@/components/home/line-chart"
import ProfileHeader from "./profile-header"

const HomeRight = () => {
  return (
    <div className="w-full flex-col px-8 p-3 gap-3">
      <div className="max-md:hidden">
        <ProfileHeader />
      </div>
      <DateFilter />
      <ColaboratorsTable />
      <LineChart />
    </div>
  )
}

export default HomeRight