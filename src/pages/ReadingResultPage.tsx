import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { useTarot } from '@/contexts/TarotContext';
import TarotCard from '@/components/TarotCard';
import { Card, CardContent } from '@/components/ui/card';
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
  
  // Helper functions
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

  // Generate summary for the entire reading
  const getReadingSummary = () => {
    if (readingType !== 'three-card' || !tarotContext.selectedCards.length) return '';

    const cards = tarotContext.selectedCards.map((card, index) => {
      const details = getCardDetails(card.id);
      const position = getPositionLabel(index);
      return `${details.name} in the ${position}`;
    }).join(', ');

    return `Your reading reveals ${cards}. This spread suggests a journey from your past experiences through your current situation and into potential future developments. Consider how these energies flow and influence each other.`;
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="font-serif text-3xl font-bold mb-4 bg-gradient-to-r from-white to-mystical-purple-light bg-clip-text text-transparent">
          Your {readingType === 'three-card' ? 'Past-Present-Future' : 'Single Card'} Reading
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          {readingType === 'three-card' 
            ? 'This spread reveals the journey from your past influences through present circumstances to future possibilities.' 
            : 'This card represents the key energy influencing your current situation.'}
        </p>
      </div>

      <div className="flex flex-col gap-12 mb-12">
        {tarotContext.selectedCards.map((card, index) => {
          const cardDetails = getCardDetails(card.id);
          const position = getPositionLabel(index);
          
          return (
            <div key={index} className="w-full animate-fade-in">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-64 shrink-0">
                  <TarotCard
                    id={cardDetails.id}
                    name={cardDetails.name}
                    image={cardDetails.image}
                    isRevealed={revealedCards[index]}
                    position={position as any}
                  />
                </div>
                
                {revealedCards[index] && (
                  <Card className="flex-1 bg-mystical-purple-dark/50 border-mystical-purple-light/20">
                    <CardContent className="pt-6">
                      <h3 className="font-serif text-2xl text-mystical-gold mb-3">
                        {position.charAt(0).toUpperCase() + position.slice(1)}: {cardDetails.name}
                      </h3>
                      <p className="text-white/80 font-medium mb-3">{cardDetails.meaning.upright}</p>
                      <p className="text-white/70">
                        {getPositionalMeaning(cardDetails, position)}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {readingType === 'three-card' && revealedCards.every(card => card) && (
        <Card className="mb-12 bg-mystical-purple-dark/30 border-mystical-gold/20">
          <CardContent className="pt-6">
            <h2 className="font-serif text-2xl text-mystical-gold mb-4">Reading Summary</h2>
            <p className="text-white/80">{getReadingSummary()}</p>
          </CardContent>
        </Card>
      )}
      
      <div className="text-center">
        <Button 
          onClick={handleNewReading} 
          className="bg-mystical-gold hover:bg-mystical-gold/80 text-mystical-charcoal button-magical"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Get Another Reading
          <span></span>
          <span></span>
          <span></span>
        </Button>
      </div>
    </div>
  );
};

export default ReadingResultPage;
