"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
            <span className="relative grid h-9 w-9 place-items-center border border-cyan-400/70 font-display text-sm font-bold text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-ink">
              RC
            </span>
            <span className="hidden font-display text-[0.95rem] font-semibold tracking-tight sm:block">
              Ryan Carpentier
            </span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-2 text-sm transition-colors ${
                  isActive(item.href) ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-cyan-400 transition-all duration-500 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden items-center gap-2 border border-white/20 px-4 py-2 text-sm transition-colors hover:border-cyan-400 hover:bg-cyan-400 hover:text-ink md:inline-flex"
          >
            Let&apos;s talk
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-10 w-10 place-items-center md:hidden"
          >
            <span
              className={`absolute h-px w-6 bg-white transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-white transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-5 pb-10 pt-28 md:hidden"
          >
            <div className="grid-bg absolute inset-0 opacity-60" />
            <nav className="relative flex flex-col gap-2" aria-label="Mobile">
              {[{ href: "/", label: "Home" }, ...nav].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-4xl font-semibold tracking-tight ${
                      pathname === item.href ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p className="eyebrow relative">{site.location}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
