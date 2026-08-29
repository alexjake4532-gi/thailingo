"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Book, BookOpen, MessageCircle, User, Settings, Moon, Sun } from 'lucide-react';
import { cn } from '../ui/Card';
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";

const navItems = [
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/', label: 'Learn', icon: Home },
  { href: '/alphabet', label: 'Alphabet', icon: Book },
  { href: '/vocabulary', label: 'Vocab', icon: BookOpen },
  { href: '/practice', label: 'Practice', icon: MessageCircle },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 pb-safe z-50">
      <nav className="flex justify-around items-center px-2 h-16">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="flex flex-col items-center justify-center w-full h-full space-y-1 relative text-gray-400 hover:text-brand-500"
        >
          <motion.div whileTap={{ scale: 0.8 }} className="relative w-6 h-6">
            <Sun className="absolute inset-0 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 w-6 h-6" />
            <Moon className="absolute inset-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 w-6 h-6" />
          </motion.div>
        </button>
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
