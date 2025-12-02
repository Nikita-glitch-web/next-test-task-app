"use client";

import { useMemo, useState, useEffect } from "react";
import { useTasks } from "@/hooks/queries/useTasks";
import { TaskBoard } from "@/components/tasks/TaskBoard";
import { TaskSearch } from "@/components/tasks/TaskSearch";
import { TaskStatusTabs } from "@/components/tasks/TaskStatusTabs";
import { TaskProgressBar } from "@/components/tasks/TaskProgressBar";
import { TaskSortSelect, SortOption } from "@/components/tasks/TaskSortSelect";
import { TaskStatsCards } from "@/components/tasks/TaskStatsCards";
import { TaskPriorityFilter } from "@/components/tasks/TaskPriorityFilter";
import { LoadingState } from "@/components/common/LoadingState";
import { ErrorState } from "@/components/common/ErrorState";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { TaskStatus, TaskPriority } from "@/types/task";
import { useToast } from "@/hooks/useToast";

export default function Home() {
  const { data: tasks, isLoading, error, refetch } = useTasks();
  const toast = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | "all">(
    "all"
  );
  const [selectedPriority, setSelectedPriority] = useState<
    TaskPriority | "all"
  >("all");
  const [sortBy, setSortBy] = useState<SortOption>("date-newest");
  const [hasShownSuccessToast, setHasShownSuccessToast] = useState(false);

  // Show success toast when tasks load successfully (only once)
  useEffect(() => {
    if (
      tasks &&
      tasks.length > 0 &&
      !isLoading &&
      !error &&
      !hasShownSuccessToast
    ) {
      toast.success("Tasks loaded successfully", `${tasks.length} tasks found`);
      setHasShownSuccessToast(true);
    }
  }, [tasks, isLoading, error, hasShownSuccessToast, toast]);

  // Show error toast when there's an error
  useEffect(() => {
    if (error) {
      toast.error("Failed to load tasks", error.message);
    }
  }, [error, toast]);

  // Filter, search, and sort tasks
  const filteredTasks = useMemo(() => {
    if (!tasks) return [];

    let filtered = tasks;

    // Filter by status
    if (selectedStatus !== "all") {
      filtered = filtered.filter((task) => task.status === selectedStatus);
    }

    // Filter by priority
    if (selectedPriority !== "all") {
      filtered = filtered.filter((task) => task.priority === selectedPriority);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(query) ||
          task.description.toLowerCase().includes(query)
      );
    }

    // Sort tasks
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date-newest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case "date-oldest":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "priority":
          const priorityOrder = { urgent: 4, high: 3, medium: 2, low: 1 };
          return (
            (priorityOrder[b.priority || "medium"] || 0) -
            (priorityOrder[a.priority || "medium"] || 0)
          );
        default:
          return 0;
      }
    });

    return sorted;
  }, [tasks, selectedStatus, selectedPriority, searchQuery, sortBy]);

  const taskCounts = useMemo(() => {
    if (!tasks) return undefined;

    return tasks.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {} as Record<TaskStatus, number>);
  }, [tasks]);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">My Tasks</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        {/* Theme Toggle for Mobile */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>

      {/* Task Statistics Cards */}
      {tasks && tasks.length > 0 && <TaskStatsCards tasks={tasks} />}

      {/* Progress Bar */}
      {tasks && tasks.length > 0 && (
        <div className="bg-card rounded-lg border border-border p-4 sm:p-6">
          <h2 className="text-sm font-semibold mb-4">Overall Progress</h2>
          <TaskProgressBar tasks={tasks} />
        </div>
      )}

      {/* Search Bar, Sort, and Priority Filter */}
      {tasks && tasks.length > 0 && (
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <TaskSearch
            value={searchQuery}
            onChange={(value) => {
              setSearchQuery(value);
              if (value.trim()) {
                toast.info("Searching...", `Looking for "${value}"`);
              }
            }}
            placeholder="Search by title or description..."
          />
          <TaskSortSelect
            value={sortBy}
            onChange={(value) => {
              setSortBy(value);
              const sortLabels: Record<SortOption, string> = {
                "date-newest": "Date (Newest First)",
                "date-oldest": "Date (Oldest First)",
                "title-asc": "Title (A-Z)",
                "title-desc": "Title (Z-A)",
                priority: "Priority (High to Low)",
              };
              toast.success("Sort applied", sortLabels[value]);
            }}
          />
          <TaskPriorityFilter
            value={selectedPriority}
            onChange={(priority) => {
              setSelectedPriority(priority);
              const priorityLabels = {
                all: "All Priorities",
                urgent: "Urgent Priority",
                high: "High Priority",
                medium: "Medium Priority",
                low: "Low Priority",
              };
              toast.info("Priority filter", priorityLabels[priority]);
            }}
          />
          {(searchQuery ||
            selectedStatus !== "all" ||
            selectedPriority !== "all" ||
            sortBy !== "date-newest") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedStatus("all");
                setSelectedPriority("all");
                setSortBy("date-newest");
                toast.success("Filters cleared", "Showing all tasks");
              }}
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground whitespace-nowrap"
            >
              Clear filters
            </button>
          )}
        </div>
      )}

      {/* Status Filter Tabs */}
      {tasks && tasks.length > 0 && (
        <TaskStatusTabs
          selectedStatus={selectedStatus}
          onStatusChange={(status) => {
            setSelectedStatus(status);
            const statusLabels = {
              all: "All Tasks",
              "to-do": "To Do",
              "in-progress": "In Progress",
              review: "Review",
              completed: "Completed",
            };
            toast.info("Filter applied", `Showing ${statusLabels[status]}`);
          }}
          taskCounts={taskCounts}
        />
      )}

      {isLoading && <LoadingState />}

      {error && (
        <ErrorState
          message={error.message || "Failed to load tasks"}
          onRetry={() => refetch()}
        />
      )}

      {tasks && !isLoading && !error && (
        <>
          {filteredTasks.length > 0 ? (
            <TaskBoard tasks={filteredTasks} />
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500">
                {searchQuery
                  ? `No tasks found matching "${searchQuery}"`
                  : "No tasks found for this status"}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
