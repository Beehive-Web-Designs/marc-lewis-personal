import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/emails/email-template";
import { ContactFormDataSchema } from "@/types/ContactFormData";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.CONTACT_FORM_FROM_EMAIL;
const TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL;

export async function POST(req: Request) {
  try {
    const request = await req.json();

    if (request.company?.trim()) {
      return NextResponse.json({ id: "ok" }, { status: 200 });
    }
    if (!FROM_EMAIL || !TO_EMAIL) {
      return NextResponse.json({ error: "Missing required environment variables" }, { status: 500 });
    }

    const parsed = ContactFormDataSchema.safeParse(request.body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const body = parsed.data;

    const { data, error } = await resend.emails.send({
      from: `Dr. Marc Lewis Personal Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: body.email,
      subject: request.subject ?? "Contact Form Submission",
      react: EmailTemplate({ body }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: (error as Error)?.message || error,
      },
      { status: 500 }
    );
  }
}
