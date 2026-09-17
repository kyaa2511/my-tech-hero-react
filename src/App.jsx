import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SupportOptions from "./components/SupportOptions";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import RequestReceived from "./components/RequestReceived";

export default function App() {
  const isPricingPage = window.location.pathname === "/pricing";
  const isRequestReceivedPage =
    window.location.pathname === "/request-received";

  useEffect(() => {
    const metadata = isRequestReceivedPage
      ? {
          title: "Request Received | My Tech Hero",
          description:
            "Your My Tech Hero support request was received and will be reviewed soon.",
          canonical: "https://mytechhero.net/request-received",
          ogTitle: "Request Received | My Tech Hero",
          ogDescription:
            "Your My Tech Hero support request was received and will be reviewed soon.",
          robots: "noindex, nofollow",
        }
      : isPricingPage
        ? {
            title: "Tech Support Pricing | My Tech Hero",
            description:
              "Explore straightforward tech support pricing from My Tech Hero for friendly help in Indianapolis and surrounding areas.",
            canonical: "https://mytechhero.net/pricing",
            ogTitle: "Tech Support Pricing | My Tech Hero",
            ogDescription:
              "Explore straightforward tech support pricing from My Tech Hero for friendly help in Indianapolis and surrounding areas.",
            robots: "index, follow",
          }
        : {
            title: "Friendly Tech Support in Indianapolis | My Tech Hero",
            description:
              "Friendly technology support for homes and small businesses in Indianapolis and surrounding areas. My Tech Hero helps make frustrating tech feel manageable.",
            canonical: "https://mytechhero.net/",
            ogTitle: "Friendly Tech Support in Indianapolis | My Tech Hero",
            ogDescription:
              "Friendly technology support for homes and small businesses in Indianapolis and surrounding areas.",
            robots: "index, follow",
          };

    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute("content", metadata.robots);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", metadata.canonical);

    const openGraph = {
      "og:title": metadata.ogTitle,
      "og:description": metadata.ogDescription,
      "og:url": metadata.canonical,
    };
    Object.entries(openGraph).forEach(([property, content]) => {
      document
        .querySelector(`meta[property="${property}"]`)
        ?.setAttribute("content", content);
    });

    const twitter = {
      "twitter:title": metadata.ogTitle,
      "twitter:description": metadata.ogDescription,
    };
    Object.entries(twitter).forEach(([name, content]) => {
      document
        .querySelector(`meta[name="${name}"]`)
        ?.setAttribute("content", content);
    });

    if (isPricingPage || window.location.hash !== "#contact") return;

    const timeoutId = window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [isPricingPage]);

  return (
    <>
      <Header />
      {isRequestReceivedPage ? (
        <RequestReceived />
      ) : isPricingPage ? (
        <Pricing />
      ) : (
        <main>
          <Hero />
          <Contact />
          <Services />
          <SupportOptions />
          <HowItWorks />
          <About />
        </main>
      )}
      <Footer />
    </>
  );
}
