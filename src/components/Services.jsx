import { services } from '../data/services'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">What we help with</span>
          <h2>Everyday technology, without the headache.</h2>
          <p>
            You don’t need to know the technical name for the problem.
            Tell us what the device is doing, and we’ll start there.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="tag-list">
                {service.examples.map((example) => <li key={example}>{example}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
