
import { Home, Music, Mic, MapPin, Settings } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

// Menu items
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Concert Effect',
    url: '/concert-effect',
    icon: Music,
  },
  {
    title: 'Concert Sync',
    url: '/concert-sync',
    icon: Mic,
  },
  {
    title: 'Lyric Generator',
    url: '/lyric-generator',
    icon: Mic,
  },
  {
    title: 'Music Map',
    url: '/music-map',
    icon: MapPin,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>VerseUs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.url} 
                      className={location.pathname === item.url ? 'bg-purple-900/50' : ''}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
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
  