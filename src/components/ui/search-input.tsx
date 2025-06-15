import { Input, type InputProps } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"


type Props = {
  iconPosition?: 'start' | 'end'
  wrapperClasses?:string
} & InputProps

const SearchInput = ({iconPosition = "end",wrapperClasses,placeholder="Procurar...",...rest}:Props) => {


  return (
    <div className={cn("w-full",wrapperClasses)}>
      <Input
          placeholder={placeholder}
          className="h-[45px] w-full font-semibold text-gray-400 border-none shadow-2xl border border-gray-200"
          suffixIcon={iconPosition === "end" &&<Search className="text-gray-500" size={24} />}
          prefixIcon={iconPosition === "start" &&<Search className="text-gray-500" size={24} />}
          {...rest}
      />
    </div>
  )
}

export default SearchInput