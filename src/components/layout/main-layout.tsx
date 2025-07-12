
import { ReactNode } from 'react'
import { SidebarTrigger } from '@ /components/ui/sidebar'
import { AppSidebar } from '@ /components/app-sidebar'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-900 to-purple-950 text-white">
      <AppSidebar />
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="flex items-center mb-6">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold ml-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
            VerseUs
          </h1>
        </div>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
  