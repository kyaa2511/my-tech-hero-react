const options = [
  {
    label: 'Remote Help',
    icon: '🖥️',
    description:
      'Perfect for software, accounts, settings, email, and many computer problems that can be handled from anywhere.',
    bestFor: 'Best for quick fixes and software issues',
  },
  {
    label: 'In-Home Help',
    icon: '🏠',
    description:
      'Hands-on help for Wi-Fi, printers, TVs, streaming devices, setup, cabling, and problems that need someone on site.',
    bestFor: 'Best for home technology and setup',
  },
  {
    label: 'Tech Lesson',
    icon: '🙌',
    description:
      'One-on-one guidance at your pace. Bring your questions and learn how to use your device with more confidence.',
    bestFor: 'Best for learning and confidence',
  },
]

export default function SupportOptions() {
  return (
    <section className="section section-soft" id="support">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Ways to get help</span>
          <h2>Choose the kind of support that fits the problem.</h2>
        </div>

        <div className="support-grid">
          {options.map((option) => (
            <article className="support-card" key={option.label}>
              <span className="support-icon" aria-hidden="true">{option.icon}</span>
              <h3>{option.label}</h3>
              <p>{option.description}</p>
              <strong>{option.bestFor}</strong>
              <a href="#contact">Request this service →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
