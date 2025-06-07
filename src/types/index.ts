export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  dueDate: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  color?: string;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface TableColumn<T> {
  id: keyof T;
  header: string;
  accessorKey: keyof T;
  cell?: (value: any) => React.ReactNode;
}

export type Theme = 'light' | 'dark' | 'auto';

export interface ThemeConfig {
  theme: Theme;
  primaryColor: string;
  sidebarCollapsed: boolean;
}
