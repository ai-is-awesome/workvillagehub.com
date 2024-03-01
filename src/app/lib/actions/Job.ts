"use server";
import prisma from "@/app/lib/prisma/prisma";

interface CreateJobPayload {
  jobTitle: string;
  jobLink: string;
  companyId: number;
  jobDescription?: string;
  jobPostDate?: Date;
  technologiesId: number[];
  locationId?: number;
}
class Job {
  async createJob(payload: CreateJobPayload) {
    prisma.jobTechnologies.createMany({
      data: [{ jobId: 1, technologyId: 1 }],
    });
    const job = await prisma.job.create({
      data: {
        jobTitle: payload.jobTitle,
        jobLink: payload.jobLink,
        jobDescription: payload.jobDescription,
        jobPostDate: payload.jobPostDate,
        company: {
          connect: {
            id: payload.companyId,
          },
        },
        technologies: {
          connectOrCreate: {
            where: payload.technologiesId.map((id) => ({ id })),
            create: payload.technologiesId.map((id) => ({ id })),
          },
        },
        location: {
          connect: {
            id: payload.locationId,
          },
        },
      },
    });
    return job;
  }
}
