import { Task, TaskStatus } from "@/types/task";
import { Card, CardContent } from "@/components/ui/card";
import { TASK_STATUS_LABELS } from "@/lib/constants";
import { useMemo } from "react";

interface TaskStatsProps {
  tasks: Task[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const stats = useMemo(() => {
    const byStatus: Record<TaskStatus, number> = {
      "to-do": 0,
      "in-progress": 0,
      review: 0,
      completed: 0,
    };

    tasks.forEach((task) => {
      byStatus[task.status]++;
    });

    return { total: tasks.length, byStatus };
  }, [tasks]);

  const statItems = Object.entries(stats.byStatus) as [TaskStatus, number][];

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      <Card>
        <CardContent className="p-4">
          <div className="text-2xl font-bold">{stats.total}</div>
          <p className="text-xs text-muted-foreground">Total Tasks</p>
        </CardContent>
      </Card>
      {statItems.map(([status, count]) => (
        <Card key={status}>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{count}</div>
            <p className="text-xs text-muted-foreground">
              {TASK_STATUS_LABELS[status]}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
