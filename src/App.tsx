import ApprovalPendingPage from './pages/ApprovalPendingPage'
import MedicalInfoPage from './pages/MedicalInfoPage'
import SignupPage from './pages/SignupPage'
import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import WebinarPage from './pages/WebinarPage'
import VideoDetailPage from './pages/VideoDetailPage'
import ResourcesPage from './pages/ResourcesPage'
import SeminarPage from './pages/SeminarPage'
import NoticePage from './pages/NoticePage'

type Page =
  | 'login'
  | 'signup'
  | 'medical-info'
  | 'approval-pending'
  | 'home'
  | 'webinar'
  | 'video-detail'
  | 'resources'
  | 'seminar'
  | 'notice'

function App() {
  const [page, setPage] = useState<Page>('login')
const [memberName, setMemberName] = useState('김OO')
  const handleNavigate = (nextPage: Page) => {
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

 if (page === 'login') {
  return (
    <LoginPage
      onLogin={() => handleNavigate('home')}
      onSignup={() => handleNavigate('signup')}
    />
  )
}

if (page === 'signup') {
  return (
    <SignupPage
      onBack={() => handleNavigate('login')}
      onNext={(name) => {
        setMemberName(name)
        handleNavigate('medical-info')
      }}
    />
  )
}
if (page === 'medical-info') {
  return (
    <MedicalInfoPage
      onBack={() => handleNavigate('signup')}
      onNext={() => handleNavigate('approval-pending')}
    />
  )
}
if (page === 'approval-pending') {
  return (
    <ApprovalPendingPage
      memberName={memberName}
      onLogin={() => handleNavigate('login')}
    />
  )
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

  return (
  <HomePage
    onNavigate={handleNavigate}
    memberName={memberName}
  />
)
}

export default App