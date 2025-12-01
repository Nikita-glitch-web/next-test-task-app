"use client";

import { Task, TaskStatus } from "@/types/task";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface TaskProgressBarProps {
  tasks: Task[];
  showPercentage?: boolean;
  className?: string;
}

export function TaskProgressBar({
  tasks,
  showPercentage = true,
  className,
}: TaskProgressBarProps) {
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(
      (task) => task.status === "completed"
    ).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    const statusCounts = tasks.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {} as Record<TaskStatus, number>);

    return {
      total,
      completed,
      percentage,
      toDo: statusCounts["to-do"] || 0,
      inProgress: statusCounts["in-progress"] || 0,
      review: statusCounts["review"] || 0,
    };
  }, [tasks]);

  const segments = useMemo(() => {
    if (stats.total === 0) return [];

    return [
      {
        label: "Completed",
        count: stats.completed,
        percentage: (stats.completed / stats.total) * 100,
        color: "bg-emerald-500",
      },
      {
        label: "Review",
        count: stats.review,
        percentage: (stats.review / stats.total) * 100,
        color: "bg-amber-500",
      },
      {
        label: "In Progress",
        count: stats.inProgress,
        percentage: (stats.inProgress / stats.total) * 100,
        color: "bg-blue-500",
      },
      {
        label: "To Do",
        count: stats.toDo,
        percentage: (stats.toDo / stats.total) * 100,
        color: "bg-gray-400",
      },
    ].filter((segment) => segment.count > 0);
  }, [stats]);

  return (
    <div className={cn("space-y-3", className)}>
      {/* Progress Bar */}
      <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
        {segments.map((segment, index) => {
          const leftOffset = segments
            .slice(0, index)
            .reduce((sum, s) => sum + s.percentage, 0);

          return (
            <div
              key={segment.label}
              className={cn(
                segment.color,
                "absolute h-full transition-all duration-500 ease-in-out"
              )}
              style={{
                left: `${leftOffset}%`,
                width: `${segment.percentage}%`,
              }}
              title={`${segment.label}: ${segment.count} (${Math.round(
                segment.percentage
              )}%)`}
            />
          );
        })}
      </div>

      {/* Stats Row */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          {segments.map((segment) => (
            <div key={segment.label} className="flex items-center gap-1.5">
              <div className={cn("w-3 h-3 rounded-full", segment.color)} />
              <span className="text-gray-600">
                {segment.label}:{" "}
                <span className="font-semibold text-gray-900">
                  {segment.count}
                </span>
              </span>
            </div>
          ))}
        </div>

        {showPercentage && stats.total > 0 && (
          <div className="text-gray-900 font-semibold">
            {stats.percentage}% Complete
          </div>
        )}
      </div>

      {/* Simple Summary */}
      <div className="text-xs text-gray-500">
        {stats.completed} of {stats.total} tasks completed
      </div>
    </div>
  );
}
