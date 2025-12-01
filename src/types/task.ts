/**
 * Task status enum matching API values
 */
export type TaskStatus = "to-do" | "in-progress" | "review" | "completed";

/**
 * Main task interface matching API response
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string; // ISO 8601 date string
}

/**
 * Task filters for UI state
 */
export interface TaskFilters {
  status?: TaskStatus | "all";
  sortBy?: "date-asc" | "date-desc" | "title-asc" | "title-desc";
  searchQuery?: string;
}

/**
 * Task statistics
 */
export interface TaskStats {
  total: number;
  byStatus: Record<TaskStatus, number>;
}
