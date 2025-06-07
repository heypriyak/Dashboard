import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useThemeStore } from '../../store/themeStore';
import { cn } from '../../lib/utils';

export function Layout() {
  const { sidebarCollapsed } = useThemeStore();

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        
        {/* Page content */}
        <main
          className={cn(
            'flex-1 overflow-y-auto transition-all duration-300',
            sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-0'
          )}
        >
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
