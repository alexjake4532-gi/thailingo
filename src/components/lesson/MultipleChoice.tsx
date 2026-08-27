"use client";
import Card from '../ui/Card';
import { playThaiAudio } from '@/utils/audio';
import { Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface MultipleChoiceProps {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  isChecked: boolean;
  onSelect: (option: string) => void;
}

export default function MultipleChoice({ question, options, selectedAnswer, isChecked, onSelect }: MultipleChoiceProps) {
  const isThaiText = (text: string) => /[\u0E00-\u0E7F]/.test(text);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100 flex items-center gap-3">
        {question}
        {isThaiText(question) && (
          <button
            onClick={() => playThaiAudio(question)}
            className="p-2 bg-brand-50 text-brand-500 rounded-full hover:bg-brand-100"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        )}
      </h1>

      <div className="grid gap-4">
        {options.map((option, i) => (
          <motion.div
            key={option}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
