import { useTranslation } from './LanguageSelector';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Leaf, Recycle, Droplet, Award, TreePine, ShieldCheck } from 'lucide-react';
import { BubbleEffect } from './WaterEffects';

export const Sustainability = () => {
  const { t } = useTranslation();

  const initiatives = [
    {
      icon: Recycle,
      title: "100% Recyclable Packaging",
      description: "Our bottles are made from 100% recyclable PET plastic, supporting circular economy principles.",
      impact: "50% reduction in plastic waste",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      description: "Advanced water management systems ensure minimal waste during our production process.",
      impact: "30% less water usage",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: TreePine,
      title: "Carbon-Neutral Production",
      description: "Renewable energy sources power our facilities, achieving carbon-neutral manufacturing.",
      impact: "Zero carbon footprint",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Processing",
      description: "Japanese technology ensures the highest hygiene standards without harmful chemicals.",
      impact: "100% chemical-free",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const certifications = [
    { name: "ISO 14001", description: "Environmental Management" },
    { name: "HACCP", description: "Food Safety" },
    { name: "Halal Certified", description: "Religious Compliance" },
    { name: "BPOM", description: "Indonesian Food Authority" },
    { name: "Green Building", description: "Sustainable Facilities" },
    { name: "Water Stewardship", description: "Responsible Water Use" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-success/5 to-background relative overflow-hidden">
      <BubbleEffect />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('sustainability.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-success to-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground mb-4">
            {t('sustainability.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('sustainability.description')}
          </p>
        </div>

        {/* Main sustainability initiatives */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <Card 
                key={index}
                className="relative p-8 shadow-water hover:shadow-glow transition-all duration-500 group animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-full ${initiative.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${initiative.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {initiative.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {initiative.description}
                  </p>

                  <Badge className={`${initiative.bgColor} ${initiative.color} border-current`}>
                    <Award className="w-4 h-4 mr-2" />
                    {initiative.impact}
                  </Badge>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-success/20 to-primary/20 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Environmental impact stats */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="p-8 bg-gradient-to-r from-success/10 to-primary/10 border-success/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Environmental Impact
              </h3>
              <p className="text-muted-foreground">
                Measurable results from our sustainability commitments
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "2M+", label: "Bottles Recycled", suffix: "" },
                { number: "50%", label: "Plastic Reduction", suffix: "" },
                { number: "30%", label: "Water Saved", suffix: "" },
                { number: "100%", label: "Renewable Energy", suffix: "" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-success mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-muted-foreground font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Certifications & Standards
            </h3>
            <p className="text-muted-foreground">
              Recognized for our commitment to quality and sustainability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 text-center shadow-water hover:shadow-glow transition-all duration-300 group"
              >
                <div className="inline-flex p-3 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Future commitments */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-success/5 border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our 2030 Sustainability Goals
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Plastic-Free Packaging</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Energy Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1M</div>
                <div className="text-sm text-muted-foreground">Trees Planted</div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Join us in our journey towards a more sustainable future. Every bottle you choose makes a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-success text-success-foreground rounded-lg hover:bg-success/90 transition-colors">
                Learn More About Our Mission
              </button>
              <button className="px-6 py-3 border border-success text-success rounded-lg hover:bg-success/10 transition-colors">
                Sustainability Report
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};