import { createSupabaseServerClient } from "@/app/lib/supabase/supabaseServerClient";
import { getRequestBody } from "@/app/lib/utils/utils";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const obj = await getRequestBody(request);
  if (obj.error || !obj.data) {
    return Response.json({ error: obj.error }, { status: 400 });
  }
  const supabase = createSupabaseServerClient(cookies());
  const { data, error } = await supabase.auth.getUser();
  console.log("user: ", data);
  if (error) {
    return Response.json({ error: "Not logged in!" }, { status: 401 });
  }
  const body = obj.data;
  const job = await prisma.job.findUnique({
    where: {
      id: body.jobId,
    },
    select: {
      jobLink: true,
      id: true,
    },
  });
  return Response.json(job);
}
