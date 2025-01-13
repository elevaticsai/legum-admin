import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
}

export const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center whitespace-nowrap px-3 sm:px-4 py-2 border-b-2 text-sm ${
      active 
        ? 'border-indigo-500 text-indigo-600' 
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    }`}
  >
    <Icon className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
    <span className="hidden sm:inline">{label}</span>
  </button>
);