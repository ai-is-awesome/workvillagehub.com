"use server";
import prisma from "@/app/lib/prisma/prisma";

async function getCompanies() {
  const companies = await prisma.company.findMany({
    take: 10,
    orderBy: { id: "desc" },
  });
  return companies;
}

export default getCompanies;
