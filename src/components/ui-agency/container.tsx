import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth = "xl", ...props }, ref) => {
    const maxWidthClasses = {
      sm: "max-w-4xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      "2xl": "max-w-8xl"
    };

    return (
      <div
        className={cn(
          "mx-auto px-4",
          maxWidthClasses[maxWidth],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container };