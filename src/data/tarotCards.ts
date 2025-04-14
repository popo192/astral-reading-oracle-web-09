
export interface TarotCard {
  id: number;
  name: string;
  image: string;
  meaning: {
    upright: string;
    reversed: boolean;
    description: string;
    past?: string;
    present?: string;
    future?: string;
  };
}

export const tarotCards: TarotCard[] = [
  {
    id: 1,
    name: "The Fool",
    image: "/fool.jpg", 
    meaning: {
      upright: "New beginnings, innocence, spontaneity",
      reversed: false,
      description: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.",
      past: "Your past was marked by innocence and spontaneity that shaped your current path.",
      present: "You are at a point of new beginnings and should embrace opportunities without fear.",
      future: "Soon you will embark on a new adventure that requires you to take a leap of faith."
    }
  },
  {
    id: 2,
    name: "The Magician",
    image: "/magician.jpg",
    meaning: {
      upright: "Manifestation, resourcefulness, power, inspired action",
      reversed: false,
      description: "The Magician represents your ability to utilize the tools at your disposal, showing creativity, skill, and a determined will to manifest your goals into reality.",
      past: "Your past actions have demonstrated your ability to make things happen through your own power.",
      present: "You currently possess all the tools needed to succeed - it's time to utilize them.",
      future: "Your ability to bring ideas into reality will soon lead to significant manifestation."
    }
  },
  {
    id: 3,
    name: "The High Priestess",
    image: "/highpriestess.jpg",
    meaning: {
      upright: "Intuition, sacred knowledge, divine feminine",
      reversed: false,
      description: "The High Priestess represents intuition, unconscious knowledge, and inner wisdom. She connects to the spiritual realm and understands things beyond logical explanation.",
      past: "Your intuition has guided you well, even when you weren't consciously aware of it.",
      present: "Trust your intuition now - your subconscious already knows the answer you seek.",
      future: "Developing your intuitive abilities will reveal important insights soon."
    }
  },
  {
    id: 4,
    name: "The Empress",
    image: "/empress.jpg",
    meaning: {
      upright: "Femininity, beauty, nature, nurturing, abundance",
      reversed: false,
      description: "The Empress represents a connection with our femininity, sensuality and natural abundance. She signifies fertility, nurturing, and the importance of self-care.",
      past: "Your nurturing nature or someone who cared deeply for you has shaped your current situation.",
      present: "Embrace abundance and nurture your projects and relationships with care and love.",
      future: "Growth and prosperity await when you connect with natural rhythms and practice patience."
    }
  },
  {
    id: 5,
    name: "The Emperor",
    image: "/emperor.jpg",
    meaning: {
      upright: "Authority, structure, control, fatherhood",
      reversed: false,
      description: "The Emperor represents structure, stability and authority. He signifies the importance of logic, discipline and organization in achieving your goals.",
      past: "A strong authority figure or your own need for control has influenced your path.",
      present: "Creating structure and exercising disciplined leadership will help you succeed.",
      future: "Establishing solid foundations now will create lasting stability and authority."
    }
  },
  {
    id: 6,
    name: "The Hierophant",
    image: "/hierophant.jpg",
    meaning: {
      upright: "Tradition, conformity, spiritual wisdom, religious beliefs",
      reversed: false,
      description: "The Hierophant represents tradition, conventional wisdom and spiritual insights. He teaches us about the value of structures, institutions and established beliefs.",
      past: "Traditional values or education has formed an important foundation for you.",
      present: "Consider whether conventional wisdom or established procedures serve your situation.",
      future: "Spiritual guidance or mentorship will play an important role in your journey ahead."
    }
  },
  {
    id: 7,
    name: "The Lovers",
    image: "/lovers.jpg",
    meaning: {
      upright: "Love, harmony, alignment, choices",
      reversed: false,
      description: "The Lovers represents relationships, choices, alignment of values, and emotional connections. This card is about finding harmony within ourselves and with others.",
      past: "An important relationship or choice has significantly shaped your current situation.",
      present: "You're facing a significant choice that requires aligning with your deepest values.",
      future: "Harmonious relationships and alignment with your authentic self await you."
    }
  },
  {
    id: 8,
    name: "The Chariot",
    image: "/chariot.jpg", 
    meaning: {
      upright: "Direction, control, determination, success",
      reversed: false,
      description: "The Chariot represents determination, willpower and strength. This card appears when you need to stay focused on a goal despite obstacles or conflicting emotions.",
      past: "Your determination and drive has brought you to where you are today.",
      present: "Victory is possible through focus, determination, and balancing opposing forces.",
      future: "Your willpower and self-control will lead to triumph over obstacles."
    }
  }
];
