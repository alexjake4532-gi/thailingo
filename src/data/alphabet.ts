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
  { id: 'kh-khuat', char: 'ฃ', name: 'ฃ ขวด', meaning: 'Bottle (obsolete)', rtgs: 'kh', class: 'high' },
  { id: 'kh-khwai', char: 'ค', name: 'ค ควาย', meaning: 'Buffalo', rtgs: 'kh', class: 'low' },
  { id: 'kh-khon', char: 'ฅ', name: 'ฅ คน', meaning: 'Person (obsolete)', rtgs: 'kh', class: 'low' },
  { id: 'kh-rakhang', char: 'ฆ', name: 'ฆ ระฆัง', meaning: 'Bell', rtgs: 'kh', class: 'low' },
  { id: 'ng-ngu', char: 'ง', name: 'ง งู', meaning: 'Snake', rtgs: 'ng', class: 'low' },
  { id: 'j-jan', char: 'จ', name: 'จ จาน', meaning: 'Plate', rtgs: 'j', class: 'mid' },
  { id: 'ch-ching', char: 'ฉ', name: 'ฉ ฉิ่ง', meaning: 'Cymbals', rtgs: 'ch', class: 'high' },
  { id: 'ch-chang', char: 'ช', name: 'ช ช้าง', meaning: 'Elephant', rtgs: 'ch', class: 'low' },
  { id: 's-so', char: 'ซ', name: 'ซ โซ่', meaning: 'Chain', rtgs: 's', class: 'low' },
  { id: 'ch-choe', char: 'ฌ', name: 'ฌ เฌอ', meaning: 'Tree', rtgs: 'ch', class: 'low' },
  { id: 'y-ying', char: 'ญ', name: 'ญ หญิง', meaning: 'Woman', rtgs: 'y', class: 'low' },
  { id: 'd-chada', char: 'ฎ', name: 'ฎ ชฎา', meaning: 'Headdress', rtgs: 'd', class: 'mid' },
  { id: 't-patak', char: 'ฏ', name: 'ฏ ปฏัก', meaning: 'Goad/Javelin', rtgs: 't', class: 'mid' },
  { id: 'th-than', char: 'ฐ', name: 'ฐ ฐาน', meaning: 'Base', rtgs: 'th', class: 'high' },
  { id: 'th-nangmontho', char: 'ฑ', name: 'ฑ นางมณโฑ', meaning: 'Montho (character)', rtgs: 'th', class: 'low' },
  { id: 'th-phuthao', char: 'ฒ', name: 'ฒ ผู้เฒ่า', meaning: 'Elder', rtgs: 'th', class: 'low' },
  { id: 'n-nen', char: 'ณ', name: 'ณ เณร', meaning: 'Novice Monk', rtgs: 'n', class: 'low' },
  { id: 'd-dek', char: 'ด', name: 'ด เด็ก', meaning: 'Child', rtgs: 'd', class: 'mid' },
  { id: 't-tao', char: 'ต', name: 'ต เต่า', meaning: 'Turtle', rtgs: 't', class: 'mid' },
  { id: 'th-thung', char: 'ถ', name: 'ถ ถุง', meaning: 'Sack', rtgs: 'th', class: 'high' },
  { id: 'th-thahan', char: 'ท', name: 'ท ทหาร', meaning: 'Soldier', rtgs: 'th', class: 'low' },
  { id: 'th-thong', char: 'ธ', name: 'ธ ธง', meaning: 'Flag', rtgs: 'th', class: 'low' },
  { id: 'n-nu', char: 'น', name: 'น หนู', meaning: 'Mouse', rtgs: 'n', class: 'low' },
  { id: 'b-baimai', char: 'บ', name: 'บ ใบไม้', meaning: 'Leaf', rtgs: 'b', class: 'mid' },
  { id: 'p-pla', char: 'ป', name: 'ป ปลา', meaning: 'Fish', rtgs: 'p', class: 'mid' },
  { id: 'ph-phueng', char: 'ผ', name: 'ผ ผึ้ง', meaning: 'Bee', rtgs: 'ph', class: 'high' },
  { id: 'f-fa', char: 'ฝ', name: 'ฝ ฝา', meaning: 'Lid', rtgs: 'f', class: 'high' },
  { id: 'ph-phan', char: 'พ', name: 'พ พาน', meaning: 'Tray', rtgs: 'ph', class: 'low' },
  { id: 'f-fan', char: 'ฟ', name: 'ฟ ฟัน', meaning: 'Teeth', rtgs: 'f', class: 'low' },
  { id: 'ph-samphao', char: 'ภ', name: 'ภ สำเภา', meaning: 'Junk (Ship)', rtgs: 'ph', class: 'low' },
  { id: 'm-ma', char: 'ม', name: 'ม ม้า', meaning: 'Horse', rtgs: 'm', class: 'low' },
  { id: 'y-yak', char: 'ย', name: 'ย ยักษ์', meaning: 'Giant', rtgs: 'y', class: 'low' },
  { id: 'r-ruea', char: 'ร', name: 'ร เรือ', meaning: 'Boat', rtgs: 'r', class: 'low' },
  { id: 'l-ling', char: 'ล', name: 'ล ลิง', meaning: 'Monkey', rtgs: 'l', class: 'low' },
  { id: 'w-waen', char: 'ว', name: 'ว แหวน', meaning: 'Ring', rtgs: 'w', class: 'low' },
  { id: 's-sala', char: 'ศ', name: 'ศ ศาลา', meaning: 'Pavilion', rtgs: 's', class: 'high' },
  { id: 's-ruesi', char: 'ษ', name: 'ษ ฤๅษี', meaning: 'Hermit', rtgs: 's', class: 'high' },
  { id: 's-suea', char: 'ส', name: 'ส เสือ', meaning: 'Tiger', rtgs: 's', class: 'high' },
  { id: 'h-hip', char: 'ห', name: 'ห หีบ', meaning: 'Chest/Box', rtgs: 'h', class: 'high' },
  { id: 'l-chula', char: 'ฬ', name: 'ฬ จุฬา', meaning: 'Kite', rtgs: 'l', class: 'low' },
  { id: 'o-ang', char: 'อ', name: 'อ อ่าง', meaning: 'Basin', rtgs: 'o', class: 'mid' },
  { id: 'h-nok-huk', char: 'ฮ', name: 'ฮ นกฮูก', meaning: 'Owl', rtgs: 'h', class: 'low' },
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
