import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  backgroundColor?: "white" | "gray" | "blue" | "dark";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, backgroundColor = "white", id, ...props }, ref) => {
    const bgClasses = {
      white: "bg-white",
      gray: "bg-gray-50",
      blue: "bg-gradient-to-r from-blue-50 to-indigo-50",
      dark: "bg-gray-900 text-white"
    };

    return (
      <section
        id={id}
        className={cn(
          bgClasses[backgroundColor],
          "py-16",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section };