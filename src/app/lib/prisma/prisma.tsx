// import { PrismaClient } from "@/app/lib/prisma/generated/prisma-client-js";
import { PrismaClient } from "../../../../prisma/generated/prisma-client-js";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
