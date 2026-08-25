"use client";
import { useState } from 'react';
import { vocabulary } from '@/data/vocabulary';
import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';
import Card from '@/components/ui/Card';
import { Search } from 'lucide-react';

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
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Vocabulary Bank</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Review words and phrases</p>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search in English, Thai, or Romanization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary-500 focus:ring-0 transition-colors"
          />
        </div>

        <div className="grid gap-4">
          {filteredVocab.map((item) => (
            <Card key={item.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{item.thai}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">{item.romanization}</p>
              </div>
              <div className="md:text-right">
                <p className="font-medium text-gray-800 dark:text-gray-200">{item.english}</p>
                <span className="inline-block mt-1 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 capitalize">
                  {item.pos} • {item.category}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
