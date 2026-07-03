import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LangProvider, useLang } from './i18n.jsx'
import Nav from './components/Nav.jsx'
import Rail from './components/Rail.jsx'
import Hero from './components/Hero.jsx'
import Cinematic from './components/Cinematic.jsx'
import Pillars from './components/Pillars.jsx'
import Locacao from './components/Locacao.jsx'
import Assistencia from './components/Assistencia.jsx'
import Pilotos from './components/Pilotos.jsx'
import Why from './components/Why.jsx'
import Story from './components/Story.jsx'
import Gallery from './components/Gallery.jsx'
import CtaBand from './components/CtaBand.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

function Page() {
  const { lang } = useLang()

  // textos mudam de tamanho entre idiomas — recalcula as posições de scroll
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [lang])

  return (
    <>
      <Nav />
      <Rail />
      <main>
        <Hero />
        <Cinematic />
        <Pillars />
        <Locacao />
        <Assistencia />
        <Pilotos />
        <Why />
        <Story />
        <Gallery />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  )
}
