import FAQs from './Components/pages/FAQs';
import FeatureGrid from './Components/pages/FeatureGrid';
import { SmoothScrollHero } from './Components/pages/hero';
import ProcessSection from './Components/pages/ProcessSection';
import TestimonialSection from './Components/pages/TestimonialSection';

function App() {
  return (
    <main>
      <SmoothScrollHero />
      <FeatureGrid />
      <ProcessSection />
      <TestimonialSection />
      <FAQs />
    </main>
  )
}

export default App