import React from 'react';
import { Link2 } from 'lucide-react';

export const IntegrationSettings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Integration Settings</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Available Integrations</h3>
        <div className="space-y-4">
          <p className="text-gray-500">Configure integrations with other systems.</p>
        </div>
      </div>
    </div>
  );
};