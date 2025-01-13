import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Switch } from '../../../components/ui/switch';
import { Palette, Sun, Moon } from 'lucide-react';

export const ThemeCustomization = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Theme & UI</h2>
          <p className="mt-1 text-sm text-gray-500">Customize the look and feel</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Theme Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sun className="w-5 h-5" />
                <span>Light Mode</span>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Moon className="w-5 h-5" />
                <span>Dark Mode</span>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Brand Colors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Primary Color</label>
              <input type="color" className="w-full h-10 rounded-md" defaultValue="#4F46E5" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Secondary Color</label>
              <input type="color" className="w-full h-10 rounded-md" defaultValue="#6B7280" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};