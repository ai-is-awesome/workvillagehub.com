import { getRequestBody } from "@/app/lib/utils/utils";
import { jobQuerySchema } from "@/app/lib/zod/zod";
import prisma from "@/app/lib/prisma/prisma";

export async function POST(request: Request, response: Response) {
  // use `prisma` in your application to read and write data in your DB
  const { data: requestBody, error } = await getRequestBody(request);

  if (error) {
    return Response.json({ error }, { status: 400 });
  }
  let parsedBody = null;
  try {
    parsedBody = jobQuerySchema.parse(requestBody);
  } catch (e) {
    return Response.json({ error: e });
  }

  if (parsedBody.limit > 20) {
    return Response.json({ error: "Limit cannot be more than 20" });
  }

  const { page, limit, search, location, technologies } = parsedBody;

  const jobs = await prisma.job.findMany({
    take: limit,
    skip: (page - 1) * limit,
    orderBy: {
      jobAddedDate: "desc",
    },
    select: {
      jobDescription: true,
      jobTitle: true,
      id: true,
      jobAddedDate: true,
      companyName: true,
      // Location: true,
      Location: { select: { City: true, Country: true } },
      technologies: { select: { technology: true } },
    },
  });
  return Response.json(jobs);
}
