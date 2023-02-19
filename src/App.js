import { useEffect } from 'react'
import Aos from 'aos'

import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Qualification from './components/Qualification/Qualification'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollUp from './components/Scrollup/ScrollUp'

const App = () => {

  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App