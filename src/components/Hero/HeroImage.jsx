import { useState } from 'react'
import { HERO_CONTENT } from './heroConfig'

function HeroImage() {
  const { profileImage } = HERO_CONTENT
  const [hasError, setHasError] = useState(false)

  return (
    <div className="hero-image-wrapper hero-enter">
      <div className="hero-image-halo" aria-hidden="true" />
      <div className="hero-image-ring">
        <div className="hero-image-frame">
          {hasError ? (
            <div className="hero-image-fallback" aria-hidden="true">
              {profileImage.initials}
            </div>
          ) : (
            <img
              src={profileImage.src}
              alt={profileImage.alt}
              className="hero-image"
              onError={() => setHasError(true)}
            />
          )}
        </div>
      </div>
      <p className="hero-image-caption">NIT Sikkim · Computer Science</p>
    </div>
  )
}

export default HeroImage
