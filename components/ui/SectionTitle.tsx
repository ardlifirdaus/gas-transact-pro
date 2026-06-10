interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-16 ${alignClass}`}>
      <span className="text-primary text-sm font-semibold tracking-widest uppercase">
        {eyebrow}
      </span>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
