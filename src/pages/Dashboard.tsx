import {
  ArrowUpIcon,
  ArrowDownIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { BarChartComponent, LineChartComponent, PieChartComponent } from '../components/charts/Charts';
import { mockStats, mockSalesData, mockChartData } from '../data/mockData';

const iconMap = {
  users: UsersIcon,
  dollar: CurrencyDollarIcon,
  shopping: ShoppingBagIcon,
  trending: ChartBarIcon,
};

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mockStats.map((stat) => {
          const Icon = iconMap[stat.icon as keyof typeof iconMap];
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        {stat.title}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div
                          className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stat.trend === 'up'
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-red-600 dark:text-red-400'
                          }`}
                        >
                          {stat.trend === 'up' ? (
                            <ArrowUpIcon className="h-4 w-4 flex-shrink-0 self-center" />
                          ) : (
                            <ArrowDownIcon className="h-4 w-4 flex-shrink-0 self-center" />
                          )}
                          <span className="sr-only">
                            {stat.trend === 'up' ? 'Increased' : 'Decreased'} by
                          </span>
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <BarChartComponent
          data={mockSalesData}
          title="Monthly Sales"
        />
        <LineChartComponent
          data={mockSalesData}
          title="Revenue Trend"
        />
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { user: 'John Doe', action: 'created a new project', time: '2 hours ago' },
                  { user: 'Jane Smith', action: 'updated user permissions', time: '4 hours ago' },
                  { user: 'Mike Johnson', action: 'completed task review', time: '6 hours ago' },
                  { user: 'Sarah Wilson', action: 'uploaded new designs', time: '8 hours ago' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <PieChartComponent
          data={mockChartData}
          title="Traffic Sources"
        />
      </div>
    </div>
  );
}
