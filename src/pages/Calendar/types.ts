export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  eventType: 'Audit' | 'Deadline' | 'Holiday';
  client?: string;
  status: 'Upcoming' | 'Completed' | 'Overdue';
  assignedTo?: string;
  priority: 'High' | 'Medium' | 'Low';
  description?: string;
}

export interface CalendarFilters {
  eventType: string;
  client: string;
  status: string;
  assignedTo: string;
}