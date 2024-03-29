import prisma from "@/app/lib/prisma/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.countryName) {
    return Response.json(
      { error: "Country name is required" },
      { status: 400 }
    );
  }

  const record = await prisma.country.findFirst({
    where: { countryName: body.countryName },
  });

  if (record) {
    return Response.json({ error: "Country already exists" }, { status: 409 });
  }

  const result = await prisma.country.create({
    data: { countryName: body.countryName },
  });

  return Response.json({ result });
}
