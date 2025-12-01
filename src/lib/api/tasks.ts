import { Task } from "@/types/task";
import { apiClient } from "./client";
import { API_ENDPOINTS } from "../constants";

/**
 * Fetch all tasks from the API
 */
export const fetchTasks = async (): Promise<Task[]> => {
  return apiClient.get<Task[]>(API_ENDPOINTS.TASKS);
};

/**
 * Fetch a single task by ID
 */
export const fetchTaskById = async (id: string): Promise<Task> => {
  return apiClient.get<Task>(`${API_ENDPOINTS.TASKS}/${id}`);
};

// Future: Add create, update, delete functions as needed
