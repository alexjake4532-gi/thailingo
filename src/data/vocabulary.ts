export type PartOfSpeech = 'noun' | 'verb' | 'adjective' | 'particle' | 'pronoun' | 'phrase';
export type Category = 'Greetings' | 'Numbers' | 'Food' | 'Basic';

export interface VocabularyItem {
  id: string;
  thai: string;
  romanization: string;
  english: string;
  pos: PartOfSpeech;
  category: Category;
  exampleSentence?: string;
  exampleTranslation?: string;
  audio?: string;
}

export const vocabulary: VocabularyItem[] = [
  {
    id: 'hello',
    thai: 'สวัสดี',
    romanization: 'sà-wàt-dee',
    english: 'Hello',
    pos: 'phrase',
    category: 'Greetings',
    exampleSentence: 'สวัสดีครับ',
    exampleTranslation: 'Hello (polite, male speaker).'
  },
  {
    id: 'thank-you',
    thai: 'ขอบคุณ',
    romanization: 'khòp-khun',
    english: 'Thank you',
    pos: 'phrase',
    category: 'Greetings',
    exampleSentence: 'ขอบคุณค่ะ',
    exampleTranslation: 'Thank you (polite, female speaker).'
  },
  {
    id: 'yes',
    thai: 'ใช่',
    romanization: 'châi',
    english: 'Yes',
    pos: 'phrase',
    category: 'Basic'
  },
  {
    id: 'no',
    thai: 'ไม่ใช่',
    romanization: 'mâi-châi',
    english: 'No (not is)',
    pos: 'phrase',
    category: 'Basic'
  },
  {
    id: 'rice',
    thai: 'ข้าว',
    romanization: 'khâao',
    english: 'Rice',
    pos: 'noun',
    category: 'Food'
  },
  {
    id: 'water',
    thai: 'น้ำ',
    romanization: 'náam',
    english: 'Water',
    pos: 'noun',
    category: 'Food'
  }
];
