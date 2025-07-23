import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight, Mail } from "lucide-react";

const JoinFutureSection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Be Part of the Living Market
            </h2>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              WallStreet Eon isn't just a platform—it's a movement toward a sustainable, stable global economy.
            </p>
            
            <p className="text-lg text-foreground font-medium">
              Invest with love. Build with discernment. Thrive with resilience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="hero" size="lg" className="group">
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Quote */}
          <div className="mt-16 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20">
            <blockquote className="text-lg text-muted-foreground italic">
              "The future of finance grows from the wisdom of nature, guided by the precision of technology, and nurtured by the heart of humanity."
            </blockquote>
            <cite className="block mt-4 text-sm text-primary font-medium">— WallStreet Eon Vision</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinFutureSection;