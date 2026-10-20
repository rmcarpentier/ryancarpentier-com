import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LifecycleTracker } from "@/components/LifecycleTracker";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectImage } from "@/components/ProjectImage";
import { Reveal } from "@/components/Reveal";
import { Arrow, ButtonLink } from "@/components/ui";
import { getProject, projects } from "@/lib/projects";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.blurb };
}

const galleryAspect = {
  wide: "aspect-[16/9]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
} as const;

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 md:pt-44">
        <div className="grid-bg absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="container-x relative">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-cyan-400"
          >
            <Arrow className="rotate-180 transition-transform group-hover:-translate-x-1" /> All work
          </Link>
          <p className="eyebrow mt-10">
            {project.client} · {project.sector}
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-display-lg font-semibold">{project.title}</h1>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 md:grid-cols-4">
            {[
              ["Role", project.role],
              ["Location", project.location],
              ["Sector", project.sector],
              ["Scope", project.scope.slice(0, 2).join(" · ")],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/35">{k}</dt>
                <dd className="mt-2 text-[0.95rem] text-white/85">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="container-x relative mt-14">
          <ProjectImage image={project.cover} priority sizes="100vw" className="aspect-[16/9] w-full md:aspect-[21/9]" />
        </div>
      </section>

      {/* OVERVIEW + STATS */}
      <section className="container-x grid gap-16 py-24 md:py-32 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">Overview</p>
          <p className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight text-white/90 md:text-[2rem]">
            {project.overview}
          </p>
          <ul className="mt-10 flex flex-wrap gap-2">
            {project.scope.map((s) => (
              <li key={s} className="border border-white/15 px-3 py-1.5 text-xs text-white/60">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-px bg-white/10">
            {project.stats.map((s) => (
              <div key={s.label} className="bg-ink p-6 md:p-8">
                <dd className="font-display text-4xl font-semibold tracking-tighter text-cyan-400 md:text-5xl">{s.value}</dd>
                <dt className="mt-3 text-sm text-white/55">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* LIFECYCLE INVOLVEMENT */}
      <section className="relative bg-paper text-ink">
        <div className="container-x py-24 md:py-32">
          <Reveal>
            <p className="eyebrow-dark">Where I was involved</p>
            <h2 className="mt-5 max-w-3xl font-display text-display-md font-semibold">
              The build, <span className="text-cyan-600">phase by phase.</span>
            </h2>
          </Reveal>
          <Reveal className="mt-14" delay={0.1}>
            <LifecycleTracker tone="light" notes={project.phases} />
          </Reveal>
        </div>
      </section>

      {/* KEY AREAS */}
      <section className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Key contributions</p>
        </Reveal>
        <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-3">
          {project.keyAreas.map((k, i) => (
            <Reveal key={k.title} delay={i * 0.08} className="bg-ink p-8 md:p-10">
              <span className="font-mono text-xs text-cyan-400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{k.title}</h3>
              <p className="mt-4 leading-relaxed text-white/55">{k.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-x pb-24 md:pb-32">
        <Reveal>
          <p className="eyebrow">Gallery</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {project.gallery.map((img, i) => (
            <Reveal
              key={img.caption}
              delay={(i % 3) * 0.06}
              className={`group ${img.size === "wide" ? "md:col-span-2" : ""}`}
            >
              <ProjectImage
                image={img}
                className={`w-full ${galleryAspect[img.size ?? "square"]}`}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEXT / RELATED */}
      <section className="border-t border-white/10 bg-ink-2">
        <div className="container-x py-24">
          <Link href={`/work/${next.slug}`} className="group block">
            <p className="eyebrow">Next project</p>
            <p className="mt-5 font-display text-display-md font-semibold transition-colors group-hover:text-cyan-400">
              {next.title} <Arrow className="inline h-8 w-8 transition-transform group-hover:translate-x-2" />
            </p>
          </Link>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} aspect="aspect-[16/10]" />
            ))}
          </div>

          <div className="mt-20 flex flex-wrap gap-3">
            <ButtonLink href="/work" variant="ghost">
              All projects
            </ButtonLink>
            <ButtonLink href="/contact">Discuss a project</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
