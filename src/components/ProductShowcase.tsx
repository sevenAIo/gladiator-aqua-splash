import { useState } from 'react';
import { useTranslation } from './LanguageSelector';
import { Card } from './ui/card';
import { Button } from './ui/enhanced-button';
import { Badge } from './ui/badge';
import { Star, ShoppingCart, Zap, Award } from 'lucide-react';
import { BubbleEffect, RippleEffect } from './WaterEffects';
import gladiatorBottleSingle from '@/assets/gladiator-bottle-single.jpg';
import gladiatorBottleDynamic from '@/assets/gladiator-bottle-dynamic.jpg';
import gladiatorBottlesSplash from '@/assets/gladiator-bottles-splash.jpg';

export const ProductShowcase = () => {
  const { t } = useTranslation();
  const [activeProduct, setActiveProduct] = useState(0);
  const [rippleTrigger, setRippleTrigger] = useState(false);

  const products = [
    {
      id: 1,
      name: "Gladiator Premium 500ml",
      price: "Rp 3.500",
      priceUSD: "$0.25",
      image: gladiatorBottleSingle,
      features: ["Natural Spring Water", "ION Silver Enhanced", "BPA-Free Bottle"],
      rating: 4.9,
      popular: true
    },
    {
      id: 2,
      name: "Gladiator Premium 1.5L",
      price: "Rp 8.500",
      priceUSD: "$0.60",
      image: gladiatorBottleDynamic,
      features: ["Family Size", "Premium Quality", "Cost Effective"],
      rating: 4.8,
      popular: false
    },
    {
      id: 3,
      name: "Gladiator Premium 19L",
      price: "Rp 25.000",
      priceUSD: "$1.75",
      image: gladiatorBottlesSplash,
      features: ["Gallon Size", "Home & Office", "Best Value"],
      rating: 4.9,
      popular: false
    }
  ];

  const handleProductClick = (index: number) => {
    setActiveProduct(index);
    setRippleTrigger(prev => !prev);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-water-light/5 to-background relative overflow-hidden">
      <BubbleEffect />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('products.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-premium mx-auto mb-8" />
          <p className="text-xl text-muted-foreground">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product display */}
          <div className="relative animate-fade-in-up">
            <div className="relative group">
              <RippleEffect trigger={rippleTrigger} />
              
              {/* Main product image */}
              <div className="relative z-10 bg-gradient-splash rounded-3xl p-8 shadow-premium">
                <img 
                  src={products[activeProduct].image}
                  alt={products[activeProduct].name}
                  className="w-full max-w-sm mx-auto premium-glow hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating badges */}
                {products[activeProduct].popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    <Award className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <Badge className="absolute top-4 left-4 bg-success text-success-foreground">
                  <Zap className="w-4 h-4 mr-1" />
                  ION Silver
                </Badge>
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-water rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
            </div>
          </div>

          {/* Product details and selection */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Product selection tabs */}
            <div className="grid grid-cols-1 gap-4">
              {products.map((product, index) => (
                <Card 
                  key={product.id}
                  className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                    activeProduct === index 
                      ? 'border-primary shadow-glow bg-primary/5' 
                      : 'border-border hover:border-primary/50 hover:shadow-water'
                  }`}
                  onClick={() => handleProductClick(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-splash rounded-lg flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{product.name}</h3>
                        {product.popular && (
                          <Badge variant="secondary" className="text-xs">Popular</Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) 
                                  ? 'text-accent fill-current' 
                                  : 'text-muted-foreground/30'
                              }`} 
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-lg font-bold text-primary">{product.price}</div>
                          <div className="text-sm text-muted-foreground">{product.priceUSD}</div>
                        </div>
                        
                        {activeProduct === index && (
                          <Button variant="splash" size="sm">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Active product details */}
            <Card className="p-6 shadow-water">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {products[activeProduct].name}
              </h3>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                <ul className="space-y-2">
                  {products[activeProduct].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="premium" className="flex-1">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Now
                </Button>
                <Button variant="hero" className="flex-1">
                  Add to Wishlist
                </Button>
              </div>
            </Card>

            {/* Special offer */}
            <Card className="p-6 bg-gradient-to-r from-accent/10 to-gold-light/10 border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <h4 className="font-bold text-foreground">Special Offer</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Buy 12 bottles and get 2 free! Perfect for families and offices.
              </p>
              <Button variant="wave" size="sm">
                Learn More
              </Button>
            </Card>
          </div>
        </div>

        {/* Additional product info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Quality",
              description: "Every bottle is quality tested and meets international standards",
              icon: Award
            },
            {
              title: "Fast Delivery",
              description: "Same-day delivery available in major cities across Indonesia",
              icon: Zap
            },
            {
              title: "Customer Support",
              description: "24/7 customer service for all your queries and concerns",
              icon: Star
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center shadow-water hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};