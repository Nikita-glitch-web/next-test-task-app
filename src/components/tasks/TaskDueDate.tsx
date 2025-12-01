import { Calendar, Clock } from "lucide-react";
import { formatDistanceToNow, isPast, isToday, isTomorrow } from "date-fns";
import { cn } from "@/lib/utils";

interface TaskDueDateProps {
  dueDate?: string;
  size?: "sm" | "md";
}

export function TaskDueDate({ dueDate, size = "md" }: TaskDueDateProps) {
  if (!dueDate) return null;

  const date = new Date(dueDate);
  const isOverdue = isPast(date) && !isToday(date);
  const isDueToday = isToday(date);
  const isDueTomorrow = isTomorrow(date);

  let displayText = "";
  let variant: "default" | "warning" | "danger" = "default";

  if (isOverdue) {
    displayText = `Overdue by ${formatDistanceToNow(date)}`;
    variant = "danger";
  } else if (isDueToday) {
    displayText = "Due today";
    variant = "warning";
  } else if (isDueTomorrow) {
    displayText = "Due tomorrow";
    variant = "warning";
  } else {
    displayText = `Due in ${formatDistanceToNow(date)}`;
  }

  const Icon = isOverdue || isDueToday ? Clock : Calendar;
  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div
      className={cn(
        "flex items-center gap-1.5",
        textSize,
        variant === "danger" && "text-red-600",
        variant === "warning" && "text-amber-600",
        variant === "default" && "text-gray-600"
      )}
    >
      <Icon className={iconSize} />
      <span>{displayText}</span>
    </div>
  );
}
