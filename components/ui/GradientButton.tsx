import { type ReactNode } from "react";

interface GradientButtonProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "primary" | "outline";
  className?: string;
}

export default function GradientButton({
  href,
  children,
  external = false,
  variant = "primary",
  className = "",
}: GradientButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold transition-all duration-200 text-sm";
  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-primary/30",
    outline:
      "border border-brand-border hover:border-primary/50 text-muted hover:text-white",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
