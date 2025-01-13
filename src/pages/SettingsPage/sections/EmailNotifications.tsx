import React from 'react';
import { Mail } from 'lucide-react';

export const EmailNotifications = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Email Notifications</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Email Settings</h3>
        <div className="space-y-4">
          <p className="text-gray-500">Configure email templates and notification preferences.</p>
        </div>
      </div>
    </div>
  );
};