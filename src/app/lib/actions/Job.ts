"use server";
import prisma from "@/app/lib/prisma/prisma";

interface CreateJobPayload {
  jobTitle: string;
  jobLink: string;
  companyId: number;
  jobDescription?: string;
  jobPostDate?: Date;
  jobAddedDate?: Date;
  technologiesId?: number[];
  locationId?: number;
  source?: string;
  sourceUniqueIdentifier?: string;
  LocationBackupString?: string;
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
      source: payload.source,
      sourceUniqueIdentifier: payload.sourceUniqueIdentifier,
      LocationBackupString: payload.LocationBackupString,
    },
  });

  // console.log("Job Payload while craeeting job is : ", payload);
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

export const searchJobs = async (query: string) => {
  const jobs = await prisma.job.findMany({
    where: {
      OR: [
        { jobTitle: { contains: query, mode: "insensitive" } },
        {
          companyName: {
            companyName: { contains: query, mode: "insensitive" },
          },
        },
      ],
    },
  });
  return jobs;
};

export const getLocations = () => {
  const result = prisma.location.findMany({
    select: { City: true, Country: true, id: true },
  });

  return result;
};

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
