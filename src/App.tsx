import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import WebinarPage from './pages/WebinarPage'
import VideoDetailPage from './pages/VideoDetailPage'
import ResourcesPage from './pages/ResourcesPage'
import SeminarPage from './pages/SeminarPage'
import NoticePage from './pages/NoticePage'

type Page =
  | 'home'
  | 'webinar'
  | 'video-detail'
  | 'resources'
  | 'seminar'
  | 'notice'

function App() {
  const [page, setPage] = useState<Page>('home')

  const handleNavigate = (nextPage: Page) => {
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (page === 'video-detail') {
    return <VideoDetailPage onNavigate={handleNavigate} />
  }

  if (page === 'resources') {
    return <ResourcesPage onNavigate={handleNavigate} />
  }

  if (page === 'seminar') {
    return <SeminarPage onNavigate={handleNavigate} />
  }

  if (page === 'notice') {
    return <NoticePage onNavigate={handleNavigate} />
  }

  if (page === 'webinar') {
    return <WebinarPage onNavigate={handleNavigate} />
  }

  return <HomePage onNavigate={handleNavigate} />
}

export default App