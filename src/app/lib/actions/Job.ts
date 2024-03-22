"use server";
import prisma from "@/app/lib/prisma/prisma";

interface CreateJobPayload {
  jobTitle: string;
  jobLink: string;
  companyId: number;
  jobDescription?: string;
  jobPostDate?: Date;
  technologiesId?: number[];
  locationId?: number;
}
async function createJob(payload: CreateJobPayload) {
  const job = await prisma.job.create({
    data: {
      jobTitle: payload.jobTitle,
      jobLink: payload.jobLink,
      jobDescription: payload.jobDescription,
      jobPostDate: payload.jobPostDate,
      companyId: payload.companyId,
      numberOfDetailedClicks: 0,
      numberOfTimesJobLinkIsClicked: 0,
      locationId: payload.locationId,
    },
  });
  console.log("Technologies", payload.technologiesId);
  if (!payload.technologiesId) return job;

  await prisma.jobTechnologies.createMany({
    data: payload.technologiesId.map((techId) => ({
      technologyId: techId,
      jobId: job.id,
    })),
  });
  return job;
}

export async function getJobsByPagination(
  currentPage: number,
  pageSize: number
) {
  const results = await prisma.job.findMany({
    take: 10,
    skip: (currentPage - 1) * pageSize,
    select: {
      id: true,
      companyId: true,
      companyName: true,
      technologies: true,
      jobTitle: true,
      jobDescription: true,
      jobLink: false,
    },
  });

  return results;
}

// class Job {
//   async createJob(payload: CreateJobPayload) {
//     const job = await prisma.job.create({
//       data: {
//         jobTitle: payload.jobTitle,
//         jobLink: payload.jobLink,
//         jobDescription: payload.jobDescription,
//         jobPostDate: payload.jobPostDate,
//         companyId: payload.companyId,
//         numberOfDetailedClicks: 0,
//         numberOfTimesJobLinkIsClicked: 0,
//         locationId: payload.locationId,
//       },
//     });
//     await prisma.jobTechnologies.createMany({
//       data: payload.technologiesId.map((techId) => ({
//         technologyId: techId,
//         jobId: job.id,
//       })),
//     });
//     return job;
//   }
// }

export default createJob;
