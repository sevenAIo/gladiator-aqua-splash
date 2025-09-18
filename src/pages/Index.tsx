import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Testimonials } from '@/components/Testimonials';
import { GlobalReach } from '@/components/GlobalReach';
import { Sustainability } from '@/components/Sustainability';
import { Chatbot } from '@/components/Chatbot';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <GlobalReach />
      <Sustainability />
      <Chatbot />
    </main>
  );
};

export default Index;
