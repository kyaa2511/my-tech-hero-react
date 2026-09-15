import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import SupportOptions from './components/SupportOptions'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <SupportOptions />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
