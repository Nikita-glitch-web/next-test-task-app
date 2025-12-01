import { Badge } from "@/components/ui/badge";
import { TaskStatus } from "@/types/task";
import { TASK_STATUS_LABELS, TASK_STATUS_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TaskStatusBadgeProps {
  status: TaskStatus;
  className?: string;
}

export function TaskStatusBadge({ status, className }: TaskStatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(TASK_STATUS_COLORS[status], className)}
    >
      {TASK_STATUS_LABELS[status]}
    </Badge>
  );
}
