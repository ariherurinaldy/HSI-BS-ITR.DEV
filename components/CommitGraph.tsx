import React, { useMemo, useState, useRef } from 'react';

export const CommitGraph: React.FC = () => {
  const weeks = 20;
  const days = 7;
  
  // Generate stable contribution data
  const contributions = useMemo(() => {
    const today = new Date();
    return Array.from({ length: weeks * days }).map((_, i) => {
      // Calculate date for each square (going backwards from today)
      const date = new Date(today);
      date.setDate(today.getDate() - ((weeks * days) - 1 - i));
      const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      // Create a pattern that looks somewhat realistic
      const random = Math.random();
      let level = 0;
      if (random > 0.8) level = 3; // High
      else if (random > 0.6) level = 2; // Medium
      else if (random > 0.3) level = 1; // Low
      
      // Generate a plausible count based on level
      const count = level === 0 ? 0 : Math.floor(Math.random() * 5) + (level * 3);

      return { level, count, date: dateStr };
    });
  }, []);

  // State for the custom tooltip
  const [hovered, setHovered] = useState<{ x: number, y: number, count: number, date: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getColor = (level: number) => {
    // Default is grayscale (graphite style), hover brings back the green
    // We rely on the parent container having the 'group' class
    switch(level) {
      case 3: return 'bg-vs-gray group-hover:bg-vs-green';
      case 2: return 'bg-vs-gray/60 group-hover:bg-vs-green/70';
      case 1: return 'bg-vs-gray/30 group-hover:bg-vs-green/30';
      default: return 'bg-vs-card';
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, data: typeof contributions[0]) => {
    if (!containerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setHovered({
      x: rect.left - containerRect.left + (rect.width / 2),
      y: rect.top - containerRect.top,
      count: data.count,
      date: data.date
    });
  };

  return (
    <div className="relative" ref={containerRef} onMouseLeave={() => setHovered(null)}>
      {/* Custom Tooltip */}
      {hovered && (
        <div 
          className="absolute z-20 bg-vs-bg border border-vs-border shadow-xl px-3 py-2 rounded-sm pointer-events-none transform -translate-x-1/2 -translate-y-full flex flex-col items-center"
          style={{ 
            top: hovered.y - 8, 
            left: hovered.x 
          }}
        >
          <div className="text-xs font-bold text-white whitespace-nowrap">
            {hovered.count} contributions
          </div>
          <div className="text-[10px] text-vs-gray whitespace-nowrap">
            {hovered.date}
          </div>
          {/* Tooltip Arrow */}
          <div className="absolute -bottom-1 w-2 h-2 bg-vs-bg border-b border-r border-vs-border transform rotate-45"></div>
        </div>
      )}

      <div className="flex gap-[3px] flex-wrap justify-end max-w-full">
        {contributions.map((data, i) => (
          <div 
            key={i} 
            className={`w-[10px] h-[10px] rounded-[2px] ${getColor(data.level)} transition-colors duration-300 hover:ring-1 hover:ring-white/50 cursor-pointer`}
            onMouseEnter={(e) => handleMouseEnter(e, data)}
          />
        ))}
      </div>
    </div>
  );
};