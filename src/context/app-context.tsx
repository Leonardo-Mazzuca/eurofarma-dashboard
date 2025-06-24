

import React from 'react'
import { ConfigProvider } from '@/context/config-context'

const AppContext = ({children}:{children:React.ReactNode}) => {
  return (
    <ConfigProvider>
        {children}
    </ConfigProvider>
  )
}

export default AppContext