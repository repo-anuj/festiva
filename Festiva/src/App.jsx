import FeatureGrid from './Components/pages/FeatureGrid';
import { SmoothScrollHero } from './Components/pages/hero';
import ProcessSection from './Components/pages/ProcessSection';
import { TextParallaxContentExample } from './Components/pages/TextParallaxContent';

function App() {
  return (
    <main>
      <SmoothScrollHero />
      <FeatureGrid />
      <ProcessSection />
      <TextParallaxContentExample />
    </main>
  )
}

export default App