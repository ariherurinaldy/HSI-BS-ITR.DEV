import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <div className={`bg-vs-card border border-vs-border rounded-sm shadow-sm ${noPadding ? '' : 'p-6'} ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  date?: string 
}> = ({ icon, title, date }) => (
  <div className="flex items-center justify-between mb-6 pb-2 border-b border-vs-border/30">
    <div className="flex items-center gap-3">
      <div className="text-vs-gray">
        {icon}
      </div>
      <h2 className="text-lg font-bold tracking-tight text-vs-fg uppercase">{title}</h2>
    </div>
    {date && <span className="text-xs font-mono text-vs-gray">{date}</span>}
  </div>
);