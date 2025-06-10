import { AppSidebar } from "./app-sidebar"
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"



const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <SidebarProvider>
        <main>
            <AppSidebar />
                <section>
                <SidebarTrigger />
                {children}
            </section>
        </main>
    </SidebarProvider>
  )
}

export default Layout