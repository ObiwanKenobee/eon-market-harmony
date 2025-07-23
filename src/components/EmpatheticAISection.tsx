import { Heart } from "lucide-react";
import empatheticAI from "@/assets/empathetic-ai.jpg";

const EmpatheticAISection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-quantum">
              <img 
                src={empatheticAI} 
                alt="Glowing hand with AI neural connections"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-quantum/10" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/15 rounded-full blur-2xl animate-pulse-glow" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-primary mr-3 animate-pulse" />
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Balancing Logic and Emotion
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Eon's Empathetic AI understands market sentiment and human behavior, preventing panic-driven crashes.
              </p>
              <p>
                Guided by behavioral economics and emotional intelligence, it keeps decisions calm, rational, and aligned with investor values.
              </p>
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl border border-primary/20">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse-glow" />
                <span className="font-semibold text-foreground">Emotional Intelligence Monitoring</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Real-time analysis of market sentiment to prevent fear-based decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpatheticAISection;