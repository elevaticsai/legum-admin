import React from 'react';
import { CheckCircle, AlertTriangle, Calendar } from 'lucide-react';
import type { CalendarEvent } from '../types';

interface UpcomingEventsProps {
  events: CalendarEvent[];
  selectedDate: Date;
  onEventAction: (eventId: string, action: string) => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  events,
  selectedDate,
  onEventAction
}) => {
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= selectedDate)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
      <div className="space-y-4">
        {upcomingEvents.map(event => (
          <div
            key={event.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => onEventAction(event.id, 'view')}
          >
            <div className={`p-2 rounded-full ${
              event.status === 'Completed' ? 'bg-green-100' :
              event.status === 'Overdue' ? 'bg-red-100' :
              'bg-blue-100'
            }`}>
              {event.status === 'Completed' ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : event.status === 'Overdue' ? (
                <AlertTriangle className="w-4 h-4 text-red-600" />
              ) : (
                <Calendar className="w-4 h-4 text-blue-600" />
              )}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(event.date).toLocaleDateString()}
              </p>
              {event.client && (
                <p className="text-xs text-gray-500">Client: {event.client}</p>
              )}
              {event.assignedTo && (
                <p className="text-xs text-gray-500">Assigned: {event.assignedTo}</p>
              )}
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${
              event.priority === 'High' ? 'bg-red-100 text-red-800' :
              event.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {event.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};