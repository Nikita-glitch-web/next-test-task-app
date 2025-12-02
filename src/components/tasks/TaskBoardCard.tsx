"use client";

import { Task } from "@/types/task";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

interface TaskBoardCardProps {
  task: Task;
}

export function TaskBoardCard({ task }: TaskBoardCardProps) {
  const toast = useToast();
  const router = useRouter();

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.info("Edit Task", "This feature will be implemented soon");
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.warning("Delete Task", "Are you sure? This action cannot be undone.");
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success("Opening task details...");
    router.push(`/tasks/${task.id}`);
  };
  return (
    <Link href={`/tasks/${task.id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer border-border bg-card">
        <CardHeader className="pb-2 sm:pb-3">
          <div className="flex items-start justify-between">
            <h4 className="text-xs sm:text-sm font-semibold line-clamp-2 pr-2">
              {task.title}
            </h4>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-5 w-5 sm:h-6 sm:w-6 p-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreVertical className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete}>
                  Delete
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleViewDetails}>
                  View Details
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="pb-3 sm:pb-4">
          <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2 mb-2 sm:mb-3">
            {task.description}
          </p>

          {/* Bottom Section */}
          <div className="flex items-center justify-between">
            {/* Green Date Badge */}
            <div className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium bg-[#4CAF50] text-white">
              {formatDate(task.createdAt)}
            </div>

            {/* Avatar Placeholders */}
            <div className="flex -space-x-1.5 sm:-space-x-2">
              {[1, 2, 3].map((i) => (
                <Avatar
                  key={i}
                  className="h-5 w-5 sm:h-6 sm:w-6 border-2 border-card"
                >
                  <AvatarFallback className="bg-muted text-[8px] sm:text-[10px]">
                    <span className="text-muted-foreground">U{i}</span>
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
