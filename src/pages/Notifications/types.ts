export interface Notification {
  id: string;
  title: string;
  details: string;
  type: 'Deadline' | 'Compliance' | 'Audit';
  priority: 'High' | 'Medium' | 'Low';
  isRead: boolean;
  dateSent: string;
  deadline: string;
  clientName: string;
  assignedPerson: string;
  actionTaken?: string;
  comments?: string;
}

export interface NotificationFilters {
  search: string;
  type: string;
  priority: string;
  status: string;
}