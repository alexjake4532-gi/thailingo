"use client";
import { consonants, vowels } from '@/data/alphabet';
import Card from '@/components/ui/Card';
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import { playThaiAudio } from '@/utils/audio';
import PageTransition from '@/components/layout/PageTransition';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function AlphabetPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-5xl mx-auto w-full">
        <PageTransition>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Thai Alphabet</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Learn the consonants and vowels. Click to hear pronunciation.</p>
          </motion.div>

          <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-200">Consonants</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {consonants.map((char) => (
              <motion.div key={char.id} variants={itemVariants}>
                <Card
                  hoverable
                  onClick={() => playThaiAudio(char.name)}
                  className="p-4 text-center cursor-pointer group flex flex-col items-center justify-center min-h-[140px]"
                >
                  <span className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">{char.char}</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{char.name}</span>
                  <span className="text-xs text-gray-500">{char.rtgs} ({char.meaning})</span>
                  <span className={`mt-2 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${
                    char.class === 'high' ? 'bg-rose-100 text-rose-700' :
                    char.class === 'mid' ? 'bg-green-100 text-green-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {char.class}
                  </span>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <h2 className="text-2xl font-bold mb-4 mt-12 text-gray-800 dark:text-gray-200">Vowels</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {vowels.map((vowel) => (
              <motion.div key={vowel.id} variants={itemVariants}>
                <Card
                  hoverable
                  onClick={() => playThaiAudio(vowel.name)}
                  className="p-4 text-center cursor-pointer group flex flex-col items-center justify-center min-h-[140px]"
                >
                  <span className="text-4xl font-bold text-brand-600 dark:text-brand-400 mb-2">- {vowel.char}</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{vowel.name}</span>
                  <span className="text-xs text-gray-500">{vowel.rtgs}</span>
                  <span className="mt-2 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                    {vowel.length}
                  </span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </PageTransition>
      </main>
      <BottomNav />
    </div>
  );
}
