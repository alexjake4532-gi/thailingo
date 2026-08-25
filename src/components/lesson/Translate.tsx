'use client';
import { Exercise } from '@/data/courses';

interface Props {
  exercise: Exercise;
  selected: string | null;
  onSelect: (answer: string) => void;
  disabled: boolean;
}

export function Translate({ exercise, selected, onSelect, disabled }: Props) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-brand-500 text-white rounded-2xl p-6 text-3xl font-bold thai-text rounded-tl-none inline-block relative">
          <div className="absolute top-0 -left-3 w-4 h-4 bg-brand-500" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
          {exercise.question}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {exercise.options?.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            disabled={disabled}
            className={`
              px-6 py-3 rounded-xl border-2 font-bold transition-all
              ${selected === option
                ? 'border-brand-500 bg-brand-50 text-brand-700'
                : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 shadow-[0_2px_0_0_#e5e7eb]'}
              ${disabled && selected !== option ? 'opacity-50' : ''}
              ${disabled && selected === option && selected !== exercise.correctAnswer ? 'border-red-500 bg-red-50 text-red-700 shadow-none' : ''}
              ${disabled && option === exercise.correctAnswer ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-none' : ''}
              ${selected === option && !disabled ? 'shadow-none translate-y-[2px]' : ''}
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
