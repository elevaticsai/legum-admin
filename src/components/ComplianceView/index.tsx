import React from 'react';
import { FilterPanel } from '../FilterPanel';
import { DataTable } from '../DataTable';
import { CompliancePieChart } from '../CompliancePieChart';
import { EmployeeStats } from '../EmployeeStats';
import { getTableColumns } from '../../utils/tableColumns';
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import type { ComplianceData, EmployeeData, Filters, DataState } from '../../types';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  trend?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, trend }) => (
  <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold mt-2">{value.toLocaleString()}</p>
        {trend !== undefined && (
          <p className={`text-sm font-medium mt-1 ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </p>
        )}
      </div>
      <div className={`p-3 rounded-xl ${color}`}>
        {icon}
      </div>
    </div>
  </div>
);

export const ComplianceView: React.FC<ComplianceViewProps> = ({
  data,
  allData,
  filters,
  onFilterChange,
  getUniqueValues,
  activeTab,
}) => {
  if (activeTab === 'employee') {
    return (
      <div className="p-6 space-y-6">
        <FilterPanel 
          filters={filters}
          onFilterChange={onFilterChange}
          getUniqueValues={getUniqueValues}
          activeTab={activeTab}
        />
        <EmployeeStats data={data as EmployeeData[]} />
      </div>
    );
  }

  const columns = getTableColumns(activeTab);
  const totalRecords = data.length;
  const compliantRecords = data.filter(item => item['Compliance Status'] === 'Compliance').length;
  const nonCompliantRecords = totalRecords - compliantRecords;

  const complianceData = [
    { name: 'Compliant', value: compliantRecords },
    { name: 'Non-Compliant', value: nonCompliantRecords }
  ];

  return (
    <div className="p-6 space-y-6">
      <FilterPanel 
        filters={filters}
        onFilterChange={onFilterChange}
        getUniqueValues={getUniqueValues}
        activeTab={activeTab}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard
          title="Total Records"
          value={totalRecords}
          icon={<FileText className="w-6 h-6 text-blue-600" />}
          color="bg-blue-50"
        />
        <StatCard
          title="Compliant"
          value={compliantRecords}
          icon={<CheckCircle className="w-6 h-6 text-green-600" />}
          color="bg-green-50"
          trend={totalRecords > 0 ? Math.round((compliantRecords / totalRecords) * 100) : 0}
        />
        <StatCard
          title="Non-Compliant"
          value={nonCompliantRecords}
          icon={<AlertTriangle className="w-6 h-6 text-red-600" />}
          color="bg-red-50"
          trend={totalRecords > 0 ? -Math.round((nonCompliantRecords / totalRecords) * 100) : 0}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Compliance Records</h2>
            <DataTable data={data as ComplianceData[]} columns={columns} />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Status Distribution</h2>
          <CompliancePieChart data={complianceData} />
        </div>
      </div>
    </div>
  );
};