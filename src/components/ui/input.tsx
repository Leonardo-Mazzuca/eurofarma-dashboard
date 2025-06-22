import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = {
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
} & React.ComponentProps<"input">;
function Input({ suffixIcon, prefixIcon, className, type, ...props }: InputProps) {
  return (
    <div className="relative">
      <div>
        {prefixIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {prefixIcon}
          </span>
        )}
      </div>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          suffixIcon && "pr-10",
          prefixIcon && "pl-10",
          className
        )}
        {...props}
      />
      <div>
        {suffixIcon && (
          <span className="z-50 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {suffixIcon}
          </span>
        )}
      </div>
    </div>
  );
}

export { Input };
