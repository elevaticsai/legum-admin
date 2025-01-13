import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/Dashboard';
import { DataUploadPage } from './pages/DataUpload';
import { SettingsPage } from './pages/Settings';
import { AnalyticsPage } from './pages/Analytics';
import { HelpSupportPage } from './pages/HelpSupport';
import { ClientPage } from './pages/Clients';
import { NotificationsPage } from './pages/Notifications';
import { CalendarPage } from './pages/Calendar';

export const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/reports" element={<DataUploadPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/settings/*" element={<SettingsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/help" element={<HelpSupportPage />} />
      </Routes>
    </Layout>
  );
};