import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  disabled = false,
  ariaLabel,
}) => {
  const baseStyles = 'rounded-20 font-semibold transition-all duration-300 ease-in-out hover:scale-95 active:scale-90 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-primary';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-purple-600',
    secondary: 'bg-background-secondary text-white hover:bg-opacity-80',
    outline: 'border-2 border-primary text-white hover:bg-primary hover:bg-opacity-10',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};
