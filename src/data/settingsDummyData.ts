// Dummy data for settings pages
export const dummyUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-03-15 09:30 AM',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Compliance Officer',
    status: 'Active',
    lastLogin: '2024-03-14 02:15 PM',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'Viewer',
    status: 'Inactive',
    lastLogin: '2024-03-10 11:45 AM',
  },
];

export const dummyAuditLogs = [
  {
    id: 1,
    action: 'User Login',
    user: 'John Doe',
    timestamp: '2024-03-15 09:30:00',
    details: 'Successful login from IP 192.168.1.1',
  },
  {
    id: 2,
    action: 'Client Updated',
    user: 'Jane Smith',
    timestamp: '2024-03-15 10:15:00',
    details: 'Updated compliance status for Client XYZ',
  },
  {
    id: 3,
    action: 'Report Generated',
    user: 'Mike Johnson',
    timestamp: '2024-03-15 11:00:00',
    details: 'Monthly compliance report generated',
  },
];

export const dummyComplianceEvents = [
  {
    id: 1,
    title: 'Annual Compliance Review',
    date: '2024-04-15',
    type: 'Review',
    priority: 'High',
  },
  {
    id: 2,
    title: 'License Renewal Deadline',
    date: '2024-05-01',
    type: 'Deadline',
    priority: 'High',
  },
  {
    id: 3,
    title: 'Quarterly Report Due',
    date: '2024-06-30',
    type: 'Report',
    priority: 'Medium',
  },
];