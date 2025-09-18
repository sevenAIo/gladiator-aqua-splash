import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Water theme colors
        water: {
          light: "hsl(var(--water-light))",
          medium: "hsl(var(--water-medium))",
          dark: "hsl(var(--water-dark))",
          deep: "hsl(var(--water-deep))",
        },
        gold: {
          light: "hsl(var(--gold-light))",
          medium: "hsl(var(--gold-medium))",
          dark: "hsl(var(--gold-dark))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // Water-themed animations
        "water-ripple": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
        "water-flow": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "bubble-float": {
          "0%": {
            transform: "translateY(100vh) scale(0)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-100vh) scale(1)",
            opacity: "0",
          },
        },
        "wave": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "splash": {
          "0%": {
            transform: "scale(0) rotate(0deg)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1) rotate(180deg)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0) rotate(360deg)",
            opacity: "0",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--water-medium) / 0.5)",
          },
          "50%": {
            boxShadow: "0 0 40px hsl(var(--water-medium) / 0.8), 0 0 60px hsl(var(--accent) / 0.3)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "water-ripple": "water-ripple 1.5s ease-out infinite",
        "water-flow": "water-flow 3s ease-in-out infinite",
        "bubble-float": "bubble-float 6s ease-in-out infinite",
        "wave": "wave 20s linear infinite",
        "splash": "splash 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "glow": "glow 3s ease-in-out infinite",
      },
      // Custom background images and gradients
      backgroundImage: {
        "gradient-water": "var(--gradient-water)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-premium": "var(--gradient-premium)",
        "gradient-splash": "var(--gradient-splash)",
      },
      boxShadow: {
        "water": "var(--shadow-water)",
        "premium": "var(--shadow-premium)",
        "glow": "var(--shadow-glow)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
