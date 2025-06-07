import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme } from '../types';

interface ThemeStore {
  theme: Theme;
  primaryColor: string;
  sidebarCollapsed: boolean;
  setTheme: (theme: Theme) => void;
  setPrimaryColor: (color: string) => void;
  toggleSidebar: () => void;
  applyTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'light',
      primaryColor: '#3b82f6',
      sidebarCollapsed: false,
      
      setTheme: (theme) => {
        set({ theme });
        get().applyTheme();
      },
      
      setPrimaryColor: (color) => {
        set({ primaryColor: color });
        document.documentElement.style.setProperty('--primary-color', color);
      },
      
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      
      applyTheme: () => {
        const { theme } = get();
        const root = document.documentElement;
        
        if (theme === 'dark') {
          root.classList.add('dark');
        } else if (theme === 'light') {
          root.classList.remove('dark');
        } else {
          // Auto theme
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDark) {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }
        }
      },
    }),
    {
      name: 'theme-store',
    }
  )
);
