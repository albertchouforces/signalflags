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

// Quiz display configuration - Customize these values
export const QUIZ_CONFIG = {
  title: "Navy Signal Flags and Pennants",
  description: "Test your knowledge of signal flags and pennants",
  themeColor: 'purple' as const,  // Available colors: 'blue' | 'green' | 'sky' | 'red' | 'purple' | 'orange' | 'pink'
  quiz_name: "signal_flags", // Unique identifier for the quiz, used in database
  startScreenImage: "/images/quiz-start.jpg" // Optional: Image shown on start screen
};

// Example questions - Replace with your own
export const templateQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What does this represent?",
    correctAnswer: "Alfa",
    description: "I have a diver down; keep well clear at slow speed.",
    fact: "",
    imageUrl: "/images/Alfa.png"  // Place image in public/images/
  },
  {
    id: 2,
    question: "What does this represent?",
    correctAnswer: "Bravo",
    description: "Transporting explosives fuel or inflammable material.",
    fact: "",
    imageUrl: "/images/Bravo.png"
  },
  {
    id: 3,
    question: "What does this represent?",
    correctAnswer: "Charlie",
    description: "",
    fact: "",
    imageUrl: "/images/Charlie.png"
  },
  {
    id: 4,
    question: "What does this represent?",
    correctAnswer: "Delta",
    description: "",
    fact: "",
    imageUrl: "/images/Delta.png"
  },
  {
    id: 5,
    question: "What does this represent?",
    correctAnswer: "Echo",
    description: "",
    fact: "",
    imageUrl: "/images/Echo.png"
  },
  {
    id: 6,
    question: "What does this represent?",
    correctAnswer: "Foxtrot",
    description: "",
    fact: "",
    imageUrl: "/images/Foxtrot.png"
  },
  {
    id: 7,
    question: "What does this represent?",
    correctAnswer: "Golf",
    description: "",
    fact: "",
    imageUrl: "/images/Golf.png"
  },
  {
    id: 8,
    question: "What does this represent?",
    correctAnswer: "Hotel",
    description: "",
    fact: "",
    imageUrl: "/images/Hotel.png"
  },
  {
    id: 9,
    question: "What does this represent?",
    correctAnswer: "India",
    description: "",
    fact: "",
    imageUrl: "/images/India.png"
  },
  {
    id: 10,
    question: "What does this represent?",
    correctAnswer: "Juliett",
    description: "",
    fact: "",
    imageUrl: "/images/Juliett.png"
  },
  {
    id: 11,
    question: "What does this represent?",
    correctAnswer: "Kilo",
    description: "",
    fact: "",
    imageUrl: "/images/Kilo.png"
  },
  {
    id: 12,
    question: "What does this represent?",
    correctAnswer: "Lima",
    description: "",
    fact: "",
    imageUrl: "/images/Lima.png"
  },
  {
    id: 13,
    question: "What does this represent?",
    correctAnswer: "Mike",
    description: "",
    fact: "",
    imageUrl: "/images/Mike.png"
  },
  {
    id: 14,
    question: "What does this represent?",
    correctAnswer: "November",
    description: "",
    fact: "",
    imageUrl: "/images/November.png"
  },
  {
    id: 15,
    question: "What does this represent?",
    correctAnswer: "Oscar",
    description: "",
    fact: "",
    imageUrl: "/images/Oscar.png"
  },
  {
    id: 16,
    question: "What does this represent?",
    correctAnswer: "Papa",
    description: "",
    fact: "",
    imageUrl: "/images/Papa.png"
  },
  {
    id: 17,
    question: "What does this represent?",
    correctAnswer: "Quebec",
    description: "",
    fact: "",
    imageUrl: "/images/Quebec.png"
  },
  {
    id: 18,
    question: "What does this represent?",
    correctAnswer: "Romeo",
    description: "",
    fact: "",
    imageUrl: "/images/Romeo.png"
  },
  {
    id: 19,
    question: "What does this represent?",
    correctAnswer: "Sierra",
    description: "",
    fact: "",
    imageUrl: "/images/Sierra.png"
  },
  {
    id: 20,
    question: "What does this represent?",
    correctAnswer: "Tango",
    description: "",
    fact: "",
    imageUrl: "/images/Tango.png"
  },
  {
    id: 21,
    question: "What does this represent?",
    correctAnswer: "Uniform",
    description: "",
    fact: "",
    imageUrl: "/images/Uniform.png"
  },
  {
    id: 22,
    question: "What does this represent?",
    correctAnswer: "Victor",
    description: "",
    fact: "",
    imageUrl: "/images/Victor.png"
  },
  {
    id: 23,
    question: "What does this represent?",
    correctAnswer: "Whiskey",
    description: "",
    fact: "",
    imageUrl: "/images/Whiskey.png"
  },
  {
    id: 24,
    question: "What does this represent?",
    correctAnswer: "Xray",
    description: "",
    fact: "",
    imageUrl: "/images/Xray.png"
  },
  {
    id: 25,
    question: "What does this represent?",
    correctAnswer: "Yankee",
    description: "",
    fact: "",
    imageUrl: "/images/Yankee.png"
  },
  {
    id: 26,
    question: "What does this represent?",
    correctAnswer: "Zulu",
    description: "",
    fact: "",
    imageUrl: "/images/Zulu.png"
  }
];

// =================================================================
// COMPLETE EXAMPLE - Geography Quiz
// =================================================================
/*
export const QUIZ_CONFIG = {
  title: "World Capitals Quiz",
  description: "Test your knowledge of famous capital cities",
  themeColor: 'green' as const,
  quiz_name: "world_capitals_quiz",
  startScreenImage: "/images/capitals-intro.jpg"
};

export const capitalQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What capital city is this?",
    correctAnswer: "Tokyo",
    description: "The most populous metropolitan area in the world",
    fact: "Tokyo was originally known as Edo until 1868",
    imageUrl: "/images/tokyo.jpg"
  },
  {
    id: 2,
    question: "Which European capital is shown here?",
    correctAnswer: "Paris",
    description: "The capital and largest city of France",
    fact: "Paris has 20 different administrative districts called arrondissements",
    imageUrl: "/images/paris.jpg"
  },
  {
    id: 3,
    question: "Name this South American capital",
    correctAnswer: "Buenos Aires",
    description: "The capital of Argentina",
    fact: "Buenos Aires means 'fair winds' in Spanish",
    imageUrl: "/images/buenos-aires.jpg"
  }
];
*/

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
