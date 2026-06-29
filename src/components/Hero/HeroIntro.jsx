import { HERO_CONTENT } from './heroConfig'

function HeroIntro() {
  const { greeting, name, role, tagline, description } = HERO_CONTENT

  return (
    <>
      <p className="hero-greeting">{greeting}</p>
      <h1 className="hero-name">{name}</h1>
      <p className="hero-role">{role}</p>
      <p className="hero-tagline">{tagline}</p>
      <p className="hero-description">{description}</p>
    </>
  )
}

export default HeroIntro
