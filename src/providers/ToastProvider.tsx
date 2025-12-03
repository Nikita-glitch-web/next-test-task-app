"use client";

import { Toaster } from "sonner";

/**
 * Toast Provider Component
 * Wraps the app with Sonner toast notifications
 */
export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      expand={false}
      richColors
      closeButton
      duration={3000}
      toastOptions={{
        style: {
          background: "white",
          border: "1px solid #e5e7eb",
          color: "#111827",
        },
        className: "toast",
      }}
    />
  );
}
