import { useEffect, useState } from 'react'
import Particles from './components/Particles'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  const [dark, setDark] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const isDark = saved ? saved === 'dark' : true
    setDark(isDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark])

  // Set isLoaded to true after component mounts to trigger page load animation
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <Particles />
      <div className="app-layout">
        <Sidebar dark={dark} setDark={setDark} />

        <main className={`main-content ${isLoaded ? 'loaded' : ''}`}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  )
}
