"use client";

import { TaskStatus } from "@/types/task";
import { TASK_STATUS_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TaskStatusTabsProps {
  selectedStatus: TaskStatus | "all";
  onStatusChange: (status: TaskStatus | "all") => void;
  taskCounts?: Record<TaskStatus, number>;
}

export function TaskStatusTabs({
  selectedStatus,
  onStatusChange,
  taskCounts,
}: TaskStatusTabsProps) {
  const allCount = taskCounts
    ? Object.values(taskCounts).reduce((sum, count) => sum + count, 0)
    : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {/* All Tasks Tab */}
      <button
        onClick={() => onStatusChange("all")}
        className={cn(
          "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
          "border-2 flex items-center gap-2",
          selectedStatus === "all"
            ? "bg-foreground text-background border-foreground shadow-sm"
            : "bg-card text-foreground border-border hover:border-muted-foreground/30 hover:shadow-sm"
        )}
      >
        All Tasks
        {taskCounts && (
          <span
            className={cn(
              "px-2 py-0.5 rounded-full text-xs font-semibold",
              selectedStatus === "all"
                ? "bg-background/20 text-background"
                : "bg-muted text-muted-foreground"
            )}
          >
            {allCount}
          </span>
        )}
      </button>

      {/* Status Tabs */}
      {(Object.keys(TASK_STATUS_CONFIG) as TaskStatus[]).map((status) => {
        const config = TASK_STATUS_CONFIG[status];
        const count = taskCounts?.[status] || 0;
        const isSelected = selectedStatus === status;

        return (
          <button
            key={status}
            onClick={() => onStatusChange(status)}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
              "border-2 flex items-center gap-2",
              isSelected
                ? `text-white border-${config.color}-500 shadow-sm`
                : `bg-card border-border hover:border-${config.color}-300 hover:shadow-sm`
            )}
            style={
              isSelected
                ? { backgroundColor: config.color, borderColor: config.color }
                : undefined
            }
          >
            {config.label}
            {taskCounts && (
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-semibold",
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
