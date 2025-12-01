import { Task } from "@/types/task";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskStatusBadge } from "./TaskStatusBadge";
import { formatRelativeTime } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";

interface TaskCardProps {
  task: Task;
  onClick?: (task: Task) => void;
}

export function TaskCard({ task, onClick }: TaskCardProps) {
  const content = (
    <Card className="h-full transition-shadow hover:shadow-md cursor-pointer">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg line-clamp-2">{task.title}</CardTitle>
          <TaskStatusBadge status={task.status} />
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span>{formatRelativeTime(task.createdAt)}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {task.description}
        </p>
      </CardContent>
    </Card>
  );

  if (onClick) {
    return <div onClick={() => onClick(task)}>{content}</div>;
  }

  return <Link href={`/tasks/${task.id}`}>{content}</Link>;
}
