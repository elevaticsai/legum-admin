import { useState, useEffect } from 'react';
import { storageService } from '../services/storage';
import type { ComplianceData, Filters, FileState, DataState } from '../types';

export const useDataManagement = () => {
  const [files, setFiles] = useState<FileState>({
    license: null,
    announcement: null,
    register: null,
    return: null,
    employee: null,
    remittance: null
  });

  const [data, setData] = useState<DataState>({
    license: [],
    announcement: [],
    register: [],
    return: [],
    employee: [],
    remittance: []
  });

  const [filteredData, setFilteredData] = useState<DataState>({
    license: [],
    announcement: [],
    register: [],
    return: [],
    employee: [],
    remittance: []
  });

  const [filters, setFilters] = useState<Filters>({
    clientId: 'All',
    clientName: 'All',
    location: 'All',
    state: 'All',
    section: 'All'
  });

  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });

  // Load saved data on initial mount
  useEffect(() => {
    const savedData = storageService.getData();
    if (savedData) {
      setData(savedData);
      setFilteredData(savedData);
    }
  }, []);

  const handleFileUpload = (fileType: keyof FileState, file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const csvData = event.target?.result as string;
        const parsedData = parseCSV(csvData);
        
        const newData = { ...data, [fileType]: parsedData };
        setData(newData);
        setFilteredData(newData);
        
        const newFiles = { ...files, [fileType]: file };
        setFiles(newFiles);
        
        storageService.saveData(newData);
        storageService.saveFiles(newFiles);
      };
      reader.readAsText(file);
    }
  };

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleDateRangeChange = (range: { startDate: string; endDate: string }) => {
    setDateRange(range);
  };

  const getUniqueValues = (field: keyof ComplianceData, dataSet: string): string[] => {
    if (!data[dataSet as keyof DataState]) return ['All'];
    const values = [...new Set(data[dataSet as keyof DataState].map(item => item[field]))];
    return ['All', ...values];
  };

  const isDateInRange = (dateStr: string) => {
    if (!dateRange.startDate || !dateRange.endDate) return true;
    
    const date = new Date(dateStr);
    const start = new Date(dateRange.startDate);
    const end = new Date(dateRange.endDate);
    
    return date >= start && date <= end;
  };

  useEffect(() => {
    Object.keys(data).forEach(tab => {
      let filtered = data[tab as keyof DataState];

      // Apply date range filter
      if (dateRange.startDate && dateRange.endDate) {
        filtered = filtered.filter(item => {
          const dateField = tab === 'employee' ? 'Month' :
                          tab === 'remittance' ? 'Payment Date' :
                          tab === 'register' ? 'Register generate Date' :
                          tab === 'return' ? 'Submission Date' : 'Valid till';
          
          return isDateInRange(item[dateField]);
        });
      }

      // Apply other filters
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== 'All') {
          const field = key === 'clientId' ? 'Clients ID' :
                       key === 'clientName' ? 'Clients Name' :
                       key === 'location' ? 'Location' :
                       key === 'state' ? 'State' :
                       'Section';
          filtered = filtered.filter(item => item[field] === value);
        }
      });

      setFilteredData(prev => ({ ...prev, [tab]: filtered }));
    });
  }, [filters, data, dateRange]);

  return {
    files,
    data,
    filteredData,
    filters,
    dateRange,
    handleFileUpload,
    handleFilterChange,
    handleDateRangeChange,
    getUniqueValues
  };
};

const parseCSV = (csvData: string): any[] => {
  const lines = csvData.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  return lines.slice(1)
    .filter(line => line.trim())
    .map(line => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index]?.trim() || '';
        return obj;
      }, {} as any);
    });
};