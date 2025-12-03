"use client";

import { Task, TaskStatus } from "@/types/task";
import { TaskCard } from "./TaskCard";
import { useMemo, useState } from "react";
import { TaskFilters } from "./TaskFilters";
import { TaskStats } from "./TaskStats";
import { EmptyState } from "../common/EmptyState";

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | "all">(
    "all"
  );
  const [selectedSort, setSelectedSort] = useState<
    "date-asc" | "date-desc" | "title-asc" | "title-desc"
  >("date-desc");

  const filteredAndSortedTasks = useMemo(() => {
    let filtered = tasks;

    if (selectedStatus !== "all") {
      filtered = filtered.filter((task) => task.status === selectedStatus);
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (selectedSort) {
        case "date-asc":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        case "date-desc":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [tasks, selectedStatus, selectedSort]);

  return (
    <div className="space-y-6">
      <TaskStats tasks={tasks} />

      <TaskFilters
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />

      {filteredAndSortedTasks.length === 0 ? (
        <EmptyState
          title="No tasks found"
          description={
            selectedStatus !== "all"
              ? `No tasks with status "${selectedStatus}"`
              : "No tasks available"
          }
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAndSortedTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
