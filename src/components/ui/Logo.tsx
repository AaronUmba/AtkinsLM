
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: '16px',
    md: '20px',
    lg: '28px'
  };

  return (
    <div className={`${sizeClasses[size]} bg-primary rounded-lg flex items-center justify-center ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height={iconSizes[size]} 
        viewBox="0 -960 960 960" 
        width={iconSizes[size]} 
        fill="hsl(var(--primary-foreground))"
      >
        <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"/>
      </svg>
    </div>
  );
};

export default Logo;
