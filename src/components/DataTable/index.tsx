import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { ComplianceData } from '../../types';

interface DataTableProps {
  data: ComplianceData[];
  columns: string[];
}

export const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col}
                onClick={() => handleSort(col)}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center space-x-1">
                  <span>{col}</span>
                  <div className="flex flex-col">
                    <ChevronUp className={`w-3 h-3 ${
                      sortColumn === col && sortDirection === 'asc' ? 'text-indigo-600' : 'text-gray-400'
                    }`} />
                    <ChevronDown className={`w-3 h-3 -mt-1 ${
                      sortColumn === col && sortDirection === 'desc' ? 'text-indigo-600' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              {columns.map(col => (
                <td key={col} className="px-4 py-3 whitespace-nowrap">
                  {col === 'Compliance Status' ? (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      row[col] === 'Compliance' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {row[col]}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-900">{row[col] || '-'}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};