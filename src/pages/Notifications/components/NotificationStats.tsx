import React from 'react';
import { Bell, AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import type { Notification } from '../types';

interface NotificationStatsProps {
  data: Notification[];
}

export const NotificationStats: React.FC<NotificationStatsProps> = ({ data }) => {
  const stats = [
    {
      title: 'Total Notifications',
      value: data.length,
      icon: Bell,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      title: 'High Priority',
      value: data.filter(n => n.priority === 'High').length,
      icon: AlertTriangle,
      color: 'text-red-600 bg-red-100'
    },
    {
      title: 'Pending Action',
      value: data.filter(n => !n.isRead).length,
      icon: Clock,
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      title: 'Resolved',
      value: data.filter(n => n.isRead).length,
      icon: CheckCircle,
      color: 'text-green-600 bg-green-100'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-full ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};