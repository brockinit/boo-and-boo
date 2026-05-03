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

      event.currentTarget.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border-2 border-sage-deep bg-cream p-10 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-sage-deep">
          Inquiry received
        </p>
        <h3 className="font-display mt-5 text-2xl font-semibold leading-tight text-ink">
          Thank you. A partner will reply within two business days.
        </h3>
        <p className="mt-4 text-sm leading-6 text-ink-soft">
          We will review your context and propose an agenda for a 30-minute
          discovery call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 font-mono text-[10px] uppercase tracking-[0.32em] text-oxblood underline-offset-4 hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field
          label="Role or title"
          name="role"
          placeholder="VP, Operations"
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Winery or company" name="company" required />
        <Field label="Work email" name="email" type="email" required />
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
        placeholder="Briefly describe the operational pain you are hoping to solve. The more specific, the better."
        required
      />

      <div className="hairline mt-2" />

      <div className="flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-ink-mute">
          We respond to qualified inquiries within two business days. Your
          information stays with the Brix partnership team.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition hover:bg-oxblood disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Request discovery call"}
        </button>
      </div>

      {status === "error" && errorMsg ? (
        <p
          role="alert"
          className="border border-oxblood bg-oxblood/5 px-4 py-3 text-sm text-oxblood"
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

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-mute">
        {label}
        {required ? <span className="text-oxblood"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="border-b border-ink/30 bg-transparent px-1 py-2.5 font-display text-base text-ink placeholder:text-ink-mute/60 outline-none transition focus:border-oxblood"
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
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-mute">
        {label}
        {required ? <span className="text-oxblood"> *</span> : null}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="border-b border-ink/30 bg-transparent px-1 py-2.5 font-display text-base text-ink outline-none transition focus:border-oxblood"
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
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-mute">
        {label}
        {required ? <span className="text-oxblood"> *</span> : null}
      </span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        required={required}
        className="resize-none border border-ink/20 bg-cream/50 px-3 py-3 text-base text-ink placeholder:text-ink-mute/60 outline-none transition focus:border-oxblood"
      />
    </label>
  );
}
