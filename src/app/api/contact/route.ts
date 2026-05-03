type Payload = {
  name?: string;
  role?: string;
  company?: string;
  email?: string;
  production?: string;
  message?: string;
};

const REQUIRED: (keyof Payload)[] = [
  "name",
  "role",
  "company",
  "email",
  "production",
  "message",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const missing = REQUIRED.filter(
    (k) => typeof body[k] !== "string" || !body[k]?.trim(),
  );
  if (missing.length) {
    return Response.json(
      { error: `Missing required field(s): ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(body.email!.trim())) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  // No mail provider wired up yet — log the inquiry server-side so the team
  // can pick it up out of band. Swap this for Resend/Postmark/SES later.
  console.log("[brix:contact]", {
    receivedAt: new Date().toISOString(),
    name: body.name,
    role: body.role,
    company: body.company,
    email: body.email,
    production: body.production,
    message: body.message,
  });

  return Response.json({ ok: true });
}
