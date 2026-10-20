import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a role, a project or an advisory conversation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build <span className="text-cyan-400">something.</span>
          </>
        }
        lead="Hiring, consulting or just curious how a project could run start to finish? Send a note and I'll get back to you."
      />
      <section className="container-x grid gap-16 py-20 md:py-28 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
        <Reveal>
          <div className="space-y-10">
            <div>
              <p className="eyebrow">Based in</p>
              <p className="mt-3 text-xl">{site.location}</p>
              <p className="mt-1 text-white/45">Projects nationwide</p>
            </div>
            <div>
              <p className="eyebrow">Response time</p>
              <p className="mt-3 text-xl">Usually within 1–2 business days</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
