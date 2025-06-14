import { Colors } from "@/utils/colors"
import { LoaderCircle } from "lucide-react"




const Loading = () => {
  return (
    <LoaderCircle color={Colors.default.blue} size={48} className="m-auto my-28 animate-spin" />
  )
}

export default Loading