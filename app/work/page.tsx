import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";
import { PageHeader } from "@/components/ui";
import { projects, sectors } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Restaurant, retail, veterinary and experiential projects — each with the lifecycle phases Ryan personally owned.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Built from the first walk-through <span className="text-cyan-400">to opening day.</span>
          </>
        }
        lead="Every project below shows exactly where I was involved — site selection through grand opening."
      />
      <section className="container-x py-20 md:py-28">
        <WorkGrid projects={projects} sectors={sectors} />
      </section>
    </>
  );
}
