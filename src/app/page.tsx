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
import PageTransition from "@/components/layout/PageTransition";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function HomePage() {
  const { xp, streak, hearts, completedLessons, vocabularyToReview } = useAppStore();

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
  const reviewWords = vocabulary.filter(v => vocabularyToReview.includes(v.id)).slice(0, 3);
  const recentlyLearned = vocabulary.slice(0, 3);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-5xl mx-auto w-full overflow-hidden">
        <PageTransition>
          {/* Mobile Top Stats */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" as const, bounce: 0.4 }}
            className="md:hidden flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm mb-6 border-2 border-gray-200 dark:border-gray-700"
          >
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
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Continue Learning</h1>
                <p className="text-gray-600 dark:text-gray-400">Jump right back into your Thai journey.</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring" as const, bounce: 0.4, delay: 0.1 }}
              >
                <Card className="p-6 md:p-8 bg-brand-50 border-brand-200 dark:bg-brand-900/20 dark:border-brand-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-brand-200/50 dark:bg-brand-800/30 rounded-full blur-3xl group-hover:bg-brand-300/50 transition-colors duration-500" />
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <div>
                      <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider mb-2">
                        Up Next • {nextUnit?.title}
                      </h2>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {nextLesson?.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                        {nextLesson?.description}
                      </p>
                      <Link href={`/lesson?id=${nextLesson?.id}`}>
                        <Button size="lg" className="w-full md:w-auto flex gap-2 shadow-lg hover:shadow-xl transition-all">
                          <Play className="w-5 h-5 fill-current" /> Start Lesson
                        </Button>
                      </Link>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-48 h-48 bg-white dark:bg-gray-800 rounded-full border-4 border-brand-200 dark:border-brand-700 flex items-center justify-center shadow-lg cursor-default"
                    >
                      <div className="text-center">
                        <span className="block text-4xl font-bold text-brand-500">{progressPercentage}%</span>
                        <span className="text-sm text-gray-500 font-medium">Course<br/>Complete</span>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Your Course</h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-brand-500/20 before:via-brand-500/10 before:to-transparent"
              >
                {courses.map((unit, unitIdx) => (
                  <motion.div key={unit.id} variants={itemVariants} className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="bg-brand-500 text-white font-bold px-4 py-2 rounded-xl shadow-md">
                        Unit {unitIdx + 1}: {unit.title}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 pl-4 md:pl-0">
                      {unit.lessons.map((lesson, lessonIdx) => {
                        const isCompleted = completedLessons.includes(lesson.id);
                        const isCurrent = lesson.id === nextLesson?.id;
                        const isLocked = !isCompleted && !isCurrent;

                        return (
                          <motion.div
                            key={lesson.id}
                            whileHover={!isLocked ? { x: 10 } : {}}
                            className={`flex items-center gap-4 ${isLocked ? 'opacity-60 grayscale' : ''}`}
                          >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 z-10 transition-colors duration-300 ${
                              isCompleted ? 'bg-brand-500 border-brand-500 text-white shadow-brand-500/30 shadow-lg' :
                              isCurrent ? 'bg-white border-brand-500 text-brand-500 shadow-xl ring-4 ring-brand-100' :
                              'bg-gray-100 border-gray-300 text-gray-400'
                            }`}>
                              {isCompleted ? <Star className="w-5 h-5 fill-current" /> : lessonIdx + 1}
                            </div>
                            <Card className={`flex-1 p-4 transition-all duration-300 ${
                              isCurrent ? 'border-brand-300 ring-2 ring-brand-100 dark:ring-brand-900/50 shadow-md transform scale-[1.02]' : ''
                            }`}>
                              <h4 className="font-bold text-gray-900 dark:text-white">{lesson.title}</h4>
                              <p className="text-sm text-gray-500">{lesson.description}</p>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Sidebar Widgets */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="w-full lg:w-80 space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card className="hidden md:block p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">Daily Goals</h3>
                  <div className="space-y-4">
                    <motion.div whileHover={{ scale: 1.05, x: 5 }} className="flex items-center gap-4 cursor-default">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                        <Flame className="w-6 h-6 text-orange-500 fill-current animate-pulse" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{streak} Day Streak</p>
                        <p className="text-sm text-gray-500">Practice every day!</p>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05, x: 5 }} className="flex items-center gap-4 cursor-default">
                      <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-yellow-500 fill-current" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{xp} XP</p>
                        <p className="text-sm text-gray-500">Total experience earned</p>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05, x: 5 }} className="flex items-center gap-4 cursor-default">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-rose-500 fill-current" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{hearts} Hearts</p>
                        <p className="text-sm text-gray-500">Keep them above zero</p>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">Daily Quests</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Earn 50 XP</span>
                        <span className="text-brand-600 font-bold">{Math.min(xp, 50)} / 50</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min((xp / 50) * 100, 100)}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-brand-500"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Complete 3 Lessons</span>
                        <span className="text-brand-600 font-bold">{Math.min(completedLessons.length, 3)} / 3</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min((completedLessons.length / 3) * 100, 100)}%` }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="h-full bg-brand-500"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <h3 className="font-bold flex items-center gap-2 text-gray-900 dark:text-white mb-4">
                    <Clock className="w-5 h-5 text-brand-500" /> Review System
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">Words you should practice again.</p>

                  <div className="space-y-3">
                    {reviewWords.length > 0 ? reviewWords.map((word, i) => (
                      <motion.div
                        key={word.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex justify-between items-center text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="font-bold">{word.thai}</span>
                        <span className="text-gray-500">{word.english}</span>
                      </motion.div>
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
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <h3 className="font-bold flex items-center gap-2 text-gray-900 dark:text-white mb-4">
                    Recently Learned
                  </h3>
                  <div className="space-y-3">
                    {recentlyLearned.map((word, i) => (
                      <motion.div
                        key={word.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex justify-between items-center text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700"
                      >
                        <span className="font-bold text-brand-600">{word.thai}</span>
                        <span className="text-gray-500">{word.english}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

            </motion.div>
          </div>
        </PageTransition>
      </main>
      <BottomNav />
    </div>
  );
}
