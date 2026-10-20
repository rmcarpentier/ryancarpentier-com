import Link from "next/link";
import { phases } from "@/lib/phases";
import type { Project } from "@/lib/projects";
import { ProjectImage } from "./ProjectImage";
import { Arrow } from "./ui";

export function ProjectCard({
  project,
  index,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  project: Project;
  index?: number;
  className?: string;
  aspect?: string;
}) {
  return (
    <Link href={`/work/${project.slug}`} className={`group block ${className}`}>
      <div className="relative overflow-hidden">
        <ProjectImage image={project.cover} className={aspect} quiet />
        <span className="absolute left-4 top-4 border border-white/20 bg-ink/70 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          {project.sector}
        </span>
        <span className="absolute bottom-4 right-4 grid h-12 w-12 translate-y-3 place-items-center bg-cyan-400 text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Arrow className="-rotate-45" />
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/40">
            {index !== undefined && <span className="mr-3 text-cyan-400">{String(index + 1).padStart(2, "0")}</span>}
            {project.client}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-cyan-400 md:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/55">{project.blurb}</p>
        </div>
      </div>

      {/* mini lifecycle bar: which of the 7 phases were owned */}
      <div className="mt-5 flex items-center gap-1" aria-label={`Involved in ${Object.keys(project.phases).length} of 7 phases`}>
        {phases.map((p) => (
          <span
            key={p.id}
            title={p.title}
            className={`h-[3px] flex-1 transition-colors ${project.phases[p.id] ? "bg-cyan-400" : "bg-white/12"}`}
          />
        ))}
      </div>
    </Link>
  );
}
