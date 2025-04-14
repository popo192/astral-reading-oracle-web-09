
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
  fanWidth = 120
) => {
  // Calculate rotation (from -fanWidth/2 to +fanWidth/2)
  const rotation = -(fanWidth / 2) + (index * (fanWidth / (totalCards - 1)));
  
  // Calculate translation based on rotation
  // More rotation means more horizontal offset
  const translateX = (Math.sin(rotation * Math.PI / 180) * 50);
  const translateY = (Math.abs(rotation) / 3); // Slight vertical offset based on angle
  
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
  // Base size calculations depending on viewport
  if (viewportWidth < 640) {
    // Mobile: cards should be ~80-100px
    return Math.min(100, (viewportWidth - 40) / 3);
  } else if (viewportWidth < 1024) {
    // Tablet: cards should be ~100-120px
    return Math.min(120, (viewportWidth - 60) / 5);
  } else {
    // Desktop: cards should be ~130-150px
    return Math.min(150, (viewportWidth - 80) / 8);
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
