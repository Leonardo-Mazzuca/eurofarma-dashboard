
import AppRoutes from "@/routes"
import Layout from "@/components/layout"
import { BrowserRouter } from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AppContext from "@/context/app-context"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </AppContext>
    </QueryClientProvider>
  )
}

export default App