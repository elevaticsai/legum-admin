import React from 'react';
import { Palette } from 'lucide-react';

export const ThemeCustomization = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Theme & UI</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Theme Settings</h3>
        <div className="space-y-4">
          <p className="text-gray-500">Customize the look and feel of your dashboard.</p>
        </div>
      </div>
    </div>
  );
};