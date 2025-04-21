
/**
 * Utility functions for tarot deck manipulations and animations
 */

/**
 * Calculate fan-style deck rotation and position
 * @param index Card index in the deck
 * @param totalCards Total number of cards in the deck
 * @param fanWidth Width of the fan in degrees
 * @returns Positioning information for the card
 */
export const calculateFanPosition = (
  index: number, 
  totalCards: number,
  fanWidth = 150
) => {
  // Calculate rotation (from -fanWidth/2 to +fanWidth/2)
  const rotation = -(fanWidth / 2) + (index * (fanWidth / (totalCards - 1)));
  
  // Calculate translation based on rotation
  // More rotation means more horizontal offset - increased multiplier for wider spread
  const translateX = (Math.sin(rotation * Math.PI / 180) * 70);
  const translateY = (Math.abs(rotation) / 4) - 30; // Reduced vertical offset and moved higher up
  
  // Calculate z-index to ensure proper layering
  const zIndex = index;

  return {
    rotation,
    translateX,
    translateY,
    zIndex
  };
};

/**
 * Calculate optimal card size based on viewport and number of cards
 * @param viewportWidth Current viewport width
 * @param cardCount Number of cards to display
 * @returns Optimal card width in pixels
 */
export const calculateCardSize = (viewportWidth: number, cardCount: number) => {
  // Base size calculations depending on viewport and card count
  if (viewportWidth < 640) {
    // Mobile: cards should be ~80-100px
    return Math.min(100, (viewportWidth - 40) / Math.min(cardCount, 3));
  } else if (viewportWidth < 1024) {
    // Tablet: cards should be ~100-120px
    return Math.min(120, (viewportWidth - 60) / Math.min(cardCount, 5));
  } else {
    // Desktop: cards should be ~130-150px
    return Math.min(150, (viewportWidth - 80) / Math.min(cardCount, 8));
  }
};

/**
 * Generate a shuffle animation sequence for cards
 * @param cardCount Number of cards in the deck
 * @returns Array of animation timing offsets for each card
 */
export const generateShuffleSequence = (cardCount: number) => {
  return Array(cardCount).fill(0).map(() => ({
    timing: Math.random() * 0.5, // Random timing offset between 0-500ms
    rotation: (Math.random() - 0.5) * 360, // Random full rotation
  }));
};

/**
 * Determine if a card has been selected
 * @param cardId ID of the card to check
 * @param selectedIds Array of selected card IDs
 * @returns Boolean indicating if card is selected
 */
export const isCardSelected = (cardId: number, selectedIds: number[]) => {
  return selectedIds.includes(cardId);
};

/**
 * Create arc layout parameters for card positioning
 * @param index Index of card in the deck
 * @param totalCards Total number of cards
 * @param radius Radius of the arc
 * @returns Position parameters for the card
 */
export const calculateArcPosition = (
  index: number,
  totalCards: number,
  radius = 300
) => {
  const angle = -(Math.PI / 4) + ((index / (totalCards - 1)) * (Math.PI / 2));
  
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
    rotation: (angle * 180 / Math.PI) - 90
  };
};

/**
 * Generate a selection animation transition
 * @param card The card being selected
 * @param delay Optional delay before animation starts
 * @returns Animation parameters
 */
export const generateSelectionAnimation = (card: any, delay = 0) => {
  return {
    transitionDelay: `${delay}ms`,
    animationDelay: `${delay}ms`,
  };
};

/**
 * Calculate the fan width based on the number of cards
 * @param cardCount Number of cards in the deck
 * @param viewportWidth Current viewport width
 * @returns Optimal fan width in degrees
 */
export const calculateFanWidth = (cardCount: number, viewportWidth: number) => {
  // Adjust fan width based on number of cards and viewport - wider fan overall
  if (viewportWidth < 640) {
    return Math.min(120, 80 + (cardCount * 0.5)); // Wider on mobile
  } else if (viewportWidth < 1024) {
    return Math.min(180, 120 + (cardCount * 0.5)); // Wider on tablet
  } else {
    return Math.min(210, 150 + (cardCount * 0.5)); // Much wider on desktop
  }
};
