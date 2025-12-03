import { Task } from "@/types/task";
import { apiClient } from "./client";
import { API_ENDPOINTS } from "../constants";

export const fetchTasks = async (): Promise<Task[]> => {
  return apiClient.get<Task[]>(API_ENDPOINTS.TASKS);
};

export const fetchTaskById = async (id: string): Promise<Task> => {
  return apiClient.get<Task>(`${API_ENDPOINTS.TASKS}/${id}`);
};
