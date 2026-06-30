import { HERO_CTAS } from './heroConfig'

function HeroCTA() {
  return (
    <div className="hero-cta-group">
      {HERO_CTAS.map(({ label, href, variant, download }) => (
        <a
          key={label}
          href={href}
          className={`hero-cta hero-cta--${variant}`}
          download={download}
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export default HeroCTA
