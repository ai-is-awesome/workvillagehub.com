import { create } from "domain";
import { createDuplicates } from "../lib/utils/mockData";

export async function POST(request: Request) {
  const results = await createDuplicates();
  return Response.json({ message: "Hello World", results });
}
