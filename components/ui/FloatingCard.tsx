import { type ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingCard({
  children,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`bg-secondary border border-brand-border rounded-xl p-4 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
