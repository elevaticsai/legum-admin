import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SettingsSidebar } from './components/SettingsSidebar';

export const SettingsLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentSection = location.pathname.split('/').pop() || 'users';

  const handleSectionChange = (section: string) => {
    navigate(`/settings/${section}`);
  };

  return (
    <div className="flex h-full bg-gray-50">
      <SettingsSidebar
        activeSection={currentSection}
        onSectionChange={handleSectionChange}
      />
      <div className="flex-1 overflow-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};