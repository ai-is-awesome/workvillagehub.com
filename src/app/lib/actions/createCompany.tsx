"use server";
import prisma from "@/app/lib/prisma/prisma";
import isAdmin from "./isAdmin";
import { all } from "axios";

async function createCompany(companyName: string, companyLogoURL: string) {
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

export default createCompany;
