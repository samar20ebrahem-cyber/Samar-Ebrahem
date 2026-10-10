import './App.css'
import { Navbar } from '../src/ICS/Navbar/Navbar.jsx'
import { Header } from '../src/ICS/Header/Header.jsx'
import { AboutApp } from './ICS/About/AboutApp.jsx'
// import { Skills } from './ICS/Skills/Skills.jsx'
// import {Projects} from './ICS/Projects/Projects.jsx'
// import { Connect }  from './ICS/Connect/Connect.jsx'
// import {InteractiveTerminal} from './ICS/InteractiveTerminal/InteractiveTerminal.jsx'
import { useEffect, useState } from "react"
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)

  }, [])
  if (loading) {
    return (
      <div className="loader">
        <h1>Preparing your experience...</h1>
      </div>
    )
  }
  return (
    <>
      <Navbar />
      <Header />
      <AboutApp />
      {/* <Skills />   */}
      {/* <Projects /> */}
      {/* <Connect /> */}
      {/* <InteractiveTerminal/> */}
    </>
  )
}

export default App
