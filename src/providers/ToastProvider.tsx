"use client";

import { Toaster } from "sonner";

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
