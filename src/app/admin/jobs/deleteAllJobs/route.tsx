import prisma from "@/app/lib/prisma/prisma";

export async function POST(request: Request) {
  await prisma.job.deleteMany();
  return Response.json({ msg: "Success" });
}
