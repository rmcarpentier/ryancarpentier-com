import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHeader, ButtonLink } from "@/components/ui";
import { phases } from "@/lib/phases";

export const metadata: Metadata = {
  title: "Process",
  description: "The seven phases of a build — and how one accountable lead carries a project through all of them.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title={
          <>
            Seven phases. <span className="text-cyan-400">One accountable lead.</span>
          </>
        }
        lead="Hand-offs are where budgets slip and schedules stall. I stay in the project from the first site walk to the ribbon cutting, so nothing gets lost between phases."
      />

      <section className="container-x py-20 md:py-32">
        <ol className="relative">
          {phases.map((p) => (
            <Reveal as="li" key={p.id} className="group relative grid gap-6 border-t border-white/10 py-14 first:border-t-0 md:grid-cols-[3rem_1fr] lg:grid-cols-[1fr_1.4fr_1.4fr] lg:gap-16 lg:py-20">
              <div className="flex items-start gap-6 lg:block">
                <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cyan-400 bg-ink font-mono text-xs text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-ink lg:hidden">
                  {p.index}
                </span>
                <span className="hidden font-display text-[7rem] font-semibold leading-none tracking-tighter text-outline transition-colors group-hover:text-cyan-400 lg:block">
                  {p.index}
                </span>
              </div>

              <div className="md:col-start-2 lg:col-start-auto">
                <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{p.title}</h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/60">{p.summary}</p>
              </div>

              <ul className="space-y-3 self-center md:col-start-2 lg:col-start-auto">
                {p.involvement.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-white/10 pb-3 text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-white/10 bg-ink-2">
        <div className="container-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-display-md font-semibold">
            See the process <span className="text-cyan-400">in action.</span>
          </h2>
          <ButtonLink href="/work">Browse projects</ButtonLink>
        </div>
      </section>
    </>
  );
}
