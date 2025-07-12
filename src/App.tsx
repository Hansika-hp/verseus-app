
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SidebarProvider } from './components/ui/sidebar'
import MainLayout from './components/layout/main-layout'
import HomePage from './pages/HomePage'
import ConcertEffectPage from './pages/ConcertEffectPage'
import ConcertSyncPage from './pages/ConcertSyncPage'
import LyricGeneratorPage from './pages/LyricGeneratorPage'
import MusicMapPage from './pages/MusicMapPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <SidebarProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/concert-effect" element={<ConcertEffectPage />} />
            <Route path="/concert-sync" element={<ConcertSyncPage />} />
            <Route path="/lyric-generator" element={<LyricGeneratorPage />} />
            <Route path="/music-map" element={<MusicMapPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </SidebarProvider>
  )
}

export default App
  