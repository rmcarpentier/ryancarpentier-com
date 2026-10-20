import Image from "next/image";
import type { ProjectImage as ProjectImageType } from "@/lib/projects";

type Props = {
  image: ProjectImageType;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Hide the caption chip inside the frame. */
  quiet?: boolean;
  tone?: "dark" | "light";
};

/**
 * Renders the real photo when `image.src` is set, otherwise a blueprint-style
 * placeholder so layouts can be judged before photography is added.
 */
export function ProjectImage({
  image,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  quiet,
  tone = "dark",
}: Props) {
  if (image.src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          style={image.focus ? { objectPosition: image.focus } : undefined}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  const light = tone === "light";
  return (
    <div
      role="img"
      aria-label={`${image.alt} (placeholder)`}
      className={`relative overflow-hidden ${
        light ? "bg-paper-2" : "bg-gradient-to-br from-ink-3 via-ink-2 to-ink"
      } ${className}`}
    >
      <div className={`absolute inset-0 ${light ? "grid-bg-dark" : "grid-bg"}`} />
      <div
        className={`absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] ${
          light ? "" : "bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.14),transparent_55%)]"
        }`}
      />
      {/* corner registration marks */}
      {["left-3 top-3 border-l border-t", "right-3 top-3 border-r border-t", "left-3 bottom-3 border-b border-l", "right-3 bottom-3 border-b border-r"].map(
        (pos) => (
          <span
            key={pos}
            className={`absolute h-4 w-4 ${pos} ${light ? "border-ink/40" : "border-cyan-400/60"}`}
          />
        ),
      )}
      <svg
        className={`absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 ${
          light ? "text-ink/30" : "text-cyan-400/50"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="m4 18 5-5 4 4 3-3 4 4" />
      </svg>
      {!quiet && (
        <span
          className={`absolute bottom-4 left-5 font-mono text-[0.62rem] uppercase tracking-[0.2em] ${
            light ? "text-ink/55" : "text-white/45"
          }`}
        >
          Image · {image.caption}
        </span>
      )}
    </div>
  );
}
