import prisma from "@/web/packages/prisma/prisma";

export async function POST(request: Request) {
  //   Logic check for admin

  const roles = await prisma.role.findMany();

  return Response.json(roles);
}
