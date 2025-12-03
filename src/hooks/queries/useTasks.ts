import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Task } from "@/types/task";
import { fetchTasks, fetchTaskById } from "@/lib/api/tasks";
import { QUERY_KEYS } from "@/lib/constants";
import { ApiError } from "@/types/api";

export function useTasks(): UseQueryResult<Task[], ApiError> {
  return useQuery({
    queryKey: QUERY_KEYS.TASKS,
    queryFn: fetchTasks,
  });
}

export function useTask(id: string): UseQueryResult<Task, ApiError> {
  return useQuery({
    queryKey: QUERY_KEYS.TASK(id),
    queryFn: () => fetchTaskById(id),
    enabled: !!id,
  });
}
