import { useState, useMemo } from 'react';
import type { Notification, NotificationFilters } from '../types';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filters, setFilters] = useState<NotificationFilters>({
    search: '',
    type: '',
    priority: '',
    status: '',
  });
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);

  const handleFilterChange = (key: keyof NotificationFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, isRead: !notification.isRead }
          : notification
      )
    );
  };

  const toggleNotificationSelection = (id: string) => {
    setSelectedNotifications(prev =>
      prev.includes(id)
        ? prev.filter(notificationId => notificationId !== id)
        : [...prev, id]
    );
  };

  const handleBulkAction = (action: string) => {
    switch (action) {
      case 'markRead':
        setNotifications(prev =>
          prev.map(notification =>
            selectedNotifications.includes(notification.id)
              ? { ...notification, isRead: true }
              : notification
          )
        );
        break;
      case 'delete':
        setNotifications(prev =>
          prev.filter(notification => !selectedNotifications.includes(notification.id))
        );
        break;
    }
    setSelectedNotifications([]);
  };

  const filteredNotifications = useMemo(() => {
    let result = [...notifications];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(notification =>
        notification.title.toLowerCase().includes(searchLower) ||
        notification.details.toLowerCase().includes(searchLower)
      );
    }

    if (filters.type) {
      result = result.filter(notification => notification.type === filters.type);
    }

    if (filters.priority) {
      result = result.filter(notification => notification.priority === filters.priority);
    }

    if (filters.status) {
      result = result.filter(notification =>
        filters.status === 'read' ? notification.isRead : !notification.isRead
      );
    }

    return result;
  }, [notifications, filters]);

  return {
    notifications: filteredNotifications,
    filters,
    handleFilterChange,
    handleMarkAsRead,
    handleBulkAction,
    selectedNotifications,
    toggleNotificationSelection,
  };
};