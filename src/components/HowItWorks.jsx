const steps = [
  ['1', 'Tell us what’s wrong', 'Describe what’s happening in your own words. No technical vocabulary required.'],
  ['2', 'Pick the right support', 'We’ll determine whether remote help, an in-person visit, or a lesson makes the most sense.'],
  ['3', 'Get it handled', 'We troubleshoot the issue, explain what happened, and help you understand what to do next.'],
]

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">How it works</span>
          <h2>Three steps. Much less frustration.</h2>
        </div>

        <div className="steps-grid">
          {steps.map(([number, title, description]) => (
            <article className="step-card" key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
