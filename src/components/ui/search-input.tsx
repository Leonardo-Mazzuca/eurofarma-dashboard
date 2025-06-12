import { Input, type InputProps } from "@/components/ui/input"
import { Search } from "lucide-react"



const SearchInput = ({...rest}:InputProps) => {
  return (
    <Input
        placeholder="Procurar..."
        className="w-[450px] h-[45px] font-semibold text-gray-400 border-none shadow-2xl border border-gray-200"
        suffix={<Search className="text-gray-500" size={24} />}
        {...rest}
    />
  )
}

export default SearchInput