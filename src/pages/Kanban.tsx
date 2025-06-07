import { KanbanBoard } from '../components/kanban/KanbanBoard';

export function Kanban() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Kanban Board</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Drag and drop tasks between columns to update their status.
        </p>
      </div>

      <KanbanBoard />
    </div>
  );
}
