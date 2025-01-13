import React from 'react';
import { ClientHeader } from './components/ClientHeader';
import { ClientFilters } from './components/ClientFilters';
import { ClientTable } from './components/ClientTable';
import { ClientOverview } from './components/ClientOverview';
import { useClients } from './hooks/useClients';

export const ClientPage = () => {
  const { 
    clients,
    filters,
    handleFilterChange,
    handleSort,
    sortConfig,
    selectedClients,
    toggleClientSelection,
    handleBulkAction
  } = useClients();

  return (
    <div className="p-6 space-y-6">
      <ClientHeader 
        selectedCount={selectedClients.length}
        onBulkAction={handleBulkAction}
      />
      
      <ClientOverview data={clients} />
      
      <ClientFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      
      <ClientTable
        clients={clients}
        sortConfig={sortConfig}
        onSort={handleSort}
        selectedClients={selectedClients}
        onToggleSelect={toggleClientSelection}
      />
    </div>
  );
};