import { useTranslation } from './LanguageSelector';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Quote, Award, Heart, Target } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-background to-water-light/10 relative overflow-hidden">
      <div className="wave-animation absolute top-0 left-0 w-full h-32 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-premium mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story section */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="p-8 shadow-water border-water-medium/20">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-8 h-8 text-primary mt-1" />
                <div>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    {t('about.story')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.commitment')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <Avatar className="w-16 h-16 ring-2 ring-primary/20">
                  <AvatarImage src="/placeholder.svg" alt="Vicky Prasetyo" />
                  <AvatarFallback className="bg-gradient-premium text-accent-foreground font-bold text-lg">
                    VP
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">Vicky Prasetyo</h4>
                  <p className="text-sm text-muted-foreground">Founder & Owner</p>
                  <p className="text-xs text-primary font-medium">Gladiator Mineral Water</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Values section */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid gap-6">
              <Card className="p-6 shadow-water hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Premium Quality</h3>
                </div>
                <p className="text-muted-foreground">
                  Every bottle meets the highest international standards for purity and taste.
                </p>
              </Card>

              <Card className="p-6 shadow-water hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-success/10 group-hover:bg-success/20 transition-colors">
                    <Heart className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Health First</h3>
                </div>
                <p className="text-muted-foreground">
                  Enhanced with beneficial minerals and processed using advanced Japanese technology.
                </p>
              </Card>

              <Card className="p-6 shadow-water hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Mission Driven</h3>
                </div>
                <p className="text-muted-foreground">
                  Committed to bringing the finest mineral water experience to families worldwide.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100%", label: "Natural" },
            { number: "15+", label: "Countries" },
            { number: "1M+", label: "Happy Customers" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};