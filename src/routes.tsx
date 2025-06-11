

import { Route, Routes} from 'react-router-dom'
import {Home,Traces,Config,AiChat,Data,FeatureToggle} from '@/pages'

const AppRoutes = () => {
  return (

        <Routes>
            <Route index element={<Home />} />
            <Route path='/traces' element={<Traces />} />
            <Route path='/feature-toggle' element={<FeatureToggle />} />
            <Route path='/config' element={<Config />} />
            <Route path='/data' element={<Data />} />
            <Route path='/ai-chat' element={<AiChat />} />
        </Routes>
  )
}

export default AppRoutes