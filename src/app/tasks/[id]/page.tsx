"use client";

import { useTask } from "@/hooks/queries/useTasks";
import { LoadingState } from "@/components/common/LoadingState";
import { ErrorState } from "@/components/common/ErrorState";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskStatusBadge } from "@/components/tasks/TaskStatusBadge";
import { formatDate } from "@/lib/utils";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { use } from "react";

export default function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: task, isLoading, error, refetch } = useTask(id);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto">
          <LoadingState />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto">
          <ErrorState
            message={error.message || "Failed to load task"}
            onRetry={() => refetch()}
          />
        </div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto">
          <ErrorState message="Task not found" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tasks
          </Button>
        </Link>

        <Card className="shadow-sm">
          <CardHeader className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
              <CardTitle className="text-xl sm:text-2xl leading-tight">
                {task.title}
              </CardTitle>
              <TaskStatusBadge status={task.status} />
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Created on {formatDate(task.createdAt)}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                Description
              </h3>
              <p className="text-muted-foreground whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
                {task.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
