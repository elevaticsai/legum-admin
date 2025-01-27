import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Calendar,
} from 'lucide-react';
import type { DataState } from '../../types';

interface ComplianceOverviewProps {
  data: any;
}

export const ComplianceOverview: React.FC<ComplianceOverviewProps> = ({
  data,
}) => {
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
  });

  const calculateStats = () => {
    let total = 0;
    let compliant = 0;
    const stats = {
      license: { total: 0, compliant: 0 },
      abstract: { total: 0, compliant: 0 },
      register: { total: 0, compliant: 0 },
      return: { total: 0, compliant: 0 },
      remittance: { total: 0, compliant: 0 },
    };

    Object.entries(data).forEach(([key, items]) => {
      if (key !== 'employee') {
        const filteredItems = items.filter(item => {
          const itemDate =
            item['Valid till'] ||
            item['Payment Date'] ||
            item['Register generate Date'] ||
            item['Submission Date'];
          if (!itemDate) return false;
          return itemDate.startsWith(selectedMonth);
        });

        const categoryStats = filteredItems.reduce(
          (acc, item) => {
            acc.total++;
            if (item['Compliance Status'] === 'Compliance') {
              acc.compliant++;
            }
            return acc;
          },
          { total: 0, compliant: 0 }
        );

        const statKey = key === 'announcement' ? 'abstract' : key;
        if (statKey in stats) {
          stats[statKey as keyof typeof stats] = categoryStats;
          total += categoryStats.total;
          compliant += categoryStats.compliant;
        }
      }
    });

    return { total, compliant, stats };
  };

  // const { total, compliant, stats } = calculateStats();
  // const complianceRate = total > 0 ? Math.round((compliant / total) * 100) : 0;

  const donutData = [
    { name: 'Compliant', value: data?.allData?.complaint, color: '#22c55e' },
    {
      name: 'Non-Compliant',
      value: data?.allData?.nonComplaint,
      color: '#ef4444',
    },
  ];

  const getCategoryLabel = (key: string) => {
    switch (key) {
      case 'license':
        return 'License & Registration';
      case 'abstract':
        return 'Abstract & Notices';
      case 'register':
        return 'Register & Records';
      case 'return':
        return 'Return';
      case 'remittance':
        return 'Remittance';
      default:
        return key;
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-semibold'>Overall Compliance Status</h2>
        {/* <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div> */}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
        {/* Donut Chart */}
        <div className='lg:col-span-3 flex flex-col items-center justify-center'>
          <div className='h-40 w-40 sm:h-48 sm:w-48'>
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart>
                <Pie
                  data={donutData}
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey='value'
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='text-center mt-2'>
            <div className='text-2xl sm:text-3xl font-bold text-gray-900'>
              {data?.allData?.complaint}%
            </div>
            <div className='text-sm text-gray-500'>Overall Compliance</div>
          </div>
        </div>

        {/* Category Progress Bars */}
        <div className='lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
          {data?.categoryData &&
            Object.entries(data?.categoryData).map(([key, value]: any) => {
              const categoryRate: any = value?.compliancePercentage
                ? value?.compliancePercentage
                : 0;
              return (
                <div key={key} className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-2'>
                      {key === 'license' && (
                        <FileText className='w-4 h-4 text-blue-600' />
                      )}
                      {key === 'abstract' && (
                        <AlertTriangle className='w-4 h-4 text-yellow-600' />
                      )}
                      {key === 'register' && (
                        <CheckCircle className='w-4 h-4 text-green-600' />
                      )}
                      {key === 'return' && (
                        <Clock className='w-4 h-4 text-purple-600' />
                      )}
                      {key === 'remittance' && (
                        <FileText className='w-4 h-4 text-indigo-600' />
                      )}
                      <span className='text-sm font-medium'>
                        {getCategoryLabel(key)}
                      </span>
                    </div>
                    <span className='text-sm font-medium'>{categoryRate}%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className={`h-2 rounded-full ${
                        categoryRate >= 90
                          ? 'bg-green-600'
                          : categoryRate >= 70
                            ? 'bg-yellow-600'
                            : 'bg-red-600'
                      }`}
                      style={{ width: `${categoryRate}%` }}
                    />
                  </div>
                  <div className='flex justify-between text-xs text-gray-500'>
                    <span>{value?.complianceCategoryCount} Compliant</span>
                    <span>
                      {value?.nonComplianceCategoryCount} Non-Compliant
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
