import React from 'react';
import { Users, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import type { Client } from '../types';

interface ClientOverviewProps {
  data: Client[];
}

export const ClientOverview: React.FC<ClientOverviewProps> = ({ data }) => {
  const stats = [
    {
      title: 'Total Clients',
      value: data.length,
      icon: Users,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      title: 'Compliant',
      value: data.filter(client => client.complianceStatus === 'Compliant').length,
      icon: CheckCircle,
      color: 'text-green-600 bg-green-100'
    },
    {
      title: 'Non-Compliant',
      value: data.filter(client => client.complianceStatus === 'Non-Compliant').length,
      icon: AlertTriangle,
      color: 'text-red-600 bg-red-100'
    },
    {
      title: 'Pending Review',
      value: data.filter(client => 
        new Date(client.lastComplianceCheck).getTime() < new Date().getTime() - (30 * 24 * 60 * 60 * 1000)
      ).length,
      icon: Clock,
      color: 'text-yellow-600 bg-yellow-100'
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