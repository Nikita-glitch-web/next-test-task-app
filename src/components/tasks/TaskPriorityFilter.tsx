"use client";

import { TaskPriority } from "@/types/task";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Flag } from "lucide-react";

interface TaskPriorityFilterProps {
  value: TaskPriority | "all";
  onChange: (value: TaskPriority | "all") => void;
}

const priorityOptions = [
  { value: "all", label: "All Priorities", color: "text-gray-600" },
  { value: "low", label: "Low Priority", color: "text-green-600" },
  { value: "medium", label: "Medium Priority", color: "text-yellow-600" },
  { value: "high", label: "High Priority", color: "text-orange-600" },
  { value: "urgent", label: "Urgent Priority", color: "text-red-600" },
] as const;

export function TaskPriorityFilter({
  value,
  onChange,
}: TaskPriorityFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <div className="flex items-center gap-2">
          <Flag className="h-4 w-4" />
          <SelectValue placeholder="Filter by priority" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {priorityOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <div className="flex items-center gap-2">
              <Flag className={`h-4 w-4 ${option.color}`} />
              <span>{option.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
