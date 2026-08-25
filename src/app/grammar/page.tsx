import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import Card from '@/components/ui/Card';

export default function GrammarPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Thai Grammar</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Understanding sentence structure</p>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 text-primary-600">Basic Word Order</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Thai follows a Subject-Verb-Object (SVO) structure, similar to English.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-bold text-lg">ผม กิน ข้าว</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">pǒm gin khâao</p>
              <p className="mt-2 text-gray-800 dark:text-gray-200">I eat rice.</p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 text-primary-600">Politeness Particles</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Thai uses polite particles at the end of sentences based on the speaker&apos;s gender.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>ครับ (khráp)</strong> - Used by male speakers.</li>
              <li><strong>ค่ะ (khâ)</strong> - Used by female speakers (statements).</li>
              <li><strong>คะ (khá)</strong> - Used by female speakers (questions).</li>
            </ul>
          </Card>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
