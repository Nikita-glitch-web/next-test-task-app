import { Task } from "@/types/task";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock, AlertCircle } from "lucide-react";
import { useMemo } from "react";

interface TaskStatsCardsProps {
  tasks: Task[];
}

/**
 * Task Statistics Cards Component
 * Displays overview statistics of tasks in card format
 */
export function TaskStatsCards({ tasks }: TaskStatsCardsProps) {
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(
      (task) => task.status === "completed"
    ).length;
    const inProgress = tasks.filter(
      (task) => task.status === "in-progress"
    ).length;
    const review = tasks.filter((task) => task.status === "review").length;
    const todo = tasks.filter((task) => task.status === "to-do").length;

    return {
      total,
      completed,
      inProgress,
      review,
      todo,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }, [tasks]);

  const statCards = [
    {
      label: "Total Tasks",
      value: stats.total,
      icon: AlertCircle,
      color: "text-gray-600",
      bgColor: "bg-gray-100",
    },
    {
      label: "To Do",
      value: stats.todo,
      icon: Circle,
      color: "text-gray-600",
      bgColor: "bg-gray-100",
    },
    {
      label: "In Progress",
      value: stats.inProgress,
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      label: "In Review",
      value: stats.review,
      icon: AlertCircle,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      label: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="border-border bg-card">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
