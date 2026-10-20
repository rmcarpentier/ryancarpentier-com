import Link from "next/link";
import { Counter } from "@/components/Counter";
import { LifecycleTracker } from "@/components/LifecycleTracker";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, SectionHeading, Arrow } from "@/components/ui";
import { experience } from "@/lib/experience";
import { featuredProjects } from "@/lib/projects";
import { phases } from "@/lib/phases";
import { site, stats } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-14 pt-32 md:pb-20">
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_40%,black,transparent_75%)]" />
        <div className="absolute -right-32 top-10 h-[40rem] w-[40rem] rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyan-400/60 via-white/10 to-transparent" />

        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-400" />
              {site.role} · {site.location}
            </p>
          </Reveal>

          <h1 className="mt-8 font-display text-display-xl font-semibold">
            <Reveal as="div" delay={0.05} y={60}>
              <span className="block">Lease to</span>
            </Reveal>
            <Reveal as="div" delay={0.15} y={60}>
              <span className="block">
                launch<span className="text-cyan-400">.</span>
              </span>
            </Reveal>
            <Reveal as="div" delay={0.25} y={60}>
              <span className="text-outline block">Every step.</span>
            </Reveal>
          </h1>

          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[1.2fr_1fr] md:items-end">
            <Reveal delay={0.4}>
              <p className="max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">
                I&apos;m Ryan — a construction and project management leader with 10+ years taking
                restaurants, retail stores and veterinary hospitals from the first site walk to
                grand opening. Not one phase. All of them.
              </p>
            </Reveal>
            <Reveal delay={0.5} className="flex flex-wrap gap-3 md:justify-end">
              <ButtonLink href="/work">View the work</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Get in touch
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee
        items={["Site Selection", "Lease Review", "Design & Layout", "Permitting", "Bidding", "Construction", "Grand Opening"]}
      />

      {/* STATS */}
      <section className="container-x py-24 md:py-32">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-t border-white/15 pt-6">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-6xl font-semibold tracking-tighter md:text-7xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="mt-4 block font-medium">{s.label}</span>
                  <span className="mt-1 block text-sm text-white/45">{s.note}</span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* THE DIFFERENTIATOR — light section */}
      <section className="relative bg-paper text-ink">
        <div className="grid-bg-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
        <div className="container-x relative py-24 md:py-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="What sets this work apart"
                title={
                  <>
                    Most project managers own a phase.{" "}
                    <span className="text-cyan-600">I&apos;ve owned the whole build.</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-ink/70 md:text-xl">
                From the moment a franchisee signed an agreement, I was in every step until the doors
                opened — walking sites with brokers, reviewing leases, drawing the first test-fit,
                directing architects, running the RFP, leading OAC meetings and standing in the
                finished space on opening day.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink/70 md:text-xl">
                That end-to-end view is why my projects open on time, hold budget and stay on brand.
                Every decision upstream is made knowing what it costs downstream.
              </p>
              <Link
                href="/process"
                className="group mt-10 inline-flex items-center gap-3 border-b border-ink pb-1 text-sm font-medium transition-colors hover:border-cyan-600 hover:text-cyan-700"
              >
                See how each phase works
                <Arrow className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Reveal className="mt-20 md:mt-28" delay={0.1}>
            <LifecycleTracker tone="light" />
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="container-x py-24 md:py-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading eyebrow="Selected work" title="Projects, start to finish." />
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/work" className="group inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-cyan-400">
              All projects <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-20 md:grid-cols-2">
          {featuredProjects.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <ProjectCard project={p} index={i} aspect={i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="border-t border-white/10 bg-ink-2">
        <div className="container-x py-24 md:py-32">
          <Reveal>
            <SectionHeading eyebrow="Experience" title="Where the work happened." />
          </Reveal>
          <ul className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {experience.map((role, i) => (
              <Reveal as="li" key={role.company} delay={i * 0.06}>
                <Link
                  href="/experience"
                  className="group grid items-center gap-4 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[1.2fr_1.2fr_auto] md:gap-10 md:px-4"
                >
                  <h3 className="font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-cyan-400 md:text-4xl">
                    {role.company}
                  </h3>
                  <p className="text-white/55">
                    {role.title}
                    <span className="ml-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/30">
                      {role.sector}
                    </span>
                  </p>
                  <Arrow className="hidden h-5 w-5 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-cyan-400 md:block" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-400" />
        <div className="grid-bg-dark absolute inset-0 opacity-70" />
        <div className="container-x relative py-24 text-ink md:py-32">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink/70">
              {phases.length} phases · one accountable lead
            </p>
            <h2 className="mt-6 max-w-4xl font-display text-display-lg font-semibold">
              Got a build that needs an owner from start to finish?
            </h2>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Start a conversation
              <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
