import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  collapsed?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ collapsed = false }) => (
  <div className={`flex items-center p-4 border-b border-gray-700 ${collapsed ? 'justify-center' : ''}`}>
    <Shield className="w-8 h-8 text-indigo-600" />
    {!collapsed && (
      <div className="ml-2">
        <h1 className="text-lg font-bold text-white">ComplianceHub</h1>
        <p className="text-xs text-gray-400">Enterprise Suite</p>
      </div>
    )}
  </div>
);