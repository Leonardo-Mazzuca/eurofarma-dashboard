import { cn } from "@/lib/utils"



const ResultStatusTag = ({status}:{status:number}) => {

  const renderClasses = () => {
    switch (status) {
        case 200:
            return "bg-green-200 text-green-600"
        case 500:
            return "bg-red-200 text-red-600"
        case 401: 
            return "bg-yellow-200 text-yellow-600"
        case 403: 
            return "bg-orange-200 text-orange-600"
        case 404: 
            return "bg-pink-200 text-pink-600"
        case 204: 
            return "bg-blue-200 text-blue-600"
    }
  }

  return (
    <div className={cn("mr-auto font-semibold text-sm rounded-2xl p-1 w-12 text-center",renderClasses())}>
        {status}
    </div>
  )
}

export default ResultStatusTag