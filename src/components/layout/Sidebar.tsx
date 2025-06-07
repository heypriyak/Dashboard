import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CalendarIcon,
  TableCellsIcon,
  CogIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useThemeStore } from '../../store/themeStore';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Users', href: '/users', icon: UsersIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'Kanban', href: '/kanban', icon: TableCellsIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebar } = useThemeStore();

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {!sidebarCollapsed && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out dark:bg-gray-800 lg:static lg:inset-0 lg:translate-x-0',
          sidebarCollapsed ? '-translate-x-full lg:w-16' : 'translate-x-0'
        )}
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between px-4">
          <div
            className={cn(
              'flex items-center',
              sidebarCollapsed && 'lg:justify-center'
            )}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-white font-bold">A</span>
            </div>
            {!sidebarCollapsed && (
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                Admin
              </span>
            )}
          </div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-3">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white',
                      sidebarCollapsed && 'lg:justify-center lg:px-2'
                    )
                  }
                >
                  <item.icon
                    className={cn(
                      'h-5 w-5 flex-shrink-0',
                      !sidebarCollapsed && 'mr-3'
                    )}
                  />
                  {!sidebarCollapsed && item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
