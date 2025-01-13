import React from 'react';
import { NotificationHeader } from './components/NotificationHeader';
import { NotificationFilters } from './components/NotificationFilters';
import { NotificationList } from './components/NotificationList';
import { NotificationStats } from './components/NotificationStats';
import { useNotifications } from './hooks/useNotifications';

export const NotificationsPage = () => {
  const {
    notifications,
    filters,
    handleFilterChange,
    handleMarkAsRead,
    handleBulkAction,
    selectedNotifications,
    toggleNotificationSelection,
  } = useNotifications();

  return (
    <div className="p-6 space-y-6">
      <NotificationHeader 
        selectedCount={selectedNotifications.length}
        onBulkAction={handleBulkAction}
      />
      
      <NotificationStats data={notifications} />
      
      <NotificationFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      
      <NotificationList
        notifications={notifications}
        selectedNotifications={selectedNotifications}
        onToggleSelect={toggleNotificationSelection}
        onMarkAsRead={handleMarkAsRead}
      />
    </div>
  );
};