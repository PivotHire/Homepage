import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
// import DemoSection from './components/DemoSection';
// Import SASS module for page-specific styles if needed, e.g., styles.module.scss

export default function HomePage() {
  return (
      <>
        <HeroSection />
        <FeaturesSection />
        {/*<DemoSection />*/}
      </>
  );
}