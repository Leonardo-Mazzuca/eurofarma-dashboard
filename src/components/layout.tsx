import { AppSidebar } from "./app-sidebar"
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"



const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <SidebarProvider>
        <main className="flex-1">
            <AppSidebar />
              <section>
                <div className="md:hidden">
                  <SidebarTrigger />
                </div>
                <div className="flex-1 md:ms-[250px]">
                  {children}
                </div>
            </section>
        </main>
    </SidebarProvider>
  )
}

export default Layout