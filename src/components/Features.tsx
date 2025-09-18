import { useTranslation } from './LanguageSelector';
import { Card } from './ui/card';
import { Mountain, Zap, Heart, Droplet, Shield, Leaf } from 'lucide-react';
import { BubbleEffect } from './WaterEffects';

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Mountain,
      key: 'natural',
      color: 'text-success',
      bgColor: 'bg-success/10',
      gradient: 'from-success/20 to-success/5'
    },
    {
      icon: Zap,
      key: 'technology',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Heart,
      key: 'healthy',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradient: 'from-primary/20 to-primary/5'
    }
  ];

  const additionalFeatures = [
    {
      icon: Droplet,
      title: "Crystal Clear Purity",
      description: "Advanced filtration removes impurities while preserving essential minerals.",
      color: 'text-water-dark',
      bgColor: 'bg-water-light/10'
    },
    {
      icon: Shield,
      title: "ION Silver Protection",
      description: "Natural antimicrobial properties for enhanced safety and freshness.",
      color: 'text-gold-dark',
      bgColor: 'bg-gold-light/10'
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Packaging",
      description: "Sustainable bottles designed with environmental responsibility in mind.",
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background relative overflow-hidden">
      <BubbleEffect />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-water mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect combination of nature's purity and cutting-edge technology
          </p>
        </div>

        {/* Main features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.key}
                className={`relative p-8 shadow-water hover:shadow-glow transition-all duration-500 group border-l-4 border-l-${feature.color.split('-')[1]}-500 animate-fade-in-up overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-full ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </div>

                {/* Decorative water ripple effect */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-splash rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Additional features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 shadow-water hover:shadow-glow transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.15}s` }}
              >
                <div className={`inline-flex p-3 rounded-full ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Feature comparison */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Card className="p-8 shadow-premium bg-gradient-to-r from-card to-secondary/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Gladiator?
              </h3>
              <p className="text-muted-foreground">
                Compare our premium features with ordinary mineral water
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-success mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Gladiator Mineral Water
                </h4>
                <ul className="space-y-3">
                  {[
                    "Natural mountain spring source",
                    "Japanese purification technology",
                    "ION Silver enhancement",
                    "Balanced mineral content",
                    "Eco-friendly packaging",
                    "Quality assured by Vicky Prasetyo"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-muted-foreground mb-4">
                  Ordinary Mineral Water
                </h4>
                <ul className="space-y-3">
                  {[
                    "Standard water sources",
                    "Basic filtration process",
                    "No special enhancement",
                    "Variable mineral levels",
                    "Standard packaging",
                    "Mass production approach"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};