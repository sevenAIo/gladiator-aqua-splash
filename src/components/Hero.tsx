import { useState, useEffect } from 'react';
import { Button } from './ui/enhanced-button';
import { BubbleEffect, WaveEffect, RippleEffect } from './WaterEffects';
import { LanguageSelector, useTranslation } from './LanguageSelector';
import { ChevronDown, Droplet, Mountain, Sparkles } from 'lucide-react';
import gladiatorLogo from '@/assets/gladiator-logo-official.jpg';
import gladiatorHero from '@/assets/gladiator-hero-vicky.jpg';
import gladiatorBottle from '@/assets/gladiator-bottle-dynamic.jpg';
import mountainHero from '@/assets/mountain-hero.jpg';

export const Hero = () => {
  const { t } = useTranslation();
  const [rippleTrigger, setRippleTrigger] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRippleTrigger(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${gladiatorHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60 z-10" />
      
      {/* Water effects */}
      <BubbleEffect />
      <WaveEffect />
      <RippleEffect trigger={rippleTrigger} />
      
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-30 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src={gladiatorLogo} 
              alt="Gladiator Logo" 
              className="h-12 w-auto bg-white/90 rounded-lg p-2 premium-glow"
            />
            <div className="text-white">
              <h1 className="text-xl font-bold">Gladiator</h1>
              <p className="text-sm opacity-90">Mineral Water</p>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-gold-light mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wider font-medium">{t('hero.tagline')}</span>
                <Sparkles className="w-6 h-6" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {t('hero.title')}
              </h1>
              
              <div className="flex items-center justify-center gap-3 text-water-light">
                <Mountain className="w-5 h-5" />
                <span className="text-xl md:text-2xl font-medium">
                  {t('hero.subtitle')}
                </span>
                <Droplet className="w-5 h-5" />
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="premium" size="xl" className="min-w-48">
                {t('hero.buyNow')}
              </Button>
              <Button variant="hero" size="xl" className="min-w-48">
                {t('hero.learnMore')}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>Natural Springs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-medium animate-pulse" />
                <span>Japanese Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-water-light animate-pulse" />
                <span>ION Silver</span>
              </div>
            </div>
          </div>

          {/* Right side - Product showcase */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-splash rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <img 
                src={gladiatorBottle}
                alt="Gladiator Water Bottle"
                className="relative z-10 w-full max-w-md mx-auto premium-glow hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating water droplets */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-bounce"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s',
                    }}
                  >
                    <Droplet className="w-4 h-4 text-water-light opacity-60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};