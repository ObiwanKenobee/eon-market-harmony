import { Recycle, ArrowRight } from "lucide-react";

const CircularEcosystemSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Recycle className="w-8 h-8 text-primary mr-3 animate-spin" style={{ animationDuration: '8s' }} />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Regenerative Capital in Action
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Like nature, Eon recycles and reinvests capital to create long-term growth instead of bubbles.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Profits from sustainable ventures flow back into clean energy, reforestation, and community infrastructure—building wealth while healing the planet.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-primary-foreground">$</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sustainable Investment</h3>
              <p className="text-sm text-muted-foreground">Capital flows into regenerative projects</p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-primary animate-pulse hidden md:block" />
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-nature rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Growth & Impact</h3>
              <p className="text-sm text-muted-foreground">Returns reinvested in ecosystem healing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularEcosystemSection;