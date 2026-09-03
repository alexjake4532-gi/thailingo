"use client";
import React from 'react';
import { cn } from '@/utils/cn';

import { motion, HTMLMotionProps } from 'framer-motion';


export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-[0_4px_0_0_#16a34a]',
      secondary: 'bg-gold-400 text-white hover:bg-gold-500 shadow-[0_4px_0_0_#ca8a04]',
      outline: 'border-2 border-gray-200 bg-transparent hover:bg-gray-50 text-gray-700',
      ghost: 'hover:bg-gray-100 text-gray-700',
      danger: 'bg-red-500 text-white hover:bg-red-600 shadow-[0_4px_0_0_#dc2626]',
      success: 'bg-green-500 text-white hover:bg-green-600 shadow-[0_4px_0_0_#16a34a]',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
      icon: 'h-10 w-10',
    };

    const hasShadow = ['primary', 'secondary', 'danger', 'success'].includes(variant);

    return (
      <motion.button
        ref={ref}
        whileHover={hasShadow ? { y: 2, boxShadow: '0 2px 0 0 currentColor' } : undefined}
        whileTap={hasShadow ? { y: 4, boxShadow: '0 0px 0 0 currentColor' } : { scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        style={hasShadow ? { color: 'white' } : {}}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;
