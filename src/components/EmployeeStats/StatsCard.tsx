import React from 'react';
import { Users, UserPlus, UserMinus } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  trend: {
    value: number;
    label: string;
  };
  icon: 'users' | 'plus' | 'minus';
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, trend, icon }) => {
  const Icon = icon === 'users' ? Users : icon === 'plus' ? UserPlus : UserMinus;
  const trendColor = trend.value >= 0 ? 'text-green-600' : 'text-red-600';
  const roundedTrendValue = Math.round(Math.abs(trend.value));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          <p className={`text-sm font-medium ${trendColor} mt-1`}>
            {trend.value >= 0 ? '↑' : '↓'} {roundedTrendValue}% {trend.label}
          </p>
        </div>
        <div className="p-3 bg-indigo-50 rounded-lg">
          <Icon className="w-8 h-8 text-indigo-600" />
        </div>
      </div>
    </div>
  );
};