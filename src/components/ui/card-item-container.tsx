


import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

type Props = {
    title: string,
    children: React.ReactNode
    className?:string
}

const CardItemContainer = ({children,title,className}: Props) => {
  return (
    <Card className={className} variant="shadow">
    <CardHeader>
      <h2 className="text-xl font-semibold">
        {title}
      </h2>
    </CardHeader>
    <CardContent className="flex items-center gap-3">
        {children}
    </CardContent>
  </Card>
  )
}

export default CardItemContainer