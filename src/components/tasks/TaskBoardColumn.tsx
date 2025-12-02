"use client";

import { Task, TaskStatus } from "@/types/task";
import { TaskBoardCard } from "./TaskBoardCard";

interface TaskBoardColumnProps {
  status: TaskStatus;
  title: string;
  count: number;
  tasks: Task[];
}

export function TaskBoardColumn({ title, count, tasks }: TaskBoardColumnProps) {
  return (
    <div className="flex flex-col">
      {/* Column Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
          {title} ({count})
        </h3>
      </div>

      {/* Tasks */}
      <div className="space-y-2 sm:space-y-3">
        {tasks.map((task) => (
          <TaskBoardCard key={task.id} task={task} />
        ))}

        {/* Empty Placeholder Cards (dashed boxes from Figma) */}
        {tasks.length < 3 &&
          Array.from({ length: 3 - tasks.length }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="border-2 border-dashed border-border rounded-lg h-24 sm:h-32 bg-card"
            />
          ))}
      </div>
    </div>
  );
}
