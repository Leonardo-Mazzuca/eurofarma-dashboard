import { Calendar, Home, Inbox, Search, Settings, Sparkles } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  { title: "Dashboard", url: "#", icon: Home, active: true },
  { title: "Traces", url: "#", icon: Search },
  { title: "Dados", url: "#", icon: Calendar },
  { title: "Permissões", url: "#", icon: Inbox },
  { title: "IA Chat", url: "#", icon: Sparkles },
  { title: "Configurações", url: "#", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar className="w-64">
      <SidebarContent className="bg-neutral-900 text-white h-full">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-lg font-semibold p-4">EUROPOINT</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-1 mt-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`group w-full px-3 py-2 rounded-md flex items-center gap-3 transition-colors
                      ${item.active ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted/10"}`}
                    >
                    <a href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
