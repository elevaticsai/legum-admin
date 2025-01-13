import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SettingsLayout } from './layout';
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
import { SystemHealth } from './sections/SystemHealth';

export const SettingsRoutes = () => (
  <Routes>
    <Route element={<SettingsLayout />}>
      <Route index element={<UserManagement />} />
      <Route path="users" element={<UserManagement />} />
      <Route path="preferences" element={<SystemPreferences />} />
      <Route path="calendar" element={<ComplianceCalendar />} />
      <Route path="integration" element={<IntegrationSettings />} />
      <Route path="audit" element={<AuditLogs />} />
      <Route path="legal" element={<LegalFramework />} />
      <Route path="email" element={<EmailNotifications />} />
      <Route path="backup" element={<BackupRestore />} />
      <Route path="customization" element={<CustomizationOptions />} />
      <Route path="security" element={<SecuritySettings />} />
      <Route path="theme" element={<ThemeCustomization />} />
      <Route path="health" element={<SystemHealth />} />
    </Route>
  </Routes>
);