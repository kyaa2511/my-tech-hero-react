import ContactForm from './ContactForm'
import { siteConfig } from '../data/siteConfig'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Ready for help?</span>
          <h2>Tell us what’s frustrating you.</h2>
          <p>
            Give us a quick description of the problem. We’ll use that to figure
            out the best next step.
          </p>

          <div className="contact-details">
            <div>
              <span>Service area</span>
              <strong>{siteConfig.serviceArea}</strong>
            </div>
            <div>
              <span>Availability</span>
              <strong>{siteConfig.hours}</strong>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
