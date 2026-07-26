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
import Concessionaria from './components/Concessionaria.jsx'
import Pilotos from './components/Pilotos.jsx'
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

  // fontes carregam depois do mount e mudam a altura real da página —
  // sem isso, a barra do rail (que mede a página inteira) enche antes do fim do scroll.
  // Só roda uma vez, cedo: refresh contínuo por imagem (lazy-load) interfere no scroll até âncoras.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh)
    }
    window.addEventListener('load', refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  // pula direto pras âncoras internas (sem animação): tanto o smooth-scroll nativo do
  // CSS quanto um tween do GSAP perdem a sincronia com as seções pinadas/scrubadas do
  // ScrollTrigger no caminho (ex: o zoom da Cinematic) e o destino ultrapassa ou para
  // antes da seção certa. Um salto instantâneo lê a posição já com o pin resolvido.
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const hash = link.getAttribute('href')
      if (!hash || hash === '#') return
      const target = document.querySelector(hash)
      if (!target) return

      e.preventDefault()
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64
      const y = target.getBoundingClientRect().top + window.scrollY - navH - 16
      window.scrollTo(0, y)
      history.pushState(null, '', hash)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

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
        <Concessionaria />
        <Pilotos />
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
