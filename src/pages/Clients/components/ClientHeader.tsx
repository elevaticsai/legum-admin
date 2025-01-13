import React from 'react';
import { PlusCircle, Download, Trash2, CheckCircle } from 'lucide-react';

interface ClientHeaderProps {
  selectedCount: number;
  onBulkAction: (action: string) => void;
}

export const ClientHeader: React.FC<ClientHeaderProps> = ({ selectedCount, onBulkAction }) => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Client Management</h1>
      <p className="text-gray-500 mt-1">Manage and monitor client compliance status</p>
    </div>
    <div className="flex space-x-3">
      {selectedCount > 0 && (
        <div className="flex space-x-2">
          <button
            onClick={() => onBulkAction('markCompliant')}
            className="flex items-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark Compliant
          </button>
          <button
            onClick={() => onBulkAction('delete')}
            className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Selected
          </button>
        </div>
      )}
      <button
        onClick={() => onBulkAction('export')}
        className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <Download className="w-4 h-4 mr-2" />
        Export
      </button>
      <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        <PlusCircle className="w-5 h-5 mr-2" />
        Add Client
      </button>
    </div>
  </div>
);