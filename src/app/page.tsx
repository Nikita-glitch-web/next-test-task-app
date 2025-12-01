"use client";

import { useTasks } from "@/hooks/queries/useTasks";
import { Container } from "@/components/layout/Container";
import { PageTitle } from "@/components/common/PageTitle";
import { TaskList } from "@/components/tasks/TaskList";
import { LoadingState } from "@/components/common/LoadingState";
import { ErrorState } from "@/components/common/ErrorState";

export default function Home() {
  const { data: tasks, isLoading, error, refetch } = useTasks();

  return (
    <Container>
      <div className="space-y-8">
        <PageTitle subtitle="Manage and track your tasks efficiently">
          My Tasks
        </PageTitle>

        {isLoading && <LoadingState />}

        {error && (
          <ErrorState
            message={error.message || "Failed to load tasks"}
            onRetry={() => refetch()}
          />
        )}

        {tasks && !isLoading && !error && <TaskList tasks={tasks} />}
      </div>
    </Container>
  );
}
