import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
// import DemoSection from './components/DemoSection';
import TeamSection from './components/TeamSection';

export default function HomePage() {
  return (
      <>
        <HeroSection />
        <FeaturesSection />
        {/*<DemoSection />*/}
        <TeamSection />
      </>
  );
}