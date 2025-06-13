import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import SearchInput from "@/components/ui/search-input"
import UserButton from "@/components/ui/user-button"
import DateFilter from "./data-filter"
import ColaboratorsTable from "./colaborators-table"

const HomeRightHeader = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-10">
        <Button variant={"ghost"} className="w-[50px] h-[50px]">
          <Bell size={24} color="#000" />
        </Button>
        <SearchInput />
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  )
}
const HomeRight = () => {
  return (
    <div className="w-full flex-col px-8 p-3 gap-3">
      <HomeRightHeader />
      <DateFilter />
      <ColaboratorsTable />
    </div>
  )
}

export default HomeRight