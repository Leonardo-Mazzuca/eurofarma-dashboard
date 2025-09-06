

import { AppSidebar } from "./app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { useConfig } from "@/context/config-context";
import { cn } from "@/lib/utils";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <SidebarProvider>{children}</SidebarProvider>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {

  const {isDarkMode} = useConfig();
  
  return (
    <RootLayout>
      <main className={cn("flex-1 h-screen",(isDarkMode && "dark"))}>
        <AppSidebar />
        <section className="flex-1 h-screen dark:bg-zinc-800">
          <div className="xl:hidden fixed rounded-br-2xl bg-zinc-700 p-3">
            <SidebarTrigger />
          </div>
          <div className="flex-1 dark:bg-zinc-800 h-screen xl:ms-[250px]">{children}</div>
        </section>
      </main>
    </RootLayout>
  );
};

export default Layout;
