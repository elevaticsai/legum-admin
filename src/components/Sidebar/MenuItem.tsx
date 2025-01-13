import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  collapsed?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ 
  icon: Icon, 
  label, 
  path,
  collapsed = false
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <button
      onClick={() => navigate(path)}
      className={`w-full flex items-center px-4 py-2 text-sm ${
        isActive 
          ? 'text-white bg-indigo-600' 
          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <Icon className="w-5 h-5" />
      {!collapsed && <span className="ml-3">{label}</span>}
    </button>
  );
};