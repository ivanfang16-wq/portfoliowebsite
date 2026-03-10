interface ProjectCardProps {
  title: string;
  role: string;
  period: string;
  bullets: string[];
}

export default function ProjectCard({ title, role, period, bullets }: ProjectCardProps) {
  return (
    <div className="group relative border border-slate-200 rounded-xl p-6 bg-white hover:border-[#3a5f8a]/40 hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Top accent bar */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#3a5f8a] to-[#6b9bc7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-base font-semibold text-[#1a1a2e] leading-snug">{title}</h3>
          <p className="text-sm text-[#3a5f8a] font-medium">{role}</p>
        </div>
        <span className="text-xs font-mono text-slate-400 whitespace-nowrap pt-0.5">{period}</span>
      </div>
      <ul className="space-y-2 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
            <span className="mt-1.5 size-1.5 rounded-full bg-[#3a5f8a]/60 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
