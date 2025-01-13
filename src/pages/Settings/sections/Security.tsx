import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Switch } from '../../../components/ui/switch';
import { Lock } from 'lucide-react';

const securitySettings = {
  twoFactor: true,
  passwordExpiry: 90,
  minPasswordLength: 12,
  loginAttempts: 3,
  sessionTimeout: 30
};

export const Security = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card>
      <CardHeader>
        <CardTitle>Authentication Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4" />
            <span>Two-Factor Authentication</span>
          </div>
          <Switch checked={securitySettings.twoFactor} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Password Expiry (days)</label>
          <input
            type="number"
            value={securitySettings.passwordExpiry}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Minimum Password Length</label>
          <input
            type="number"
            value={securitySettings.minPasswordLength}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Session Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Maximum Login Attempts</label>
          <input
            type="number"
            value={securitySettings.loginAttempts}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Session Timeout (minutes)</label>
          <input
            type="number"
            value={securitySettings.sessionTimeout}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </CardContent>
    </Card>
  </div>
);