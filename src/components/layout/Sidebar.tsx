"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Book, BookOpen, MessageCircle, User, Award } from 'lucide-react';
import { cn } from '../ui/Card'; // using cn from Card since Button cn is not exported uniquely
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Learn', icon: Home },
  { href: '/alphabet', label: 'Alphabet', icon: Book },
  { href: '/vocabulary', label: 'Vocab', icon: BookOpen },
  { href: '/practice', label: 'Practice', icon: MessageCircle },
  { href: '/grammar', label: 'Grammar', icon: Award },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col w-64 border-r-2 border-gray-200 dark:border-gray-800 h-screen fixed left-0 top-0 p-4 bg-white dark:bg-gray-900 z-50">
      <div className="mb-8 px-4 mt-4">
        <h1 className="text-3xl font-black text-brand-500 tracking-tight">Sabai Thai</h1>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="block relative">
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors relative z-10",
                  isActive
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-bg"
                    className="absolute inset-0 bg-brand-50 dark:bg-brand-900/20 border-2 border-brand-200 dark:border-brand-800 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className={cn("w-6 h-6", isActive ? "text-brand-500" : "text-gray-400")} />
                {item.label}
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
