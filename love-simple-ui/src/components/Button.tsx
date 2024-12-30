import React from 'react';
import { cn } from '../../utils/utils';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  className?: string; // Allow custom class names
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  onClick,
  children,
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium';
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-gray-500 text-white hover:bg-gray-600';

  return (
    <button
      className={cn(baseClasses, variantClasses, className)} // Use cn to merge classes
      onClick={onClick}
    >
      {children}
    </button>
  );
};
