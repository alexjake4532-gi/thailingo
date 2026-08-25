export interface Exercise {
  id: string;
  type: 'multiple_choice' | 'translate_to_english' | 'translate_to_thai' | 'match_pairs';
  question: string;
  options?: string[];
  correctAnswer: string | string[]; // Can be array for matching
  vocabularyIds: string[]; // Ties exercise to specific vocab for tracking
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export const courses: Unit[] = [
  {
    id: 'unit-1',
    title: 'Thai Basics',
    description: 'Learn essential greetings and basic phrases.',
    lessons: [
      {
        id: 'basics-1',
        title: 'Hello & Goodbye',
        description: 'Learn to greet people in Thai.',
        exercises: [
          {
            id: 'ex-1',
            type: 'multiple_choice',
            question: 'How do you say "Hello" in Thai?',
            options: ['สวัสดี', 'ขอบคุณ', 'ใช่', 'ข้าว'],
            correctAnswer: 'สวัสดี',
            vocabularyIds: ['hello']
          },
          {
            id: 'ex-2',
            type: 'translate_to_english',
            question: 'สวัสดี',
            options: ['Hello', 'Thank you', 'Yes', 'No'],
            correctAnswer: 'Hello',
            vocabularyIds: ['hello']
          }
        ]
      },
      {
        id: 'basics-2',
        title: 'Thank You & Sorry',
        description: 'Politeness basics.',
        exercises: [
          {
            id: 'ex-3',
            type: 'multiple_choice',
            question: 'How do you say "Thank you"?',
            options: ['สวัสดี', 'ขอบคุณ', 'ใช่', 'น้ำ'],
            correctAnswer: 'ขอบคุณ',
            vocabularyIds: ['thank-you']
          }
        ]
      }
    ]
  },
  {
    id: 'unit-2',
    title: 'Thai Alphabet',
    description: 'Start learning the Thai script.',
    lessons: [
      {
        id: 'alphabet-1',
        title: 'First Consonants',
        description: 'ก, ข, ค',
        exercises: [
          {
            id: 'ex-a1',
            type: 'multiple_choice',
            question: 'Which character is "k-kai" (Chicken)?',
            options: ['ข', 'ก', 'ค', 'ง'],
            correctAnswer: 'ก',
            vocabularyIds: []
          }
        ]
      }
    ]
  }
];
