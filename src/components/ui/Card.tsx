import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Card({ className, hoverable, ...props }: React.HTMLAttributes<HTMLDivElement> & { hoverable?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50",
        hoverable && "transition-transform hover:scale-105 cursor-pointer hover:border-brand-300 dark:hover:border-brand-700",
        className
      )}
      {...props}
    />
  )
}
