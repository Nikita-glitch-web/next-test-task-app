"use client";

import { ArrowDownAZ, ArrowUpAZ, Calendar, CalendarDays } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortOption =
  | "date-newest"
  | "date-oldest"
  | "title-asc"
  | "title-desc"
  | "priority";

interface TaskSortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions = [
  {
    value: "date-newest" as const,
    label: "Newest First",
    icon: CalendarDays,
  },
  {
    value: "date-oldest" as const,
    label: "Oldest First",
    icon: Calendar,
  },
  {
    value: "title-asc" as const,
    label: "Title (A-Z)",
    icon: ArrowDownAZ,
  },
  {
    value: "title-desc" as const,
    label: "Title (Z-A)",
    icon: ArrowUpAZ,
  },
  {
    value: "priority" as const,
    label: "Priority",
    icon: CalendarDays,
  },
];

export function TaskSortSelect({ value, onChange }: TaskSortSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by..." />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => {
          const Icon = option.icon;
          return (
            <SelectItem key={option.value} value={option.value}>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{option.label}</span>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
