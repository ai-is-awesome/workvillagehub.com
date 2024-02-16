import { locationSchema } from "@/app/lib/zod/zod";
import prisma from "@/web/packages/prisma/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  let parsedBody = body;
  try {
    parsedBody = locationSchema.parse(body);
  } catch (e) {
    return Response.json(e);
  }

  return Response.json(parsedBody);
}
