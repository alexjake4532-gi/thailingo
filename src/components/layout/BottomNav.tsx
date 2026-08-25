'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Book, BookOpen, User } from 'lucide-react';
import { cn } from '../ui/Button';

const navItems = [
  { href: '/', label: 'Learn', icon: Home },
  { href: '/alphabet', label: 'Alphabet', icon: Book },
  { href: '/vocabulary', label: 'Vocab', icon: BookOpen },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t-2 border-gray-200 bg-white z-50">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <div className={cn(
                "p-1 rounded-xl transition-colors",
                isActive ? "bg-brand-50 border-2 border-brand-200" : "border-2 border-transparent"
              )}>
                <Icon className={cn("w-6 h-6", isActive ? "text-brand-500" : "text-gray-400")} />
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
