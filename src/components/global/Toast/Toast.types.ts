// Interfaces and types from component Toast

// Component Props
export interface ToastProps {}

export interface ToastOptions {
  message: string;
  duration?: number;
  type?: ToastType;
}

export type ToastType = "success" | "error" | "warning" | "info";
