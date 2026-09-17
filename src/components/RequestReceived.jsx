import { siteConfig } from "../data/siteConfig";

export default function RequestReceived() {
  return (
    <main className="request-received-page">
      <section className="section request-received-section">
        <div className="container request-received-content">
          <span className="eyebrow">Thanks for reaching out</span>
          <h1>Request received</h1>
          <p>
            Thanks! Your request has been sent. My Tech Hero will be in touch
            soon.
          </p>
          <div className="request-received-actions">
            <a className="button" href="/">
              Back to homepage
            </a>
            <a className="button button-secondary" href={siteConfig.phoneHref}>
              Call {siteConfig.phoneDisplay.trim()}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
