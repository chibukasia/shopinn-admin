import { BiSupport } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { MdDashboard, MdStore, MdPeopleAlt,MdOutlineLocalConvenienceStore, MdAnalytics } from "react-icons/md";

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
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: MdDashboard,
  },
  {
    title: "Store",
    url: "#",
    icon: MdStore,
  },
  {
    title: "Branches",
    url: "#",
    icon: MdOutlineLocalConvenienceStore,
  },
  {
    title: "Users",
    url: "#",
    icon: MdPeopleAlt,
  },
  {
    title: "Reports and Analytics",
    url: "#",
    icon: MdAnalytics,
  },
  {
    title: "Help Desk",
    url: "#",
    icon: BiSupport,
  },
  {
    title: "Settings",
    url: "#",
    icon: IoSettings,
  },
]

export  default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent >
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">SHOPPIN ADMIN</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild >
                    <Link href={item.url} className="text-white font-bold">
                      <item.icon size={'lg'}/>
                      <span>{item.title}</span>
                    </Link>
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
