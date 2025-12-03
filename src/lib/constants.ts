import { TaskStatus } from "@/types/task";

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  "to-do": "To Do",
  "in-progress": "In Progress",
  review: "Review",
  completed: "Completed",
};

export const TASK_STATUS_COLORS: Record<TaskStatus, string> = {
  "to-do": "bg-gray-100 text-gray-700 border-gray-300",
  "in-progress": "bg-blue-100 text-blue-800 border-blue-300",
  review: "bg-amber-100 text-amber-800 border-amber-300",
  completed: "bg-emerald-100 text-emerald-800 border-emerald-300",
};

export const TASK_STATUS_CONFIG = {
  "to-do": {
    label: "To Do",
    color: "#6B7280",
  },
  "in-progress": {
    label: "In Progress",
    color: "#3B82F6",
  },
  review: {
    label: "Review",
    color: "#F59E0B",
  },
  completed: {
    label: "Completed",
    color: "#10B981",
  },
} as const;

export const BRAND_COLORS = {
  green: "#4CAF50",
  orange: "#FF9800",
  red: "#EF5350",
  gray: "#F5F5F5",
} as const;

export const API_ENDPOINTS = {
  TASKS: "/tasks",
} as const;

export const QUERY_KEYS = {
  TASKS: ["tasks"] as const,
  TASK: (id: string) => ["task", id] as const,
} as const;
