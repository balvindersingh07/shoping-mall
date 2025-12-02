import React from "react";
import { cn } from "@/lib/utils";

interface AstraButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  children: React.ReactNode;
}

export const AstraButton: React.FC<AstraButtonProps> = ({
  variant = "primary",
  size = "md",
  glow = true,
  className,
  children,
  ...props
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700",
    secondary:
      "bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700",
    tertiary:
      "bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700",
    outline:
      "border-2 border-gradient text-primary hover:bg-blue-50 rounded-full",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        variants[variant],
        sizes[size],
        "rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95",
        glow && "shadow-glow hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
