import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"


const FeatureToggleFilter = () => {
  
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-6">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="border h-[45px] text-gray-500 border-gray-300" variant={"ghost"}>
                    Filtrar por: <span className="font-bold text-black">Todos os permissionamentos</span>
                    <ChevronDown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
                <DropdownMenuItem>
                    Todos os permissionamentos
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Admin
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={()=>navigate(`${window.location.pathname}/new`)} className="h-[40px] bg-blue-500 rounded-md">
            Adicionar colaborador
        </Button>
    </div>
  )
}

export default FeatureToggleFilter