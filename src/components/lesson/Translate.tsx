"use client";
import Card from '../ui/Card';
import { playThaiAudio } from '@/utils/audio';
import { Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface TranslateProps {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  isChecked: boolean;
  onSelect: (option: string) => void;
  direction: 'to_english' | 'to_thai';
}

export default function Translate({ question, options, selectedAnswer, isChecked, onSelect, direction }: TranslateProps) {
  const isThaiText = (text: string) => /[\u0E00-\u0E7F]/.test(text);

  return (
    <div className="w-full">
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
        Translate this sentence
      </h2>
      <Card className="p-6 mb-8 text-center bg-gray-50 dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center gap-3">
          {question}
          {isThaiText(question) && (
            <button
              onClick={() => playThaiAudio(question)}
              className="p-2 bg-brand-100 text-brand-600 rounded-full hover:bg-brand-200"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          )}
        </h1>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option, i) => (
          <motion.div
            key={option}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card
              hoverable
              className={`p-4 cursor-pointer text-center text-lg font-medium border-2 transition-all ${
                selectedAnswer === option
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400'
                  : 'border-transparent'
              }`}
              onClick={() => {
                if (!isChecked) {
                  onSelect(option);
                  if (isThaiText(option)) {
                    playThaiAudio(option);
                  }
                }
              }}
            >
              {option}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
