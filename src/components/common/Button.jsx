import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'glow'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm space-x-1.5',
    md: 'px-6 py-3 text-base space-x-2',
    lg: 'px-8 py-4 text-lg space-x-2.5'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 border border-emerald-400/30',
    secondary: 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700/60 backdrop-blur-md hover:border-slate-500/60 shadow-md',
    outline: 'bg-transparent text-slate-200 border border-slate-700 hover:border-emerald-500 hover:text-white hover:bg-emerald-500/10',
    glow: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-glow-md hover:shadow-glow-cyan border border-white/20'
  };

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03, y: -1 },
    whileTap: disabled ? {} : { scale: 0.96 },
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  };

  const content = (
    <>
      <span className="inline-flex flex-row items-center justify-center space-x-2 flex-nowrap whitespace-nowrap">
        {children}
      </span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      )}
    </>
  );

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} group ${className}`;

  if (to) {
    return (
      <MotionLink to={to} className={combinedClass} {...motionProps} {...props}>
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer" {...motionProps} {...props}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} className={combinedClass} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
}
