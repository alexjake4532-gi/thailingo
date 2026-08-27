"use client";
import PageTransition from "@/components/layout/PageTransition";
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import Card from '@/components/ui/Card';
import { useAppStore } from '@/store/useAppStore';
import { Flame, Trophy, Star, BookOpen } from 'lucide-react';

export default function ProfilePage() {
  const { xp, streak, completedLessons, vocabularyMastered } = useAppStore();

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-4xl mx-auto w-full">
<PageTransition>
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Profile & Stats</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <Flame className="w-8 h-8 mx-auto text-orange-500 mb-2" />
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{streak}</p>
            <p className="text-sm text-gray-500">Day Streak</p>
          </Card>
          <Card className="p-4 text-center">
            <Trophy className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{xp}</p>
            <p className="text-sm text-gray-500">Total XP</p>
          </Card>
          <Card className="p-4 text-center">
            <BookOpen className="w-8 h-8 mx-auto text-blue-500 mb-2" />
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{completedLessons.length}</p>
            <p className="text-sm text-gray-500">Lessons</p>
          </Card>
          <Card className="p-4 text-center">
            <Star className="w-8 h-8 mx-auto text-purple-500 mb-2" />
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{vocabularyMastered.length}</p>
            <p className="text-sm text-gray-500">Words Mastered</p>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Achievements</h2>
        <div className="space-y-4">
          <Card className="p-4 flex items-center gap-4 border-l-4 border-l-yellow-400">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">First Steps</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Complete your first lesson.</p>
            </div>
          </Card>
        </div>
      </PageTransition>
</main>
      <BottomNav />
    </div>
  );
}
