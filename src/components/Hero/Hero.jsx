import HeroIntro from './HeroIntro'
import HeroImage from './HeroImage'
import HeroCTA from './HeroCTA'
import HeroSocials from './HeroSocials'
import HeroStats from './HeroStats'
import TechMarquee from './TechMarquee'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-decor" aria-hidden="true">
        <div className="hero-blob hero-blob--one" />
        <div className="hero-blob hero-blob--two" />
        <div className="hero-blob hero-blob--three" />
        <div className="hero-grid-bg" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <HeroIntro />
            <HeroCTA />
            <HeroStats />
            <HeroSocials />
          </div>

          <HeroImage />
        </div>
      </div>

      <TechMarquee />
    </section>
  )
}

export default Hero
