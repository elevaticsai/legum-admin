import React from 'react';
import { MoreVertical, AlertTriangle, CheckCircle } from 'lucide-react';
import type { Client, SortConfig } from '../types';

interface ClientTableProps {
  clients: Client[];
  sortConfig: SortConfig;
  onSort: (key: string) => void;
  selectedClients: string[];
  onToggleSelect: (clientId: string) => void;
}

export const ClientTable: React.FC<ClientTableProps> = ({
  clients,
  sortConfig,
  onSort,
  selectedClients,
  onToggleSelect,
}) => {
  const getSortIcon = (column: string) => {
    if (sortConfig.key !== column) return '↕';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  const columns = [
    { key: 'id', label: 'Client ID' },
    { key: 'name', label: 'Client Name' },
    { key: 'industryType', label: 'Industry' },
    { key: 'location', label: 'Location' },
    { key: 'complianceStatus', label: 'Status' },
    { key: 'lastComplianceCheck', label: 'Last Check' },
    { key: 'clientTier', label: 'Tier' },
    { key: 'alerts', label: 'Alerts' },
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedClients.length === clients.length}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onToggleSelect('all');
                    } else {
                      onToggleSelect('none');
                    }
                  }}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </th>
              {columns.map(({ key, label }) => (
                <th
                  key={key}
                  onClick={() => onSort(key)}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-1">
                    <span>{label}</span>
                    <span className="text-gray-400">{getSortIcon(key)}</span>
                  </div>
                </th>
              ))}
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedClients.includes(client.id)}
                    onChange={() => onToggleSelect(client.id)}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {client.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {client.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {client.industryType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {client.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    client.complianceStatus === 'Compliant'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {client.complianceStatus === 'Compliant' ? (
                      <CheckCircle className="w-4 h-4 mr-1" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 mr-1" />
                    )}
                    {client.complianceStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {client.lastComplianceCheck}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    client.clientTier === 'Premium'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {client.clientTier}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {client.alerts > 0 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {client.alerts} alerts
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};