"use server";
import prisma from "@/app/lib/prisma/prisma";

async function getCity() {
  console.log("GET CITY");
  const result = await prisma.city.findMany({
    take: 10,
    orderBy: { id: "desc" },
  });
  return result;
}

async function getCountry() {
  const result = await prisma.country.findMany({
    take: 10,
    orderBy: { id: "desc" },
  });

  return result;
}

async function getContinent() {
  const result = await prisma.continent.findMany({
    take: 10,
    orderBy: { id: "desc" },
  });

  return result;
}

async function getLocation() {
  const result = await prisma.location.findMany({
    take: 10,
    orderBy: { id: "desc" },
  });

  return result;
}

export { getCity, getCountry, getContinent, getLocation };
