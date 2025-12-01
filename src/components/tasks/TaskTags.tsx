import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface TaskTagsProps {
  tags?: string[];
  maxDisplay?: number;
  size?: "sm" | "md";
}

export function TaskTags({ tags, maxDisplay = 3, size = "md" }: TaskTagsProps) {
  if (!tags || tags.length === 0) return null;

  const displayTags = tags.slice(0, maxDisplay);
  const remainingCount = tags.length - maxDisplay;

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <Tag className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} />
      {displayTags.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          className={`${
            size === "sm" ? "text-xs px-1.5 py-0.5" : "text-xs px-2 py-1"
          } bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100`}
        >
          {tag}
        </Badge>
      ))}
      {remainingCount > 0 && (
        <Badge
          variant="outline"
          className={`${
            size === "sm" ? "text-xs px-1.5 py-0.5" : "text-xs px-2 py-1"
          } bg-gray-100 text-gray-600 border-gray-200`}
        >
          +{remainingCount}
        </Badge>
      )}
    </div>
  );
}
