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
    const completed = tasks.filter((t) => t.status === "completed").length;
    const inProgress = tasks.filter((t) => t.status === "in-progress").length;
    const review = tasks.filter((t) => t.status === "review").length;
    const toDo = tasks.filter((t) => t.status === "to-do").length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      inProgress,
      review,
      toDo,
      completionRate,
    };
  }, [tasks]);

  const cards = [
    {
      title: "Total Tasks",
      value: stats.total,
      icon: Circle,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: Clock,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      title: "In Review",
      value: stats.review,
      icon: AlertCircle,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Card
            key={card.title}
            className="border-border bg-card hover:shadow-md transition-shadow"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                    {card.title}
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold">{card.value}</p>
                </div>
                <div className={`${card.bgColor} p-2 sm:p-3 rounded-lg`}>
                  <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${card.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
