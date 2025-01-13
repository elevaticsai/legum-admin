import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Switch } from '../../../components/ui/switch';
import { Lock, Shield, Key } from 'lucide-react';

export const SecuritySettings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Security Settings</h2>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-indigo-600" />
              <CardTitle>Authentication</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
              <Switch />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Password Expiry (days)</label>
              <input
                type="number"
                defaultValue={90}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Minimum Password Length</label>
              <input
                type="number"
                defaultValue={12}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-indigo-600" />
              <CardTitle>Session Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Session Timeout (minutes)</label>
              <input
                type="number"
                defaultValue={30}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Maximum Login Attempts</label>
              <input
                type="number"
                defaultValue={3}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Force SSL</p>
                <p className="text-sm text-gray-500">Require HTTPS for all connections</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Key className="w-5 h-5 text-indigo-600" />
            <CardTitle>API Security</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">API Key Authentication</p>
                <p className="text-sm text-gray-500">Require API keys for all requests</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Rate Limiting</p>
                <p className="text-sm text-gray-500">Limit API requests per client</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};