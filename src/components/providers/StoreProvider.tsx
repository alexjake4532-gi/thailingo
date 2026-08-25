"use client";
import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/useAppStore';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    useAppStore.persist.rehydrate();
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-900" />; // Prevent hydration mismatch Flash
  }

  return <>{children}</>;
}
