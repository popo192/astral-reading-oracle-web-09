
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { useTarot } from '@/contexts/TarotContext';
import TarotCard from '@/components/TarotCard';
import { tarotCards } from '@/data/tarotCards';

const ReadingResultPage = () => {
  const { readingType } = useParams<{ readingType: string }>();
  const navigate = useNavigate();
  const tarotContext = useTarot();
  const [revealedCards, setRevealedCards] = useState<boolean[]>([]);
  
  // If no cards are selected, redirect back to home
  useEffect(() => {
    if (tarotContext.selectedCards.length === 0) {
      navigate('/');
    }
    
    // Initialize all cards as not revealed
    setRevealedCards(tarotContext.selectedCards.map(() => false));
    
    // Then reveal cards one by one with a delay
    const revealCard = (index: number) => {
      if (index < tarotContext.selectedCards.length) {
        setRevealedCards(prev => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }
    };
    
    // Reveal cards with a delay
    const timer1 = setTimeout(() => revealCard(0), 1000);
    const timer2 = setTimeout(() => revealCard(1), 2000);
    const timer3 = setTimeout(() => revealCard(2), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [tarotContext.selectedCards, navigate]);
  
  const handleNewReading = () => {
    tarotContext.resetReading();
    navigate('/');
  };
  
  const getPositionLabel = (index: number) => {
    if (readingType === 'three-card') {
      return ['past', 'present', 'future'][index];
    }
    return 'single';
  };
  
  const getCardDetails = (cardId: number) => {
    return tarotCards.find(card => card.id === cardId) || tarotCards[0];
  };
  
  const getPositionalMeaning = (card: any, position: string) => {
    if (position === 'past' && card.meaning.past) {
      return card.meaning.past;
    } else if (position === 'present' && card.meaning.present) {
      return card.meaning.present;
    } else if (position === 'future' && card.meaning.future) {
      return card.meaning.future;
    }
    return card.meaning.description;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="font-serif text-3xl font-bold mb-4 bg-gradient-to-r from-white to-mystical-purple-light bg-clip-text text-transparent">
          Your {readingType === 'three-card' ? 'Past-Present-Future' : 'Single Card'} Reading
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          {readingType === 'three-card' 
            ? 'These cards represent the influences of your past, the energies of your present, and potential future outcomes.' 
            : 'This card represents the key energy influencing your current situation.'}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12 mb-12">
        {tarotContext.selectedCards.map((card, index) => {
          const cardDetails = getCardDetails(card.id);
          const position = getPositionLabel(index);
          
          return (
            <div key={index} className="w-full md:w-64 animate-fade-in">
              <div className="mb-8">
                <TarotCard
                  id={cardDetails.id}
                  name={cardDetails.name}
                  image={cardDetails.image}
                  isRevealed={revealedCards[index]}
                  position={position as any}
                  className="mx-auto"
                />
              </div>
              
              {revealedCards[index] && (
                <div className="text-center animate-fade-in">
                  <h3 className="font-serif text-xl text-mystical-gold mb-2">{cardDetails.name}</h3>
                  <p className="text-sm text-white/80 font-medium mb-3">{cardDetails.meaning.upright}</p>
                  <p className="text-sm text-white/70">
                    {getPositionalMeaning(cardDetails, position)}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="text-center">
        <Button 
          onClick={handleNewReading} 
          className="bg-mystical-gold hover:bg-mystical-gold/80 text-mystical-charcoal"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Start a New Reading
        </Button>
      </div>
    </div>
  );
};

export default ReadingResultPage;
