import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeroSection from './Components/heroSection/HeroSection.jsx';
import SafetyAndStyleSection from './Components/secondSection/SafetyAndStyleSection.jsx';
import BikeFeatureSection from './Components/sycleSection/BikeFeatureSection';
import SpectraliteSection from './Components/spectraliteSection/SpectraliteSection.jsx';
import TunnelSection from './Components/tunnelSection/TunnelSection.jsx';
import DemoSection from './Components/demoSection/DemoSection.jsx';
import ShowcaseSection from './Components/showcaseSection/ShowcaseSection.jsx';

function App() {
  return (
   <>
   <HeroSection/>
   <SafetyAndStyleSection/>
   <BikeFeatureSection/>
   <SpectraliteSection/>
   <TunnelSection/>
   <DemoSection/>
   <ShowcaseSection/>
   </>
  );
}

export default App;
