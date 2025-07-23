import { Zap, Check } from "lucide-react";
import disruptionImage from "@/assets/disruption-impact.jpg";

const DisruptionSection = () => {
  const disruptions = [
    "Market volatility → replaced with self-correcting resilience",
    "Opaque systems → replaced with transparent blockchain flows", 
    "Short-term speculation → replaced with regenerative investment cycles",
    "Emotion-driven crashes → replaced with empathetic, informed AI decisions"
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-primary mr-3 animate-pulse" />
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                What We're Disrupting
              </h2>
            </div>

            <div className="space-y-6">
              {disruptions.map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-quantum">
              <img 
                src={disruptionImage} 
                alt="Stormy sky clearing into quantum light"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-hero/20" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-pulse-glow" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisruptionSection;