import React from 'react';
import { Search } from 'lucide-react';
import type { ClientFilters as FilterType } from '../types';

interface ClientFiltersProps {
  filters: FilterType;
  onFilterChange: (key: keyof FilterType, value: string) => void;
}

export const ClientFilters: React.FC<ClientFiltersProps> = ({ filters, onFilterChange }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-2">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients..."
            className="pl-10 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
          />
        </div>
      </div>
      
      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.industryType}
        onChange={(e) => onFilterChange('industryType', e.target.value)}
      >
        <option value="">All Industries</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="IT">IT</option>
        <option value="Healthcare">Healthcare</option>
      </select>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.complianceStatus}
        onChange={(e) => onFilterChange('complianceStatus', e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Compliant">Compliant</option>
        <option value="Non-Compliant">Non-Compliant</option>
      </select>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.clientTier}
        onChange={(e) => onFilterChange('clientTier', e.target.value)}
      >
        <option value="">All Tiers</option>
        <option value="Premium">Premium</option>
        <option value="Standard">Standard</option>
      </select>

      <select
        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        value={filters.servicePackage}
        onChange={(e) => onFilterChange('servicePackage', e.target.value)}
      >
        <option value="">All Packages</option>
        <option value="Full Service">Full Service</option>
        <option value="Periodic Check">Periodic Check</option>
      </select>
    </div>
  </div>
);