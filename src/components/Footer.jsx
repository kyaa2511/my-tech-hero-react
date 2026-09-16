import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{siteConfig.businessName}</strong>
          <p>{siteConfig.tagline}</p>
        </div>

        <div className="footer-links">
          <a href="/#services">Services</a>
          <a href="/#support">Support options</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="footer-meta">
          <span>{siteConfig.serviceArea}</span>
          <span>
            © {new Date().getFullYear()} {siteConfig.businessName}
          </span>
        </div>
      </div>
    </footer>
  );
}
