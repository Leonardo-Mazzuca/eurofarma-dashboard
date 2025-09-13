

import { Route, Routes} from 'react-router-dom'
import {Home,Traces,Config,AiChat,Data,FeatureToggle, NewFeatureToggle} from '@/pages'
import Prizes from './pages/prizes'

const AppRoutes = () => {
  return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/traces' element={<Traces />} />
            <Route path='/config' element={<Config />} />
            <Route path='/data' element={<Data />} />
            <Route path='/prizes' element={<Prizes />} />
            <Route path='/feature-toggle' >
              <Route index element={<FeatureToggle />} />
              <Route path='new' element={<NewFeatureToggle />} />
            </Route>
            <Route path='/ai-chat' element={<AiChat />} />
        </Routes>
  )
}

export default AppRoutes