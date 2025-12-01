import { TaskPriority } from "@/types/task";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowUp, Minus } from "lucide-react";

interface TaskPriorityBadgeProps {
  priority?: TaskPriority;
  size?: "sm" | "md";
}

export function TaskPriorityBadge({
  priority,
  size = "md",
}: TaskPriorityBadgeProps) {
  if (!priority || priority === "low") return null;

  const config: Record<
    TaskPriority,
    {
      icon: typeof AlertCircle;
      label: string;
      className: string;
    }
  > = {
    high: {
      icon: AlertCircle,
      label: "High Priority",
      className: "bg-red-100 text-red-700 border-red-200",
    },
    medium: {
      icon: ArrowUp,
      label: "Medium Priority",
      className: "bg-amber-100 text-amber-700 border-amber-200",
    },
    low: {
      icon: Minus,
      label: "Low Priority",
      className: "bg-gray-100 text-gray-600 border-gray-200",
    },
  };

  const { icon: Icon, label, className } = config[priority];
  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";

  return (
    <Badge
      variant="outline"
      className={`${className} flex items-center gap-1 ${
        size === "sm" ? "text-xs px-1.5 py-0.5" : "text-xs px-2 py-1"
      }`}
    >
      <Icon className={iconSize} />
      {size === "md" && <span>{label}</span>}
    </Badge>
  );
}
