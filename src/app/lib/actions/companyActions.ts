"use server";
import prisma from "@/app/lib/prisma/prisma";
import { Company } from "../../../../prisma/generated/prisma-client-js";
import isAdmin from "./isAdmin";
import { all } from "axios";

export async function createCompany(
  companyName: string,
  companyLogoURL: string = ""
) {
  const allowed = await isAdmin();
  console.log("allowed is ", allowed);
  if (!allowed) {
    console.log("No permissions");
  }
  const company = await prisma.company.create({
    data: {
      companyName: companyName,
      companyLogoUrl: companyLogoURL === "" ? null : companyLogoURL,
    },
  });

  return company;
}

interface Filter {
  ignoreCasing: boolean;
}

export async function findCompany(
  companyName: string,
  filter: Filter = undefined
): Promise<Company> {
  const data = await prisma.company.findFirst({
    where: {
      companyName: {
        equals: companyName,
        mode: filter.ignoreCasing ? "insensitive" : "default",
      },
    },
  });
  return data;
}
