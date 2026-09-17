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

export default function App() {
  const isPricingPage = window.location.pathname === "/pricing";

  useEffect(() => {
    const metadata = isPricingPage
      ? {
          title: "Tech Support Pricing | My Tech Hero",
          description:
            "Explore straightforward tech support pricing from My Tech Hero for friendly help in Indianapolis and surrounding areas.",
          canonical: "https://mytechhero.net/pricing",
          ogTitle: "Tech Support Pricing | My Tech Hero",
          ogDescription:
            "Explore straightforward tech support pricing from My Tech Hero for friendly help in Indianapolis and surrounding areas.",
        }
      : {
          title: "Friendly Tech Support in Indianapolis | My Tech Hero",
          description:
            "Friendly technology support for homes and small businesses in Indianapolis and surrounding areas. My Tech Hero helps make frustrating tech feel manageable.",
          canonical: "https://mytechhero.net/",
          ogTitle: "Friendly Tech Support in Indianapolis | My Tech Hero",
          ogDescription:
            "Friendly technology support for homes and small businesses in Indianapolis and surrounding areas.",
        };

    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute("href", metadata.canonical);

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
      {isPricingPage ? (
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
