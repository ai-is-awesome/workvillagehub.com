import prisma from "@/web/packages/prisma/prisma";
export async function GET(request: Request) {
  return Response.json({ name: "Hello" });
}
