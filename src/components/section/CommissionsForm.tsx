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
    <div className="mx-auto max-w-[1180px] px-5 py-7">
      <p className="font-mono text-xs mb-4 text-[var(--overlay0)]">
        <span style={{ color: "var(--green)" }}>$</span> ./commission_me
      </p>

      <form
        onSubmit={handleSubmit}
        className="overflow-hidden border border-[var(--surface1)] bg-[var(--mantle)] font-mono"
      >
        {/* from */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--surface1)]">
          <label
            htmlFor="from"
            className="text-xs text-[var(--mauve)] w-16 shrink-0 font-bold"
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
            className="w-full bg-transparent text-xs text-[var(--text)] placeholder:text-[var(--overlay0)] placeholder:italic outline-none"
          />
        </div>

        {/* subject */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--surface1)]">
          <label
            htmlFor="subject"
            className="text-xs text-[var(--mauve)] w-16 shrink-0 font-bold"
          >
            subject:
          </label>
          <input
            id="subject"
            type="text"
            value={form.subject}
            onChange={(e) => update({ subject: e.target.value })}
            placeholder="what's this about?"
            className="w-full bg-transparent text-xs text-[var(--text)] placeholder:text-[var(--overlay0)] placeholder:italic outline-none"
          />
        </div>

        {/* message */}
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => update({ message: e.target.value })}
          placeholder="Send me a mail!"
          className="w-full px-5 py-4 bg-transparent text-xs text-[var(--text)] placeholder:text-[var(--overlay0)] placeholder:italic outline-none resize-none"
        />

        {/* footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[var(--surface1)] bg-[var(--crust)]">
          <span
            className="text-xs"
            style={{
              color: status === "error" ? "var(--red)" : "var(--subtext0)",
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
            className="text-xs px-4 py-2 border border-[var(--surface2)] bg-transparent text-[var(--subtext1)] cursor-pointer transition-all hover:border-[var(--mauve)] hover:color-[var(--mauve)] hover:bg-[var(--surface0)] disabled:opacity-50"
            style={{
              color: "var(--subtext1)",
            }}
          >
            {status === "sending" ? "< sending >" : "< send >"}
          </button>
        </div>
      </form>
    </div>
  );
}
