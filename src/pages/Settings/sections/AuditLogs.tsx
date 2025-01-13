import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Download, Search } from 'lucide-react';

const auditLogs = [
  { id: 1, user: 'John Smith', action: 'User Login', timestamp: '2024-03-15 10:30 AM', ip: '192.168.1.1', status: 'Success' },
  { id: 2, user: 'Sarah Johnson', action: 'Client Updated', timestamp: '2024-03-15 11:15 AM', ip: '192.168.1.2', status: 'Success' },
  { id: 3, user: 'Mike Wilson', action: 'Failed Login', timestamp: '2024-03-15 11:45 AM', ip: '192.168.1.3', status: 'Failed' }
];

export const AuditLogs = () => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle>System Audit Logs</CardTitle>
        <button className="flex items-center px-4 py-2 text-sm text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50">
          <Download className="w-4 h-4 mr-2" />
          Export Logs
        </button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search logs..."
            className="pl-10 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="space-y-4">
        {auditLogs.map(log => (
          <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{log.user}</span>
                <Badge variant={log.status === 'Success' ? 'default' : 'destructive'}>
                  {log.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mt-1">{log.action}</p>
              <div className="flex space-x-4 mt-1">
                <span className="text-xs text-gray-400">{log.timestamp}</span>
                <span className="text-xs text-gray-400">IP: {log.ip}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);