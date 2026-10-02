import { useMemo } from 'react'
import { HERO_CONTENT } from './heroConfig'
import { useTypewriter } from '../../hooks/useTypewriter'

function HeroIntro() {
  const { greeting, name, role, tagline, description } = HERO_CONTENT

  const roles = useMemo(() => [role, tagline], [role, tagline])
  const typedRole = useTypewriter(roles)

  return (
    <>
      <p className="hero-greeting hero-enter">
        <span className="hero-greeting-dot" aria-hidden="true" />
        {greeting}
      </p>
      <h1 className="hero-name hero-enter">{name}</h1>
      <p className="hero-role hero-enter">
        <span className="hero-role-typed">{typedRole}</span>
        <span className="hero-caret" aria-hidden="true" />
        <span className="sr-only">{roles.join(', ')}</span>
      </p>
      <p className="hero-description hero-enter">{description}</p>
    </>
  )
}

export default HeroIntro
