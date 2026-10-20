import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
};

export function ButtonLink({ href, children, variant = "solid" }: ButtonProps) {
  const styles =
    variant === "solid"
      ? "bg-cyan-400 text-ink hover:bg-white"
      : "border border-white/25 text-white hover:border-cyan-400 hover:text-cyan-400";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-colors ${styles}`}
    >
      {children}
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className="max-w-4xl">
      <p className={tone === "dark" ? "eyebrow" : "eyebrow-dark"}>{eyebrow}</p>
      <h2 className="mt-5 font-display text-display-md font-semibold">{title}</h2>
      {lead && (
        <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${tone === "dark" ? "text-white/60" : "text-ink/65"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-40 md:pb-28 md:pt-52">
      <div className="grid-bg absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="container-x relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-display-lg font-semibold">{title}</h1>
        {lead && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">{lead}</p>}
      </div>
    </section>
  );
}
