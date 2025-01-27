import React from 'react';
import { StatsCard } from './StatsCard';
import { EmployeeOverview } from './EmployeeOverview';
import { GenderDistribution } from './GenderDistribution';
import type { EmployeeData } from '../../types';

interface EmployeeStatsProps {
  data: EmployeeData[];
}

export const EmployeeStats: React.FC<EmployeeStatsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className='text-center p-6 bg-white rounded-lg shadow'>
        <p className='text-gray-500'>No employee data available</p>
      </div>
    );
  }

  const currentMonth = data[data.length - 1];
  const previousMonth = data.length > 1 ? data[data.length - 2] : currentMonth;

  const calculateTrend = (current: number, previous: number) => {
    if (!previous || previous === 0) return 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <StatsCard
          title='Total Employees'
          value={currentMonth['Total No of Employee']}
          trend={{
            value: calculateTrend(
              currentMonth['Total No of Employee'],
              previousMonth['Total No of Employee']
            ),
            label: 'vs last month',
          }}
          icon='users'
        />
        <StatsCard
          title='New Joiners'
          value={currentMonth['Total Joinee']}
          trend={{
            value: calculateTrend(
              currentMonth['Total Joinee'],
              previousMonth['Total Joinee']
            ),
            label: 'vs last month',
          }}
          icon='plus'
        />
        <StatsCard
          title='Resignations'
          value={currentMonth['Total Resigned']}
          trend={{
            value: calculateTrend(
              currentMonth['Total Resigned'],
              previousMonth['Total Resigned']
            ),
            label: 'vs last month',
          }}
          icon='minus'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <EmployeeOverview data={data} />
        <GenderDistribution data={data} />
      </div>
    </div>
  );
};
