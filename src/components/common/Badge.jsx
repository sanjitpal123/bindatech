import React from 'react';

export default function Badge({ children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    outline: 'bg-slate-800/60 text-slate-300 border-slate-700'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
