import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SupportOptions from "./components/SupportOptions";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Contact />
        <Services />
        <SupportOptions />
        <HowItWorks />
        <About />
      </main>
      <Footer />
    </>
  );
}
