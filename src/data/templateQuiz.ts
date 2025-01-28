// =================================================================
// QUIZ TEMPLATE - HOW TO CREATE YOUR OWN QUIZ
// =================================================================
//
// This template allows you to create any image-based multiple choice quiz.
// Follow these steps to create your own quiz:
//
// 1. PREPARE YOUR IMAGES:
//    - Place all question images in the public/images folder
//    - Recommended image dimensions: 800x600px or similar 4:3/16:9 ratio
//    - Supported formats: PNG, JPG, SVG
//    - Example path: public/images/question1.jpg will be referenced as "/images/question1.jpg"
//
// 2. CUSTOMIZE QUIZ APPEARANCE:
//    - Update QUIZ_CONFIG below with:
//      * title: Your quiz title
//      * description: Brief quiz description
//      * themeColor: Choose from: 'blue', 'green', 'sky', 'red'
//      * startScreenImage: Optional image to show on start screen (path relative to public folder)
//
// 3. ADD YOUR QUESTIONS:
//    - Follow the templateQuestions format below
//    - Each question requires:
//      * id: Unique number for each question
//      * question: The question text shown to users
//      * correctAnswer: The correct answer (exact match required)
//      * description: Brief context shown with the question
//      * fact: Interesting fact shown after answering (optional, can be empty string)
//      * imageUrl: Path to question image (relative to public folder)
//
// =================================================================

import type { QuestionData } from '../types';

// Quiz display configuration - First Quiz (Blue theme)
export const QUIZ_CONFIG = {
  title: "Signal Flags",
  description: "Test your knowledge of Signal Flags.",
  themeColor: 'purple' as const,  // Options: 'blue' | 'green' | 'sky' | 'red' | 'purple' | 'indigo' | 'amber' | 'emerald' | 'teal' | 'cyan';
  quiz_name: "signalflags", // Unique identifier for the quiz, used in database
  startScreenImage: "/images/quiz-start.svg" // Optional: Image shown on start screen
};

// Second Quiz Configuration (Red theme)
export const SECOND_QUIZ_CONFIG = {
  title: "Pennants",
  description: "Test your knowledge of Pennants.",
  themeColor: 'amber' as const,
  quiz_name: "pennants",
  startScreenImage: "/images/quiz-start.svg"
};

// Combined Quiz Configuration (Green theme)
export const COMBINED_QUIZ_CONFIG = {
  title: "Signal Flags and Pennants",
  description: "Test your knowledge of all Signal Flags and Pennants.",
  themeColor: 'teal' as const,
  quiz_name: "sfp_combined",
  startScreenImage: "/images/quiz-start.svg"
};

