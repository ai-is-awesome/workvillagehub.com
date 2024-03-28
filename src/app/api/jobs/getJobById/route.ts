import prisma from "@/app/lib/prisma/prisma";
import { getRequestBody } from "@/app/lib/utils/utils";

export async function POST(request: Request) {
  const obj = await getRequestBody(request);
  if (obj.error || !obj.data) {
    return Response.json({ error: obj.error }, { status: 400 });
  }

  const body = obj.data;
  console.log(body.jobId);
  const job = await prisma.job.findUnique({
    where: {
      id: body.jobId,
    },
    select: {
      id: true,
      jobTitle: true,
      jobDescription: true,
      Location: true,
    },
  });
  return Response.json({ job });
}
