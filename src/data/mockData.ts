import type { User, Task, Event, ChartData } from '../types';

// Mock data for demonstration
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    createdAt: '2024-01-15T08:00:00Z',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Manager',
    status: 'active',
    createdAt: '2024-02-20T10:30:00Z',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'Developer',
    status: 'inactive',
    createdAt: '2024-03-10T14:15:00Z',
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    role: 'Designer',
    status: 'active',
    createdAt: '2024-03-25T09:45:00Z',
  },
  {
    id: '5',
    name: 'Alex Brown',
    email: 'alex@example.com',
    role: 'Developer',
    status: 'active',
    createdAt: '2024-04-05T11:20:00Z',
  },
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design new dashboard layout',
    description: 'Create wireframes and mockups for the new admin dashboard',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Sarah Wilson',
    dueDate: '2024-06-15T00:00:00Z',
    tags: ['design', 'ui/ux'],
  },
  {
    id: '2',
    title: 'Implement user authentication',
    description: 'Add login, logout, and user session management',
    status: 'todo',
    priority: 'high',
    assignee: 'Mike Johnson',
    dueDate: '2024-06-20T00:00:00Z',
    tags: ['backend', 'security'],
  },
  {
    id: '3',
    title: 'Setup database schema',
    description: 'Design and implement the database structure',
    status: 'done',
    priority: 'medium',
    assignee: 'Alex Brown',
    dueDate: '2024-06-10T00:00:00Z',
    tags: ['database', 'backend'],
  },
  {
    id: '4',
    title: 'Create API documentation',
    description: 'Document all REST API endpoints and usage examples',
    status: 'review',
    priority: 'low',
    assignee: 'John Doe',
    dueDate: '2024-06-25T00:00:00Z',
    tags: ['documentation', 'api'],
  },
  {
    id: '5',
    title: 'Implement data tables',
    description: 'Add sortable and filterable data tables component',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'Mike Johnson',
    dueDate: '2024-06-18T00:00:00Z',
    tags: ['frontend', 'components'],
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Team Meeting',
    start: new Date(2024, 5, 10, 10, 0),
    end: new Date(2024, 5, 10, 11, 0),
    description: 'Weekly team sync meeting',
    color: '#3b82f6',
  },
  {
    id: '2',
    title: 'Project Review',
    start: new Date(2024, 5, 12, 14, 0),
    end: new Date(2024, 5, 12, 15, 30),
    description: 'Quarterly project review with stakeholders',
    color: '#10b981',
  },
  {
    id: '3',
    title: 'Design Workshop',
    start: new Date(2024, 5, 15, 9, 0),
    end: new Date(2024, 5, 15, 17, 0),
    description: 'Full-day design thinking workshop',
    color: '#f59e0b',
  },
  {
    id: '4',
    title: 'Client Presentation',
    start: new Date(2024, 5, 18, 15, 0),
    end: new Date(2024, 5, 18, 16, 0),
    description: 'Present final deliverables to client',
    color: '#ef4444',
  },
];

export const mockChartData: ChartData[] = [
  { name: 'Desktop', value: 4000, color: '#3b82f6' },
  { name: 'Mobile', value: 3000, color: '#10b981' },
  { name: 'Tablet', value: 2000, color: '#f59e0b' },
  { name: 'Others', value: 1000, color: '#ef4444' },
];

export const mockSalesData = [
  { month: 'Jan', sales: 4000, revenue: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398 },
  { month: 'Mar', sales: 2000, revenue: 9800 },
  { month: 'Apr', sales: 2780, revenue: 3908 },
  { month: 'May', sales: 1890, revenue: 4800 },
  { month: 'Jun', sales: 2390, revenue: 3800 },
  { month: 'Jul', sales: 3490, revenue: 4300 },
];

export const mockStats = [
  {
    title: 'Total Users',
    value: '12,345',
    change: '+12%',
    trend: 'up' as const,
    icon: 'users',
  },
  {
    title: 'Revenue',
    value: '$45,678',
    change: '+8%',
    trend: 'up' as const,
    icon: 'dollar',
  },
  {
    title: 'Orders',
    value: '1,234',
    change: '-3%',
    trend: 'down' as const,
    icon: 'shopping',
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: '+0.5%',
    trend: 'up' as const,
    icon: 'trending',
  },
];
