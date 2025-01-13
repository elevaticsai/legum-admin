import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Mail, Plus, Edit2 } from 'lucide-react';

const templates = [
  { id: 1, name: 'Welcome Email', subject: 'Welcome to ComplianceHub', lastModified: '2024-03-10', status: 'Active' },
  { id: 2, name: 'Compliance Alert', subject: 'Action Required: Compliance Update', lastModified: '2024-03-05', status: 'Active' },
  { id: 3, name: 'Monthly Report', subject: 'Your Monthly Compliance Report', lastModified: '2024-02-28', status: 'Draft' }
];

export const EmailNotifications = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Email Notifications</h2>
          <p className="mt-1 text-sm text-gray-500">Manage email templates and settings</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" />
          New Template
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Email Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {templates.map(template => (
              <div key={template.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{template.name}</h3>
                    <p className="text-sm text-gray-500">{template.subject}</p>
                    <p className="text-xs text-gray-400 mt-1">Modified: {template.lastModified}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={template.status === 'Active' ? 'default' : 'secondary'}>
                    {template.status}
                  </Badge>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};