import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"




const TableBadge = ({children, className}:{children: React.ReactNode, className?:string}) => {
  return (
    <Badge className={cn("bg-zinc-200/50 text-zinc-700 rounded-sm",className)}>
        {children}
    </Badge>
  )
}

export default TableBadge