"use client";
import Link from 'next/link';
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useAppStore } from '@/store/useAppStore';
import { courses } from '@/data/courses';
import { vocabulary } from '@/data/vocabulary';
import { Play, Heart, Flame, Trophy, Star, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function HomePage() {
  const { xp, streak, hearts, completedLessons, vocabularyToReview, checkStreak } = useAppStore();

  useEffect(() => {
    checkStreak();
  }, [checkStreak]);

  // Find the next lesson to play
  let nextLesson = null;
  let nextUnit = null;

  for (const unit of courses) {
    for (const lesson of unit.lessons) {
      if (!completedLessons.includes(lesson.id)) {
        nextLesson = lesson;
        nextUnit = unit;
        break;
      }
    }
    if (nextLesson) break;
  }

  if (!nextLesson) {
    const lastUnit = courses[courses.length - 1];
    nextLesson = lastUnit.lessons[lastUnit.lessons.length - 1];
    nextUnit = lastUnit;
  }

  const progressPercentage = Math.round((completedLessons.length / courses.reduce((acc, u) => acc + u.lessons.length, 0)) * 100) || 0;

  // Gather review recommendations
  const reviewWords = vocabulary.filter(v => vocabularyToReview.includes(v.id)).slice(0, 3);
  const recentlyLearned = vocabulary.slice(0, 3); // Mock recent

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-5xl mx-auto w-full">

        {/* Top Stats Bar for Mobile */}
        <div className="md:hidden flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm mb-6 border-2 border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1 text-orange-500 font-bold">
            <Flame className="w-5 h-5 fill-current" />
            <span>{streak}</span>
          </div>
          <div className="flex items-center gap-1 text-rose-500 font-bold">
            <Heart className="w-5 h-5 fill-current" />
            <span>{hearts}</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500 font-bold">
            <Trophy className="w-5 h-5 fill-current" />
            <span>{xp}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Learning Path */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Continue Learning</h1>
              <p className="text-gray-600 dark:text-gray-400">Jump right back into your Thai journey.</p>
            </div>

            <Card className="p-6 md:p-8 bg-brand-50 border-brand-200 dark:bg-brand-900/20 dark:border-brand-800">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider mb-2">
                    Up Next • {nextUnit?.title}
                  </h2>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {nextLesson?.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                    {nextLesson?.description}
                  </p>
                  <Link href={`/lesson?id=${nextLesson?.id}`}>
                    <Button size="lg" className="w-full md:w-auto flex gap-2">
                      <Play className="w-5 h-5 fill-current" /> Start Lesson
                    </Button>
                  </Link>
                </div>

                <div className="w-48 h-48 bg-white dark:bg-gray-800 rounded-full border-4 border-brand-200 dark:border-brand-700 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-brand-500">{progressPercentage}%</span>
                    <span className="text-sm text-gray-500 font-medium">Course<br/>Complete</span>
                  </div>
                </div>
              </div>
            </Card>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Your Course</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
              {courses.map((unit, unitIdx) => (
                <div key={unit.id} className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-500 text-white font-bold px-4 py-2 rounded-xl shadow-sm">
                      Unit {unitIdx + 1}: {unit.title}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 pl-4 md:pl-0">
                    {unit.lessons.map((lesson, lessonIdx) => {
                      const isCompleted = completedLessons.includes(lesson.id);
                      const isCurrent = lesson.id === nextLesson?.id;
                      const isLocked = !isCompleted && !isCurrent;

                      return (
                        <div key={lesson.id} className={`flex items-center gap-4 ${isLocked ? 'opacity-50 grayscale' : ''}`}>
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 z-10 ${
                            isCompleted ? 'bg-brand-500 border-brand-500 text-white' :
                            isCurrent ? 'bg-white border-brand-500 text-brand-500' :
                            'bg-gray-100 border-gray-300 text-gray-400'
                          }`}>
                            {isCompleted ? <Star className="w-5 h-5 fill-current" /> : lessonIdx + 1}
                          </div>
                          <Card className={`flex-1 p-4 ${isCurrent ? 'border-brand-300 ring-2 ring-brand-100' : ''}`}>
                            <h4 className="font-bold text-gray-900 dark:text-white">{lesson.title}</h4>
                            <p className="text-sm text-gray-500">{lesson.description}</p>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Sidebar Widget Area */}
          <div className="w-full lg:w-80 space-y-6">

            {/* Desktop Stats */}
            <Card className="hidden md:block p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Daily Goals</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-orange-500 fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{streak} Day Streak</p>
                    <p className="text-sm text-gray-500">Practice every day!</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-yellow-500 fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{xp} XP</p>
                    <p className="text-sm text-gray-500">Total experience earned</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-rose-500 fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{hearts} Hearts</p>
                    <p className="text-sm text-gray-500">Keep them above zero</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Daily Quests</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Earn 50 XP</span>
                    <span className="text-brand-600 font-bold">{Math.min(xp, 50)} / 50</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 transition-all" style={{ width: `${Math.min((xp / 50) * 100, 100)}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Complete 3 Lessons</span>
                    <span className="text-brand-600 font-bold">{Math.min(completedLessons.length, 3)} / 3</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 transition-all" style={{ width: `${Math.min((completedLessons.length / 3) * 100, 100)}%` }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold flex items-center gap-2 text-gray-900 dark:text-white mb-4">
                <Clock className="w-5 h-5 text-brand-500" /> Review System
              </h3>
              <p className="text-sm text-gray-500 mb-4">Words you should practice again.</p>

              <div className="space-y-3">
                {reviewWords.length > 0 ? reviewWords.map(word => (
                  <div key={word.id} className="flex justify-between items-center text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-bold">{word.thai}</span>
                    <span className="text-gray-500">{word.english}</span>
                  </div>
                )) : (
                  <div className="text-sm text-gray-500 text-center py-4 bg-gray-50 dark:bg-gray-800 rounded">
                    No words to review right now!
                  </div>
                )}
              </div>
              <Link href="/vocabulary" className="block mt-4">
                <Button variant="outline" className="w-full">Go to Dictionary</Button>
              </Link>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold flex items-center gap-2 text-gray-900 dark:text-white mb-4">
                Recently Learned
              </h3>
              <div className="space-y-3">
                {recentlyLearned.map(word => (
                  <div key={word.id} className="flex justify-between items-center text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700">
                    <span className="font-bold text-brand-600">{word.thai}</span>
                    <span className="text-gray-500">{word.english}</span>
                  </div>
                ))}
              </div>
            </Card>

          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
