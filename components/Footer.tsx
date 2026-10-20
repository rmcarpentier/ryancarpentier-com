import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div className="container-x pb-10 pt-24">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">Have a build in mind?</p>
            <Link
              href="/contact"
              className="group mt-5 block font-display text-display-lg font-semibold"
            >
              Let&apos;s build{" "}
              <span className="text-cyan-400 transition-all group-hover:tracking-tight">
                something.
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <p className="eyebrow mb-5">Navigate</p>
              <ul className="space-y-3 text-white/65">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-cyan-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5">Based in</p>
              <p className="text-white/65">{site.location}</p>
              <p className="mt-3 text-white/40">Projects nationwide</p>
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-white/65 transition-colors hover:text-cyan-400"
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/35 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>{site.domain}</span>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-bold leading-none text-white/[0.025]"
      >
        CARPENTIER
      </div>
    </footer>
  );
}
