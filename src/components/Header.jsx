import { useState } from "react";
import { siteConfig } from "../data/siteConfig";
import logoMark from "../assets/noTitleLogo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#top" onClick={close}>
          <img className="brand-mark" src={logoMark} alt="" />
          <span className="brand-copy">
            <strong>{siteConfig.businessName}</strong>
            <small>{siteConfig.tagline}</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`main-nav ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={close}>
            Services
          </a>
          <a href="#support" onClick={close}>
            Ways to Get Help
          </a>
          <a href="#about" onClick={close}>
            About
          </a>
          <a href="#contact" className="button button-small" onClick={close}>
            Get Help
          </a>
        </nav>
      </div>
    </header>
  );
}
