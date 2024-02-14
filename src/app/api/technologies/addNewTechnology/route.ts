import prisma from "@/web/packages/prisma/prisma";
import { Prisma } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

interface ResponseData {}

export async function POST(
  request: Request,
  response: NextApiResponse<ResponseData>
) {
  const body = await request.json();

  const prismaData = { name: body.technologyName };
  if (body.technologyType) {
    prismaData["type"] = body.technologyType;
  }

  if (!body.technologyName) {
    return NextResponse.json(
      {
        error: "Technology name is required",
      },
      {
        status: 400,
      }
    );
  }

  const record = await prisma.technology.findFirst({
    where: { name: body.technologyName },
  });

  if (record) {
    return NextResponse.json(
      {
        error: "Technology already exists",
      },
      {
        status: 409,
      }
    );
  } else {
    const result = await prisma.technology.create({
      data: prismaData,
    });
    return NextResponse.json(
      { result },
      {
        status: 201,
      }
    );
  }
}
