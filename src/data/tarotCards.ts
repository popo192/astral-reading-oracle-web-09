
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
    id: 0,
    name: "The Fool",
    image: "/tarot/fool.jpg", 
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
    id: 1,
    name: "The Magician",
    image: "/tarot/magician.jpg",
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
    id: 2,
    name: "The High Priestess",
    image: "/tarot/high-priestess.jpg",
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
    id: 3,
    name: "The Empress",
    image: "/tarot/empress.jpg",
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
    id: 4,
    name: "The Emperor",
    image: "/tarot/emperor.jpg",
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
    id: 5,
    name: "The Hierophant",
    image: "/tarot/hierophant.jpg",
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
    id: 6,
    name: "The Lovers",
    image: "/tarot/lovers.jpg",
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
    id: 7,
    name: "The Chariot",
    image: "/tarot/chariot.jpg", 
    meaning: {
      upright: "Direction, control, determination, success",
      reversed: false,
      description: "The Chariot represents determination, willpower and strength. This card appears when you need to stay focused on a goal despite obstacles or conflicting emotions.",
      past: "Your determination and drive has brought you to where you are today.",
      present: "Victory is possible through focus, determination, and balancing opposing forces.",
      future: "Your willpower and self-control will lead to triumph over obstacles."
    }
  },
  {
    id: 8,
    name: "Strength",
    image: "/tarot/strength.jpg", 
    meaning: {
      upright: "Inner strength, courage, persuasion, influence",
      reversed: false,
      description: "Strength represents inner courage, patience, compassion, and soft control. This card reminds us that true strength isn't about force but about mastering our emotions and impulses.",
      past: "Your inner strength and gentle persistence have helped overcome past challenges.",
      present: "Approach current challenges with patience and gentle determination rather than force.",
      future: "Your compassionate approach and inner strength will lead to lasting success."
    }
  },
  {
    id: 9,
    name: "The Hermit",
    image: "/tarot/hermit.jpg", 
    meaning: {
      upright: "Soul-searching, introspection, inner guidance",
      reversed: false,
      description: "The Hermit represents a period of introspection and self-reflection. It's about taking time alone to find your own light and wisdom within.",
      past: "A period of solitude or introspection has led to important insights that guide you now.",
      present: "This is a time to look within and trust your inner wisdom to guide your path.",
      future: "The answers you seek will come through solitude and listening to your inner voice."
    }
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    image: "/tarot/wheel-of-fortune.jpg", 
    meaning: {
      upright: "Good luck, karma, destiny, turning point",
      reversed: false,
      description: "The Wheel of Fortune represents life's cycles, destiny, and turning points. It reminds us that change is constant and fortune fluctuates.",
      past: "A significant change or stroke of luck has altered your course.",
      present: "You're at a turning point—embrace the changing circumstances.",
      future: "Expect a shift in fortune that will lead to new opportunities."
    }
  },
  {
    id: 11,
    name: "Justice",
    image: "/tarot/justice.jpg", 
    meaning: {
      upright: "Justice, fairness, truth, cause and effect",
      reversed: false,
      description: "Justice represents fairness, balance, and truth. This card reminds us that our actions have consequences and that fair outcomes will prevail.",
      past: "Your past actions have created the foundation for your current situation.",
      present: "Now is the time to make fair and balanced decisions based on clear thinking.",
      future: "The outcome of your situation will be exactly what you deserve, no more, no less."
    }
  },
  {
    id: 12,
    name: "The Hanged Man",
    image: "/tarot/hanged-man.jpg", 
    meaning: {
      upright: "Surrender, new perspective, enlightenment",
      reversed: false,
      description: "The Hanged Man represents sacrifice, perspective, and enlightenment. This card suggests letting go and seeing things from a new angle.",
      past: "A sacrifice or period of waiting has given you valuable new insights.",
      present: "Pause and look at your situation from a different perspective to find the solution.",
      future: "Surrendering control will paradoxically give you the outcomes you seek."
    }
  },
  {
    id: 13,
    name: "Death",
    image: "/tarot/death.jpg", 
    meaning: {
      upright: "Endings, change, transformation, transition",
      reversed: false,
      description: "Death represents profound transformation and the end of cycles. This card is not about literal death but about necessary endings that make way for new beginnings.",
      past: "A significant ending or transformation has shaped your current path.",
      present: "You're in the midst of a profound transformation that requires letting go.",
      future: "An important phase is coming to an end, making way for renewal and rebirth."
    }
  },
  {
    id: 14,
    name: "Temperance",
    image: "/tarot/temperance.jpg", 
    meaning: {
      upright: "Balance, moderation, patience, purpose",
      reversed: false,
      description: "Temperance represents balance, moderation, and harmony. This card suggests finding middle ground and blending seemingly opposing elements.",
      past: "Your ability to find balance and practice moderation has served you well.",
      present: "Seek harmony and middle ground between extremes; practice patience.",
      future: "Finding the right balance and combining different approaches will lead to success."
    }
  },
  {
    id: 15,
    name: "The Devil",
    image: "/tarot/devil.jpg", 
    meaning: {
      upright: "Materialism, bondage, addiction, sexuality",
      reversed: false,
      description: "The Devil represents our shadow self, materialism, and being bound by unhealthy attachments. This card suggests recognizing what enslaves us.",
      past: "Past attachments or restrictions have influenced your current situation.",
      present: "Examine what unhealthy bonds or beliefs may be limiting your freedom.",
      future: "Recognizing and confronting your attachments will lead to liberation."
    }
  },
  {
    id: 16,
    name: "The Tower",
    image: "/tarot/tower.jpg", 
    meaning: {
      upright: "Sudden change, chaos, revelation, awakening",
      reversed: false,
      description: "The Tower represents sudden disruption, breakthrough, and revelation. This card suggests that established structures need to fall for truth to emerge.",
      past: "A sudden disruption or revelation has changed your perspective completely.",
      present: "You're experiencing a necessary breaking down of old structures or beliefs.",
      future: "Prepare for a sudden change that will clear the way for something better."
    }
  },
  {
    id: 17,
    name: "The Star",
    image: "/tarot/star.jpg", 
    meaning: {
      upright: "Hope, faith, inspiration, generosity",
      reversed: false,
      description: "The Star represents hope, renewal, and spiritual connection. This card brings a message of healing and inspiration after a difficult time.",
      past: "A moment of hope or inspiration has guided you through difficult times.",
      present: "This is a time of healing and renewed optimism; trust in the universe.",
      future: "Hope and faith will guide you to spiritual insights and emotional renewal."
    }
  },
  {
    id: 18,
    name: "The Moon",
    image: "/tarot/moon.jpg", 
    meaning: {
      upright: "Illusion, fear, anxiety, subconscious",
      reversed: false,
      description: "The Moon represents intuition, illusion, and the subconscious. This card suggests navigating through uncertainty and facing hidden fears.",
      past: "Past illusions or anxieties have shaped your current perceptions.",
      present: "Trust your intuition to guide you through a time of uncertainty and confusion.",
      future: "The path ahead may be unclear, but your subconscious holds the answers."
    }
  },
  {
    id: 19,
    name: "The Sun",
    image: "/tarot/sun.jpg", 
    meaning: {
      upright: "Success, joy, celebration, positivity",
      reversed: false,
      description: "The Sun represents success, joy, and enlightenment. This card brings assurance of positive outcomes and clarity of purpose.",
      past: "A period of joy and success has illuminated your path.",
      present: "This is a time of clarity, optimism, and achievement; enjoy the warmth.",
      future: "Success and happiness await you; your goals will be achieved with vitality."
    }
  },
  {
    id: 20,
    name: "Judgement",
    image: "/tarot/judgement.jpg", 
    meaning: {
      upright: "Rebirth, inner calling, absolution",
      reversed: false,
      description: "Judgement represents awakening, renewal, and evaluation. This card suggests hearing a calling and preparing for a rebirth or new phase.",
      past: "A moment of awakening or significant choice has led you to where you are now.",
      present: "Listen to your inner calling and prepare for personal renewal.",
      future: "A final decision or moment of truth will lead to spiritual awakening."
    }
  },
  {
    id: 21,
    name: "The World",
    image: "/tarot/world.jpg", 
    meaning: {
      upright: "Completion, achievement, fulfillment, accomplishment",
      reversed: false,
      description: "The World represents completion, achievement, and wholeness. This card marks the successful conclusion of a journey and integration of lessons learned.",
      past: "Your past accomplishments have brought you to a place of fulfillment.",
      present: "You're experiencing a sense of completion and wholeness; celebrate your journey.",
      future: "A cycle is coming to its natural conclusion, bringing fulfillment and new opportunities."
    }
  }
];
