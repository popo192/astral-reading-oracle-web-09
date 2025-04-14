
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
}) => {
  const [hover, setHover] = useState(false);
  
  const cardBackStyle = {
    backgroundImage: `url('/card-back.jpg')`,
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
          "card-container cursor-pointer",
          isRevealed && "card-flipped",
          isSelected && !isRevealed && "ring-2 ring-mystical-gold"
        )}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={cn(
          "card-inner w-full h-full",
          hover && !isRevealed && "scale-105 transition-transform duration-300"
        )}>
          <div 
            className={cn(
              "card-front rounded-lg shadow-lg overflow-hidden",
              hover && !isRevealed && "shadow-mystical-gold/30"
            )}
            style={cardBackStyle}
          >
            <div className="w-full pb-[150%]"></div>
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
