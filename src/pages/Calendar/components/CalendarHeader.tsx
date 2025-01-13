import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface CalendarHeaderProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const monthYear = selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Compliance Calendar</h1>
        <p className="text-gray-500 mt-1">Manage compliance deadlines and events</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onDateChange(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-lg font-medium">{monthYear}</span>
          <button
            onClick={() => onDateChange(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </button>
      </div>
    </div>
  );
};