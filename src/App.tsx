import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { Analytics } from './pages/Analytics';
import { Calendar } from './pages/Calendar';
import { Kanban } from './pages/Kanban';
import { Settings } from './pages/Settings';
import { useThemeStore } from './store/themeStore';

const queryClient = new QueryClient();

function App() {
  const { applyTheme } = useThemeStore();

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="kanban" element={<Kanban />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
