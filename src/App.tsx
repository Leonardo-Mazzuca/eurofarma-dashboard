
import AppRoutes from "@/routes"
import Layout from "@/components/layout"
import { BrowserRouter } from "react-router-dom"



const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App