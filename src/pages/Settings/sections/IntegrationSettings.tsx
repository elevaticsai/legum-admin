import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Link2, RefreshCcw, Power, Users, DollarSign, FileText } from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  description: string;
  status: 'connected' | 'disconnected';
  lastSync?: string;
  icon: React.ReactNode;
}

const integrations: Integration[] = [
  {
    id: 'hrms',
    name: 'HR Management System',
    description: 'Sync employee data and attendance records',
    status: 'connected',
    lastSync: '10 minutes ago',
    icon: <Users className="w-5 h-5" />
  },
  {
    id: 'payroll',
    name: 'Payroll System',
    description: 'Sync salary and compensation data',
    status: 'connected',
    lastSync: '1 hour ago',
    icon: <DollarSign className="w-5 h-5" />
  },
  {
    id: 'docs',
    name: 'Document Management',
    description: 'Sync compliance documents and certificates',
    status: 'disconnected',
    icon: <FileText className="w-5 h-5" />
  }
];

export const IntegrationSettings = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Integration Settings</h2>
          <p className="mt-1 text-sm text-gray-500">Manage connections with external systems</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Link2 className="w-4 h-4 mr-2" />
          Add Integration
        </button>
      </div>

      <div className="space-y-4">
        {integrations.map((integration) => (
          <Card key={integration.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    {integration.icon}
                  </div>
                  <div>
                    <CardTitle>{integration.name}</CardTitle>
                    <p className="text-sm text-gray-500">{integration.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={integration.status === 'connected' ? 'default' : 'secondary'}>
                    {integration.status}
                  </Badge>
                  {integration.status === 'connected' && (
                    <div className="flex items-center space-x-2">
                      <RefreshCcw className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Last sync: {integration.lastSync}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end space-x-4">
                <button className="text-sm text-gray-600 hover:text-gray-900">
                  Configure
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                  <Power className="w-4 h-4 mr-1" />
                  {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};