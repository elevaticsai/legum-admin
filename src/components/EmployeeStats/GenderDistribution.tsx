import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { EmployeeData } from '../../types';

interface GenderDistributionProps {
  data: EmployeeData[];
}

export const GenderDistribution: React.FC<GenderDistributionProps> = ({ data }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-4">Gender Distribution</h3>
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
            dataKey="Male" 
            stroke="#3b82f6" 
            name="Male"
          />
          <Line 
            type="monotone" 
            dataKey="Female" 
            stroke="#ec4899" 
            name="Female"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);