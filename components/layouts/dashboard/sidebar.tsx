import { BarChart3, Calendar, CreditCard, FileText, Home, Inbox, LayoutDashboard, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Estructura de datos para las opciones del menú
// Puedes modificar o extender esto según tus necesidades
const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    isActive: true,
  },
  {
    title: "Inicio",
    icon: Home,
    href: "/",
  },
  {
    title: "Analíticas",
    icon: BarChart3,
    href: "/analytics",
    submenu: [
      {
        title: "Reportes",
        href: "/analytics/reports",
      },
      {
        title: "Estadísticas",
        href: "/analytics/statistics",
      },
      {
        title: "Rendimiento",
        href: "/analytics/performance",
      },
    ],
  },
  {
    title: "Clientes",
    icon: Users,
    href: "/customers",
  },
  {
    title: "Calendario",
    icon: Calendar,
    href: "/calendar",
  },
  {
    title: "Documentos",
    icon: FileText,
    href: "/documents",
  },
  {
    title: "Mensajes",
    icon: Inbox,
    href: "/messages",
    badge: "5",
  },
  {
    title: "Facturación",
    icon: CreditCard,
    href: "/billing",
  },
  {
    title: "Configuración",
    icon: Settings,
    href: "/settings",
  },
]

export default function DashboardSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="border-b border-border">
        <div className="flex h-14 items-center px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white md:hidden">
            <span className="font-bold">DB</span>
          </div>
          <span className="ml-2 text-lg font-semibold text-blue-600 md:hidden">Dashboard</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title}>
                    <a href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-medium text-white">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                  {item.submenu && (
                    <SidebarMenuSub>
                      {item.submenu.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.href}>{subItem.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-100">
            {/* Aquí puedes agregar la imagen de perfil del usuario */}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Usuario</span>
            <span className="text-xs text-muted-foreground">usuario@ejemplo.com</span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
