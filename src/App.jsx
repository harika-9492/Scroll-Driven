import { useRef } from 'react'
import './App.css'
import Metrics from './components/Metrics'
import ScrollVisual from './components/ScrollVisual'
import { heroStats } from './data/heroStats'
import { useHeroAnimation } from './hooks/useHeroAnimation'

function App() {
  const heroRef = useRef(null)
  const visualRef = useRef(null)

  useHeroAnimation(heroRef, visualRef)

  return (
    <main className="site-shell min-h-screen antialiased">
      <section className="hero-section relative" ref={heroRef}>
        <div className="hero-viewport relative">
          <div className="hero-layout relative" id="top">
            <div className="hero-content relative z-10">
              <p className="eyebrow">scroll to explore</p>
              <h1 className="headline" aria-label="Welcome Itzfizz">
                <span className="headline-line">welcome</span>
                <span className="headline-line headline-accent">itzfizz<span className="headline-dot">.</span></span>
              </h1>
              <p className="hero-copy">We turn bold ideas into digital experiences that move people and business forward.</p>
              <Metrics items={heroStats} />
            </div>
            <ScrollVisual visualRef={visualRef} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
