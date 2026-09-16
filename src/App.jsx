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
