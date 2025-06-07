import { useThemeStore } from '../store/themeStore';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const colorOptions = [
  { name: 'Blue', value: '#3b82f6', class: 'bg-blue-500' },
  { name: 'Green', value: '#10b981', class: 'bg-green-500' },
  { name: 'Purple', value: '#8b5cf6', class: 'bg-purple-500' },
  { name: 'Pink', value: '#ec4899', class: 'bg-pink-500' },
  { name: 'Orange', value: '#f59e0b', class: 'bg-orange-500' },
  { name: 'Red', value: '#ef4444', class: 'bg-red-500' },
];

export function Settings() {
  const { theme, setTheme, primaryColor, setPrimaryColor } = useThemeStore();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Customize your dashboard appearance and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Theme Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Theme Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Theme Mode
              </label>
              <div className="mt-2 space-y-2">
                {[
                  { value: 'light', label: 'Light' },
                  { value: 'dark', label: 'Dark' },
                  { value: 'auto', label: 'Auto (System)' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="theme"
                      value={option.value}
                      checked={theme === option.value}
                      onChange={(e) => setTheme(e.target.value as any)}
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Primary Color</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Choose your primary color
              </label>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setPrimaryColor(color.value)}
                    className={`relative h-16 rounded-lg border-2 transition-all ${
                      primaryColor === color.value
                        ? 'border-gray-900 dark:border-white scale-105'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
                    } ${color.class}`}
                  >
                    {primaryColor === color.value && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-gray-900"></div>
                        </div>
                      </div>
                    )}
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: 'email', label: 'Email notifications', description: 'Receive updates via email' },
              { id: 'push', label: 'Push notifications', description: 'Browser push notifications' },
              { id: 'sms', label: 'SMS notifications', description: 'Text message alerts' },
            ].map((setting) => (
              <div key={setting.id} className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {setting.label}
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {setting.description}
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  defaultChecked
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Display Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="pt-4">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
