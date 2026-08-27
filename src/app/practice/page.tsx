"use client";
import PageTransition from "@/components/layout/PageTransition";
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import Card from '@/components/ui/Card';
import SpeakingPractice from '@/components/practice/SpeakingPractice';
import WritingCanvas from '@/components/practice/WritingCanvas';

export default function PracticePage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-4xl mx-auto w-full">
<PageTransition>
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Practice Hub</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Refine your speaking and writing skills</p>

        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Speaking</h2>
            <Card className="p-6">
              <SpeakingPractice
                targetPhrase="สวัสดีครับ"
                romanization="sà-wàt-dee khráp"
                translation="Hello (male)"
              />
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Writing</h2>
            <Card className="p-6">
              <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm">
                Trace the character below. (Simulated canvas)
              </p>
              <WritingCanvas targetCharacter="ก" />
            </Card>
          </section>
        </div>
      </PageTransition>
</main>
      <BottomNav />
    </div>
  );
}
