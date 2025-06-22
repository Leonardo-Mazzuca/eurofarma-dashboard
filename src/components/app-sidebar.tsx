import {
  ChartColumnDecreasing,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import utils from '@/utils/image'
import { Button } from "./ui/button";

export function AppSidebar() {
  const items = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard, active: true },
    { title: "Traces", url: "/traces", icon: Search },
    { title: "Dados", url: "/data", icon: ChartColumnDecreasing },
    { title: "Permissões", url: "/feature-toggle", icon: ShieldCheck },
    { title: "IA Chat", url: "/ia-chat", icon: Sparkles },
    { title: "Configurações", url: "/config", icon: Settings },
  ];

  const activeClasses = "bg-blue-500 text-white";
  const unactiveClasses = "text-muted-foreground hover:bg-muted/10";

  const ActiveBorderPipe = () => (
    <div className="bg-white h-[35px] absolute rounded-md w-[5px] left-0" />
  );

  const isActive = (url: string) => window.location.pathname.includes(url);

  const navigate = useNavigate();

  return (
    <Sidebar className="w-64 h-full flex-1">
      <SidebarContent className="bg-neutral-900 flex-1 h-full text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white my-10 text-lg font-semibold p-4">
       
              <img 
                src={utils.logo}
              />
     
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex px-5 flex-col gap-1 mt-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={()=>navigate(item.url)}
                    className={`group ps-3 w-full h-[50px] rounded-sm transition-colors
                      ${isActive(item.url) ? activeClasses : unactiveClasses}`}
                  >
                      {isActive(item.url) && <ActiveBorderPipe />}
                      <item.icon size={25} />
                      <span className="text-lg font-normal">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Button className="mt-auto flex font-normal cursor-pointer items-center gap-3 mx-5 bg-zinc-600 text-lg mb-10">
          <LogOut />
          Logout
        </Button>
      </SidebarContent>
    </Sidebar>
  );
}
