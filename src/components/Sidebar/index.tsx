import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Bell,
  Settings,
  Calendar,
  BarChart2,
  HelpCircle,
  ChevronLeft
} from 'lucide-react';
import { Logo } from './Logo';
import { MenuItem } from './MenuItem';

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className={`bg-[#1a1f2b] text-white h-full flex flex-col transition-all duration-300 ${
      collapsed ? 'w-20' : 'w-64'
    }`}>
      <Logo collapsed={collapsed} />
      
      <div className="flex-1 py-4">
        <div className="space-y-1">
          <MenuItem icon={LayoutDashboard} label="Dashboard" path="/dashboard" collapsed={collapsed} />
          <MenuItem icon={Users} label="Client Tab" path="/clients" collapsed={collapsed} />
          <MenuItem icon={FileText} label="Reports Tab" path="/reports" collapsed={collapsed} />
          <MenuItem icon={Bell} label="Notification Tab" path="/notifications" collapsed={collapsed} />
          <MenuItem icon={Settings} label="Settings Tab" path="/settings" collapsed={collapsed} />
          <MenuItem icon={Calendar} label="Compliance Calendar" path="/calendar" collapsed={collapsed} />
          <MenuItem icon={BarChart2} label="Analytics" path="/analytics" collapsed={collapsed} />
          <MenuItem icon={HelpCircle} label="Help & Support" path="/help" collapsed={collapsed} />
        </div>
      </div>

      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="p-4 border-t border-gray-700 flex items-center justify-center hover:bg-gray-800"
      >
        <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${
          collapsed ? 'rotate-180' : ''
        }`} />
        {!collapsed && <span className="ml-2">Collapse</span>}
      </button>
    </div>
  );
};