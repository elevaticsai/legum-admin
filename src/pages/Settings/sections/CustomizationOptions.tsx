import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Switch } from '../../../components/ui/switch';
import { Sliders, Plus } from 'lucide-react';

export const CustomizationOptions = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Customization Options</h2>
          <p className="mt-1 text-sm text-gray-500">Customize fields and forms</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Custom Field
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Form Fields</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Client Reference Number</h3>
                <p className="text-sm text-gray-500">Custom identifier for clients</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Industry Classification</h3>
                <p className="text-sm text-gray-500">Custom industry categories</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Compliance Tags</h3>
                <p className="text-sm text-gray-500">Custom compliance categories</p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};