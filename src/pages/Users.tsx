import type { ColumnDef } from '@tanstack/react-table';
import type { User } from '../types';
import { DataTable } from '../components/ui/DataTable';
import { mockUsers } from '../data/mockData';
import { formatDate } from '../lib/utils';

export function Users() {
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'avatar',
      header: '',
      cell: ({ getValue }) => {
        const avatar = getValue() as string;
        return (
          <div className="h-10 w-10 flex-shrink-0">
            {avatar ? (
              <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">?</span>
              </div>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ getValue }) => (
        <div className="font-medium text-gray-900 dark:text-white">
          {getValue() as string}
        </div>
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ getValue }) => (
        <div className="text-gray-600 dark:text-gray-300">
          {getValue() as string}
        </div>
      ),
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ getValue }) => {
        const role = getValue() as string;
        const roleColors = {
          Admin: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
          Manager: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
          Developer: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
          Designer: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
        };
        
        return (
          <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
              roleColors[role as keyof typeof roleColors] || 'bg-gray-100 text-gray-800'
            }`}
          >
            {role}
          </span>
        );
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ getValue }) => {
        const status = getValue() as string;
        return (
          <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
              status === 'active'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }`}
          >
            {status === 'active' ? 'Active' : 'Inactive'}
          </span>
        );
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created',
      cell: ({ getValue }) => (
        <div className="text-gray-600 dark:text-gray-300">
          {formatDate(getValue() as string)}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Users</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Manage your team members and their permissions.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={mockUsers}
        searchPlaceholder="Search users..."
      />
    </div>
  );
}
