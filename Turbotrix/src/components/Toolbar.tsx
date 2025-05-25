import React from 'react';
import { Zap, Menu } from 'lucide-react';

interface ToolbarProps {
  onToggleSidebar: () => void;
}

export function Toolbar({ onToggleSidebar }: ToolbarProps) {
  return (
    <div className="bg-primary-500 text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Zap size={24} />
        <span className="text-xl font-bold">Turbotrix</span>
      </div>
      <button
        onClick={onToggleSidebar}
        className="p-2 hover:bg-primary-600 rounded-lg transition-colors"
      >
        <Menu size={24} />
      </button>
    </div>
  );
}