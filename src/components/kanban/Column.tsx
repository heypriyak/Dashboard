import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import type { Task } from '../../types';
import { TaskCard } from './TaskCard';
import { cn } from '../../lib/utils';

interface ColumnProps {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

export function Column({ id, title, color, tasks }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div className="flex min-w-80 flex-col">
      {/* Column header */}
      <div className={cn('rounded-t-lg p-4', color)}>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
          <span className="rounded-full bg-white/20 px-2 py-1 text-xs font-medium">
            {tasks.length}
          </span>
        </div>
      </div>

      {/* Column content */}
      <div
        ref={setNodeRef}
        className={cn(
          'flex-1 rounded-b-lg border-2 border-dashed border-transparent bg-gray-50 p-4 transition-colors dark:bg-gray-800',
          isOver && 'border-blue-300 bg-blue-50 dark:border-blue-600 dark:bg-blue-900/20'
        )}
      >
        <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
            {tasks.length === 0 && (
              <div className="flex h-32 items-center justify-center text-gray-400">
                <p>Drop tasks here</p>
              </div>
            )}
          </div>
        </SortableContext>
      </div>
    </div>
  );
}
