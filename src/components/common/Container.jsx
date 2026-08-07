import React from 'react';

export default function Container({ children, className = '', size = 'lg' }) {
  const maxSizes = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]'
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxSizes[size]} ${className}`}>
      {children}
    </div>
  );
}
