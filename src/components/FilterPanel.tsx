import React from 'react';
import { Search, Filter } from 'lucide-react';
import type { Filters, ComplianceData, DataState } from '../types';

interface FilterPanelProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
  getUniqueValues: (field: keyof ComplianceData, dataSet: keyof DataState) => string[];
  activeTab: keyof DataState;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  onDateRangeChange: (range: { startDate: string; endDate: string }) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ 
  filters, 
  onFilterChange, 
  getUniqueValues, 
  activeTab,
  dateRange,
  onDateRangeChange
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100">
    <div className="p-4 border-b border-gray-100">
      <div className="flex items-center space-x-2">
        <Filter className="w-5 h-5 text-indigo-600" />
        <h3 className="font-medium text-gray-900">Filters</h3>
      </div>
    </div>
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-7">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              value={filters.search || ''}
              onChange={(e) => onFilterChange('search' as keyof Filters, e.target.value)}
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              value={dateRange.startDate}
              onChange={(e) => onDateRangeChange({ ...dateRange, startDate: e.target.value })}
              className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <input
              type="date"
              value={dateRange.endDate}
              onChange={(e) => onDateRangeChange({ ...dateRange, endDate: e.target.value })}
              className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        {Object.entries(filters)
          .filter(([key]) => key !== 'search')
          .map(([key, value]) => (
            <div key={key} className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700">
                {key.charAt(0).toUpperCase() + key.slice(1).replace('Id', ' ID')}
              </label>
              <select
                className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                value={value}
                onChange={(e) => onFilterChange(key as keyof Filters, e.target.value)}
              >
                {getUniqueValues(
                  key === 'clientId' ? 'Clients ID' :
                  key === 'clientName' ? 'Clients Name' :
                  key === 'location' ? 'Location' :
                  key === 'state' ? 'State' : 'Section',
                  activeTab
                ).map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
      </div>
    </div>
  </div>
);