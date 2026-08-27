"use client";
import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { motion, HTMLMotionProps } from "framer-motion"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface CardProps extends HTMLMotionProps<"div"> {
  hoverable?: boolean;
}

export default function Card({ className, hoverable, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { scale: 1.02 } : undefined}
      whileTap={hoverable ? { scale: 0.98 } : undefined}
      className={cn(
        "rounded-2xl border-2 border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50",
        hoverable && "cursor-pointer hover:border-brand-300 dark:hover:border-brand-700",
        className
      )}
      {...props}
    />
  )
}
