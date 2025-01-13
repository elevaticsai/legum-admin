import React from 'react';
import { 
  Users, Settings, Calendar, Link, History, Scale, Mail, 
  Database, Sliders, Shield, Palette, Activity 
} from 'lucide-react';

interface SettingsMenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
}

const menuItems: SettingsMenuItem[] = [
  { id: 'users', label: 'User Management', icon: Users, description: 'Manage users and roles' },
  { id: 'preferences', label: 'System Preferences', icon: Settings, description: 'Configure system defaults' },
  { id: 'calendar', label: 'Compliance Calendar', icon: Calendar, description: 'Manage compliance dates' },
  { id: 'integration', label: 'Integration', icon: Link, description: 'External system connections' },
  { id: 'audit', label: 'Audit Logs', icon: History, description: 'Track system activities' },
  { id: 'legal', label: 'Legal Framework', icon: Scale, description: 'Configure compliance rules' },
  { id: 'email', label: 'Email Settings', icon: Mail, description: 'Manage notifications' },
  { id: 'backup', label: 'Backup & Restore', icon: Database, description: 'Data management' },
  { id: 'customization', label: 'Customization', icon: Sliders, description: 'Custom fields and forms' },
  { id: 'security', label: 'Security', icon: Shield, description: 'Security settings' },
  { id: 'theme', label: 'Theme & UI', icon: Palette, description: 'Visual customization' },
  { id: 'health', label: 'System Health', icon: Activity, description: 'Monitor performance' }
];

interface SettingsSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  activeSection,
  onSectionChange,
}) => (
  <div className="w-64 border-r h-full bg-white">
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Settings</h2>
      <div className="space-y-1">
        {menuItems.map(({ id, label, icon: Icon, description }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors
              ${activeSection === id 
                ? 'bg-indigo-50 text-indigo-700' 
                : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Icon className="w-5 h-5 mr-3" />
            <div className="text-left">
              <div className="font-medium">{label}</div>
              <div className="text-xs text-gray-500">{description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
);