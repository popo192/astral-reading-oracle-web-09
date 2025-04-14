
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: string;
}

const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Only create stars if we're not in reduced motion mode
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const numberOfStars = 50;
    const newStars = Array.from({ length: numberOfStars }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage of screen width
      y: Math.random() * 100, // percentage of screen height
      size: Math.random() * 2 + 1, // between 1-3px
      opacity: Math.random() * 0.7 + 0.3, // between 0.3-1
      animationDelay: `${Math.random() * 2}s`
    }));
    
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
