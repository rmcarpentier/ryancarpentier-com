"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage as ProjectImageType } from "@/lib/projects";
import { ProjectImage } from "./ProjectImage";
import { Reveal } from "./Reveal";

type Props = {
  images: ProjectImageType[];
  /** "photos" crops to a tidy grid; "documents" shows pages and plans uncropped. */
  variant?: "photos" | "documents";
};

export function Gallery({ images, variant = "photos" }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const viewable = images.map((img, i) => ({ img, i })).filter(({ img }) => img.src);

  const step = useCallback(
    (dir: 1 | -1) => {
      setOpen((cur) => {
        if (cur === null) return cur;
        const pos = viewable.findIndex((v) => v.i === cur);
        return viewable[(pos + dir + viewable.length) % viewable.length].i;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [images],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  const docs = variant === "documents";
  const single = docs && images.length === 1;

  const gridClass = docs
    ? "grid gap-4 md:grid-cols-6"
    : "grid gap-4 md:auto-rows-[clamp(15rem,26vw,26rem)] md:grid-cols-3";

  const cellClass = (img: ProjectImageType) => {
    if (!docs) return `group h-full ${img.size === "wide" ? "md:col-span-2" : ""}`;
    if (single) return "group md:col-span-4 md:col-start-2";
    return `group ${img.orientation === "portrait" ? "md:col-span-2" : "md:col-span-3"}`;
  };

  const frameClass = (img: ProjectImageType) => {
    if (!docs) return "aspect-[4/3] w-full md:aspect-auto md:h-full";
    return img.orientation === "portrait" ? "aspect-[4/5] w-full" : "aspect-[3/2] w-full";
  };

  const current = open !== null ? images[open] : null;

  return (
    <>
      <div className={gridClass}>
        {images.map((img, i) => (
          <Reveal key={img.caption} delay={(i % 3) * 0.06} className={cellClass(img)}>
            {img.src ? (
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Enlarge: ${img.caption}`}
                className="relative block h-full w-full cursor-zoom-in text-left"
              >
                <ProjectImage
                  image={img}
                  className={frameClass(img)}
                  sizes={docs ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                  quiet
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-4 pb-3 pt-10 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.caption}
                </span>
              </button>
            ) : (
              <ProjectImage image={img} className={frameClass(img)} />
            )}
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {current?.src && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <div className="flex items-center justify-between px-5 py-4 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/60 md:px-8">
              <span>
                {String(viewable.findIndex((v) => v.i === open) + 1).padStart(2, "0")} /{" "}
                {String(viewable.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="px-2 py-1 transition-colors hover:text-cyan-400"
                aria-label="Close"
              >
                Close ✕
              </button>
            </div>

            <div className="relative min-h-0 flex-1" onClick={(e) => e.stopPropagation()}>
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain px-4 md:px-20"
                priority
              />
              {viewable.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous"
                    className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-ink/70 text-xl text-white transition-colors hover:bg-cyan-400 hover:text-ink md:left-6"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next"
                    className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-ink/70 text-xl text-white transition-colors hover:bg-cyan-400 hover:text-ink md:right-6"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            <p className="px-5 py-5 text-center text-sm text-white/70 md:px-8">{current.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
