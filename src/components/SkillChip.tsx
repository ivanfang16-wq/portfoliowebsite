interface SkillChipProps {
  label: string;
  variant?: "primary" | "secondary" | "light";
}

export default function SkillChip({ label, variant = "primary" }: SkillChipProps) {
  const styles = {
    primary: "bg-[#3a5f8a]/10 text-[#3a5f8a] border border-[#3a5f8a]/20",
    secondary: "bg-slate-100 text-slate-600 border border-slate-200",
    light: "bg-white text-slate-500 border border-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