// First Quiz Questions
export const templateQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What does this represent?",
    correctAnswer: "Alfa",
    description: "Morse Code .-",
    fact: "The navy meaning is 'I have a diver down; keep well clear at slow speed'.",
    imageUrl: "/images/Alfa.png"  // Place image in public/images/
  },
  {
    id: 2,
    question: "What does this represent?",
    correctAnswer: "Bravo",
    description: "Morse Code -...",
    fact: "The navy meaning is 'Transporting explosives fuel or inflammable material'.",
    imageUrl: "/images/Bravo.png"
  },
  {
    id: 3,
    question: "What does this represent?",
    correctAnswer: "Charlie",
    description: "Morse Code -.-.",
    fact: "The navy meaning is 'Yes (affirmative)'.",
    imageUrl: "/images/Charlie.png"
  },
  {
    id: 4,
    question: "What does this represent?",
    correctAnswer: "Delta",
    description: "Morse Code -..",
    fact: "The navy meaning is 'Degaussing'.",
    imageUrl: "/images/Delta.png"
  },
  {
    id: 5,
    question: "What does this represent?",
    correctAnswer: "Echo",
    description: "Morse Code .",
    fact: "The navy meaning is 'No RF danger'.",
    imageUrl: "/images/Echo.png"
  },
  {
    id: 6,
    question: "What does this represent?",
    correctAnswer: "Foxtrot",
    description: "Morse Code ..-.",
    fact: "The navy meaning is 'Flight operations'.",
    imageUrl: "/images/Foxtrot.png"
  },
  {
    id: 7,
    question: "What does this represent?",
    correctAnswer: "Golf",
    description: "Morse Code --.",
    fact: "The navy meaning is 'Guide Flag'.",
    imageUrl: "/images/Golf.png"
  },
  {
    id: 8,
    question: "What does this represent?",
    correctAnswer: "Hotel",
    description: "Morse Code ....",
    fact: "The navy meaning is 'Helicopter operations'.",
    imageUrl: "/images/Hotel.png"
  },
  {
    id: 9,
    question: "What does this represent?",
    correctAnswer: "India",
    description: "Morse Code ..",
    fact: "The navy meaning is 'Coming alongside'.",
    imageUrl: "/images/India.png"
  },
  {
    id: 10,
    question: "What does this represent?",
    correctAnswer: "Juliett",
    description: "Morse Code .---",
    fact: "The navy meaning is 'Spare no meaning'.",
    imageUrl: "/images/Juliett.png"
  },
  {
    id: 11,
    question: "What does this represent?",
    correctAnswer: "Kilo",
    description: "Morse Code -.-",
    fact: "The navy meaning is 'Personnel working aloft and/or over the side'.",
    imageUrl: "/images/Kilo.png"
  },
  {
    id: 12,
    question: "What does this represent?",
    correctAnswer: "Lima",
    description: "Morse Code .-..",
    fact: "The navy meaning is 'Radhaz/Hero warning'.",
    imageUrl: "/images/Lima.png"
  },
  {
    id: 13,
    question: "What does this represent?",
    correctAnswer: "Mike",
    description: "Morse Code --",
    fact: "The navy meaning is 'Medical Duty Ship'.",
    imageUrl: "/images/Mike.png"
  },
  {
    id: 14,
    question: "What does this represent?",
    correctAnswer: "November",
    description: "Morse Code -.",
    fact: "The navy meaning is 'Your movements not understood'.",
    imageUrl: "/images/November.png"
  },
  {
    id: 15,
    question: "What does this represent?",
    correctAnswer: "Oscar",
    description: "Morse Code ---",
    fact: "The navy meaning is 'Man Overboard'.",
    imageUrl: "/images/Oscar.png"
  },
  {
    id: 16,
    question: "What does this represent?",
    correctAnswer: "Papa",
    description: "Morse Code .--.",
    fact: "The navy meaning is 'General Recall'.",
    imageUrl: "/images/Papa.png"
  },
  {
    id: 17,
    question: "What does this represent?",
    correctAnswer: "Quebec",
    description: "Morse Code --.-",
    fact: "The navy meaning is 'Boat Recall; all boats return to ship'.",
    imageUrl: "/images/Quebec.png"
  },
  {
    id: 18,
    question: "What does this represent?",
    correctAnswer: "Romeo",
    description: "Morse Code .-.",
    fact: "The navy meaning is 'Preparing to replenish (at sea) Ready Duty Ship (in port)'.",
    imageUrl: "/images/Romeo.png"
  },
  {
    id: 19,
    question: "What does this represent?",
    correctAnswer: "Sierra",
    description: "Morse Code ...",
    fact: "The navy meaning is 'Conducting Flag Hoist drill'.",
    imageUrl: "/images/Sierra.png"
  },
  {
    id: 20,
    question: "What does this represent?",
    correctAnswer: "Tango",
    description: "Morse Code -",
    fact: "The navy meaning is 'Time indicator'.",
    imageUrl: "/images/Tango.png"
  },
  {
    id: 21,
    question: "What does this represent?",
    correctAnswer: "Uniform",
    description: "Morse Code ..-",
    fact: "The navy meaning is 'Anchoring'.",
    imageUrl: "/images/Uniform.png"
  },
  {
    id: 22,
    question: "What does this represent?",
    correctAnswer: "Victor",
    description: "Morse Code ...-",
    fact: "The navy meaning is 'Streaming/Recovering Towed acoustic devices'.",
    imageUrl: "/images/Victor.png"
  },
  {
    id: 23,
    question: "What does this represent?",
    correctAnswer: "Whiskey",
    description: "Morse Code .--",
    fact: "The navy meaning is 'Information addressee'.",
    imageUrl: "/images/Whiskey.png"
  },
  {
    id: 24,
    question: "What does this represent?",
    correctAnswer: "Xray",
    description: "Morse Code -..-",
    fact: "The navy meaning is 'Exercise'.",
    imageUrl: "/images/Xray.png"
  },
  {
    id: 25,
    question: "What does this represent?",
    correctAnswer: "Yankee",
    description: "Morse Code -.--",
    fact: "The navy meaning is 'Acknowledge'.",
    imageUrl: "/images/Yankee.png"
  },
  {
    id: 26,
    question: "What does this represent?",
    correctAnswer: "Zulu",
    description: "Morse Code --..",
    fact: "The navy meaning is 'Communications Guard'.",
    imageUrl: "/images/Zulu.png"
  },
  {
    id: 27,
    question: "What does this represent?",
    correctAnswer: "One",
    description: "Morse Code .----",
    fact: "",
    imageUrl: "/images/One.png"
  },
  {
    id: 28,
    question: "What does this represent?",
    correctAnswer: "Two",
    description: "Morse Code ..---",
    fact: "",
    imageUrl: "/images/Two.png"
  },
  {
    id: 29,
    question: "What does this represent?",
    correctAnswer: "Three",
    description: "Morse Code ...--",
    fact: "",
    imageUrl: "/images/Three.png"
  },
  {
    id: 30,
    question: "What does this represent?",
    correctAnswer: "Four",
    description: "Morse Code ....-",
    fact: "",
    imageUrl: "/images/Four.png"
  },
  {
    id: 31,
    question: "What does this represent?",
    correctAnswer: "Five",
    description: "Morse Code .....",
    fact: "",
    imageUrl: "/images/Five.png"
  },
  {
    id: 32,
    question: "What does this represent?",
    correctAnswer: "Six",
    description: "Morse Code -....",
    fact: "",
    imageUrl: "/images/Six.png"
  },
  {
    id: 33,
    question: "What does this represent?",
    correctAnswer: "Seven",
    description: "Morse Code --...",
    fact: "",
    imageUrl: "/images/Seven.png"
  },
  {
    id: 34,
    question: "What does this represent?",
    correctAnswer: "Eight",
    description: "Morse Code ---..",
    fact: "",
    imageUrl: "/images/Eight.png"
  },
  {
    id: 35,
    question: "What does this represent?",
    correctAnswer: "Nine",
    description: "Morse Code ----.",
    fact: "",
    imageUrl: "/images/Nine.png"
  },
  {
    id: 36,
    question: "What does this represent?",
    correctAnswer: "Zero",
    description: "Morse Code -----",
    fact: "",
    imageUrl: "/images/Zero.png"
  },
  {
    id: 37,
    question: "What does this represent?",
    correctAnswer: "Division",
    description: "",
    fact: "",
    imageUrl: "/images/Division.png"
  },
  {
    id: 38,
    question: "What does this represent?",
    correctAnswer: "Port",
    description: "",
    fact: "",
    imageUrl: "/images/Port.png"
  },
  {
    id: 39,
    question: "What does this represent?",
    correctAnswer: "Squadron",
    description: "",
    fact: "",
    imageUrl: "/images/Squadron.png"
  }
];

