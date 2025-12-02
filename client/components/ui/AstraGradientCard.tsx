import React from "react";
import { cn } from "@/lib/utils";

interface AstraGradientCardProps {
  children: React.ReactNode;
  gradient?: "primary" | "secondary" | "tertiary";
  className?: string;
  onClick?: () => void;
}

export const AstraGradientCard: React.FC<AstraGradientCardProps> = ({
  children,
  gradient = "primary",
  className,
  onClick,
}) => {
  const gradients = {
    primary: "bg-gradient-to-br from-blue-500 to-purple-600",
    secondary: "bg-gradient-to-br from-purple-500 to-pink-600",
    tertiary: "bg-gradient-to-br from-teal-500 to-blue-600",
  };

  return (
    <div
      className={cn(
        gradients[gradient],
        "rounded-3xl p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
