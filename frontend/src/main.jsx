import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PageWithNavbar from './samplepage.jsx'



import LandingPage from './pages/login_page.jsx'
import UI from './ui.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    
    <App />
    < UI/>

  </StrictMode>,
)