// Second Quiz Questions
export const secondQuizQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What does this represent?",
    correctAnswer: "Pennant One",
    description: "",
    fact: "",
    imageUrl: "/images/Pennant One.png"
  },
  {
    id: 2,
    question: "What does this represent?",
    correctAnswer: "Pennant Two",
    description: "",
    fact: "",
    imageUrl: "/images/Pennant Two.png"
  },
  {
    id: 3,
    question: "What does this represent?",
    correctAnswer: "Pennant Three",
    description: "",
    fact: "",
    imageUrl: "/images/Pennant Three.png"
  },
  {
    id: 4,
    question: "What does this represent?",
    correctAnswer: "Pennant Four",
    description: "",
    fact: "",
    imageUrl: "/images/Pennant Four.png"
  },
  {
    id: 5,
    question: "What does this represent?",
    correctAnswer: "Pennant Five",
    description: "",
    fact: "",
    imageUrl: "/images/Pennant Five.png"
  },
  {
    id: 6,
    question: "What does this represent?",
    correctAnswer: "Pennant Six",
    description: "",
    fact: "",
    imageUrl: "/images/Pennant Six.png"
  },
  {
    id: 7,
    question: "What does this represent?",
    correctAnswer: "Pennant Seven",
    description: "",
    fact: "",
    imageUrl: "/images/Pennant Seven.png"
  },
  {
    id: 8,
    question: "What does this represent?",
    correctAnswer: "Pennant Eight",
    description: "",
    fact: "",
    imageUrl: "/images/Pennant Eight.png"
  },
  {
    id: 9,
    question: "What does this represent?",
    correctAnswer: "Pennant Nine",
    description: "",
    fact: "",
    imageUrl: "/images/Pennant Nine.png"
  },
  {
    id: 10,
    question: "What does this represent?",
    correctAnswer: "Pennant Zero",
    description: "",
    fact: "",
    imageUrl: "/images/Pennant Zero.png"
  },
  {
    id: 11,
    question: "What does this represent?",
    correctAnswer: "Screen",
    description: "",
    fact: "",
    imageUrl: "/images/Screen.png"
  },
  {
    id: 12,
    question: "What does this represent?",
    correctAnswer: "Code",
    description: "",
    fact: "The navy meaning is 'Message is understood'. It is also known as the Answering Pennant.",
    imageUrl: "/images/Code Answer.png"
  },
  {
    id: 13,
    question: "What does this represent?",
    correctAnswer: "Corpen",
    description: "",
    fact: "",
    imageUrl: "/images/Corpen.png"
  },
  {
    id: 14,
    question: "What does this represent?",
    correctAnswer: "Desig",
    description: "",
    fact: "",
    imageUrl: "/images/Desig.png"
  },
  {
    id: 15,
    question: "What does this represent?",
    correctAnswer: "Emergency",
    description: "",
    fact: "",
    imageUrl: "/images/Emergency.png"
  },
  {
    id: 16,
    question: "What does this represent?",
    correctAnswer: "Flotilla",
    description: "",
    fact: "",
    imageUrl: "/images/Flotilla.png"
  },
  {
    id: 17,
    question: "What does this represent?",
    correctAnswer: "Formation",
    description: "",
    fact: "",
    imageUrl: "/images/Formation.png"
  },
  {
    id: 18,
    question: "What does this represent?",
    correctAnswer: "Interogative",
    description: "",
    fact: "",
    imageUrl: "/images/Interogative.png"
  },
  {
    id: 19,
    question: "What does this represent?",
    correctAnswer: "Negative",
    description: "",
    fact: "",
    imageUrl: "/images/Negative.png"
  },
  {
    id: 20,
    question: "What does this represent?",
    correctAnswer: "Preparative",
    description: "",
    fact: "",
    imageUrl: "/images/Preparative.png"
  },
  {
    id: 21,
    question: "What does this represent?",
    correctAnswer: "Speed",
    description: "",
    fact: "",
    imageUrl: "/images/Speed.png"
  },
  {
    id: 22,
    question: "What does this represent?",
    correctAnswer: "Starboard",
    description: "",
    fact: "",
    imageUrl: "/images/Starboard.png"
  },
  {
    id: 23,
    question: "What does this represent?",
    correctAnswer: "Sub Division",
    description: "",
    fact: "",
    imageUrl: "/images/Sub Division.png"
  },
  {
    id: 24,
    question: "What does this represent?",
    correctAnswer: "Turn",
    description: "",
    fact: "",
    imageUrl: "/images/Turn.png"
  },
  {
    id: 25,
    question: "What does this represent?",
    correctAnswer: "First Substitute",
    description: "",
    fact: "The navy meaning is 'Absence of Flag officer or unit commander (in Port)'.",
    imageUrl: "/images/First Substitute.png"
  },
  {
    id: 26,
    question: "What does this represent?",
    correctAnswer: "Second Substitute",
    description: "",
    fact: "The navy meaning is 'Absence of Chief of Staff (in Port)'.",
    imageUrl: "/images/Second Substitute.png"
  },
  {
    id: 27,
    question: "What does this represent?",
    correctAnswer: "Third Substitute",
    description: "",
    fact: "The navy meaning is 'Absence of Commanding Officer (in Port)'.",
    imageUrl: "/images/Third Substitute.png"
  },
  {
    id: 28,
    question: "What does this represent?",
    correctAnswer: "Fourth Substitute",
    description: "",
    fact: "",
    imageUrl: "/images/Fourth Substitute.png"
  }
];

// Combined Questions Array
export const combinedQuestions: QuestionData[] = [
  ...templateQuestions.map(q => ({
    ...q,
    id: q.id // Keep original IDs
  })),
  ...secondQuizQuestions.map(q => ({
    ...q,
    id: q.id + templateQuestions.length // Offset IDs to avoid conflicts
  }))
];

// =================================================================
// TIPS FOR GOOD QUESTIONS
// =================================================================
// 1. Use clear, high-quality images
// 2. Keep question text concise and specific
// 3. Ensure correct answers are unambiguous
// 4. Add interesting facts to make the quiz educational
// 5. Use consistent formatting for similar questions
// 6. Test your image paths before deploying
// =================================================================
