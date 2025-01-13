import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { EmployeeData } from '../../types';

interface EmployeeOverviewProps {
  data: EmployeeData[];
}

export const EmployeeOverview: React.FC<EmployeeOverviewProps> = ({ data }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-4">Employee Overview</h3>
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="Month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="Total No of Employee" 
            stroke="#4f46e5" 
            name="Total Employees"
          />
          <Line 
            type="monotone" 
            dataKey="Total Joinee" 
            stroke="#22c55e" 
            name="New Joiners"
          />
          <Line 
            type="monotone" 
            dataKey="Total Resigned" 
            stroke="#ef4444" 
            name="Resigned"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);