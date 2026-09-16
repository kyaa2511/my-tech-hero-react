import { siteConfig } from "../data/siteConfig";
import logoMark from "../assets/heroNoBackground.png";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <img className="hero-logo" src={logoMark} alt="My Tech Hero" />
          <span className="eyebrow">
            Personal tech help • {siteConfig.serviceArea}
          </span>
          <h1>When tech gets frustrating, call your Tech Hero.</h1>
          <p className="lead">
            Patient, straightforward help with computers, phones, Wi-Fi, smart
            devices, accounts, online safety, and the technology you use every
            day.
          </p>

          <div className="hero-actions">
            <a className="button" href="#contact">
              Request Tech Help
            </a>
            <a className="button button-secondary" href="#services">
              Explore Services
            </a>
          </div>

          <div className="trust-row">
            <span>✓ Plain-English explanations. No tech-talk.</span>
            <span>✓ Remote & in-person options</span>
            <span>✓ No judgment. </span>
          </div>
        </div>

        <aside className="hero-panel">
          <span className="panel-kicker">Sound familiar?</span>
          <h2>You explain the problem. We’ll help with the tech.</h2>
          <ul>
            <li>“My computer has gotten painfully slow.”</li>
            <li>“I bought a new phone and don’t know where to start.”</li>
            <li>“My Wi-Fi keeps dropping in parts of the house.”</li>
            <li>“I’m not sure if this email or pop-up is a scam.”</li>
            <li>“My TV, streaming app, or device just won’t cooperate.”</li>
          </ul>
          <p className="panel-note">You don’t have to figure it out alone.</p>
        </aside>
      </div>
    </section>
  );
}
