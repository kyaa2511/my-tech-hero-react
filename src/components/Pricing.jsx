import { useEffect } from "react";

const popularServices = [
  [
    "New Computer Setup",
    "$79",
    "Updates, accounts, basic settings, security setup, and getting your new computer ready to use.",
  ],
  [
    "Printer Setup",
    "$59",
    "Connect your printer, configure Wi-Fi, install necessary software, and test printing.",
  ],
  [
    "Wi-Fi & Internet Setup",
    "$99",
    "Router setup, Wi-Fi security, device connections, and basic network testing.",
  ],
  [
    "Wi-Fi Troubleshooting",
    "$89",
    "Diagnose slow speeds, dropped connections, weak signals, and other Wi-Fi problems.",
  ],
  [
    "Computer Tune-Up",
    "$79",
    "Updates, startup cleanup, storage cleanup, and a general performance check.",
  ],
  [
    "Virus & Malware Cleanup",
    "$99",
    "Scan for unwanted software, remove threats, clean up the computer, and provide security recommendations.",
  ],
  [
    "Data Transfer",
    "Starting at $99",
    "Transfer documents, photos, and other personal files from an old computer to a new one.",
  ],
  [
    "Email & Account Setup",
    "$49",
    "Setup or troubleshoot email, Microsoft accounts, Google accounts, and similar services.",
  ],
  [
    "Software Installation",
    "$39",
    "Installation and basic configuration of one application.",
  ],
  [
    "Phone & Tablet Setup",
    "$59",
    "Setup accounts, email, apps, basic settings, and device preferences.",
  ],
  [
    "Streaming Device Setup",
    "$59",
    "Setup Roku, Apple TV, Fire TV, Chromecast, or similar streaming devices.",
  ],
  [
    "Smart Home Device Setup",
    "Starting at $69",
    "Setup compatible smart cameras, doorbells, speakers, plugs, and similar devices.",
  ],
  [
    "One-on-One Tech Lesson",
    "$69/hour",
    "Patient, personalized help learning how to use your computer, phone, tablet, apps, or other technology.",
  ],
  [
    "Technology Consultation",
    "$49",
    "Help choosing computers, printers, Wi-Fi equipment, smart-home devices, or other technology before making a purchase.",
  ],
];

const bundles = [
  {
    title: "New Computer Hero",
    price: "$129",
    items: [
      "New computer setup",
      "System updates",
      "Email setup",
      "Essential software setup",
      "Printer connection",
    ],
    cta: "Choose This Bundle",
  },
  {
    title: "Home Office Hero",
    price: "$179",
    description: "Includes up to two hours of in-home help with:",
    items: [
      "Computer",
      "Printer",
      "Wi-Fi",
      "Monitor",
      "Webcam",
      "Email",
      "Other home-office technology",
    ],
    cta: "Choose This Bundle",
  },
  {
    title: "New Phone Hero",
    price: "$89",
    items: [
      "New phone setup",
      "Email setup",
      "App setup",
      "Basic settings",
      "Bluetooth accessory setup",
    ],
    cta: "Choose This Bundle",
  },
  {
    title: "Home Tech Checkup",
    price: "$99",
    description: "Review your home technology, including:",
    items: [
      "Wi-Fi",
      "Computers",
      "Printers",
      "Streaming devices",
      "Software updates",
      "Basic security",
    ],
    note: "Get recommendations for any issues discovered.",
    cta: "Schedule a Checkup",
  },
];

