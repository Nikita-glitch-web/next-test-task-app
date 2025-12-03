export type TaskStatus = "to-do" | "in-progress" | "review" | "completed";

export type TaskPriority = "low" | "medium" | "high" | "urgent";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  priority?: TaskPriority;
  dueDate?: string;
  assignee?: string;
  tags?: string[];
}

export interface TaskFilters {
  status?: TaskStatus | "all";
  priority?: TaskPriority | "all";
  sortBy?: "dueDate" | "priority" | "createdAt";
  searchQuery?: string;
}

export interface TaskStats {
  total: number;
  byStatus: Record<TaskStatus, number>;
}
