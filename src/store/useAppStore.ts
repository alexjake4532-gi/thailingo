import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface UserState {
  xp: number;
  streak: number;
  hearts: number;
  lastPlayedDate: string | null;
  completedLessons: string[];
  vocabularyMastered: string[];
  vocabularyToReview: string[];
  currentCourseId: string;
  addXp: (amount: number) => void;
  loseHeart: () => void;
  refillHearts: () => void;
  completeLesson: (lessonId: string) => void;
  masterVocabulary: (wordId: string) => void;
  addToReview: (wordId: string) => void;
  removeFromReview: (wordId: string) => void;
  setCurrentCourse: (courseId: string) => void;
}

export const useAppStore = create<UserState>()(
  persist(
    (set, get) => ({
      xp: 0,
      streak: 0,
      hearts: 5,
      lastPlayedDate: null,
      completedLessons: [],
      vocabularyMastered: [],
      vocabularyToReview: [],
      currentCourseId: 'basics-1',

      addXp: (amount) => set((state) => ({ xp: state.xp + amount })),

      loseHeart: () => set((state) => ({
        hearts: Math.max(0, state.hearts - 1)
      })),

      refillHearts: () => set({ hearts: 5 }),

      completeLesson: (lessonId) => {
        set((state) => {
          let updatedLessons = state.completedLessons;
          if (!state.completedLessons.includes(lessonId)) {
            updatedLessons = [...state.completedLessons, lessonId];
          }

          // Streak Logic
          const today = new Date().toDateString();
          let newStreak = state.streak;

          if (state.lastPlayedDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (state.lastPlayedDate === yesterday.toDateString()) {
              newStreak = state.streak + 1;
            } else {
              newStreak = 1;
            }
          }

          return {
            completedLessons: updatedLessons,
            streak: newStreak,
            lastPlayedDate: today
          };
        });
      },

      masterVocabulary: (wordId) => set((state) => {
        if (!state.vocabularyMastered.includes(wordId)) {
          return { vocabularyMastered: [...state.vocabularyMastered, wordId] };
        }
        return state;
      }),

      addToReview: (wordId) => set((state) => {
        if (!state.vocabularyToReview.includes(wordId)) {
          return { vocabularyToReview: [...state.vocabularyToReview, wordId] };
        }
        return state;
      }),

      removeFromReview: (wordId) => set((state) => ({
        vocabularyToReview: state.vocabularyToReview.filter(id => id !== wordId)
      })),

      setCurrentCourse: (courseId) => set({ currentCourseId: courseId })
    }),
    {
      name: 'sabai-thai-storage',
      skipHydration: true,
    }
  )
);
