"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

const topics = ["Hiring / new role", "Consulting project", "Speaking or advisory", "Just saying hello"];

const field =
  "w-full border-b border-white/20 bg-transparent py-4 text-lg text-white outline-none transition-colors placeholder:text-white/25 focus:border-cyan-400";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [topic, setTopic] = useState(topics[0]);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, topic }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-cyan-400/40 bg-cyan-400/[0.04] p-10 md:p-14">
        <p className="eyebrow">Message sent</p>
        <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight">Thanks — talk soon.</h3>
        <p className="mt-4 max-w-md text-white/60">
          I read everything that comes in and will get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <fieldset>
        <legend className="eyebrow mb-4">What&apos;s this about?</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={`border px-4 py-2 text-sm transition-colors ${
                topic === t
                  ? "border-cyan-400 bg-cyan-400 text-ink"
                  : "border-white/20 text-white/70 hover:border-white/50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-10 md:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className="eyebrow">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow">Company (optional)</span>
        <input name="company" autoComplete="organization" placeholder="Company or project" className={field} />
      </label>

      <label className="block">
        <span className="eyebrow">Message</span>
        <textarea name="message" required rows={5} placeholder="Tell me about the project…" className={`${field} resize-none`} />
      </label>

      {/* honeypot — real people never see or fill this */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-3 bg-cyan-400 px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-white disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-red-300">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
