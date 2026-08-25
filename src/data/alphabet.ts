export type ConsonantClass = 'high' | 'mid' | 'low';

export interface Consonant {
  id: string;
  char: string;
  name: string;
  meaning: string;
  rtgs: string;
  class: ConsonantClass;
  audio?: string;
}

export const consonants: Consonant[] = [
  { id: 'k-kai', char: 'ก', name: 'ก ไก่', meaning: 'Chicken', rtgs: 'k', class: 'mid' },
  { id: 'kh-khai', char: 'ข', name: 'ข ไข่', meaning: 'Egg', rtgs: 'kh', class: 'high' },
  { id: 'kh-khuat', char: 'ฃ', name: 'ฃ ขวด', meaning: 'Bottle', rtgs: 'kh', class: 'high' },
  { id: 'kh-khwai', char: 'ค', name: 'ค ควาย', meaning: 'Buffalo', rtgs: 'kh', class: 'low' },
  { id: 'kh-khon', char: 'ฅ', name: 'ฅ คน', meaning: 'Person', rtgs: 'kh', class: 'low' },
  { id: 'kh-rakhang', char: 'ฆ', name: 'ฆ ระฆัง', meaning: 'Bell', rtgs: 'kh', class: 'low' },
  { id: 'ng-ngu', char: 'ง', name: 'ง งู', meaning: 'Snake', rtgs: 'ng', class: 'low' },
  { id: 'j-jan', char: 'จ', name: 'จ จาน', meaning: 'Plate', rtgs: 'j', class: 'mid' },
];

export interface Vowel {
  id: string;
  char: string;
  name: string;
  rtgs: string;
  length: 'short' | 'long';
  position: 'front' | 'back' | 'above' | 'below' | 'around';
}

export const vowels: Vowel[] = [
  { id: 'sara-a', char: 'ะ', name: 'สระ อะ', rtgs: 'a', length: 'short', position: 'back' },
  { id: 'sara-aa', char: 'า', name: 'สระ อา', rtgs: 'aa', length: 'long', position: 'back' },
  { id: 'sara-i', char: 'ิ', name: 'สระ อิ', rtgs: 'i', length: 'short', position: 'above' },
  { id: 'sara-ii', char: 'ี', name: 'สระ อี', rtgs: 'ii', length: 'long', position: 'above' },
];
