import React from 'react';
import { Search } from 'lucide-react';
import type { NotificationFilters as FilterType } from '../types';

interface NotificationFiltersProps {
  filters: FilterType;
  onFilterChange: (key: keyof FilterType, value: string) => void;
}

export const NotificationFilters: React.FC<NotificationFiltersProps> = ({
  filters,
  onFilterChange,
}) => (
  <div className="bg-white rounded-lg shadow p-4">
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-2">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search notifications..."
            className="pl-10 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
          />
        </div>
      </div>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.type}
        onChange={(e) => onFilterChange('type', e.target.value)}
      >
        <option value="">All Types</option>
        <option value="Deadline">Deadline Reminder</option>
        <option value="Compliance">Compliance Issue</option>
        <option value="Audit">Audit Alert</option>
      </select>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.priority}
        onChange={(e) => onFilterChange('priority', e.target.value)}
      >
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.status}
        onChange={(e) => onFilterChange('status', e.target.value)}
      >
        <option value="">All Status</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
    </div>
  </div>
);