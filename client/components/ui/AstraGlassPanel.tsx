import React from "react";
import { cn } from "@/lib/utils";

interface AstraGlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const AstraGlassPanel: React.FC<AstraGlassPanelProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white/60 backdrop-blur-lg rounded-2xl border border-white/20 shadow-glass p-6",
        className
      )}
    >
      {children}
    </div>
  );
};
