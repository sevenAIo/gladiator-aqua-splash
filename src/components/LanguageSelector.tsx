import { useState } from 'react';
import { Button } from './ui/enhanced-button';
import { Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
];

export const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState<string>('en');

  const getCurrentLanguage = () => languages.find(lang => lang.code === currentLang) || languages[0];

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'id' : 'en');
  };

  return (
    <Button
      variant="wave"
      size="sm"
      onClick={toggleLanguage}
      className="min-w-fit gap-2"
    >
      <Globe className="w-4 h-4" />
      <span>{getCurrentLanguage().flag}</span>
      <span className="hidden sm:inline">{getCurrentLanguage().name}</span>
    </Button>
  );
};

// Translation hook
export const useTranslation = () => {
  const [currentLang, setCurrentLang] = useState<string>('en');

  const translations = {
        en: {
          hero: {
            title: "Gladiator Mineral Water",
            subtitle: "Healthy, Refreshing & Premium",
            tagline: "Refresh Soul & Body",
            description: "Not just ordinary water. Selected from natural mountain springs, processed with Japanese Technology & ION Silver.",
            buyNow: "Buy Now",
            learnMore: "Learn More"
          },
      about: {
        title: "About Gladiator",
        story: "Gladiator Mineral Water is proudly owned by Vicky Prasetyo, dedicated to bringing freshness and premium hydration to every drop.",
        commitment: "Our commitment to quality ensures that every bottle delivers the purest mountain spring water enhanced with cutting-edge technology."
      },
      features: {
        title: "Premium Features",
        natural: {
          title: "Natural Mountain Springs",
          description: "Sourced from pristine mountain springs for the purest taste."
        },
        technology: {
          title: "Japanese Technology & ION Silver",
          description: "Advanced purification process ensuring maximum health benefits."
        },
        healthy: {
          title: "Healthy & Refreshing",
          description: "Perfectly balanced minerals for optimal hydration and wellness."
        }
      },
      products: {
        title: "Our Products",
        subtitle: "Premium quality in every drop"
      },
      testimonials: {
        title: "What Our Customers Say"
      },
      global: {
        title: "Global Reach",
        subtitle: "Where to Find Gladiator Water"
      },
      sustainability: {
        title: "Sustainability",
        subtitle: "Eco-friendly & Hygienic Packaging Process",
        description: "We are committed to environmental responsibility through sustainable packaging and eco-friendly production processes."
      }
    },
      id: {
        hero: {
          title: "Gladiator Mineral Water",
          subtitle: "Sehat, Menyegarkan & Premium",
          tagline: "Seyarkan Jiwa & Raga",
          description: "Bukan air biasa. Dipilih dari mata air pegunungan alami, diproses dengan Teknologi Jepang & ION Silver.",
          buyNow: "Beli Sekarang",
          learnMore: "Pelajari Lebih Lanjut"
        },
      about: {
        title: "Tentang Gladiator",
        story: "Gladiator Mineral Water dimiliki dengan bangga oleh Vicky Prasetyo, yang berdedikasi untuk memberikan kesegaran dan hidrasi premium di setiap tetes.",
        commitment: "Komitmen kami terhadap kualitas memastikan bahwa setiap botol memberikan air pegunungan termurni yang ditingkatkan dengan teknologi canggih."
      },
      features: {
        title: "Fitur Premium",
        natural: {
          title: "Mata Air Pegunungan Alami",
          description: "Bersumber dari mata air pegunungan murni untuk rasa yang paling murni."
        },
        technology: {
          title: "Teknologi Jepang & ION Silver",
          description: "Proses pemurnian canggih memastikan manfaat kesehatan maksimal."
        },
        healthy: {
          title: "Sehat & Menyegarkan",
          description: "Mineral yang seimbang sempurna untuk hidrasi dan kesehatan optimal."
        }
      },
      products: {
        title: "Produk Kami",
        subtitle: "Kualitas premium di setiap tetes"
      },
      testimonials: {
        title: "Apa Kata Pelanggan Kami"
      },
      global: {
        title: "Jangkauan Global",
        subtitle: "Dimana Menemukan Air Gladiator"
      },
      sustainability: {
        title: "Keberlanjutan",
        subtitle: "Proses Kemasan Ramah Lingkungan & Higienis",
        description: "Kami berkomitmen pada tanggung jawab lingkungan melalui kemasan berkelanjutan dan proses produksi ramah lingkungan."
      }
    }
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[currentLang as keyof typeof translations];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, currentLang, setCurrentLang };
};