import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import { useThemeStore } from '../../store/themeStore';

export function Header() {
  const { theme, setTheme, toggleSidebar } = useThemeStore();

  const themeOptions = [
    { value: 'light' as const, icon: SunIcon, label: 'Light' },
    { value: 'dark' as const, icon: MoonIcon, label: 'Dark' },
    { value: 'auto' as const, icon: ComputerDesktopIcon, label: 'Auto' },
  ];

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700 lg:hidden"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Search */}
          <div className="ml-4 hidden sm:block">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-80 rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Theme switcher */}
          <div className="flex items-center space-x-1 rounded-md border border-gray-300 p-1 dark:border-gray-600">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setTheme(option.value)}
                className={`rounded p-1.5 transition-colors ${
                  theme === option.value
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200'
                }`}
                title={option.label}
              >
                <option.icon className="h-4 w-4" />
              </button>
            ))}
          </div>

          {/* Notifications */}
          <button className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700">
            <BellIcon className="h-6 w-6" />
          </button>

          {/* User menu */}
          <div className="flex items-center">
            <button className="flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
                alt="User avatar"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
