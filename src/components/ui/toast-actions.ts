export type ToastItem = {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  duration?: number;
};

export interface ToastFunctionProps {
  title?: string;
  description?: string;
  variant?: ToastItem["variant"];
  duration?: number;
}

const listeners = new Set<() => void>();
let toasts: ToastItem[] = [];

export function getToasts(): ToastItem[] {
  return [...toasts];
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function toast(props: ToastFunctionProps) {
  const id = Math.random().toString(36).slice(2);
  toasts = [
    ...toasts,
    {
      id,
      title: props.title,
      description: props.description,
      variant: props.variant || "default",
      duration: props.duration,
    },
  ];
  listeners.forEach((l) => l());
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    listeners.forEach((l) => l());
  }, props.duration || 3500);
}
