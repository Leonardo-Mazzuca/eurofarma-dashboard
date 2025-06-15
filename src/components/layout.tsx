import { AppSidebar } from "./app-sidebar"
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"



const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <SidebarProvider>
        <main className="flex-1">
            <AppSidebar />
              <section>
                <div className="lg:hidden fixed rounded-br-2xl bg-zinc-700 p-3">
                  <SidebarTrigger />
                </div>
                <div className="flex-1 lg:ms-[250px]">
                  {children}
                </div>
            </section>
        </main>
    </SidebarProvider>
  )
}

export default Layout