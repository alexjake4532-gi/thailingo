"use client";
import { useState } from 'react';
import { vocabulary } from '@/data/vocabulary';
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Search, Volume2 } from 'lucide-react';
import { playThaiAudio } from '@/utils/audio';
import PageTransition from '@/components/layout/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';

export default function VocabularyPage() {
  const [search, setSearch] = useState('');

  const filteredVocab = vocabulary.filter(v =>
    v.english.toLowerCase().includes(search.toLowerCase()) ||
    v.thai.includes(search) ||
    v.romanization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-0">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 max-w-4xl mx-auto w-full">
        <PageTransition>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Vocabulary Bank</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Search and review words. Click the speaker icon to listen.</p>

            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search in English, Thai, or Romanization..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-brand-500 focus:ring-0 transition-colors shadow-sm text-lg"
              />
            </div>
          </motion.div>

          <motion.div layout className="grid gap-4">
            <AnimatePresence>
              {filteredVocab.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: i < 10 ? i * 0.05 : 0 }}
                >
                  <Card className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => playThaiAudio(item.thai)}
                        className="mt-1 text-brand-500 hover:text-brand-600 bg-brand-50"
                      >
                        <Volume2 className="w-5 h-5" />
                      </Button>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{item.thai}</h3>
                        <p className="text-brand-600 dark:text-brand-400 font-medium">{item.romanization}</p>
                      </div>
                    </div>
                    <div className="md:text-right ml-14 md:ml-0">
                      <p className="font-medium text-gray-800 dark:text-gray-200">{item.english}</p>
                      <span className="inline-block mt-1 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 capitalize">
                        {item.pos} • {item.category}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredVocab.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 text-gray-500">
                No words found matching &quot;{search}&quot;
              </motion.div>
            )}
          </motion.div>
        </PageTransition>
      </main>
      <BottomNav />
    </div>
  );
}
