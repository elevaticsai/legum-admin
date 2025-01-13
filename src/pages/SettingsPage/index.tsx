import React, { useState } from 'react';
import { SettingsSidebar } from '../../components/settings/SettingsSidebar';
import { UserManagement } from './sections/UserManagement';
import { SystemPreferences } from './sections/SystemPreferences';
import { ComplianceCalendar } from './sections/ComplianceCalendar';
import { IntegrationSettings } from './sections/IntegrationSettings';
import { AuditLogs } from './sections/AuditLogs';
import { LegalFramework } from './sections/LegalFramework';
import { EmailNotifications } from './sections/EmailNotifications';
import { BackupRestore } from './sections/BackupRestore';
import { CustomizationOptions } from './sections/CustomizationOptions';
import { SecuritySettings } from './sections/SecuritySettings';
import { ThemeCustomization } from './sections/ThemeCustomization';

export const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('users');

  const renderSection = () => {
    switch (activeSection) {
      case 'users':
        return <UserManagement />;
      case 'preferences':
        return <SystemPreferences />;
      case 'calendar':
        return <ComplianceCalendar />;
      case 'integration':
        return <IntegrationSettings />;
      case 'audit':
        return <AuditLogs />;
      case 'legal':
        return <LegalFramework />;
      case 'email':
        return <EmailNotifications />;
      case 'backup':
        return <BackupRestore />;
      case 'customization':
        return <CustomizationOptions />;
      case 'security':
        return <SecuritySettings />;
      case 'theme':
        return <ThemeCustomization />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full bg-gray-50">
      <SettingsSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="flex-1 overflow-auto p-6">
        {renderSection()}
      </div>
    </div>
  );
};