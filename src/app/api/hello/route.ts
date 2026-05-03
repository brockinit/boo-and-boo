export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") ?? "world";
  return Response.json({ message: `hello, ${name}` });
}
