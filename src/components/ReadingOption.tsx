
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ReadingOptionProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  to: string;
  className?: string;
}

const ReadingOption: React.FC<ReadingOptionProps> = ({
  title,
  description,
  icon,
  to,
  className,
}) => {
  return (
    <Link 
      to={to}
      className={cn(
        "block group bg-gradient-to-br from-mystical-purple-dark to-mystical-charcoal p-6 rounded-lg border border-mystical-purple/30",
        "hover:border-mystical-gold/50 transition-all duration-300",
        "transform hover:-translate-y-1 hover:shadow-lg hover:shadow-mystical-purple/20",
        className
      )}
    >
      <div className="flex flex-col items-center text-center">
        {icon && (
          <div className="mb-4 text-mystical-gold group-hover:animate-float">
            {icon}
          </div>
        )}
        <h3 className="font-serif text-xl text-mystical-purple-light mb-2 group-hover:text-mystical-gold transition-colors">
          {title}
        </h3>
        <p className="text-sm text-white/70">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ReadingOption;
