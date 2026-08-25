'use client';
import { Exercise } from '@/data/courses';

interface Props {
  exercise: Exercise;
  selected: string | null;
  onSelect: (answer: string) => void;
  disabled: boolean;
}

export function MultipleChoice({ exercise, selected, onSelect, disabled }: Props) {
  return (
    <div className="space-y-8">
      <div className="text-3xl font-bold text-center thai-text mb-12">
        {exercise.question}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {exercise.options?.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            disabled={disabled}
            className={`
              p-6 rounded-2xl border-2 text-xl font-bold transition-all text-center
              ${selected === option
                ? 'border-brand-500 bg-brand-50 text-brand-700'
                : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'}
              ${disabled && selected !== option ? 'opacity-50' : ''}
              ${disabled && selected === option && selected !== exercise.correctAnswer ? 'border-red-500 bg-red-50 text-red-700' : ''}
              ${disabled && option === exercise.correctAnswer ? 'border-brand-500 bg-brand-50 text-brand-700' : ''}
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
