"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Exercise } from '@/data/courses';
import { useAppStore } from '@/store/useAppStore';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Heart, X, Check, ArrowRight } from 'lucide-react';

interface LessonEngineProps {
  lessonId: string;
  exercises: Exercise[];
}

export default function LessonEngine({ lessonId, exercises }: LessonEngineProps) {
  const router = useRouter();
  const { hearts, loseHeart, addXp, completeLesson, addToReview } = useAppStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentExercise = exercises[currentIndex];

  const handleCheck = () => {
    if (!selectedAnswer) return;

    const correct = selectedAnswer === currentExercise.correctAnswer;
    setIsCorrect(correct);
    setIsChecked(true);

    if (correct) {
      addXp(10);
    } else {
      loseHeart();
      // Add related vocabulary to review if answered incorrectly
      if (currentExercise.vocabularyIds && currentExercise.vocabularyIds.length > 0) {
        currentExercise.vocabularyIds.forEach(id => addToReview(id));
      }
    }
  };

  const handleNext = () => {
    setIsChecked(false);
    setSelectedAnswer(null);
    setIsCorrect(false);

    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      completeLesson(lessonId);
    }
  };

  if (hearts === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <Heart className="w-24 h-24 text-gray-300 mb-6" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Out of Hearts!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Wait a bit or practice to earn more hearts.</p>
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-16 h-16 text-primary-600" />
        </div>
        <h2 className="text-3xl font-bold text-primary-600 mb-4">Lesson Complete!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">You earned {exercises.length * 10} XP!</p>
        <Button onClick={() => router.push('/')} className="w-full max-w-sm">Continue</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto w-full">
      {/* Header */}
      <header className="flex items-center justify-between p-4 mb-4">
        <button onClick={() => router.push('/')} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
          <X className="w-6 h-6 text-gray-500" />
        </button>

        {/* Progress Bar */}
        <div className="flex-1 mx-6 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-500 transition-all duration-300 rounded-full"
            style={{ width: `${(currentIndex / exercises.length) * 100}%` }}
          />
        </div>

        <div className="flex items-center text-rose-500 font-bold gap-1">
          <Heart className="w-6 h-6 fill-current" />
          <span>{hearts}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          {currentExercise?.question}
        </h1>

        <div className="grid gap-4">
          {currentExercise?.options?.map((option) => (
            <Card
              key={option}
              hoverable
              className={`p-4 cursor-pointer text-center text-lg font-medium border-2 transition-all ${
                selectedAnswer === option
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400'
                  : 'border-transparent'
              }`}
              onClick={() => !isChecked && setSelectedAnswer(option)}
            >
              {option}
            </Card>
          ))}
        </div>
      </main>

      {/* Footer Area */}
      <footer className={`p-4 border-t-2 ${
        isChecked
          ? isCorrect
            ? 'bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-900/50'
            : 'bg-rose-100 border-rose-200 dark:bg-rose-900/30 dark:border-rose-900/50'
          : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            {isChecked && (
              <h3 className={`text-xl font-bold flex items-center gap-2 ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {isCorrect ? <><Check /> Correct!</> : <><X /> Incorrect</>}
              </h3>
            )}
            {isChecked && !isCorrect && (
              <p className="text-rose-600 dark:text-rose-400 mt-1">Correct answer: {currentExercise.correctAnswer as string}</p>
            )}
          </div>
          <Button
            onClick={isChecked ? handleNext : handleCheck}
            disabled={!selectedAnswer}
            variant={isChecked ? (isCorrect ? 'success' : 'danger') : 'primary'}
            className="ml-auto min-w-[120px]"
          >
            {isChecked ? 'Continue' : 'Check'}
          </Button>
        </div>
      </footer>
    </div>
  );
}
