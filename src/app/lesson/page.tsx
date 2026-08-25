"use client";

import { useSearchParams } from 'next/navigation';
import { courses } from '@/data/courses';
import LessonEngine from '@/components/lesson/LessonEngine';
import { Suspense } from 'react';

function LessonContent() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id');

  let currentLesson = null;
  for (const unit of courses) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      currentLesson = lesson;
      break;
    }
  }

  if (!currentLesson) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Lesson not found</h1>
      </div>
    );
  }

  return <LessonEngine lessonId={currentLesson.id} exercises={currentLesson.exercises} />;
}

export default function LessonPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <LessonContent />
    </Suspense>
  );
}
