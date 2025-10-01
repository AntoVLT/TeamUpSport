import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" };

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium focus:outline-none rounded-md";
  const styles = variant === "secondary"
    ? "bg-transparent border border-white/20 text-white"
    : "bg-white text-black";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
