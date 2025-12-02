import { TaskPriority } from "@/types/task";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";

interface TaskPriorityFilterProps {
  value: TaskPriority | "all";
  onChange: (value: TaskPriority | "all") => void;
}

/**
 * Task Priority Filter Component
 * Dropdown to filter tasks by priority level
 */
export function TaskPriorityFilter({
  value,
  onChange,
}: TaskPriorityFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[140px] sm:w-[160px] h-9 sm:h-10">
        <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
        <SelectValue placeholder="Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Priorities</SelectItem>
        <SelectItem value="urgent">🔴 Urgent</SelectItem>
        <SelectItem value="high">🟠 High</SelectItem>
        <SelectItem value="medium">🟡 Medium</SelectItem>
        <SelectItem value="low">🟢 Low</SelectItem>
      </SelectContent>
    </Select>
  );
}
