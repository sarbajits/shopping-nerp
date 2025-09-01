// pages/about.tsx

import CtaSection from "./CtaSection";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />
            <StatsSection />
            <StorySection />
            <TeamSection />
            <CtaSection />
        </div>
    );
};

export default AboutUsPage;