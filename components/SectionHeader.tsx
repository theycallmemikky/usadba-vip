interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
          style={{ color: "var(--color-gold)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "var(--color-text-muted)" }}
        >
          {subtitle}
        </p>
      )}
      <div className="gold-divider mt-8 max-w-24 mx-auto" />
    </div>
  );
}
