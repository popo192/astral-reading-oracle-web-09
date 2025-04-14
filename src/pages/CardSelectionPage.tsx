
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Shuffle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TarotCard from '@/components/TarotCard';
import { tarotCards } from '@/data/tarotCards';
import { useTarot, ReadingType } from '@/contexts/TarotContext';
import { toast } from "@/components/ui/use-toast";
import { calculateFanPosition, calculateCardSize, calculateFanWidth, generateShuffleSequence } from '@/utils/DeckUtils';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [flippingCardId, setFlippingCardId] = useState<number | null>(null);
  const [selectionComplete, setSelectionComplete] = useState(false);
  const isMobile = useIsMobile();
  
  const tarotContext = useTarot();

  useEffect(() => {
    if (readingType) {
      tarotContext.setReadingType(readingType as ReadingType);
      tarotContext.resetReading();
    }
  }, [readingType]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check if selection is complete
  useEffect(() => {
    const requiredCards = readingType === 'three-card' ? 3 : 1;
    if (tarotContext.selectedCards.length === requiredCards) {
      setSelectionComplete(true);
    } else {
      setSelectionComplete(false);
    }
  }, [tarotContext.selectedCards.length, readingType]);

  const shuffleCards = () => {
    setIsShuffling(true);
    
    toast({
      title: "Shuffling deck...",
      description: "The cards are being shuffled to reveal your destiny.",
    });
    
    // Visual shuffling animation
    setTimeout(() => {
      // After animation, actually shuffle the order
      const newOrder = [...cards].sort(() => Math.random() - 0.5);
      setCards(newOrder);
      setIsShuffling(false);
    }, 1000);
  };

  const handleCardSelect = useCallback((card: any) => {
    const maxCards = readingType === 'three-card' ? 3 : 1;
    
    if (tarotContext.isCardSelected(card.id)) {
      tarotContext.selectCard(card); // This will unselect the card
      return;
    }
    
    if (tarotContext.selectedCards.length < maxCards) {
      // Set the card as flipping before selection
      setFlippingCardId(card.id);
      
      // Add a delay for the flip animation to complete
      setTimeout(() => {
        tarotContext.selectCard(card);
        setFlippingCardId(null);
        
        toast({
          title: `Card ${tarotContext.selectedCards.length + 1} selected`,
          description: maxCards > 1 ? `${maxCards - tarotContext.selectedCards.length - 1} more to go` : `Your card has been selected.`,
        });
      }, 800); // Match this delay with the flipCard animation duration
    } else {
      toast({
        title: "Maximum cards selected",
        description: `You can only select ${maxCards} card${maxCards > 1 ? 's' : ''} for this reading.`,
        variant: "destructive",
      });
    }
  }, [readingType, tarotContext]);

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

  // Calculate card width based on viewport size and number of cards
  const cardWidth = calculateCardSize(windowWidth, cards.length);

  // Calculate fan width based on number of cards
  const fanWidth = calculateFanWidth(cards.length, windowWidth);

  // Filter out selected cards from the deck display
  const displayedCards = cards.filter(card => 
    !tarotContext.selectedCards.some(selectedCard => selectedCard.id === card.id)
  );

  const renderFanDeck = () => {
    // Don't render fan deck on mobile or if selection is complete
    if (isMobile || selectionComplete) return null;
    
    return (
      <div className="relative h-[400px] w-full mt-8 mb-12 overflow-visible">
        <div className="absolute w-full h-full flex items-center justify-center">
          {displayedCards.map((card, index) => {
            // Calculate fan position
            const { rotation, translateX, translateY, zIndex } = calculateFanPosition(
              index, 
              displayedCards.length,
              fanWidth
            );
            const isCardFlipping = flippingCardId === card.id;
            
            return (
              <div 
                key={card.id}
                className={cn(
                  "absolute transition-all duration-500 transform-gpu",
                  isShuffling && "animate-pulse",
                  isCardFlipping && "z-50"
                )}
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`,
                  zIndex: zIndex,
                  width: `${cardWidth}px`,
                  opacity: isCardFlipping ? 0.8 : 1, // Make card slightly transparent while flipping
                }}
              >
                <TarotCard
                  id={card.id}
                  name={card.name}
                  isSelected={tarotContext.isCardSelected(card.id)}
                  isFlipping={isCardFlipping}
                  onClick={() => !isShuffling && !isCardFlipping && handleCardSelect(card)}
                  className="w-full h-auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderMobileCarousel = () => {
    // Only render on mobile and if selection is not complete
    if (!isMobile || selectionComplete) return null;
    
    return (
      <div className="w-full my-6">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {displayedCards.map((card) => {
              const isCardFlipping = flippingCardId === card.id;
              
              return (
                <CarouselItem key={card.id} className="md:basis-1/3 lg:basis-1/4 pl-2">
                  <TarotCard
                    id={card.id}
                    name={card.name}
                    isSelected={tarotContext.isCardSelected(card.id)}
                    isFlipping={isCardFlipping}
                    onClick={() => !isShuffling && !isCardFlipping && handleCardSelect(card)}
                    className="w-full h-auto"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" />
        </Carousel>
      </div>
    );
  };

  // Render selected cards area above the deck
  const renderSelectedCardsArea = () => {
    if (tarotContext.selectedCards.length === 0) {
      return (
        <div className="selected-card-area flex items-center justify-center p-6 mt-4 mb-8">
          <p className="text-white/50 italic">Select cards from the deck below</p>
        </div>
      );
    }
    
    return (
      <div className="selected-card-area p-6 mt-4 mb-8 animate-fade-in">
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
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-6 animate-fade-in">
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
            disabled={isShuffling || selectionComplete}
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

      {/* Selected Cards Section - Above the deck */}
      {renderSelectedCardsArea()}

      {/* Primary Deck Display - Fan Layout or Mobile Carousel */}
      <div className="deck-container mt-4">
        {!selectionComplete && (
          <>
            {renderFanDeck()}
            {renderMobileCarousel()}
            
            {/* For mobile display when selection is NOT complete, show a static grid of cards */}
            {isMobile && (
              <div className="grid grid-cols-3 gap-2 my-6">
                {displayedCards.slice(0, 9).map((card) => {
                  const isCardFlipping = flippingCardId === card.id;
                  
                  return (
                    <div key={card.id} className="aspect-[2/3]">
                      <TarotCard
                        id={card.id}
                        name={card.name}
                        isSelected={tarotContext.isCardSelected(card.id)}
                        isFlipping={isCardFlipping}
                        onClick={() => !isShuffling && !isCardFlipping && handleCardSelect(card)}
                        className="w-full h-full"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
        
        {/* When selection is complete, show a congratulatory message */}
        {selectionComplete && (
          <div className="text-center py-10 animate-fade-in">
            <h3 className="font-serif text-2xl text-mystical-gold mb-4">
              Your cards have been chosen!
            </h3>
            <p className="text-white/70 mb-6">
              Click "Get Reading" to reveal your tarot insights.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSelectionPage;
