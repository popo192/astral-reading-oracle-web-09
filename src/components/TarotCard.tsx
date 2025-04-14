
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TarotCardProps {
  id: number;
  name?: string;
  image?: string;
  isSelected?: boolean;
  isRevealed?: boolean;
  description?: string;
  onClick?: () => void;
  className?: string;
  position?: 'past' | 'present' | 'future' | 'single';
  isFlipping?: boolean;
}

const TarotCard: React.FC<TarotCardProps> = ({
  id,
  name = '',
  image = '',
  isSelected = false,
  isRevealed = false,
  description = '',
  onClick,
  className = '',
  position,
  isFlipping = false,
}) => {
  const [hover, setHover] = useState(false);
  
  const cardBackStyle = {
    backgroundImage: `url('/tarot/card-back.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardFrontStyle = {
    backgroundImage: image ? `url('${image}')` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className={cn("relative", className)}>
      {position && isRevealed && (
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 font-serif text-mystical-gold text-sm uppercase tracking-wider">
          {position}
        </div>
      )}
      
      <div 
        className={cn(
          "card-container cursor-pointer perspective-1000",
          isRevealed && "card-flipped",
          isFlipping && "animate-flip-card",
          isSelected && !isRevealed && "ring-2 ring-mystical-gold shadow-lg shadow-mystical-gold/30",
          hover && !isRevealed && !isSelected && "shadow-md shadow-mystical-purple-light/30",
          isSelected && !isRevealed && "animate-float"
        )}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={cn(
          "card-inner w-full h-full transition-transform duration-500",
          hover && !isRevealed && !isSelected && "scale-105 translate-y-[-5px]",
          isSelected && !isRevealed && "scale-105 translate-y-[-8px]"
        )}>
          <div 
            className={cn(
              "card-front rounded-lg shadow-lg overflow-hidden shimmer",
              "border border-mystical-purple-light/20", // Make cards more visible
              hover && !isRevealed && "shadow-mystical-gold/30",
              isSelected && !isRevealed && "animate-glow"
            )}
            style={cardBackStyle}
          >
            <div className="w-full pb-[150%] relative">
              {isSelected && !isRevealed && (
                <div className="absolute inset-0 bg-gradient-to-b from-mystical-gold/20 to-transparent opacity-70"></div>
              )}
              {hover && !isRevealed && !isSelected && (
                <div className="absolute inset-0 bg-gradient-to-b from-mystical-purple-light/20 to-transparent opacity-50"></div>
              )}
            </div>
          </div>
          
          <div 
            className="card-back rounded-lg shadow-lg overflow-hidden"
            style={cardFrontStyle}
          >
            <div className="w-full pb-[150%] bg-mystical-purple-dark/80 flex flex-col items-center justify-end p-4">
              {!image && (
                <>
                  <h3 className="font-serif text-lg text-mystical-gold">{name || `Card ${id}`}</h3>
                  <p className="text-xs text-white/70 mt-2 line-clamp-3">{description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
