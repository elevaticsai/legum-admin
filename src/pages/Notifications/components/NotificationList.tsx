import React from 'react';
import { Badge } from '../../../components/ui/badge';
import { AlertTriangle, CheckCircle, Clock, MoreVertical } from 'lucide-react';
import type { Notification } from '../types';

interface NotificationListProps {
  notifications: Notification[];
  selectedNotifications: string[];
  onToggleSelect: (id: string) => void;
  onMarkAsRead: (id: string) => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  selectedNotifications,
  onToggleSelect,
  onMarkAsRead,
}) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <div className="divide-y divide-gray-200">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 hover:bg-gray-50 ${!notification.isRead ? 'bg-blue-50' : ''}`}
        >
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={selectedNotifications.includes(notification.id)}
              onChange={() => onToggleSelect(notification.id)}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div className={`p-2 rounded-full ${
              notification.priority === 'High' ? 'bg-red-100' :
              notification.priority === 'Medium' ? 'bg-yellow-100' : 'bg-blue-100'
            }`}>
              {notification.priority === 'High' ? (
                <AlertTriangle className="w-5 h-5 text-red-600" />
              ) : notification.priority === 'Medium' ? (
                <Clock className="w-5 h-5 text-yellow-600" />
              ) : (
                <CheckCircle className="w-5 h-5 text-blue-600" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  {notification.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <Badge variant={notification.isRead ? 'secondary' : 'default'}>
                    {notification.isRead ? 'Read' : 'Unread'}
                  </Badge>
                  <button
                    onClick={() => onMarkAsRead(notification.id)}
                    className="text-sm text-indigo-600 hover:text-indigo-700"
                  >
                    {notification.isRead ? 'Mark as Unread' : 'Mark as Read'}
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-600">{notification.details}</p>
              <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                <span>Client: {notification.clientName}</span>
                <span>Due: {notification.deadline}</span>
                <span>Assigned: {notification.assignedPerson}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);