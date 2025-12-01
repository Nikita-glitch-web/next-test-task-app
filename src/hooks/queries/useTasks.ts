import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Task } from "@/types/task";
import { fetchTasks, fetchTaskById } from "@/lib/api/tasks";
import { QUERY_KEYS } from "@/lib/constants";
import { ApiError } from "@/types/api";

/**
 * Hook to fetch all tasks
 */
export function useTasks(): UseQueryResult<Task[], ApiError> {
  return useQuery({
    queryKey: QUERY_KEYS.TASKS,
    queryFn: fetchTasks,
  });
}

/**
 * Hook to fetch a single task by ID
 */
export function useTask(id: string): UseQueryResult<Task, ApiError> {
  return useQuery({
    queryKey: QUERY_KEYS.TASK(id),
    queryFn: () => fetchTaskById(id),
    enabled: !!id, // Only run if ID is provided
  });
}
