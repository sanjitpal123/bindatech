import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/companyInfo';
import logoHorizontalImg from '../../assets/logo_horizontal.png';

export default function Logo({
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  variant = 'horizontal', // 'horizontal' | 'vertical' | 'icon'
  className = '',
  onClick
}) {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-11',
    lg: 'h-12 sm:h-16',
    xl: 'h-16 sm:h-24'
  };

  const logoSrc = variant === 'vertical' 
    ? companyInfo.logoVertical 
    : (variant === 'icon' ? companyInfo.logoIcon : (companyInfo.logo || logoHorizontalImg));

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center group transition-transform duration-300 hover:scale-[1.03] ${className}`}
    >
      {/* High-visibility Crisp Brand Logo Image */}
      <img
        src={logoSrc}
        alt={`${companyInfo.name} Official Logo`}
        className={`object-contain ${sizeClasses[size]} w-auto filter drop-shadow-[0_0_12px_rgba(99,102,241,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300`}
      />
    </Link>
  );
}


