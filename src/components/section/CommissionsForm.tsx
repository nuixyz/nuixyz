"use client";

import { useState } from "react";

type FormState = {
  from: string;
  subject: string;
  message: string;
};

const RECIPIENT_EMAIL = "contactme@nuixyz.dev";

const initialState: FormState = { from: "", subject: "", message: "" };

type Status = "idle" | "sending" | "sent" | "error";

export default function CommissionsForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update = (patch: Partial<FormState>) => {
    setForm((f) => ({ ...f, ...patch }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.from.trim() || !form.message.trim()) {
      setError("from: and message body are required.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/sendcommission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error((await res.json()).error ?? "send failed");

      setStatus("sent");
      setForm(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : "send failed");
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <p className="font-mono text-xs text-muted mb-3">
        <span style={{ color: "var(--green)" }}>$</span> ./commission_me
      </p>

      <form
        onSubmit={handleSubmit}
        className="cursor-text overflow-hidden border border-subtle bg-transparent"
      >
        {/* to */}
        {/*<div className="flex items-center gap-3 px-5 py-4 border-b border-subtle">
          <label className="font-mono text-xs text-violet w-16 shrink-0">
            to:
          </label>
          <span className="text-sm text-secondary font-mono">
            {RECIPIENT_EMAIL}
          </span>
        </div>*/}

        {/* from */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-subtle">
          <label
            htmlFor="from"
            className="font-mono text-sm text-violet w-16 shrink-0"
          >
            from:
          </label>
          <input
            id="from"
            type="email"
            required
            value={form.from}
            onChange={(e) => update({ from: e.target.value })}
            placeholder="your email id"
            className="bg-transparent text-sm text-primary placeholder:text-muted placeholder:italic outline-none"
          />
        </div>

        {/* subject */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-subtle">
          <label
            htmlFor="subject"
            className="font-mono text-sm text-violet w-16 shrink-0"
          >
            subject:
          </label>
          <input
            id="subject"
            type="text"
            value={form.subject}
            onChange={(e) => update({ subject: e.target.value })}
            placeholder="what's this about?"
            className="bg-transparent text-sm text-primary placeholder:text-muted placeholder:italic outline-none"
          />
        </div>

        {/* message */}
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update({ message: e.target.value })}
          placeholder="Send me a mail!"
          className="w-full px-5 py-4 bg-transparent text-sm text-primary placeholder:text-muted placeholder:italic outline-none resize-none"
        />

        {/* footer */}
        <div className="flex items-center justify-between px-5 py-3">
          <span
            className="font-mono text-xs"
            style={{
              color: status === "error" ? "var(--pink)" : "var(--text3)",
            }}
          >
            {status === "error" && (error || "something went wrong")}
            {status === "sending" && "sending…"}
            {status === "sent" &&
              "sent! thanks for reaching out, i'll get back to you soon."}
          </span>
          <button
            type="submit"
            disabled={status === "sending"}
            className="font-mono text-xs px-4 py-2 rounded-md border transition-colors disabled:opacity-50"
            style={{
              color: "var(--violet)",
              borderColor: "var(--border3)",
            }}
          >
            {status === "sending" ? "sending" : "send"}
          </button>
        </div>
      </form>
    </div>
  );
}
