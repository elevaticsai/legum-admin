import React from 'react';
import { 
  Users, Settings, Calendar, Link, History, 
  Scale, Mail, Database, Sliders, Shield, Palette 
} from 'lucide-react';

interface SettingsMenuItemProps {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SettingsMenuItem: React.FC<SettingsMenuItemProps> = ({ 
  icon: Icon, 
  label, 
  isActive, 
  onClick 
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center px-4 py-2 text-sm rounded-lg mb-1
      ${isActive 
        ? 'bg-indigo-50 text-indigo-700' 
        : 'text-gray-600 hover:bg-gray-50'}`}
  >
    <Icon className="w-5 h-5 mr-3" />
    {label}
  </button>
);

interface SettingsSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const menuItems = [
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'preferences', label: 'System Preferences', icon: Settings },
    { id: 'calendar', label: 'Compliance Calendar', icon: Calendar },
    { id: 'integration', label: 'Integration Settings', icon: Link },
    { id: 'audit', label: 'Audit Logs', icon: History },
    { id: 'legal', label: 'Legal Framework', icon: Scale },
    { id: 'email', label: 'Email Notifications', icon: Mail },
    { id: 'backup', label: 'Backup & Restore', icon: Database },
    { id: 'customization', label: 'Customization Options', icon: Sliders },
    { id: 'security', label: 'Security Settings', icon: Shield },
    { id: 'theme', label: 'Theme & UI', icon: Palette },
  ];

  return (
    <div className="w-64 border-r h-full bg-white">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Settings</h2>
        <div className="space-y-1">
          {menuItems.map(item => (
            <SettingsMenuItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeSection === item.id}
              onClick={() => onSectionChange(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};