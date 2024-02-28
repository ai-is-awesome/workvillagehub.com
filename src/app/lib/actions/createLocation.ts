"use server";
import prisma from "@/app/lib/prisma/prisma";
import isAdmin from "./isAdmin";
import { removeUndefinedKeys } from "../utils/utils";

async function createCity(cityName: string) {
  const allowed = await isAdmin();

  if (!allowed) {
    console.log("No permissions");
  }
  const city = await prisma.city.create({
    data: {
      cityName: cityName,
    },
  });

  return city;
}

async function createCountry(countryName: string) {
  const allowed = await isAdmin();

  if (!allowed) {
    console.log("No permissions");
  }

  const exists = await prisma.country.findFirst({
    where: { countryName: countryName },
  });

  if (exists) {
    console.log("Country name already exists");
    return;
  }
  const country = await prisma.country.create({
    data: {
      countryName: countryName,
    },
  });

  return country;
}

async function createContinent(continentName: string) {
  const allowed = await isAdmin();

  if (!allowed) {
    console.log("No permissions");
  }

  const exists = await prisma.continent.findFirst({
    where: { continentName: continentName },
  });

  if (exists) {
    console.log("Country name already exists");
    return;
  }
  const continent = await prisma.continent.create({
    data: {
      continentName: continentName,
    },
  });

  return continent;
}

async function createLocation(payload: {
  cityId?: number;
  countryId?: number;
  continentId?: number;
}) {
  const sanitized = removeUndefinedKeys(payload);
  const locationFound = await prisma.location.findFirst({
    where: sanitized,
  });

  if (locationFound) {
    console.log("Location exists already!");
    return;
  }

  const location = await prisma.location.create({ data: sanitized });
  console.log("Location craeted");
  return location;
}

export { createCity, createCountry, createContinent, createLocation };
