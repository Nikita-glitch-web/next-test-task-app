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
            ? "bg-gray-900 text-white border-gray-900 shadow-sm"
            : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-sm"
        )}
      >
        All Tasks
        {taskCounts && (
          <span
            className={cn(
              "px-2 py-0.5 rounded-full text-xs font-semibold",
              selectedStatus === "all"
                ? "bg-white/20 text-white"
                : "bg-gray-100 text-gray-600"
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
                : `bg-white border-gray-200 hover:border-${config.color}-300 hover:shadow-sm`
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
                    : "bg-gray-100 text-gray-600"
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
