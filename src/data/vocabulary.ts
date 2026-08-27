export type PartOfSpeech = 'noun' | 'verb' | 'adjective' | 'particle' | 'pronoun' | 'phrase';
export type Category = 'Greetings' | 'Family' | 'Food' | 'Drinks' | 'Basic' | 'School' | 'Home' | 'Travel' | 'Transportation' | 'Shopping' | 'Numbers' | 'Colors' | 'Animals' | 'Weather' | 'Time' | 'Emotions' | 'Actions' | 'Places' | 'Body' | 'Clothing' | 'Technology' | 'Daily life';

export interface VocabularyItem {
  id: string;
  thai: string;
  romanization: string;
  english: string;
  pos: PartOfSpeech;
  category: Category;
  exampleSentence?: string;
  exampleTranslation?: string;
}

export const vocabulary: VocabularyItem[] = [
  // Greetings
  { id: 'v-1', thai: 'สวัสดี', romanization: 'sà-wàt-dee', english: 'Hello / Goodbye', pos: 'phrase', category: 'Greetings', exampleSentence: 'สวัสดีครับ', exampleTranslation: 'Hello (polite, male).' },
  { id: 'v-2', thai: 'ขอบคุณ', romanization: 'khòp-khun', english: 'Thank you', pos: 'phrase', category: 'Greetings', exampleSentence: 'ขอบคุณค่ะ', exampleTranslation: 'Thank you (polite, female).' },
  { id: 'v-3', thai: 'ขอโทษ', romanization: 'khǒr-thôht', english: 'Sorry / Excuse me', pos: 'phrase', category: 'Greetings' },
  { id: 'v-4', thai: 'สบายดีไหม', romanization: 'sà-baai-dee mǎi', english: 'How are you?', pos: 'phrase', category: 'Greetings' },

  // Basic
  { id: 'v-5', thai: 'ใช่', romanization: 'châi', english: 'Yes', pos: 'phrase', category: 'Basic' },
  { id: 'v-6', thai: 'ไม่ใช่', romanization: 'mâi-châi', english: 'No (not is)', pos: 'phrase', category: 'Basic' },
  { id: 'v-7', thai: 'ไม่', romanization: 'mâi', english: 'No / Not', pos: 'particle', category: 'Basic' },

  // Food & Drinks
  { id: 'v-8', thai: 'ข้าว', romanization: 'khâao', english: 'Rice', pos: 'noun', category: 'Food' },
  { id: 'v-9', thai: 'น้ำ', romanization: 'náam', english: 'Water', pos: 'noun', category: 'Drinks' },
  { id: 'v-10', thai: 'กิน', romanization: 'gin', english: 'Eat', pos: 'verb', category: 'Food', exampleSentence: 'กินข้าว', exampleTranslation: 'Eat rice / Have a meal' },
  { id: 'v-11', thai: 'อร่อย', romanization: 'à-ròi', english: 'Delicious', pos: 'adjective', category: 'Food' },
  { id: 'v-12', thai: 'เผ็ด', romanization: 'phèt', english: 'Spicy', pos: 'adjective', category: 'Food' },

  // Family
  { id: 'v-13', thai: 'พ่อ', romanization: 'phôr', english: 'Father', pos: 'noun', category: 'Family' },
  { id: 'v-14', thai: 'แม่', romanization: 'mâe', english: 'Mother', pos: 'noun', category: 'Family' },
  { id: 'v-15', thai: 'พี่', romanization: 'phêe', english: 'Older sibling', pos: 'noun', category: 'Family' },
  { id: 'v-16', thai: 'น้อง', romanization: 'nóng', english: 'Younger sibling', pos: 'noun', category: 'Family' },

  // Pronouns
  { id: 'v-17', thai: 'ผม', romanization: 'phǒm', english: 'I (male)', pos: 'pronoun', category: 'Basic' },
  { id: 'v-18', thai: 'ฉัน', romanization: 'chǎn', english: 'I (female)', pos: 'pronoun', category: 'Basic' },
  { id: 'v-19', thai: 'คุณ', romanization: 'khun', english: 'You', pos: 'pronoun', category: 'Basic' },
  { id: 'v-20', thai: 'เขา', romanization: 'khǎo', english: 'He / She / They', pos: 'pronoun', category: 'Basic' },

  // Actions
  { id: 'v-21', thai: 'ไป', romanization: 'bpai', english: 'Go', pos: 'verb', category: 'Actions' },
  { id: 'v-22', thai: 'มา', romanization: 'maa', english: 'Come', pos: 'verb', category: 'Actions' },
  { id: 'v-23', thai: 'ทำ', romanization: 'tham', english: 'Do / Make', pos: 'verb', category: 'Actions' },
  { id: 'v-24', thai: 'พูด', romanization: 'phûut', english: 'Speak', pos: 'verb', category: 'Actions' },

  // Places
  { id: 'v-25', thai: 'บ้าน', romanization: 'bâan', english: 'House / Home', pos: 'noun', category: 'Places' },
  { id: 'v-26', thai: 'โรงเรียน', romanization: 'rohng-rian', english: 'School', pos: 'noun', category: 'School' },
  { id: 'v-27', thai: 'ตลาด', romanization: 'dtà-làat', english: 'Market', pos: 'noun', category: 'Places' },
  { id: 'v-28', thai: 'ห้องน้ำ', romanization: 'hông-náam', english: 'Bathroom / Toilet', pos: 'noun', category: 'Places', exampleSentence: 'ห้องน้ำอยู่ที่ไหน', exampleTranslation: 'Where is the bathroom?' },
];
