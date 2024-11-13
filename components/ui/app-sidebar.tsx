import {Calendar, Home, Inbox, Search, Settings} from "lucide-react"
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
} from "@/components/ui/sidebar"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

export function AppSidebar() {
  return (
    <Sidebar  className="bg-transparent/70 md:bg-transparent">
      <SidebarHeader className=" flex flex-row m-2 p-4">
        <div className="text-xl lg:text-4xl font-bold leading-tight lg:mb-auto bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mr-6">
          OrbitalX
        </div>
        <UserButton />
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-between h-full p-2">
        <div>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm md:text-base font-bold leading-tight lg:mb-auto bg-purple-400 bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mb-1 p-2">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent className="flex items-center justify-center m-4 flex-wrap">
              <SidebarMenu >
                {items.slice(0, 2).map((item) => (
                  <SidebarMenuItem key={item.title} className="rounded-lg">
                    <SidebarMenuButton asChild className="hover:bg-purple-500/60">
                      <a href={item.url} className="flex items-center">
                        <item.icon className="mr-2" />
                        <span className="text-sm md:text-base">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm md:text-base font-bold leading-tight lg:mb-auto bg-purple-400 bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text p-2">
              Users
            </SidebarGroupLabel>
            <SidebarGroupContent className="flex items-center justify-center m-4 flex-wrap">
              <SidebarMenu>
                {items.slice(2).map((item) => (
                  <SidebarMenuItem key={item.title} className=" rounded-lg">
                    <SidebarMenuButton asChild className="hover:bg-purple-500/60 rounded-lg">
                      <a href={item.url} className="flex items-center">
                        <item.icon className="mr-2" />
                        <span className="text-sm md:text-base">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
        <SidebarFooter className="mb-4 p-2 flex md:hidden">
          <div className="text-sm md:text-base font-bold leading-tight lg:mb-auto bg-purple-400 bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mb-4">
            Switch
          </div>
          <OrganizationSwitcher
            afterCreateOrganizationUrl={"/organization/:id"}
            afterLeaveOrganizationUrl="/organization/:id"
            afterSelectOrganizationUrl={"/organization/:id"}
            afterSelectPersonalUrl={"/organization/:id"}
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }
              }
            }}
          />
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Transation History",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]