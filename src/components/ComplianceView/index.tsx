import React from 'react';
import { FilterPanel } from '../FilterPanel';
import { DataTable } from '../DataTable';
import { CompliancePieChart } from '../CompliancePieChart';
import { EmployeeStats } from '../EmployeeStats';
import { getTableColumns } from '../../utils/tableColumns';
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import type {
  ComplianceData,
  EmployeeData,
  Filters,
  DataState,
} from '../../types';
import moment from 'moment';

import CsvDownloadButton from 'react-json-to-csv';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  trend?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  color,
  trend,
}) => (
  <div
    className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200`}
  >
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-sm font-medium text-gray-600'>{title}</p>
        <p className='text-2xl font-bold mt-2'>{value.toLocaleString()}</p>
        {trend !== undefined && (
          <p
            className={`text-sm font-medium mt-1 ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}
          >
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </p>
        )}
      </div>
      <div className={`p-3 rounded-xl ${color}`}>{icon}</div>
    </div>
  </div>
);

interface ComplianceViewProps {
  data: any[];
  allData: DataState;
  filters: Filters;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  onFilterChange: (key: keyof Filters, value: string) => void;
  onDateRangeChange: (range: { startDate: string; endDate: string }) => void;
  getUniqueValues: (field: keyof ComplianceData, dataSet: string) => string[];
  activeTab: string;
  activeCompliance?: any;
  handleSubmitForm?: any;
}

export const ComplianceView: React.FC<ComplianceViewProps> = ({
  data,
  allData,
  filters,
  dateRange,
  onFilterChange,
  onDateRangeChange,
  getUniqueValues,
  activeTab,
  activeCompliance,
  handleSubmitForm,
}) => {
  if (activeTab === 'employee') {
    return (
      <div className='p-6 space-y-6'>
        <FilterPanel
          filters={filters}
          onFilterChange={onFilterChange}
          getUniqueValues={getUniqueValues}
          activeTab={activeTab}
          dateRange={dateRange}
          onDateRangeChange={onDateRangeChange}
        />
        <EmployeeStats data={data as EmployeeData[]} />
      </div>
    );
  }

  const columns = getTableColumns(activeTab);
  const totalRecords = data.length;
  // const compliantRecords = data.filter(
  //   item => item['Compliance Status'] === 'Compliance'
  // ).length;
  // const nonCompliantRecords = totalRecords - compliantRecords;

  const complianceData = [
    {
      name: 'Compliant',
      value: activeCompliance?.compliancePercentage
        ? activeCompliance?.compliancePercentage
        : 0,
    },
    {
      name: 'Non-Compliant',
      value: activeCompliance?.nonCompliancePercentage
        ? activeCompliance?.nonCompliancePercentage
        : 0,
    },
  ];

  const getMonth: any = moment(filters?.date + '-01', 'YYYY-MM-DD').format(
    'MMMM'
  );
  const getYear: any = moment(filters?.date + '-01', 'YYYY-MM-DD').format(
    'YYYY'
  );

  return (
    <div className='p-6 space-y-6'>
      {/* <FilterPanel 
        filters={filters}
        onFilterChange={onFilterChange}
        getUniqueValues={getUniqueValues}
        activeTab={activeTab}
        dateRange={dateRange}
        onDateRangeChange={onDateRangeChange}
      /> */}

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        <StatCard
          title='Total Records'
          value={
            activeCompliance?.categoryCount
              ? activeCompliance?.categoryCount
              : 0
          }
          icon={<FileText className='w-6 h-6 text-blue-600' />}
          color='bg-blue-50'
        />
        <StatCard
          title='Compliant'
          value={
            activeCompliance?.complianceCategoryCount
              ? activeCompliance?.complianceCategoryCount
              : 0
          }
          icon={<CheckCircle className='w-6 h-6 text-green-600' />}
          color='bg-green-50'
          // trend={
          //   totalRecords > 0
          //     ? Math.round((compliantRecords / totalRecords) * 100)
          //     : 0
          // }
        />
        <StatCard
          title='Non-Compliant'
          value={
            activeCompliance?.categoryCount
              ? activeCompliance?.categoryCount -
                activeCompliance?.complianceCategoryCount
              : 0
          }
          icon={<AlertTriangle className='w-6 h-6 text-red-600' />}
          color='bg-red-50'
          // trend={
          //   totalRecords > 0
          //     ? -Math.round((nonCompliantRecords / totalRecords) * 100)
          //     : 0
          // }
        />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
        <div className='lg:col-span-3'>
          <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-lg font-semibold text-gray-900'>
                Compliance Records
              </h2>
              <div className='flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'>
                <CsvDownloadButton
                  data={data}
                  filename={`${activeTab}-${getMonth}-${getYear}.csv`}
                />
              </div>
            </div>
            <DataTable
              data={data as any[]}
              columns={columns}
              handleSubmit={handleSubmitForm}
            />
          </div>
        </div>
        <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>
            Compliance Status Distribution
          </h2>
          <CompliancePieChart data={complianceData} />
        </div>
      </div>
    </div>
  );
};
