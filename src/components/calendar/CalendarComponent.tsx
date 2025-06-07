import { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import type { Event } from '../../types';
import { mockEvents } from '../../data/mockData';
import { Card } from '../ui/Card';

const localizer = momentLocalizer(moment);

export function CalendarComponent() {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [view, setView] = useState<any>(Views.MONTH);

  const handleSelectEvent = (event: Event) => {
    alert(`Event: ${event.title}\nDescription: ${event.description || 'No description'}`);
  };

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const title = prompt('Enter event title:');
    if (title) {
      const newEvent: Event = {
        id: Math.random().toString(36).substring(7),
        title,
        start,
        end,
        color: '#3b82f6',
      };
      setEvents([...events, newEvent]);
    }
  };

  const eventStyleGetter = (event: Event) => {
    return {
      style: {
        backgroundColor: event.color || '#3b82f6',
        borderRadius: '4px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',
      },
    };
  };

  return (
    <Card className="p-6">
      <div className="h-[600px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          titleAccessor="title"
          view={view}
          onView={setView}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          eventPropGetter={eventStyleGetter}
          className="calendar-custom"
          formats={{
            timeGutterFormat: 'HH:mm',
            eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
              `${localizer?.format(start, 'HH:mm', culture)} - ${localizer?.format(end, 'HH:mm', culture)}`,
          }}
        />
      </div>      <style>{`
        .calendar-custom {
          font-family: inherit;
        }
        
        .rbc-calendar {
          color: inherit;
        }
        
        .rbc-header {
          background-color: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 8px;
          font-weight: 600;
        }
        
        .dark .rbc-header {
          background-color: #374151;
          border-bottom-color: #4b5563;
          color: white;
        }
        
        .rbc-month-view {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .dark .rbc-month-view {
          border-color: #4b5563;
        }
        
        .rbc-date-cell {
          padding: 8px;
          border-right: 1px solid #e2e8f0;
        }
        
        .dark .rbc-date-cell {
          border-right-color: #4b5563;
        }
        
        .rbc-day-bg {
          border-right: 1px solid #e2e8f0;
        }
        
        .dark .rbc-day-bg {
          border-right-color: #4b5563;
          background-color: #1f2937;
        }
        
        .rbc-today {
          background-color: #dbeafe;
        }
        
        .dark .rbc-today {
          background-color: #1e3a8a;
        }
        
        .rbc-off-range-bg {
          background-color: #f9fafb;
        }
        
        .dark .rbc-off-range-bg {
          background-color: #111827;
        }
        
        .rbc-toolbar {
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .rbc-toolbar button {
          background-color: #f3f4f6;
          border: 1px solid #d1d5db;
          color: #374151;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }
        
        .rbc-toolbar button:hover {
          background-color: #e5e7eb;
        }
        
        .rbc-toolbar button.rbc-active {
          background-color: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .dark .rbc-toolbar button {
          background-color: #374151;
          border-color: #4b5563;
          color: #d1d5db;
        }
        
        .dark .rbc-toolbar button:hover {
          background-color: #4b5563;
        }
        
        .rbc-event {
          border-radius: 4px;
          font-size: 12px;
          padding: 2px 6px;
        }
      `}</style>
    </Card>
  );
}
