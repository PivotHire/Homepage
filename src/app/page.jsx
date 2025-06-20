import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TeamSection from './components/TeamSection';
import PreviewSection from "@/app/components/PreviewSection";

export default function HomePage() {
    return (
        <>
            <HeroSection/>
            <FeaturesSection/>
            <TeamSection/>
        </>
    );
}