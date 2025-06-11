import { AppSidebar } from "./app-sidebar"
import { SidebarProvider } from "./ui/sidebar"



const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <SidebarProvider>
        <main className="flex-1">
            <AppSidebar />
              <section>
                {/* <SidebarTrigger /> */}
                <div className="flex-1 ms-[250px]">
                  {children}
                </div>
            </section>
        </main>
    </SidebarProvider>
  )
}

export default Layout