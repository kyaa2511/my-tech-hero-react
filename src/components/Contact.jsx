import ContactForm from "./ContactForm";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Ready for help?</span>
          <h2>Tell us what’s frustrating you.</h2>
          <p>
            Tell us what’s going on, and we’ll recommend the best next step.
          </p>

          <div className="contact-info-grid">
            <div
              className="contact-info-card"
              aria-label="Call or text support"
            >
              <span className="contact-card-label">Want to talk now?</span>
              <a className="contact-phone" href="tel:3176405837">
                317-640-5837
              </a>
              <div className="contact-card-actions">
                <a className="button button-light" href="tel:3176405837">
                  Call Now
                </a>
                <a className="button button-outline" href="sms:3176405837">
                  Text Us
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <span className="contact-card-label">Service details</span>
              <dl className="contact-details">
                <div>
                  <dt>Service area</dt>
                  <dd>{siteConfig.serviceArea}</dd>
                </div>
                <div>
                  <dt>Availability</dt>
                  <dd>{siteConfig.hours}</dd>
                </div>
                <div>
                  <dt>Support</dt>
                  <dd>Remote &amp; local help</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          <div className="contact-form-intro">
            <h3>Request Help</h3>
            <p>Tell us a little about what you need.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
