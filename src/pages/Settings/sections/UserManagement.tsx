import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { UserPlus } from 'lucide-react';

const users = [
  { id: 1, name: 'John Smith', email: 'john.smith@company.com', role: 'Admin', status: 'Active', lastActive: '2 hours ago' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah.j@company.com', role: 'Manager', status: 'Active', lastActive: '1 day ago' },
  { id: 3, name: 'Mike Wilson', email: 'mike.w@company.com', role: 'User', status: 'Inactive', lastActive: '5 days ago' }
];

export const UserManagement = () => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle>User Directory</CardTitle>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <UserPlus className="w-4 h-4 mr-2" />
          Add User
        </button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                {user.status}
              </Badge>
              <Badge variant="outline">{user.role}</Badge>
              <span className="text-sm text-gray-500">Last active: {user.lastActive}</span>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);