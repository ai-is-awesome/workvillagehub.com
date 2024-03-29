import { jobSchema } from "@/app/lib/zod/zod";
import prisma from "@/app/lib/prisma/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  let parsedBody = null;
  try {
    parsedBody = jobSchema.parse(body);
  } catch (e) {
    return Response.json(
      {
        error: e,
      },
      {
        status: 400,
      }
    );
  }

  const {
    jobTitle,
    logoUrl,
    jobLink,
    companyName,
    jobDescription,
    jobPostDate,
    jobTechnologies,
  } = parsedBody;

  const job = await prisma.job.create({
    data: {
      jobTitle,
      jobLink,
      companyName,
      jobDescription,
      jobPostDate,
      numberOfDetailedClicks: 0,
      numberOfTimesJobLinkIsClicked: 0,
    },
  });
  const jobTechnologyData = jobTechnologies?.map((technologyId) => ({
    jobId: job.id,
    technologyId,
  }));
  await prisma.jobTechnologies.createMany({ data: jobTechnologyData });

  return Response.json({ job });
}
