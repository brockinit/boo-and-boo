"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const PRODUCTION_RANGES = [
  "Under 100k cases / year",
  "100k – 1M cases / year",
  "1M – 10M cases / year",
  "10M+ cases / year",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? `Request failed (${res.status})`);
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-300/30 bg-emerald-300/[0.06] p-8 text-center">
        <div
          aria-hidden
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-300/10"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 text-emerald-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">
          Got it. We&apos;ll be in touch within two business days.
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/65">
          A partner will review your context and reply with a proposed agenda
          for a 30-minute discovery call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-cyan-200 underline-offset-4 hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field
          label="Role or title"
          name="role"
          placeholder="e.g. VP, Operations"
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Winery or company"
          name="company"
          required
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
        />
      </div>

      <SelectField
        label="Annual production volume"
        name="production"
        options={PRODUCTION_RANGES}
        required
      />

      <TextAreaField
        label="What's keeping you up at night?"
        name="message"
        placeholder="Briefly describe the operational pain you're hoping to solve. The more specific, the better."
        required
      />

      <div className="mt-2 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-white/50">
          We respond to qualified inquiries within two business days. Your
          information stays with the VineIQ partnership team.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-[0_0_24px_rgba(165,243,252,0.4)] transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Request discovery call"}
        </button>
      </div>

      {status === "error" && errorMsg ? (
        <p
          role="alert"
          className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100"
        >
          {errorMsg}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", placeholder, required }: FieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">
        {label}
        {required ? <span className="text-fuchsia-300">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-lg border border-white/10 bg-[#0a061f] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">
        {label}
        {required ? <span className="text-fuchsia-300">*</span> : null}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="rounded-lg border border-white/10 bg-[#0a061f] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20"
      >
        <option value="" disabled>
          Select a range…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">
        {label}
        {required ? <span className="text-fuchsia-300">*</span> : null}
      </span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        required={required}
        className="resize-none rounded-lg border border-white/10 bg-[#0a061f] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20"
      />
    </label>
  );
}
