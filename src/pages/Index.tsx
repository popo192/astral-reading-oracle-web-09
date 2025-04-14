
import React from 'react';
import { Moon, Sun, PanelTop } from 'lucide-react';
import ReadingOption from '@/components/ReadingOption';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-mystical-purple-light to-mystical-gold bg-clip-text text-transparent">
          Discover Your Path
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
          Welcome to Mystic Tarot, where ancient wisdom meets modern insight. 
          Select a reading to reveal the energies that surround your journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ReadingOption
          title="Past-Present-Future"
          description="Explore how your past influences your present and reveals your potential future path with this three-card spread."
          icon={<PanelTop size={48} />}
          to="/select-cards/three-card"
          className="animate-fade-in"
        />
        
        <ReadingOption
          title="Single Card Insight"
          description="A focused reading that provides clarity on a specific question or situation in your current life circumstances."
          icon={<Sun size={48} />}
          to="/select-cards/single-card"
          className="animate-fade-in"
        />
      </div>

      <div className="mt-16 text-center text-sm text-white/60 max-w-lg mx-auto animate-fade-in">
        <p>
          Tarot readings provide guidance but you create your own destiny. 
          The cards reveal possibilities rather than predetermined outcomes.
        </p>
      </div>
    </div>
  );
};

export default Index;
