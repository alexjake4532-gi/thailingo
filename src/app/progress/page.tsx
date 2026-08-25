"use client";
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import Card from '@/components/ui/Card';
import { useAppStore } from '@/store/useAppStore';
import { courses } from '@/data/courses';

export default function ProgressPage() {
  const { xp, completedLessons } = useAppStore();
  const totalLessons = courses.reduce((acc, u) => acc + u.lessons.length, 0);
  const completionPercentage = Math.round((completedLessons.length / totalLessons) * 100) || 0;

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Detailed Progress</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Course Completion</h2>
            <div className="flex items-end gap-4 mb-2">
              <span className="text-4xl font-black text-brand-500">{completionPercentage}%</span>
              <span className="text-gray-500 pb-1">{completedLessons.length} / {totalLessons} Lessons</span>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden w-full">
              <div className="h-full bg-brand-500 transition-all" style={{ width: `${completionPercentage}%` }} />
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Experience Overview</h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="font-medium text-gray-600 dark:text-gray-400">Total XP</span>
                <span className="font-bold text-xl text-yellow-500">{xp}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="font-medium text-gray-600 dark:text-gray-400">Current Level</span>
                <span className="font-bold text-xl text-blue-500">{Math.floor(xp / 100) + 1}</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
