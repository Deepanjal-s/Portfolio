import HeroIntro from './HeroIntro'
import HeroImage from './HeroImage'
import HeroCTA from './HeroCTA'
import HeroSocials from './HeroSocials'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <HeroIntro />
          <HeroCTA />
          <HeroSocials />
        </div>

        <HeroImage />
      </div>
    </section>
  )
}

export default Hero
