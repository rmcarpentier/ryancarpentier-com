export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink-2 py-6" aria-hidden>
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-12 font-display text-2xl font-semibold tracking-tight text-white/70">
            {item}
            <span className="h-1.5 w-1.5 rotate-45 bg-cyan-400" />
          </span>
        ))}
      </div>
    </div>
  );
}
