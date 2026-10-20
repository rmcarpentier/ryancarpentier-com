import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80svh] flex-col items-start justify-center pt-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-5 font-display text-display-lg font-semibold">
        This page isn&apos;t <span className="text-cyan-400">on the plans.</span>
      </h1>
      <div className="mt-10">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </section>
  );
}
