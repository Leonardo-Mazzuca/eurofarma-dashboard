

import { DatePicker } from '@/components/ui/date-picker'
import { Button } from '@/components/ui/button'
import CardItemContainer from '@/components/ui/card-item-container'

const DateFilter = () => {
  return (
    <CardItemContainer title='Filtro'>

        <DatePicker />
        <Button className="text-white bg-blue-500">
          Filtrar
        </Button>
 
    </CardItemContainer>
  )
}

export default DateFilter