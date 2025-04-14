
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Shuffle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TarotCard from '@/components/TarotCard';
import { tarotCards } from '@/data/tarotCards';
import { useTarot, ReadingType } from '@/contexts/TarotContext';
import { toast } from "@/components/ui/use-toast";

const CardSelectionPage = () => {
  const { readingType } = useParams<{ readingType: string }>();
  const navigate = useNavigate();
  const [cards, setCards] = useState([...tarotCards]);
  const [isShuffling, setIsShuffling] = useState(false);
  
  const tarotContext = useTarot();

  useEffect(() => {
    if (readingType) {
      tarotContext.setReadingType(readingType as ReadingType);
      tarotContext.resetReading();
    }
  }, [readingType]);

  const shuffleCards = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5);
      setCards(shuffled);
      setIsShuffling(false);
    }, 1000);
  };

  const handleCardSelect = (card: any) => {
    const maxCards = readingType === 'three-card' ? 3 : 1;
    
    if (tarotContext.isCardSelected(card.id)) {
      tarotContext.selectCard(card);
      return;
    }
    
    if (tarotContext.selectedCards.length < maxCards) {
      tarotContext.selectCard(card);
    } else {
      toast({
        title: "Maximum cards selected",
        description: `You can only select ${maxCards} card${maxCards > 1 ? 's' : ''} for this reading.`,
        variant: "destructive",
      });
    }
  };

  const handleGetReading = () => {
    const requiredCards = readingType === 'three-card' ? 3 : 1;
    if (tarotContext.selectedCards.length === requiredCards) {
      navigate(`/reading-result/${readingType}`);
    } else {
      toast({
        title: "Not enough cards selected",
        description: `Please select ${requiredCards} card${requiredCards > 1 ? 's' : ''} to continue.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="font-serif text-3xl font-bold mb-4 bg-gradient-to-r from-white to-mystical-purple-light bg-clip-text text-transparent">
          {readingType === 'three-card' ? 'Past-Present-Future Reading' : 'Single Card Insight'}
        </h1>
        <p className="text-white/70">
          {readingType === 'three-card' 
            ? 'Select three cards from the deck to reveal insights about your past, present, and future.' 
            : 'Select one card from the deck to receive insight about your current situation.'}
        </p>
        
        <div className="flex justify-center mt-6">
          <Button 
            onClick={shuffleCards}
            disabled={isShuffling}
            className="bg-mystical-purple hover:bg-mystical-purple-dark text-white mr-4"
          >
            <Shuffle className="mr-2 h-4 w-4" />
            Shuffle Deck
          </Button>
          
          <Button 
            onClick={handleGetReading}
            className="bg-mystical-gold hover:bg-mystical-gold/80 text-mystical-charcoal"
          >
            Get Reading
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-4 text-sm text-white/60">
          Selected: {tarotContext.selectedCards.length}/{readingType === 'three-card' ? '3' : '1'}
        </div>
      </div>

      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 ${isShuffling ? 'opacity-50' : ''}`}>
        {cards.map((card) => (
          <div key={card.id} className="animate-fade-in">
            <TarotCard
              id={card.id}
              name={card.name}
              isSelected={tarotContext.isCardSelected(card.id)}
              onClick={() => !isShuffling && handleCardSelect(card)}
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSelectionPage;
