import { useState } from 'react';
import { useTranslation } from './LanguageSelector';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Globe, Truck, Phone } from 'lucide-react';

export const GlobalReach = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countries = [
    {
      name: "Indonesia",
      flag: "🇮🇩",
      cities: ["Jakarta", "Surabaya", "Bandung", "Medan", "Makassar"],
      distributors: 25,
      stores: 500,
      phone: "+62-21-xxxx-xxxx"
    },
    {
      name: "Singapore",
      flag: "🇸🇬",
      cities: ["Singapore"],
      distributors: 3,
      stores: 45,
      phone: "+65-xxxx-xxxx"
    },
    {
      name: "Malaysia",
      flag: "🇲🇾",
      cities: ["Kuala Lumpur", "Johor Bahru", "Penang"],
      distributors: 8,
      stores: 120,
      phone: "+60-3-xxxx-xxxx"
    },
    {
      name: "Thailand",
      flag: "🇹🇭",
      cities: ["Bangkok", "Phuket", "Chiang Mai"],
      distributors: 6,
      stores: 80,
      phone: "+66-2-xxxx-xxxx"
    },
    {
      name: "Philippines",
      flag: "🇵🇭",
      cities: ["Manila", "Cebu", "Davao"],
      distributors: 10,
      stores: 150,
      phone: "+63-2-xxxx-xxxx"
    },
    {
      name: "Vietnam",
      flag: "🇻🇳",
      cities: ["Ho Chi Minh", "Hanoi", "Da Nang"],
      distributors: 7,
      stores: 90,
      phone: "+84-28-xxxx-xxxx"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden">
      <div className="wave-animation absolute bottom-0 left-0 w-full h-32 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('global.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-premium mx-auto mb-8" />
          <p className="text-xl text-muted-foreground">
            {t('global.subtitle')}
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-16 animate-fade-in-up">
          <Card className="p-8 shadow-premium bg-gradient-to-br from-card to-primary/5">
            <div className="text-center mb-8">
              <Globe className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Map</h3>
              <p className="text-muted-foreground">
                Click on a country below to see our distribution network
              </p>
            </div>

            {/* Map placeholder with visual representation */}
            <div className="relative bg-gradient-to-br from-water-light/20 to-water-medium/20 rounded-2xl p-8 min-h-80 flex items-center justify-center border border-primary/20">
              <div className="text-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
                  {countries.map((country, index) => (
                    <button
                      key={country.name}
                      onClick={() => setSelectedCountry(country.name)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedCountry === country.name
                          ? 'border-primary bg-primary/10 shadow-glow'
                          : 'border-border hover:border-primary/50 hover:shadow-water'
                      }`}
                    >
                      <div className="text-3xl mb-2">{country.flag}</div>
                      <div className="text-sm font-medium text-foreground">{country.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {country.stores} stores
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Country details */}
        {selectedCountry && (
          <div className="mb-16 animate-fade-in-up">
            {(() => {
              const country = countries.find(c => c.name === selectedCountry);
              if (!country) return null;

              return (
                <Card className="p-8 shadow-water border-primary/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{country.flag}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{country.name}</h3>
                      <p className="text-muted-foreground">Distribution Network</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        Available Cities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {country.cities.map((city, index) => (
                          <Badge key={index} variant="secondary">
                            {city}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gradient-water/10 rounded-lg">
                        <span className="text-foreground">Distributors</span>
                        <Badge className="bg-primary text-primary-foreground">
                          {country.distributors}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-premium/10 rounded-lg">
                        <span className="text-foreground">Retail Stores</span>
                        <Badge className="bg-accent text-accent-foreground">
                          {country.stores}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                        <span className="text-foreground flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Contact
                        </span>
                        <span className="text-success font-mono text-sm">
                          {country.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })()}
          </div>
        )}

        {/* Distribution stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Globe, label: "Countries", value: "15+", color: "text-primary" },
            { icon: MapPin, label: "Cities", value: "100+", color: "text-success" },
            { icon: Truck, label: "Distributors", value: "200+", color: "text-accent" },
            { icon: MapPin, label: "Retail Points", value: "2000+", color: "text-water-dark" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center shadow-water hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-full bg-${stat.color.split('-')[1]}/10 mb-4`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Partnership opportunities */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Become a Gladiator Partner
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our growing network of distributors and bring premium Gladiator Mineral Water to your region
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors">
                Partnership Inquiry
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};