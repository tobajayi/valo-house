import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import CultureCode from './components/CultureCode';
import Gatherings from './components/Gatherings';
import Invitation from './components/Invitation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-cream text-charcoal min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Pillars />
        <CultureCode />
        <Gatherings />
        <Invitation />
      </main>
      <Footer />
    </div>
  );
}
