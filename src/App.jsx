import '@fontsource/outfit/400.css'
import '@fontsource/outfit/600.css'
import '@fontsource/outfit/700.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { Navbar } from '../src/ICS/Navbar/Navbar.jsx'
import { Normal } from './Pages/Normal.jsx'
import { Videos } from './Videos/Videos.jsx'
import { Terminal } from './Terminal/Terminal.jsx'
import { Loader } from './Loader/Loader.jsx'
import { useEffect, useState } from "react"


function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 6000)
    return () => clearTimeout(timer)

  }, [])
  if (loading) {
    return (
      <Loader />
    )
  }
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Normal />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
