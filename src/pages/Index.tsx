import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CircularEcosystemSection from "@/components/CircularEcosystemSection";
import EmpatheticAISection from "@/components/EmpatheticAISection";
import DisruptionSection from "@/components/DisruptionSection";
import JoinFutureSection from "@/components/JoinFutureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhatIsSection />
      <HowItWorksSection />
      <CircularEcosystemSection />
      <EmpatheticAISection />
      <DisruptionSection />
      <JoinFutureSection />
      <Footer />
    </div>
  );
};

export default Index;
