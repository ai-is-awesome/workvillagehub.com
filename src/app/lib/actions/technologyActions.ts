"use server";
import prisma from "@/app/lib/prisma/prisma";
import { Technology } from "../../../../prisma/generated/prisma-client-js";

async function getTechnology() {
  const result = await prisma.technology.findMany({
    orderBy: { id: "desc" },
  });

  return result;
}

export async function createTechnology(
  payload: Technology
): Promise<Technology> {
  const technology = await prisma.technology.create({
    data: payload,
  });

  return technology;
}

export default getTechnology;
