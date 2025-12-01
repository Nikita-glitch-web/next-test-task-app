import { TaskStatus } from "@/types/task";

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  "to-do": "To Do",
  "in-progress": "In Progress",
  review: "Review",
  completed: "Completed",
};

export const TASK_STATUS_COLORS: Record<TaskStatus, string> = {
  "to-do": "bg-slate-100 text-slate-800 border-slate-300",
  "in-progress": "bg-blue-100 text-blue-800 border-blue-300",
  review: "bg-amber-100 text-amber-800 border-amber-300",
  completed: "bg-emerald-100 text-emerald-800 border-emerald-300",
};

export const API_ENDPOINTS = {
  TASKS: "/tasks",
} as const;

export const QUERY_KEYS = {
  TASKS: ["tasks"] as const,
  TASK: (id: string) => ["task", id] as const,
} as const;
