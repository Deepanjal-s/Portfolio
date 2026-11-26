import { SERVICES_CONTENT, CASE_STUDIES } from './servicesConfig'
import SectionHeader from '../SectionHeader'
import Reveal from '../Reveal'
import './Services.css'

function ServiceCard({ item, email, delay }) {
  const subject = encodeURIComponent(`${item.name} enquiry`)
  return (
    <Reveal as="article" className="services-card" delay={delay}>
      <header className="services-card-head">
        <h3 className="services-card-name">{item.name}</h3>
        <p className="services-card-price">
          {item.price} <span className="services-card-time">· {item.time}</span>
        </p>
      </header>
      <p className="services-card-summary">{item.summary}</p>
      <ul className="services-card-list">
        {item.deliverables.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p className="services-card-proof">
        <a href={item.proofHref} target="_blank" rel="noreferrer">
          {item.proof}
        </a>
      </p>
      <a className="services-card-cta" href={`mailto:${email}?subject=${subject}`}>
        Ask about {item.name.toLowerCase()}
      </a>
    </Reveal>
  )
}

function CaseStudy({ study, delay }) {
  return (
    <Reveal as="article" className="case-card" delay={delay}>
      <h4 className="case-title">{study.title}</h4>
      <p className="case-context">{study.context}</p>
      <dl className="case-results">
        {study.results.map((r) => (
          <div key={r.label} className="case-result">
            <dt className="case-result-value">{r.value}</dt>
            <dd className="case-result-label">{r.label}</dd>
          </div>
        ))}
      </dl>
      <p className="case-text">
        <span className="case-k">Problem.</span> {study.problem}
      </p>
      <p className="case-k case-text">What I did</p>
      <ol className="case-steps">
        {study.method.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ol>
      <a className="services-card-cta" href={study.href} target="_blank" rel="noreferrer">
        Full write-up and data
      </a>
    </Reveal>
  )
}

function Services() {
  const { eyebrow, title, description, availability, offer, email, items } = SERVICES_CONTENT
  return (
    <section id="services" className="services-section" aria-labelledby="services-heading">
      <SectionHeader
        index="05"
        eyebrow={eyebrow}
        title={title}
        description={description}
        headingId="services-heading"
      />
      <p className="services-note">
        <span className="services-badge">{availability}</span> {offer}
      </p>
      <div className="services-grid">
        {items.map((item, i) => (
          <ServiceCard key={item.id} item={item} email={email} delay={i * 80} />
        ))}
      </div>
      <h3 className="case-heading">Case studies</h3>
      <div className="case-grid">
        {CASE_STUDIES.map((s, i) => (
          <CaseStudy key={s.id} study={s} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}

export default Services
