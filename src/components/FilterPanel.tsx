import React from 'react';
import { Search, Filter } from 'lucide-react';
import type { Filters, ComplianceData, DataState } from '../types';

import AsyncSelect from 'react-select/async';

interface FilterPanelProps {
  filters: any;
  onFilterChange: (key: any, value: string) => void;
  getUniqueValues: (
    field: keyof ComplianceData,
    dataSet: keyof DataState
  ) => string[];
  activeTab: any;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  onDateRangeChange: (range: { startDate: string; endDate: string }) => void;
  options?: any;
  handleSubmit: any;
  loadFromOptions?: any;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  getUniqueValues,
  activeTab,
  dateRange,
  onDateRangeChange,
  options,
  handleSubmit,
  loadFromOptions,
}) => (
  <div className='bg-white rounded-xl shadow-sm border border-gray-100'>
    <div className='p-4 border-b border-gray-100'>
      <div className='flex items-center space-x-2'>
        <Filter className='w-5 h-5 text-indigo-600' />
        <h3 className='font-medium text-gray-900'>Filters</h3>
      </div>
    </div>
    <div className='p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {/* <div className='col-span-1 md:col-span-2 lg:col-span-7'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
            <input
              type='text'
              placeholder='Search...'
              className='pl-10 w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500'
              value={filters.search || ''}
              onChange={e =>
                onFilterChange('search' as keyof Filters, e.target.value)
              }
            />
          </div>
        </div> */}

        <div className='space-y-1.5 lg:col-span-1'>
          <label className='block text-sm font-medium text-gray-700'>
            Client Name
          </label>
          <AsyncSelect
            loadOptions={loadFromOptions}
            value={filters.clientName || ''}
            onChange={event => onFilterChange('clientName', event)}
            placeholder={'Enter Client Name'}
            noOptionsMessage={() => {
              return 'Type to search client';
            }}
          />
        </div>

        {Object.entries(filters)
          .filter(
            ([key]) => key !== 'search' && key != 'date' && key != 'clientName'
          )
          .map(([key, value]) => (
            <div key={key} className='space-y-1.5 lg:col-span-1'>
              <label className='block text-sm font-medium text-gray-700'>
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace('Id', ' ID')}
              </label>
              <div className='w-full max-w-sm min-w-[200px]'>
                <div className='relative'>
                  <select
                    className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-grey-300 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer'
                    value={value}
                    onChange={e => onFilterChange(key, e.target.value)}
                  >
                    <option disabled value=''>
                      Select{' '}
                      {key.charAt(0).toUpperCase() +
                        key.slice(1).replace('Id', ' ID')}
                    </option>
                    {options && options[key] ? (
                      options[key].map((opt: any) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))
                    ) : (
                      <option key={'all'} value={'all'}>
                        All
                      </option>
                    )}
                  </select>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.2'
                    stroke='currentColor'
                    className='h-5 w-5 ml-1 absolute top-2 right-2.5 text-slate-700'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}

        <div className='lg:col-span-1'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Date Range
          </label>
          <div className=''>
            <input
              type='month'
              value={filters.date}
              onChange={e => {
                onFilterChange('date', e.target.value);
              }}
              className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-grey-300 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer'
            />
            {/* <input
              type='date'
              value={dateRange.endDate}
              onChange={e =>
                onDateRangeChange({ ...dateRange, endDate: e.target.value })
              }
              className='w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500'
            /> */}
          </div>
        </div>
        <div className='lg:col-span-1 mt-0 lg:mt-6'>
          <button
            onClick={handleSubmit}
            role='button'
            className='flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
);
