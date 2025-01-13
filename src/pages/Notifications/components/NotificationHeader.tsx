import React from 'react';
import { Bell, CheckCircle, Trash2, Settings } from 'lucide-react';

interface NotificationHeaderProps {
  selectedCount: number;
  onBulkAction: (action: string) => void;
}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({ 
  selectedCount, 
  onBulkAction 
}) => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
      <p className="text-gray-500 mt-1">Manage alerts and compliance notifications</p>
    </div>
    <div className="flex space-x-3">
      {selectedCount > 0 && (
        <div className="flex space-x-2">
          <button
            onClick={() => onBulkAction('markRead')}
            className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark as Read
          </button>
          <button
            onClick={() => onBulkAction('delete')}
            className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </button>
        </div>
      )}
      <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Settings className="w-4 h-4 mr-2" />
        Settings
      </button>
    </div>
  </div>
);