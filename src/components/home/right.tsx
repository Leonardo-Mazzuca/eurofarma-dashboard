import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

const HomeRightHeader = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <Button variant={"ghost"} className="w-[50px] h-[50px]">
          <Bell size={24} color="#000" />
        </Button>
      </div>
      <div>

      </div>
    </div>
  )
}
const HomeRight = () => {
  return (
    <div className="w-full flex-col p-3 gap-3">
      <HomeRightHeader />
    </div>
  )
}

export default HomeRight