import { useState, useEffect } from 'react';
import { useTranslation } from './LanguageSelector';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/enhanced-button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Jakarta, Indonesia",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Gladiator water has completely changed my hydration game! The taste is incredibly pure and refreshing. I can actually feel the difference in quality compared to other brands.",
      textId: "Air Gladiator benar-benar mengubah cara hidrasi saya! Rasanya sangat murni dan menyegarkan. Saya benar-benar bisa merasakan perbedaan kualitas dibanding merek lain."
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "As a health-conscious person, I appreciate the ION Silver technology and natural mountain spring source. It's premium quality water that I trust for my family.",
      textId: "Sebagai seseorang yang peduli kesehatan, saya menghargai teknologi ION Silver dan sumber mata air pegunungan alami. Ini adalah air berkualitas premium yang saya percayai untuk keluarga."
    },
    {
      id: 3,
      name: "Priya Sharma",
      location: "Mumbai, India",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "The Japanese technology really shows in the water quality. It's crisp, clean, and has the perfect mineral balance. Highly recommend for anyone who values premium hydration.",
      textId: "Teknologi Jepang benar-benar terlihat dalam kualitas airnya. Sangat segar, bersih, dan memiliki keseimbangan mineral yang sempurna. Sangat direkomendasikan untuk siapa saja yang menghargai hidrasi premium."
    },
    {
      id: 4,
      name: "Ahmad Rahman",
      location: "Kuala Lumpur, Malaysia",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Been drinking Gladiator for 2 years now. The consistency in quality is remarkable. Perfect for our office and my personal consumption. Worth every penny!",
      textId: "Sudah minum Gladiator selama 2 tahun sekarang. Konsistensi kualitasnya luar biasa. Sempurna untuk kantor kami dan konsumsi pribadi saya. Sebanding dengan harganya!"
    },
    {
      id: 5,
      name: "Lisa Wong",
      location: "Hong Kong",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "The eco-friendly packaging is a bonus! Great to see a company that cares about the environment while delivering exceptional water quality.",
      textId: "Kemasan ramah lingkungan adalah nilai plus! Senang melihat perusahaan yang peduli lingkungan sambil menghadirkan kualitas air yang luar biasa."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-background relative overflow-hidden">
      <div className="wave-animation absolute top-0 left-0 w-full h-32 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('testimonials.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-water mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied customers around the world
          </p>
        </div>

        {/* Main testimonial display */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12 shadow-premium bg-gradient-to-br from-card to-water-light/5 animate-fade-in-up">
            <div className="text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-60" />
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Customer info */}
              <div className="flex items-center justify-center gap-4">
                <Avatar className="w-16 h-16 ring-2 ring-primary/20">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                  <AvatarFallback className="bg-gradient-premium text-accent-foreground font-bold">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation buttons */}
          <Button
            variant="wave"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="wave"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="flex justify-center gap-4 md:hidden mb-12">
          <Button variant="wave" size="sm" onClick={prevTestimonial}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button variant="wave" size="sm" onClick={nextTestimonial}>
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Customer stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "4.9", label: "Average Rating", suffix: "/5" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "15+", label: "Countries Served" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}{stat.suffix || ''}
              </div>
              <div className="text-muted-foreground font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the premium quality and taste that customers worldwide love
            </p>
            <Button variant="premium" size="lg">
              Order Your First Bottle Today
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};