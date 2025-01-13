import React from 'react';
import { Filter } from 'lucide-react';
import type { CalendarFilters as FilterType } from '../types';

interface CalendarFiltersProps {
  filters: FilterType;
  onFilterChange: (key: keyof FilterType, value: string) => void;
}

export const CalendarFilters: React.FC<CalendarFiltersProps> = ({
  filters,
  onFilterChange,
}) => (
  <div className="bg-white rounded-lg shadow p-4">
    <div className="grid grid-cols-4 gap-4">
      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.eventType}
        onChange={(e) => onFilterChange('eventType', e.target.value)}
      >
        <option value="">All Event Types</option>
        <option value="Audit">Audit</option>
        <option value="Deadline">Deadline</option>
        <option value="Holiday">Holiday</option>
      </select>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.client}
        onChange={(e) => onFilterChange('client', e.target.value)}
      >
        <option value="">All Clients</option>
        <option value="client1">Client 1</option>
        <option value="client2">Client 2</option>
      </select>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.status}
        onChange={(e) => onFilterChange('status', e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Upcoming">Upcoming</option>
        <option value="Completed">Completed</option>
        <option value="Overdue">Overdue</option>
      </select>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.assignedTo}
        onChange={(e) => onFilterChange('assignedTo', e.target.value)}
      >
        <option value="">All Assignees</option>
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
      </select>
    </div>
  </div>
);