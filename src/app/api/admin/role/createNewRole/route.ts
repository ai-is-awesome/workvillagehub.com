import prisma from "@/web/packages/prisma/prisma";

export async function POST(request: Request) {
  console.log("Role");
  const body = await request.json();

//   Logic check for admin

  const record = await prisma.role.findFirst({
    where: { roleName: body.roleName },
  });

  if (record) {
    return Response.json({ error: "Role already exists" }, { status: 409 });
  }
  const result = await prisma.role.create({
    data: { roleName: body.roleName },
  });

  return Response.json(result);
}
