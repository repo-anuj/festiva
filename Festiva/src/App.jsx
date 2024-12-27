import ContactSection from './Components/pages/ContactSection';
import FAQs from './Components/pages/FAQs';
import FeatureGrid from './Components/pages/FeatureGrid';
import { SmoothScrollHero } from './Components/pages/hero';
import ProcessSection from './Components/pages/ProcessSection';
import TestimonialSection from './Components/pages/TestimonialSection';
import Footer from './Components/pages/Footer';

function App() {
  return (
    <main>
      <SmoothScrollHero />
      <FeatureGrid />
      <ProcessSection />
      <TestimonialSection />
      <FAQs />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App