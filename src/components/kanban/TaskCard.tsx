import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';
import type { Task } from '../../types';
import { formatDate, priorityColors } from '../../lib/utils';
import { cn } from '../../lib/utils';

interface TaskCardProps {
  task: Task;
  isDragging?: boolean;
}

export function TaskCard({ task, isDragging = false }: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isBeingDragged = isDragging || isSortableDragging;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        'cursor-grab rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-600 dark:bg-gray-700',
        isBeingDragged && 'rotate-3 scale-105 shadow-lg'
      )}
    >
      {/* Priority indicator */}
      <div
        className="mb-2 h-1 w-12 rounded-full"
        style={{ backgroundColor: priorityColors[task.priority] }}
      />

      {/* Task title */}
      <h4 className="font-medium text-gray-900 dark:text-white">{task.title}</h4>

      {/* Task description */}
      {task.description && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Tags */}
      {task.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              <TagIcon className="mr-1 h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <UserIcon className="mr-1 h-4 w-4" />
          <span>{task.assignee}</span>
        </div>
        <div className="flex items-center">
          <CalendarIcon className="mr-1 h-4 w-4" />
          <span>{formatDate(task.dueDate)}</span>
        </div>
      </div>
    </div>
  );
}
