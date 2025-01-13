import React from 'react';
import { Layout, FileText, BookOpen, SendHorizontal, CreditCard, Users } from 'lucide-react';
import { TabButton } from '../TabButton';

const tabs = [
  { id: 'license', label: 'License & Registration', icon: Layout },
  { id: 'announcement', label: 'Abstract & Notices', icon: FileText },
  { id: 'register', label: 'Register & Records', icon: BookOpen },
  { id: 'return', label: 'Return', icon: SendHorizontal },
  { id: 'remittance', label: 'Remittance', icon: CreditCard },
  { id: 'employee', label: 'Employee Status', icon: Users },
];

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const DashboardTabs: React.FC<DashboardTabsProps> = ({ activeTab, onTabChange }) => (
  <div className="bg-white border-b overflow-x-auto">
    <div className="px-4 sm:px-6">
      <div className="flex space-x-2 sm:space-x-4 pb-2 min-w-max">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            icon={tab.icon}
            label={tab.label}
          />
        ))}
      </div>
    </div>
  </div>
);