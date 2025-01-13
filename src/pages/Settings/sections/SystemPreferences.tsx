import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Switch } from '../../../components/ui/switch';

const systemPreferences = {
  notifications: { email: true, push: true, sms: false },
  theme: 'light',
  language: 'English',
  timezone: 'UTC-5'
};

export const SystemPreferences = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(systemPreferences.notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <span className="capitalize">{key} Notifications</span>
            <Switch checked={value} />
          </div>
        ))}
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Display Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Theme</label>
          <select className="w-full p-2 border rounded-lg">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Language</label>
          <select className="w-full p-2 border rounded-lg">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </CardContent>
    </Card>
  </div>
);