"use client";
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import Card from '@/components/ui/Card';
import PageTransition from '@/components/layout/PageTransition';

export default function GrammarPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-4xl mx-auto w-full">
        <PageTransition>
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Thai Grammar & Context</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Understanding sentence structure, rules, and nuances.</p>

          <div className="space-y-6">

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 text-brand-600">Basic Word Order (S-V-O)</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Thai follows a Subject-Verb-Object (SVO) structure, similar to English. However, adjectives always come <em>after</em> the noun they modify.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p className="font-bold text-lg text-brand-600">ผม กิน ข้าว</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">pǒm gin khâao</p>
                <p className="mt-2 text-gray-800 dark:text-gray-200">I (male) eat rice.</p>

                <p className="font-bold text-lg text-brand-600 mt-4">แมว ดำ</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">maew dam</p>
                <p className="mt-2 text-gray-800 dark:text-gray-200">Cat black (The black cat).</p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 text-brand-600">Politeness Particles</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Thai uses polite particles at the end of sentences based on the speaker&apos;s gender. This is essential for formal and everyday polite conversation.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>ครับ (khráp)</strong> - Used by male speakers at the end of statements and questions.</li>
                <li><strong>ค่ะ (khâ)</strong> - Used by female speakers at the end of statements.</li>
                <li><strong>คะ (khá)</strong> - Used by female speakers at the end of questions.</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 text-brand-600">Written vs Spoken Thai</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Thai has a distinct difference between formal/written registers and casual/spoken language.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                      <th className="p-2">English</th>
                      <th className="p-2">Formal / Written</th>
                      <th className="p-2">Casual / Spoken</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="p-2">Eat</td>
                      <td className="p-2">รับประทาน (ráp-bprà-thaan)</td>
                      <td className="p-2 font-bold text-brand-600">กิน (gin)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="p-2">I / Me (Female)</td>
                      <td className="p-2">ดิฉัน (dì-chǎn)</td>
                      <td className="p-2 font-bold text-brand-600">ฉัน (chǎn) / เค้า (káo)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="p-2">Very / Much</td>
                      <td className="p-2">มาก (mâak)</td>
                      <td className="p-2 font-bold text-brand-600">จัง (jang) / โคตร (khôot - slang)</td>
                    </tr>
                    <tr>
                      <td className="p-2">What?</td>
                      <td className="p-2">อะไร (à-rai)</td>
                      <td className="p-2 font-bold text-brand-600">ไร (rai)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 text-brand-600">Tone Rules Basics</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Thai is a tonal language with 5 tones. The tone of a syllable is determined by the consonant class, vowel length, and ending consonant (live or dead).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-center">
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">Mid (-)<br/>ปลา (bplaa)</div>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">Low (\)<br/>ไข่ (khài)</div>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">Falling (^)<br/>ข้าว (khâao)</div>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">High (/)<br/>ม้า (máa)</div>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">Rising (v)<br/>หมา (mǎa)</div>
              </div>
            </Card>

          </div>
        </PageTransition>
      </main>
      <BottomNav />
    </div>
  );
}
