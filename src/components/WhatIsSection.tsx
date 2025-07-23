import { Lightbulb } from "lucide-react";
import globeNetwork from "@/assets/globe-network.jpg";

const WhatIsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                A New Era of Market Intelligence
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                WallStreet Eon is a next-generation platform that blends nature's resilience with quantum computing, AI, and blockchain to create a self-healing financial ecosystem.
              </p>
              <p>
                Inspired by ecological systems, Keynesian economics, and modern risk modeling, it dynamically adapts to global market conditions—preventing recessions before they take root.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-quantum">
              <img 
                src={globeNetwork} 
                alt="Globe surrounded by glowing financial networks"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary/10" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-glow" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/15 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;