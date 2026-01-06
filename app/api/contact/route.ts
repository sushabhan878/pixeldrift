import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } =
  process.env;

function missingEnv() {
  return !SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO;
}

export async function POST(request: Request) {
  if (missingEnv()) {
    return NextResponse.json(
      {
        error:
          "Email not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO.",
      },
      { status: 500 }
    );
  }

  const body = await request.json();
  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const projectType = String(body?.projectType || "").trim();
  const message = String(body?.message || "").trim();

  if (!name || !email || !message || !projectType) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const text = `New contact from PixelDrift\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`;

  try {
    await transporter.sendMail({
      from: CONTACT_FROM || SMTP_USER,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New inquiry: ${name} - ${projectType}`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact send error", error);
    return NextResponse.json(
      { error: "Unable to send message right now." },
      { status: 500 }
    );
  }
}
