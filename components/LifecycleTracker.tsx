"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { phases, type PhaseId } from "@/lib/phases";

type Props = {
  /**
   * Project-specific notes keyed by phase. When provided, phases without a note
   * are shown dimmed ("not involved"); when omitted, every phase is lit and the
   * generic description is shown.
   */
  notes?: Partial<Record<PhaseId, string>>;
  tone?: "dark" | "light";
};

export function LifecycleTracker({ notes, tone = "dark" }: Props) {
  const firstActive = notes ? phases.find((p) => notes[p.id])?.id ?? phases[0].id : phases[0].id;
  const [selected, setSelected] = useState<PhaseId>(firstActive);
  const current = phases.find((p) => p.id === selected)!;
  const light = tone === "light";
  const involved = (id: PhaseId) => (notes ? Boolean(notes[id]) : true);
  const count = notes ? phases.filter((p) => notes[p.id]).length : phases.length;

  return (
    <div>
      {notes && (
        <p className={`mb-6 font-mono text-xs uppercase tracking-[0.2em] ${light ? "text-ink/50" : "text-white/45"}`}>
          Involved in <span className="text-cyan-400">{count} of {phases.length}</span> phases
        </p>
      )}

      <div className="relative">
        <div
          className={`absolute left-0 right-0 top-[1.15rem] hidden h-px md:block ${light ? "bg-ink/15" : "bg-white/12"}`}
        />
        <ol className="relative grid grid-cols-4 gap-y-8 md:grid-cols-7 md:gap-y-0">
          {phases.map((p) => {
            const on = involved(p.id);
            const isSel = selected === p.id;
            return (
              <li key={p.id} className="flex flex-col items-start md:items-center">
                <button
                  type="button"
                  onClick={() => setSelected(p.id)}
                  onMouseEnter={() => on && setSelected(p.id)}
                  onFocus={() => on && setSelected(p.id)}
                  disabled={!on}
                  aria-pressed={isSel}
                  className="group flex flex-col items-start gap-3 text-left disabled:cursor-not-allowed md:items-center md:text-center"
                >
                  <span
                    className={`relative grid h-[2.3rem] w-[2.3rem] place-items-center rounded-full border font-mono text-[0.7rem] transition-all duration-300 ${
                      isSel
                        ? "scale-110 border-cyan-400 bg-cyan-400 text-ink"
                        : on
                          ? light
                            ? "border-ink/40 bg-paper text-ink group-hover:border-cyan-600"
                            : "border-white/40 bg-ink text-white group-hover:border-cyan-400"
                          : light
                            ? "border-ink/15 bg-paper text-ink/25"
                            : "border-white/12 bg-ink text-white/20"
                    }`}
                  >
                    {p.index}
                    {isSel && (
                      <span className="absolute inset-0 animate-pulse-dot rounded-full ring-2 ring-cyan-400/40 ring-offset-2 ring-offset-transparent" />
                    )}
                  </span>
                  <span
                    className={`text-[0.78rem] font-medium leading-tight transition-colors ${
                      isSel
                        ? "text-cyan-400"
                        : on
                          ? light
                            ? "text-ink/80"
                            : "text-white/80"
                          : light
                            ? "text-ink/25"
                            : "text-white/25"
                    }`}
                  >
                    {p.short}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div
        className={`mt-10 min-h-[11rem] border p-6 md:p-8 ${
          light ? "border-ink/12 bg-white/50" : "border-white/10 bg-white/[0.02]"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-12"
          >
            <div>
              <p className={light ? "eyebrow-dark" : "eyebrow"}>Phase {current.index}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">{current.title}</h3>
            </div>
            <div>
              <p className={`text-lg leading-relaxed ${light ? "text-ink/75" : "text-white/75"}`}>
                {notes?.[current.id] ?? current.summary}
              </p>
              {!notes && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {current.involvement.map((item) => (
                    <li
                      key={item}
                      className={`border px-3 py-1.5 text-xs ${
                        light ? "border-ink/15 text-ink/65" : "border-white/12 text-white/60"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
