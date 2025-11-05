import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className, hover = false, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface rounded-lg p-md border border-white border-opacity-10',
        hover && 'hover:border-primary hover:border-opacity-50 cursor-pointer',
        glow && 'card-glow',
        className
      )}
    >
      {children}
    </div>
  );
}
