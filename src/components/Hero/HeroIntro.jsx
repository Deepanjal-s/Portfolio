import { HERO_CONTENT } from './heroConfig'

function HeroIntro() {
  const { greeting, name, role, tagline, description } = HERO_CONTENT

  return (
    <>
      <p className="hero-greeting hero-enter">{greeting}</p>
      <h1 className="hero-name hero-enter">{name}</h1>
      <p className="hero-role hero-enter">{role}</p>
      <p className="hero-tagline hero-enter">{tagline}</p>
      <p className="hero-description hero-enter">{description}</p>
    </>
  )
}

export default HeroIntro
