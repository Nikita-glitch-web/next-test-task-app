"use client";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  message = "Something went wrong. Please try again.",
  onRetry,
}: ErrorStateProps) {
  const toast = useToast();

  const handleRetry = () => {
    if (onRetry) {
      toast.info("Retrying...", "Attempting to reload data");
      onRetry();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[400px] p-4">
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="mt-2">{message}</AlertDescription>
        {onRetry && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleRetry}
            className="mt-4"
          >
            Try Again
          </Button>
        )}
      </Alert>
    </div>
  );
}
