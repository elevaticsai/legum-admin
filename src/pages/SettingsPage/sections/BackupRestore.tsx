import React from 'react';
import { Database } from 'lucide-react';

export const BackupRestore = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Backup & Restore</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Data Management</h3>
        <div className="space-y-4">
          <p className="text-gray-500">Manage system backup and restore options.</p>
        </div>
      </div>
    </div>
  );
};