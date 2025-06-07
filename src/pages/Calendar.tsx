import { CalendarComponent } from '../components/calendar/CalendarComponent';

export function Calendar() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Calendar</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Manage your events and schedule. Click on empty slots to create new events.
        </p>
      </div>

      <CalendarComponent />
    </div>
  );
}
