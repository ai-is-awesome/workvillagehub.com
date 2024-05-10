"use server";
import prisma from "@/app/lib/prisma/prisma";

const filterJobs = async () => {
  const jobs = await prisma.job.findMany();
  return jobs;
};

export default filterJobs;
