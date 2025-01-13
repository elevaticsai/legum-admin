import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Database, Download, Upload, RotateCcw } from 'lucide-react';

const backups = [
  { id: 1, date: '2024-03-15 03:00 AM', size: '256 MB', type: 'Automated', status: 'Success' },
  { id: 2, date: '2024-03-14 03:00 AM', size: '255 MB', type: 'Automated', status: 'Success' },
  { id: 3, date: '2024-03-13 03:00 AM', size: '254 MB', type: 'Manual', status: 'Success' }
];

export const BackupRestore = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Manual Backup</CardTitle>
        </CardHeader>
        <CardContent>
          <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Database className="w-4 h-4 mr-2" />
            Create Backup Now
          </button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Restore System</CardTitle>
        </CardHeader>
        <CardContent>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
            <RotateCcw className="w-4 h-4 mr-2" />
            Restore from Backup
          </button>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Backup History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {backups.map(backup => (
            <div key={backup.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{backup.date}</span>
                  <Badge variant={backup.status === 'Success' ? 'default' : 'destructive'}>
                    {backup.status}
                  </Badge>
                </div>
                <div className="flex space-x-4 mt-1">
                  <span className="text-sm text-gray-500">Size: {backup.size}</span>
                  <span className="text-sm text-gray-500">Type: {backup.type}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                  <Upload className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);