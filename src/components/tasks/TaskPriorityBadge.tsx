import { TaskPriority } from "@/types/task";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowUp, Minus, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskPriorityBadgeProps {
  priority?: TaskPriority;
  size?: "sm" | "md";
  className?: string;
}

/**
 * Task Priority Badge Component
 * Displays a colored badge with icon based on task priority
 */
export function TaskPriorityBadge({
  priority = "medium",
  size = "sm",
  className,
}: TaskPriorityBadgeProps) {
  const config: Record<
    TaskPriority,
    {
      icon: typeof AlertCircle;
      label: string;
      className: string;
    }
  > = {
    low: {
      icon: Minus,
      label: "Low",
      className:
        "bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700",
    },
    medium: {
      icon: ArrowUp,
      label: "Medium",
      className:
        "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-700",
    },
    high: {
      icon: AlertCircle,
      label: "High",
      className:
        "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900 dark:text-orange-300 dark:border-orange-700",
    },
    urgent: {
      icon: AlertTriangle,
      label: "Urgent",
      className:
        "bg-red-100 text-red-700 border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-700",
    },
  };

  const { icon: Icon, label, className: priorityClassName } = config[priority];
  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";

  return (
    <Badge
      variant="outline"
      className={cn(
        "flex items-center gap-1 font-medium",
        priorityClassName,
        size === "sm" ? "text-[10px] px-1.5 py-0.5" : "text-xs px-2 py-1",
        className
      )}
    >
      <Icon className={iconSize} />
      <span>{label}</span>
    </Badge>
  );
}
