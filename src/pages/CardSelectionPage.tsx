import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Shuffle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TarotCard from '@/components/TarotCard';
import { tarotCards } from '@/data/tarotCards';
import { useTarot, ReadingType } from '@/contexts/TarotContext';
import { toast } from "@/components/ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardSelectionPage = () => {
  const { readingType } = useParams<{ readingType: string }>();
  const navigate = useNavigate();
  const [cards, setCards] = useState([...tarotCards]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  
  const tarotContext = useTarot();

  useEffect(() => {
    if (readingType) {
      tarotContext.setReadingType(readingType as ReadingType);
      tarotContext.resetReading();
    }
  }, [readingType]);

  const shuffleCards = () => {
    setIsShuffling(true);
    
    toast({
      title: "Shuffling deck...",
      description: "The cards are being shuffled to reveal your destiny.",
    });
    
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
      
      toast({
        title: `Card ${tarotContext.selectedCards.length + 1} selected`,
        description: maxCards > 1 ? `${maxCards - tarotContext.selectedCards.length - 1} more to go` : `Your card has been selected.`,
      });
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

  const renderFanDeck = () => {
    return (
      <div className="relative h-[400px] w-full hidden md:block mt-12 mb-8">
        <div className="absolute w-full h-full flex items-center justify-center">
          {cards.map((card, index) => {
            const rotation = -20 + (index * (40 / cards.length));
            const translateX = -100 + (index * (200 / cards.length));
            const isCardSelected = tarotContext.isCardSelected(card.id);
            
            return (
              <div 
                key={card.id}
                className={cn(
                  "absolute transition-all duration-500 transform-gpu",
                  isShuffling && "animate-spin-slow",
                  isCardSelected && "translate-y-[-100px]"
                )}
                style={{
                  transform: `translateX(${translateX}px) rotate(${rotation}deg)`,
                  zIndex: index,
                  opacity: isCardSelected ? 0.7 : 1
                }}
              >
                <TarotCard
                  id={card.id}
                  name={card.name}
                  isSelected={isCardSelected}
                  onClick={() => !isShuffling && handleCardSelect(card)}
                  className="w-24 h-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderMobileCarousel = () => {
    return (
      <div className="md:hidden w-full my-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {cards.map((card) => (
              <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/3 pl-2">
                <TarotCard
                  id={card.id}
                  name={card.name}
                  isSelected={tarotContext.isCardSelected(card.id)}
                  onClick={() => !isShuffling && handleCardSelect(card)}
                  className="w-full h-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" />
        </Carousel>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="font-serif text-3xl font-bold mb-4 bg-gradient-to-r from-white to-mystical-purple-light bg-clip-text text-transparent">
          {readingType === 'three-card' ? 'Past-Present-Future Reading' : 'Single Card Insight'}
        </h1>
        <p className="text-white/70 max-w-xl mx-auto mb-6">
          {readingType === 'three-card' 
            ? 'Select three cards from the deck to reveal insights about your past, present, and future.' 
            : 'Select one card from the deck to receive insight about your current situation.'}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <Button 
            onClick={shuffleCards}
            disabled={isShuffling}
            className="bg-mystical-purple hover:bg-mystical-purple-dark text-white w-full sm:w-auto"
          >
            <Shuffle className="mr-2 h-4 w-4" />
            Shuffle Deck
          </Button>
          
          <Button 
            onClick={handleGetReading}
            className="bg-mystical-gold hover:bg-mystical-gold/80 text-mystical-charcoal w-full sm:w-auto"
          >
            Get Reading
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-center mt-4 text-sm">
          <div className="bg-mystical-purple/30 px-3 py-1 rounded-full text-white/80">
            Selected: <span className="text-mystical-gold font-medium">{tarotContext.selectedCards.length}</span>/{readingType === 'three-card' ? '3' : '1'}
          </div>
        </div>
      </div>

      {renderFanDeck()}

      {renderMobileCarousel()}

      {tarotContext.selectedCards.length > 0 && (
        <div className="mt-8">
          <h3 className="font-serif text-xl text-center text-mystical-gold mb-4">Your Selected Cards</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tarotContext.selectedCards.map((card, index) => (
              <div key={index} className="animate-fade-in">
                <TarotCard
                  id={card.id}
                  name={card.name}
                  isSelected={true}
                  onClick={() => handleCardSelect(card)}
                  className="w-24 h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-12",
        isShuffling ? 'opacity-50' : ''
      )}>
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

const cn = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ');
};

export default CardSelectionPage;
