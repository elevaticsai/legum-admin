import { useState, useMemo } from 'react';
import type { CalendarEvent, CalendarFilters } from '../types';

export const useCalendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filters, setFilters] = useState<CalendarFilters>({
    eventType: '',
    client: '',
    status: '',
    assignedTo: '',
  });

  const handleFilterChange = (key: keyof CalendarFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleEventAction = (eventId: string, action: string) => {
    switch (action) {
      case 'complete':
        setEvents(prev =>
          prev.map(event =>
            event.id === eventId
              ? { ...event, status: 'Completed' }
              : event
          )
        );
        break;
      case 'delete':
        setEvents(prev => prev.filter(event => event.id !== eventId));
        break;
    }
  };

  const filteredEvents = useMemo(() => {
    let result = [...events];

    if (filters.eventType) {
      result = result.filter(event => event.eventType === filters.eventType);
    }

    if (filters.client) {
      result = result.filter(event => event.client === filters.client);
    }

    if (filters.status) {
      result = result.filter(event => event.status === filters.status);
    }

    if (filters.assignedTo) {
      result = result.filter(event => event.assignedTo === filters.assignedTo);
    }

    return result;
  }, [events, filters]);

  return {
    events: filteredEvents,
    filters,
    selectedDate,
    handleFilterChange,
    handleDateChange,
    handleEventAction,
  };
};