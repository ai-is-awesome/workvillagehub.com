import prisma from "@/app/lib/prisma/prisma";

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return Response.json({ error: "No body found" }, { status: 400 });
  }

  if (!body.cityName) {
    return Response.json({ error: "City name is required" }, { status: 400 });
  }

  const record = await prisma.city.findFirst({
    where: { cityName: body.cityName },
  });

  if (record) {
    return Response.json({ error: "City already exists" }, { status: 409 });
  }

  const result = await prisma.city.create({
    data: { cityName: body.cityName },
  });

  return Response.json({ result });
}
