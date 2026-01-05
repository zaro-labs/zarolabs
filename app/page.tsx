import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Services from './components/Services';
import Technologies from './components/Technologies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ValueProps />
      <Services />
      <Technologies />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}