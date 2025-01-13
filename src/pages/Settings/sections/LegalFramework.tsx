import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Plus, Scale } from 'lucide-react';

const regulations = [
  { id: 1, name: 'GDPR Compliance', status: 'Active', lastUpdated: '2024-02-15', priority: 'High' },
  { id: 2, name: 'HIPAA Requirements', status: 'Active', lastUpdated: '2024-01-20', priority: 'High' },
  { id: 3, name: 'ISO 27001', status: 'Pending', lastUpdated: '2024-03-01', priority: 'Medium' }
];

export const LegalFramework = () => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle>Legal & Regulatory Framework</CardTitle>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Framework
        </button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {regulations.map(reg => (
          <div key={reg.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Scale className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-medium">{reg.name}</h3>
                <p className="text-sm text-gray-500">Last updated: {reg.lastUpdated}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant={reg.status === 'Active' ? 'default' : 'secondary'}>
                {reg.status}
              </Badge>
              <Badge variant={reg.priority === 'High' ? 'destructive' : 'secondary'}>
                {reg.priority}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);