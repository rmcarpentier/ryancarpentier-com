"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/projects";

export function WorkGrid({ projects, sectors }: { projects: Project[]; sectors: string[] }) {
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.sector === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by sector">
        {["All", ...sectors].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            aria-pressed={filter === s}
            className={`border px-5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] transition-colors ${
              filter === s
                ? "border-cyan-400 bg-cyan-400 text-ink"
                : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
            }`}
          >
            {s}
          </button>
        ))}
        <span className="ml-auto self-center font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/35">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <motion.div layout className="mt-14 grid gap-x-8 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} index={projects.indexOf(p)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-24 border border-dashed border-white/15 p-10 text-center">
        <p className="eyebrow">More coming</p>
        <p className="mx-auto mt-3 max-w-md text-white/50">
          New case studies are added as photography and documentation are finalized.
        </p>
      </div>
    </div>
  );
}
