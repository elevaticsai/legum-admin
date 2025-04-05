import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { AlertTriangle, CheckCircle, Clock, FileText } from 'lucide-react';

interface ComplianceOverviewProps {
  data: any;
}

export const ComplianceOverview: React.FC<ComplianceOverviewProps> = ({
  data,
}) => {
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
      case 'notices':
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
                      {key === 'notices' && (
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
