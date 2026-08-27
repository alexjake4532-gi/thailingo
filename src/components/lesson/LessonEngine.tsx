"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Exercise } from '@/data/courses';
import { useAppStore } from '@/store/useAppStore';
import Button from '../ui/Button';
import { Heart, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MultipleChoice from './MultipleChoice';
import Translate from './Translate';

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
  const [showOutOfHearts, setShowOutOfHearts] = useState(false);

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
      if (currentExercise.vocabularyIds && currentExercise.vocabularyIds.length > 0) {
        currentExercise.vocabularyIds.forEach(id => addToReview(id));
      }
    }
  };

  const handleNext = () => {
    if (!isCorrect && hearts === 0) {
      setShowOutOfHearts(true);
      return;
    }

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

  if (showOutOfHearts) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
      >
        <Heart className="w-24 h-24 text-gray-300 mb-6" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Out of Hearts!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Wait a bit or practice to earn more hearts.</p>
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </motion.div>
    );
  }

  if (isFinished) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
      >
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mb-6"
        >
          <Check className="w-16 h-16 text-brand-600" />
        </motion.div>
        <h2 className="text-3xl font-bold text-brand-600 mb-4">Lesson Complete!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">You earned {exercises.length * 10} XP!</p>
        <Button onClick={() => router.push('/')} className="w-full max-w-sm">Continue</Button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto w-full">
      <header className="flex items-center justify-between p-4 mb-4">
        <button onClick={() => router.push('/')} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
          <X className="w-6 h-6 text-gray-500" />
        </button>

        <div className="flex-1 mx-6 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentIndex / exercises.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <div className="flex items-center text-rose-500 font-bold gap-1">
          <motion.div
            key={hearts}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Heart className="w-6 h-6 fill-current" />
          </motion.div>
          <span>{hearts}</span>
        </div>
      </header>

      <main className="flex-1 p-4 flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {currentExercise?.type === 'multiple_choice' && (
              <MultipleChoice
                question={currentExercise.question}
                options={currentExercise.options || []}
                selectedAnswer={selectedAnswer}
                isChecked={isChecked}
                onSelect={setSelectedAnswer}
              />
            )}
            {(currentExercise?.type === 'translate_to_english' || currentExercise?.type === 'translate_to_thai') && (
              <Translate
                question={currentExercise.question}
                options={currentExercise.options || []}
                selectedAnswer={selectedAnswer}
                isChecked={isChecked}
                onSelect={setSelectedAnswer}
                direction={currentExercise.type === 'translate_to_english' ? 'to_english' : 'to_thai'}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className={`p-4 border-t-2 transition-colors duration-300 ${
        isChecked
          ? isCorrect
            ? 'bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-900/50'
            : 'bg-rose-100 border-rose-200 dark:bg-rose-900/30 dark:border-rose-900/50'
          : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <AnimatePresence>
              {isChecked && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className={`text-xl font-bold flex items-center gap-2 ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {isCorrect ? <><Check /> Correct!</> : <><X /> Incorrect</>}
                  </h3>
                  {!isCorrect && (
                    <p className="text-rose-600 dark:text-rose-400 mt-1">Correct answer: {currentExercise.correctAnswer as string}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
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
