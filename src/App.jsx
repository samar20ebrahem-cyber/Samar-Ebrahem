import './App.css'
// import { Navbar } from '../src/ICS/Navbar/Navbar.jsx'
// import { Header } from '../src/ICS/Header/Header.jsx'
// import { About } from './ICS/Story/About.jsx'
// import { Education } from './ICS/Education/Education.jsx'
// import { Journey } from './ICS/Journey/Journey.jsx'
// import { Skills } from './ICS/Skills/Skills.jsx'
// import {Projects} from './ICS/Projects/Projects.jsx'
// import { Connect }  from './ICS/Connect/Connect.jsx'
// import {InteractiveTerminal} from './ICS/InteractiveTerminal/InteractiveTerminal.jsx'
// import {Videos} from './Component/Videos/Videos.jsx'
import {Terminal } from './Terminal/Terminal.jsx'
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

    <div style={{
      display:'flex',
      flexDirection:'column',
      gap:'8rem'
    }}>
      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Journey/>
      <Education/> */}
      {/* <Skills />  
      <Projects /> */}
      {/* <Connect /> */}
      {/* <InteractiveTerminal/> */}
      {/* <Videos/> */}
      <Terminal/>
    </div>
  )
}

export default App
