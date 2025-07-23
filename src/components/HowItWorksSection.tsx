import { Globe, TreePine, Brain, Blocks } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import biomimeticImage from "@/assets/biomimetic-algorithms.jpg";
import quantumDashboard from "@/assets/quantum-dashboard.jpg";

const HowItWorksSection = () => {
  const features = [
    {
      icon: TreePine,
      title: "Biomimetic Algorithms",
      description: "Investment flows modeled after forests and reefs for built-in resilience.",
      image: biomimeticImage
    },
    {
      icon: Brain,
      title: "Quantum Risk Mitigation", 
      description: "Predictive models running on quantum computing detect crises early.",
      image: quantumDashboard
    },
    {
      icon: Blocks,
      title: "Blockchain Transparency",
      description: "Every transaction visible, building trust and accountability.",
      image: null
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Nature Meets Technology
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-quantum transition-all duration-500 border-border/50 hover:border-primary/30">
              <CardContent className="p-8">
                {feature.image && (
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary mr-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {!feature.image && (
                  <div className="mt-6 h-32 bg-gradient-quantum rounded-xl flex items-center justify-center">
                    <Blocks className="w-16 h-16 text-primary-foreground/80" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;