function PriceCard({
  title,
  price,
  description,
  items,
  cta,
  featured = false,
  note,
}) {
  return (
    <article
      className={`pricing-card${featured ? " pricing-card-featured" : ""}`}
    >
      <div>
        <h3>{title}</h3>
        <strong className="pricing-amount">{price}</strong>
        {description && (
          <p className="pricing-card-description">{description}</p>
        )}
        {items && (
          <ul className="pricing-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {note && <p className="pricing-card-note">{note}</p>}
      </div>
      <a className="button" href="/#contact">
        {cta}
      </a>
    </article>
  );
}

export default function Pricing() {
  useEffect(() => {
    const originalTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const originalDescription = description?.getAttribute("content");

    document.title = "Tech Support Pricing | My Tech Hero";
    description?.setAttribute(
      "content",
      "Simple, upfront pricing for computer help, Wi-Fi setup, device support, tech lessons, and in-home technology services from My Tech Hero.",
    );

    return () => {
      document.title = originalTitle;
      if (description && originalDescription)
        description.setAttribute("content", originalDescription);
    };
  }, []);

  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="container pricing-hero-inner">
          <span className="eyebrow">Simple, friendly pricing</span>
          <h1>Simple, Upfront Tech Help Pricing</h1>
          <p>
            No confusing fees. No technical jargon. Just friendly,
            straightforward help when you need it.
          </p>
          <a className="button" href="/#contact">
            Get Tech Help
          </a>
        </div>
      </section>

      <section className="section pricing-featured-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Choose your starting point</span>
            <h2>Help that fits the way you need it.</h2>
            <p>
              Start remotely or have a Hero come to you. Either way, you’ll get
              patient, practical support.
            </p>
          </div>
          <div className="pricing-featured-grid">
            <PriceCard
              title="Remote Tech Help"
              price="$59"
              description="Up to 45 minutes of remote troubleshooting and assistance."
              items={[
                "Computer troubleshooting",
                "Email problems",
                "Software help",
                "Account setup",
                "General tech questions",
              ]}
              cta="Get Remote Help"
              featured
            />
            <PriceCard
              title="In-Home Tech Visit"
              price="$89"
              description="Includes the first hour of in-home troubleshooting or setup."
              items={[
                "Additional time: $45 per 30 minutes",
                "No trip fee within our standard service area.",
              ]}
              cta="Schedule a Visit"
              featured
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Everyday support</span>
            <h2>Popular Tech Services</h2>
            <p>
              Clear starting prices for the most common technology projects
              around the home.
            </p>
          </div>
          <div className="pricing-service-grid">
            {popularServices.map(([title, price, description]) => (
              <PriceCard
                key={title}
                title={title}
                price={price}
                description={description}
                cta="Get Help"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-bundle-section">
        <div className="container">
          <div className="section-heading pricing-dark-heading">
            <span className="eyebrow">More help, better value</span>
            <h2>Save With a Hero Bundle</h2>
            <p>
              Thoughtful packages for bigger setup days and the technology you
              use most.
            </p>
          </div>
          <div className="pricing-bundle-grid">
            {bundles.map((bundle) => (
              <PriceCard key={bundle.title} {...bundle} />
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-diagnostic-section">
        <div className="container pricing-diagnostic-card">
          <div>
            <span className="eyebrow">Start with what you know</span>
            <h2>Not Sure What&apos;s Wrong? That&apos;s Okay.</h2>
            <p>
              Sometimes you just know something isn&apos;t working the way it
              should. We&apos;ll help figure it out.
            </p>
            <p className="pricing-diagnostic-note">
              <strong>
                If additional work is needed, we&apos;ll explain the cost before
                continuing.
              </strong>
            </p>
          </div>
          <PriceCard
            title="In-Home Diagnostic Visit"
            price="$89"
            description="Includes the first hour of troubleshooting."
            cta="Get Help"
            featured
          />
        </div>
      </section>

      <section className="pricing-disclaimer">
        <div className="container">
          <p>
            Prices shown are starting prices for standard service. Some repairs,
            installations, hardware needs, data transfers, or complex issues may
            require additional time or cost. We&apos;ll always explain any
            additional charges before proceeding.
          </p>
        </div>
      </section>

      <section className="pricing-bottom-cta">
        <div className="container">
          <span className="eyebrow">Your next step</span>
          <h2>
            Technology giving you a hard time? Your Tech Hero is ready to help.
          </h2>
          <p>
            Tell us what&apos;s going on, and we&apos;ll help determine the best
            service for you.
          </p>
          <div className="pricing-cta-actions">
            <a className="button" href="/#contact">
              Get Tech Help
            </a>
            <a className="button button-secondary" href="/#contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
