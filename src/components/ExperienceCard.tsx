interface ExperienceCardProps {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export default function ExperienceCard({
  company,
  role,
  location,
  period,
  bullets,
}: ExperienceCardProps) {
  return (
    <div className="group relative border border-slate-200 rounded-xl p-6 bg-white hover:border-[#3a5f8a]/40 hover:shadow-md transition-all duration-300">
      {/* Side accent line on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#3a5f8a] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-[#1a1a2e]">{company}</h3>
          <p className="text-sm text-[#3a5f8a] font-medium">{role}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-xs font-mono text-slate-500">{period}</p>
          <p className="text-xs text-slate-400">{location}</p>
        </div>
      </div>
      <ul className="space-y-2">
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
