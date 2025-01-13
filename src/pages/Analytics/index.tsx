import React from 'react';
import { BarChart2, TrendingUp, Users, AlertTriangle } from 'lucide-react';

export const AnalyticsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-500">Monitor compliance metrics and trends</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Total Clients"
          value="156"
          trend="+12%"
          icon={<Users className="w-6 h-6" />}
          color="bg-blue-500"
        />
        <StatCard
          title="Compliance Rate"
          value="94.2%"
          trend="+5.1%"
          icon={<TrendingUp className="w-6 h-6" />}
          color="bg-green-500"
        />
        <StatCard
          title="Open Issues"
          value="23"
          trend="-8%"
          icon={<AlertTriangle className="w-6 h-6" />}
          color="bg-red-500"
        />
        <StatCard
          title="Active Audits"
          value="12"
          trend="+2"
          icon={<BarChart2 className="w-6 h-6" />}
          color="bg-purple-500"
        />
      </div>

      {/* Add more analytics components here */}
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, icon, color }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
        <p className="text-sm font-medium text-green-600 mt-1">{trend}</p>
      </div>
      <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
        {React.cloneElement(icon as React.ReactElement, {
          className: `w-6 h-6 ${color.replace('bg-', 'text-')}`
        })}
      </div>
    </div>
  </div>
);