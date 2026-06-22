"use client";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex min-h-[120px] w-full rounded-2xl border border-border/80 bg-white/85 px-4 py-3 text-sm text-foreground shadow-[0_10px_22px_rgba(20,52,42,0.05)] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
  {
    variants: {
      variant: {
        default: "border-input",
        brand: "border-border/80 focus:ring-ring",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

function Textarea({ className, label, error, ...props }: TextareaProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          textareaVariants({ className }),
          error && "border-destructive focus-visible:ring-destructive"
        )}
        {...props}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

export { Textarea };
