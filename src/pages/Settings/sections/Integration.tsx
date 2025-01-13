import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Plus } from 'lucide-react';

const integrations = [
  { id: 1, name: 'Slack', status: 'Connected', lastSync: '10 mins ago', icon: '🔄' },
  { id: 2, name: 'Google Workspace', status: 'Connected', lastSync: '1 hour ago', icon: '📊' },
  { id: 3, name: 'Microsoft Teams', status: 'Disconnected', lastSync: 'Never', icon: '👥' }
];

export const Integration = () => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle>Connected Services</CardTitle>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Integration
        </button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {integrations.map(integration => (
          <div key={integration.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{integration.icon}</span>
              <div>
                <h3 className="font-medium">{integration.name}</h3>
                <p className="text-sm text-gray-500">Last sync: {integration.lastSync}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={integration.status === 'Connected' ? 'default' : 'secondary'}>
                {integration.status}
              </Badge>
              <button className="text-sm text-blue-500 hover:text-blue-600">
                {integration.status === 'Connected' ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);