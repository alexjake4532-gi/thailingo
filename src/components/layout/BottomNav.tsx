"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Book, BookOpen, MessageCircle, User } from 'lucide-react';
import { cn } from '../ui/Card';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Learn', icon: Home },
  { href: '/alphabet', label: 'Alphabet', icon: Book },
  { href: '/vocabulary', label: 'Vocab', icon: BookOpen },
  { href: '/practice', label: 'Practice', icon: MessageCircle },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 pb-safe z-50">
      <nav className="flex justify-around items-center px-2 h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 relative",
                isActive ? "text-brand-500" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              )}
            >
              <motion.div whileTap={{ scale: 0.8 }}>
                <Icon className="w-6 h-6" />
              </motion.div>
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-active-indicator"
                  className="absolute -top-0.5 w-8 h-1 bg-brand-500 rounded-b-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
