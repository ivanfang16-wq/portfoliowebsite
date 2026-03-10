interface SectionHeaderProps {
  label: string;
  title: string;
  center?: boolean;
}

export default function SectionHeader({ label, title, center = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-600 text-[#3a5f8a]">
        {label}
      </span>
      <h2 className="mt-2 text-3xl font-bold text-charcoal tracking-tight text-[#1a1a2e]">
        {title}
      </h2>
      <div className={`mt-4 h-px w-12 bg-[#3a5f8a]/40 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
