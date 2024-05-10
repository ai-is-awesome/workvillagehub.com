"use server";
import prisma from "@/app/lib/prisma/prisma";

async function getTechnology() {
  const result = await prisma.technology.findMany({
    orderBy: { id: "desc" },
  });
  return result;
}

export default getTechnology;
