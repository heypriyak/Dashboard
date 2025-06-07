import { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import type { Task } from '../../types';
import { TaskCard } from './TaskCard';
import { Column } from './Column';
import { mockTasks } from '../../data/mockData';

const columns = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-100 dark:bg-gray-700' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-blue-100 dark:bg-blue-900' },
  { id: 'review', title: 'Review', color: 'bg-yellow-100 dark:bg-yellow-900' },
  { id: 'done', title: 'Done', color: 'bg-green-100 dark:bg-green-900' },
];

export function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = tasks.find((task) => task.id === active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeTask = tasks.find((task) => task.id === active.id);
    if (!activeTask) return;

    const overColumnId = over.id as Task['status'];
    
    if (activeTask.status !== overColumnId) {
      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === activeTask.id ? { ...task, status: overColumnId } : task
        )
      );
    }
  };

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-6 overflow-x-auto pb-6">
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            color={column.color}
            tasks={getTasksByStatus(column.id as Task['status'])}
          />
        ))}
      </div>

      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  );
}
