import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, PageHeader } from "@/components/ui";
import { experience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "A decade across restaurant, veterinary, retail and experiential construction and project management.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            A decade of <span className="text-cyan-400">getting things built.</span>
          </>
        }
        lead="Roles across franchise restaurants, veterinary hospitals, fresh-food retail and brand experiences — each one deeper into the full construction lifecycle."
      />

      <section className="container-x py-20 md:py-28">
        <ol className="space-y-px bg-white/10">
          {experience.map((role, i) => (
            <Reveal as="li" key={role.company} className="bg-ink">
              <article className="grid gap-10 py-14 lg:grid-cols-[0.9fr_1.6fr] lg:gap-20 lg:py-20">
                <header>
                  <p className="font-mono text-xs text-cyan-400">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">{role.company}</h2>
                  <p className="mt-3 text-lg text-white/80">{role.title}</p>
                  <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/40">
                    {[role.sector, role.period, role.location].filter(Boolean).join(" · ")}
                  </p>

                  <dl className="mt-10 grid grid-cols-2 gap-6">
                    {role.metrics.map((m) => (
                      <div key={m.label} className="border-t border-white/15 pt-4">
                        <dd className="font-display text-3xl font-semibold tracking-tighter text-cyan-400">{m.value}</dd>
                        <dt className="mt-1 text-xs leading-snug text-white/50">{m.label}</dt>
                      </div>
                    ))}
                  </dl>
                </header>

                <div>
                  <p className="text-xl leading-relaxed text-white/75 md:text-2xl md:leading-snug">{role.summary}</p>
                  <ul className="mt-10 space-y-4">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex gap-4 text-white/60">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-cyan-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-white/10 bg-ink-2">
        <div className="container-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-display-md font-semibold">
            Want the full picture? <span className="text-cyan-400">Let&apos;s talk.</span>
          </h2>
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </div>
      </section>
    </>
  );
}
