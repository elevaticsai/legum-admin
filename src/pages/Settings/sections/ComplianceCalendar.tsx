import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Plus } from 'lucide-react';

const complianceEvents = [
  { id: 1, title: 'Annual Security Audit', date: '2025-03-15', status: 'Upcoming', priority: 'High' },
  { id: 2, title: 'Quarterly Review', date: '2025-02-01', status: 'Pending', priority: 'Medium' },
  { id: 3, title: 'Policy Update', date: '2025-01-20', status: 'Completed', priority: 'Low' }
];

export const ComplianceCalendar = () => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle>Compliance Events</CardTitle>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {complianceEvents.map(event => (
          <div key={event.id} className="p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-gray-500">Due: {event.date}</p>
              </div>
              <div className="flex space-x-2">
                <Badge>{event.status}</Badge>
                <Badge variant={
                  event.priority === 'High' ? 'destructive' :
                  event.priority === 'Medium' ? 'default' : 'secondary'
                }>
                  {event.priority}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);