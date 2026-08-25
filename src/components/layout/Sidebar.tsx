'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Book, BookOpen, MessageCircle, User, Award } from 'lucide-react';
import { cn } from '../ui/Button';

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
    <div className="hidden md:flex flex-col w-64 border-r-2 border-gray-200 h-screen fixed left-0 top-0 p-4 bg-white z-50">
      <div className="mb-8 px-4">
        <h1 className="text-2xl font-bold text-brand-500">Sabai Thai</h1>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors",
                isActive
                  ? "bg-brand-50 text-brand-500 border-2 border-brand-200"
                  : "text-gray-500 hover:bg-gray-100 border-2 border-transparent"
              )}
            >
              <Icon className={cn("w-6 h-6", isActive ? "text-brand-500" : "text-gray-400")} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
