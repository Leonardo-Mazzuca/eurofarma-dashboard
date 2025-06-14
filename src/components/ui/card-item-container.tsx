


import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Props = {
    title: string,
    children: React.ReactNode
    className?:string
    contentClasses?:string
}

const CardItemContainer = ({children,title,className,contentClasses}: Props) => {
  return (
    <Card className={className} variant="shadow">
    <CardHeader>
      <h2 className="text-xl font-semibold">
        {title}
      </h2>
    </CardHeader>
    <CardContent className={cn("flex items-center gap-3",contentClasses)}>
        {children}
    </CardContent>
  </Card>
  )
}

export default CardItemContainer