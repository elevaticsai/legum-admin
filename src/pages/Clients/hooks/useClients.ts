import { useState, useMemo } from 'react';
import type { Client, ClientFilters, SortConfig } from '../types';

export const useClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [filters, setFilters] = useState<ClientFilters>({
    search: '',
    industryType: '',
    complianceStatus: '',
    clientTier: '',
    servicePackage: '',
  });
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: '',
    direction: null,
  });
  const [selectedClients, setSelectedClients] = useState<string[]>([]);

  const handleFilterChange = (key: keyof ClientFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: 
        current.key === key && current.direction === 'asc' ? 'desc' :
        current.key === key && current.direction === 'desc' ? null : 'asc',
    }));
  };

  const toggleClientSelection = (clientId: string) => {
    setSelectedClients(prev => 
      prev.includes(clientId)
        ? prev.filter(id => id !== clientId)
        : [...prev, clientId]
    );
  };

  const handleBulkAction = (action: string) => {
    switch (action) {
      case 'markCompliant':
        setClients(prev => prev.map(client => 
          selectedClients.includes(client.id)
            ? { ...client, complianceStatus: 'Compliant' }
            : client
        ));
        break;
      case 'delete':
        setClients(prev => prev.filter(client => !selectedClients.includes(client.id)));
        break;
      case 'export':
        // Implement export functionality
        console.log('Exporting selected clients:', selectedClients);
        break;
    }
    setSelectedClients([]);
  };

  const filteredClients = useMemo(() => {
    let result = [...clients];

    // Apply filters
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(client => 
        client.name.toLowerCase().includes(searchLower) ||
        client.id.toLowerCase().includes(searchLower)
      );
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (value && key !== 'search') {
        result = result.filter(client => client[key as keyof Client] === value);
      }
    });

    // Apply sorting
    if (sortConfig.key && sortConfig.direction) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof Client];
        const bValue = b[sortConfig.key as keyof Client];
        
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [clients, filters, sortConfig]);

  return {
    clients: filteredClients,
    filters,
    handleFilterChange,
    handleSort,
    sortConfig,
    selectedClients,
    toggleClientSelection,
    handleBulkAction,
  };
};