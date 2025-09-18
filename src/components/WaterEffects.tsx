import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export const BubbleEffect = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const createBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 8; i++) {
        newBubbles.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 4 + 6,
          delay: Math.random() * 5,
        });
      }
      setBubbles(newBubbles);
    };

    createBubbles();
  }, []);

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export const WaveEffect = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <div className="wave-animation absolute inset-0" />
      <div 
        className="wave-animation absolute inset-0" 
        style={{ animationDelay: '1s', animationDuration: '4s' }} 
      />
      <div 
        className="wave-animation absolute inset-0" 
        style={{ animationDelay: '2s', animationDuration: '5s' }} 
      />
    </div>
  );
};

export const RippleEffect = ({ trigger }: { trigger: boolean }) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (!trigger) return;

    const newRipple = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 100,
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 2000);
  }, [trigger]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute animate-water-ripple"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            width: '20px',
            height: '20px',
            background: 'radial-gradient(circle, hsl(var(--water-light) / 0.6) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};