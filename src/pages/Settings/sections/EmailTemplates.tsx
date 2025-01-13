import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Mail, Plus } from 'lucide-react';

const templates = [
  { id: 1, name: 'Welcome Email', subject: 'Welcome to ComplianceHub', lastModified: '2024-03-10', status: 'Active' },
  { id: 2, name: 'Compliance Alert', subject: 'Action Required: Compliance Update', lastModified: '2024-03-05', status: 'Active' },
  { id: 3, name: 'Monthly Report', subject: 'Your Monthly Compliance Report', lastModified: '2024-02-28', status: 'Draft' }
];

export const EmailTemplates = () => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle>Email Templates</CardTitle>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" />
          New Template
        </button>
      </div>
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
            <div className="flex items-center space-x-2">
              <Badge variant={template.status === 'Active' ? 'default' : 'secondary'}>
                {template.status}
              </Badge>
              <button className="text-sm text-indigo-600 hover:text-indigo-700">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);