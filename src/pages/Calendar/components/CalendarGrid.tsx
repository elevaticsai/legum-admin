import React from 'react';
import { CheckCircle, AlertTriangle, Calendar } from 'lucide-react';
import type { CalendarEvent } from '../types';

interface CalendarGridProps {
  events: CalendarEvent[];
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onEventAction: (eventId: string, action: string) => void;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  events,
  selectedDate,
  onEventAction
}) => {
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(selectedDate);
  const firstDayOfMonth = getFirstDayOfMonth(selectedDate);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const getEventsForDay = (day: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day &&
             eventDate.getMonth() === selectedDate.getMonth() &&
             eventDate.getFullYear() === selectedDate.getFullYear();
    });
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="bg-gray-50 p-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {blanks.map(blank => (
          <div key={`blank-${blank}`} className="bg-white p-2 h-32" />
        ))}
        {days.map(day => {
          const dayEvents = getEventsForDay(day);
          return (
            <div key={day} className="bg-white p-2 h-32 hover:bg-gray-50">
              <div className="font-medium text-sm text-gray-900">{day}</div>
              <div className="mt-1 space-y-1">
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    className={`px-2 py-1 text-xs rounded-md cursor-pointer ${
                      event.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      event.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}
                    onClick={() => onEventAction(event.id, 'view')}
                  >
                    <div className="flex items-center">
                      {event.status === 'Completed' ? (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      ) : event.status === 'Overdue' ? (
                        <AlertTriangle className="w-3 h-3 mr-1" />
                      ) : (
                        <Calendar className="w-3 h-3 mr-1" />
                      )}
                      <span className="truncate">{event.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};