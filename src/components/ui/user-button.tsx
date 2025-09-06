import { Button } from "@/components/ui/button"
import clsx from "clsx"





const UserButton = ({className}:{className?:string}) => {

  
  return (
    <Button
      size="icon"
      className={clsx("rounded-full h-18 w-18 p-0 cursor-pointer hover:opacity-50 overflow-hidden", className)}
      
    >
      <img
        src="https://github.com/Leonardo-Mazzuca.png"
        alt="Leonardo Mazzuca"
        className="h-full w-full object-cover"
      />
    </Button>
  )
}

export default UserButton