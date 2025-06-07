import { BarChartComponent, LineChartComponent, PieChartComponent } from '../components/charts/Charts';
import { mockSalesData, mockChartData } from '../data/mockData';

export function Analytics() {
  const deviceData = [
    { name: 'Desktop', value: 45, color: '#3b82f6' },
    { name: 'Mobile', value: 35, color: '#10b981' },
    { name: 'Tablet', value: 15, color: '#f59e0b' },
    { name: 'Other', value: 5, color: '#ef4444' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Detailed insights into your business performance and metrics.
        </p>
      </div>

      {/* Top row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <BarChartComponent
          data={mockSalesData}
          title="Sales Performance"
        />
        <LineChartComponent
          data={mockSalesData}
          title="Revenue Growth"
        />
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <PieChartComponent
          data={deviceData}
          title="Device Usage"
        />
        <PieChartComponent
          data={mockChartData}
          title="Traffic Sources"
        />
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Key Metrics
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Conversion Rate</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">3.24%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Avg. Session Duration</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">4:32</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Bounce Rate</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">42.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Page Views</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">15,234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Unique Visitors</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">8,945</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Traffic Sources Breakdown
          </h3>
          <div className="h-80">
            {/* Custom multi-line chart would go here */}
            <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <p>Multi-line chart showing organic, paid, and social traffic trends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
