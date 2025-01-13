import React from 'react';
import { CalendarHeader } from './components/CalendarHeader';
import { CalendarFilters } from './components/CalendarFilters';
import { CalendarGrid } from './components/CalendarGrid';
import { UpcomingEvents } from './components/UpcomingEvents';
import { useCalendar } from './hooks/useCalendar';

export const CalendarPage = () => {
  const {
    events,
    filters,
    selectedDate,
    handleFilterChange,
    handleDateChange,
    handleEventAction
  } = useCalendar();

  return (
    <div className="p-6 space-y-6">
      <CalendarHeader 
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
      
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <CalendarFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          <div className="mt-6">
            <CalendarGrid 
              events={events}
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
              onEventAction={handleEventAction}
            />
          </div>
        </div>
        
        <div>
          <UpcomingEvents 
            events={events}
            selectedDate={selectedDate}
            onEventAction={handleEventAction}
          />
        </div>
      </div>
    </div>
  );
};