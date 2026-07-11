import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = "contactme@nuixyz.dev";

export async function POST(req: NextRequest) {
  try {
    const { from, subject, message } = await req.json();

    if (!from || !message) {
      return NextResponse.json(
        { error: "from and message are required" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "resend <commissions@nuixyz.dev>",
      to: RECIPIENT_EMAIL,
      replyTo: from,
      subject: subject?.trim()
        ? subject
        : `New commission inquiry from ${from}`,
      text: `From: ${from}\nSubject: ${subject || "(none)"}\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "unexpected server error" },
      { status: 500 },
    );
  }
}
