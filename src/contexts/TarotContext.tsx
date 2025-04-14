
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Card = {
  id: number;
  name: string;
  image: string;
  meaning: {
    upright: string;
    reversed: boolean;
    description: string;
  };
};

export type ReadingType = 'three-card' | 'single-card';

interface TarotContextType {
  selectedCards: Card[];
  readingType: ReadingType | null;
  setReadingType: (type: ReadingType) => void;
  selectCard: (card: Card) => void;
  resetReading: () => void;
  isCardSelected: (cardId: number) => boolean;
}

const TarotContext = createContext<TarotContextType | undefined>(undefined);

export const TarotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [readingType, setReadingType] = useState<ReadingType | null>(null);

  const selectCard = (card: Card) => {
    if (readingType === 'single-card' && selectedCards.length === 1) {
      return; // Already selected a card for single card reading
    }

    if (readingType === 'three-card' && selectedCards.length === 3) {
      return; // Already selected 3 cards for three card reading
    }

    // Check if the card is already selected
    if (isCardSelected(card.id)) {
      setSelectedCards(selectedCards.filter(c => c.id !== card.id));
    } else {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const isCardSelected = (cardId: number) => {
    return selectedCards.some(card => card.id === cardId);
  };

  const resetReading = () => {
    setSelectedCards([]);
    setReadingType(null);
  };

  return (
    <TarotContext.Provider
      value={{
        selectedCards,
        readingType,
        setReadingType,
        selectCard,
        resetReading,
        isCardSelected,
      }}
    >
      {children}
    </TarotContext.Provider>
  );
};

export const useTarot = () => {
  const context = useContext(TarotContext);
  if (context === undefined) {
    throw new Error('useTarot must be used within a TarotProvider');
  }
  return context;
};
