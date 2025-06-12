import { Button } from "@/components/ui/button"





const UserButton = () => {
  return (
    <Button
      size="icon"
      className="rounded-full h-18 w-18 p-0 cursor-pointer hover:opacity-50 overflow-hidden"
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