import { type LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  iconBg?: string;
  iconColor?: string;
}

export default function MetricCard({
  icon: Icon,
  label,
  value,
  iconBg = "bg-primary/10",
  iconColor = "text-primary",
}: MetricCardProps) {
  return (
    <div className="bg-secondary border border-brand-border rounded-xl p-4 flex items-center gap-3">
      <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div>
        <p className="text-xs text-muted">{label}</p>
        <p className="text-white font-bold text-sm mt-0.5">{value}</p>
      </div>
    </div>
  );
}
