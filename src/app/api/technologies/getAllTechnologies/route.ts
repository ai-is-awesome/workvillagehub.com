import prisma from "@/app/lib/prisma/prisma";

export async function POST(request: Request) {
  const results = await prisma.technology.findMany({});
  return Response.json({ results });
}
