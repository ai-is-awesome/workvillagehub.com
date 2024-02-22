import { getRequestBody } from "@/app/lib/utils/utils";
import prisma from "@/web/packages/prisma/prisma";

export async function POST(request: Request, response: Response) {
  //   const body = await getRequestBody(request);
  //   if (body === null) {
  //     return Response.json({ error: "No body found" }, { status: 400 });
  //   }

  const jobs = await prisma.job.findMany({
    take: 20,
    orderBy: {
      jobAddedDate: "desc",
    },
  });
  return Response.json(jobs);
}
