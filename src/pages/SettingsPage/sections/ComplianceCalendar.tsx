import React from 'react';
import { Calendar as CalendarIcon, AlertCircle } from 'lucide-react';
import { dummyComplianceEvents } from '../../../data/settingsDummyData';

export const ComplianceCalendar = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Compliance Calendar</h2>
          <p className="mt-1 text-sm text-gray-500">Manage compliance deadlines and events</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <CalendarIcon className="w-4 h-4 mr-2" />
          Add Event
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {dummyComplianceEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    event.priority === 'High' ? 'bg-red-100' :
                    event.priority === 'Medium' ? 'bg-yellow-100' : 'bg-green-100'
                  }`}>
                    <AlertCircle className={`w-5 h-5 ${
                      event.priority === 'High' ? 'text-red-600' :
                      event.priority === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  event.type === 'Review' ? 'bg-purple-100 text-purple-800' :
                  event.type === 'Deadline' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};