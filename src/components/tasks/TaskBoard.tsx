"use client";

import { Task, TaskStatus } from "@/types/task";
import { TaskBoardColumn } from "./TaskBoardColumn";
import { TASK_STATUS_LABELS } from "@/lib/constants";
import { useMemo } from "react";

interface TaskBoardProps {
  tasks: Task[];
}

export function TaskBoard({ tasks }: TaskBoardProps) {
  const columns: TaskStatus[] = ["to-do", "in-progress", "review", "completed"];

  const tasksByStatus = useMemo(() => {
    const grouped: Record<TaskStatus, Task[]> = {
      "to-do": [],
      "in-progress": [],
      review: [],
      completed: [],
    };

    tasks.forEach((task) => {
      grouped[task.status]?.push(task);
    });

    return grouped;
  }, [tasks]);

  const getColumnCount = (status: TaskStatus) => {
    return tasksByStatus[status]?.length || 0;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {columns.map((status) => (
        <TaskBoardColumn
          key={status}
          status={status}
          title={TASK_STATUS_LABELS[status]}
          count={getColumnCount(status)}
          tasks={tasksByStatus[status] || []}
        />
      ))}
    </div>
  );
}
