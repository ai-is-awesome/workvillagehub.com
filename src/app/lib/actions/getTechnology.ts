"use server";
import prisma from "@/app/lib/prisma/prisma";

async function getTechnology() {
  const result = await prisma.technology.findMany({
    take: 10,
    orderBy: { id: "desc" },
  });
  return result;
}

export default getTechnology;
