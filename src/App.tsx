import Hero from './components/Hero';
import SubscriptionPlans from './components/SubscriptionPlans';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Hero />
      <SubscriptionPlans />
      <About />
      <Benefits />
      <Testimonials />
      <Contact />
      <FloatingButtons />
    </div>
  );
}

export default App;
