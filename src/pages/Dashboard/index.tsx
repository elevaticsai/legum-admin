import React, { useState } from 'react';
import { DashboardTabs } from '../../components/dashboard/DashboardTabs';
import { ComplianceView } from '../../components/ComplianceView';
import { ComplianceOverview } from '../../components/ComplianceOverview';
import { useDataManagement } from '../../hooks/useDataManagement';

export const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('license');
  const { 
    filteredData, 
    data,
    filters, 
    dateRange,
    handleFilterChange,
    handleDateRangeChange,
    getUniqueValues 
  } = useDataManagement();

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white border-b">
        <div className="px-4 sm:px-6">
          <h1 className="text-xl sm:text-2xl font-bold py-4 sm:py-6">Compliance Dashboard</h1>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <ComplianceOverview data={filteredData} />
      </div>
      <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 overflow-auto">
        <ComplianceView
          data={filteredData[activeTab as keyof typeof filteredData] || []}
          allData={data}
          filters={filters}
          dateRange={dateRange}
          onFilterChange={handleFilterChange}
          onDateRangeChange={handleDateRangeChange}
          getUniqueValues={getUniqueValues}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
};