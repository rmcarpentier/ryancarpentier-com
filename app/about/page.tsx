import type { Metadata } from "next";
import { ProjectImage } from "@/components/ProjectImage";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Construction management leader with a graphic-design edge, based in Tennessee.",
};

const strengths = [
  { title: "Owner mentality", body: "I stay with a project from the first site walk to grand opening, so nothing is lost in a hand-off." },
  { title: "Design speed", body: "A graphic design background means test-fits and layouts in hours — faster than a traditional plan cycle." },
  { title: "Procurement leverage", body: "Nationwide equipment programs, guaranteed inventory and custom products negotiated at portfolio scale." },
  { title: "Systems builder", body: "From a 210-page Construction Guidebook to modular prefab kits, I turn one-offs into repeatable playbooks." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            I build the thing <span className="text-cyan-400">and the process behind it.</span>
          </>
        }
      />

      <section className="container-x grid gap-16 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <ProjectImage
            image={{ alt: "Portrait of Ryan Carpentier", caption: "Portrait — add /public/ryan.jpg", size: "tall" }}
            className="aspect-[4/5] w-full"
          />
          <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/35">{site.location}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-[2rem]">
            I&apos;m a {site.role.toLowerCase()} with more than ten years of experience delivering
            restaurants, retail stores and veterinary hospitals across the country.
          </p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/60">
            <p>
              What people often miss about my work is how much of the construction process I&apos;ve
              touched. I&apos;ve walked sites with brokers, reviewed leases, drawn the first test-fit,
              directed architects, run RFPs, led OAC meetings and stood in the finished space on
              opening day — across more than 30 openings in seven states.
            </p>
            <p>
              I also come from experiential marketing and graphic design, where I built pop-ups for brands
              like Bose, Behr and Schwarzkopf. That background still shapes how I work: I think about
              the customer&apos;s experience of a space as much as the schedule behind it.
            </p>
            <p>
              Today I lead construction for a multi-state veterinary platform, balancing new
              hospitals, replacements and acquisitions with the day-to-day improvements that keep
              teams productive.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 bg-ink-2">
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">How I work</p>
          </Reveal>
          <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.08} className="bg-ink-2 p-8 md:p-12">
                <span className="font-mono text-xs text-cyan-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-white/55">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center md:py-28">
        <h2 className="max-w-xl font-display text-display-md font-semibold">
          Let&apos;s talk about <span className="text-cyan-400">what&apos;s next.</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/experience" variant="ghost">
            Experience
          </ButtonLink>
          <ButtonLink href="/contact">Contact</ButtonLink>
        </div>
      </section>
    </>
  );
}
