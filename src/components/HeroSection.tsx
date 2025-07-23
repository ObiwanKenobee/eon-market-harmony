import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-wallstreet-eon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-8 h-8 text-primary mr-3 animate-pulse-glow" />
          <span className="text-lg font-medium text-foreground">WallStreet Eon</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
          The Living Market 
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {" "}Ecosystem
          </span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          A regenerative, AI-powered financial network inspired by nature to prevent recessions and build lasting prosperity.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="hero" size="lg" className="group">
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="quantum" size="lg">
            See How It Works
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-20 right-20 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;