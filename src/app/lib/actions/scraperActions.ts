"use server";
import { promises as fs } from "fs";
import createSupabaseClient from "../supabase/supabaseClient";
import { createSupabaseServerClient } from "../supabase/supabaseServerClient";
import { cookies } from "next/headers";
import { transformBase64ToBlob } from "../utils/utils";
import { randomUUID } from "crypto";
import { uploadImage } from "../supabase/storage";
import { createCompany, findCompany } from "./companyActions";
import getTechnology, {
  createTechnology,
  findTechnology,
} from "./technologyActions";
import createJob from "./Job";
import prisma from "../prisma/prisma";
import { Company, Job } from "../../../../prisma/generated/prisma-client-js";

interface CuvetteJob {}

[
  "_id",
  "companyName",
  "title",
  "location",
  "imageUrl",
  "type",
  "salary",
  "redirectLink",
  "requiredExperience",
  "skills",
  "createdAt",
  "updatedAt",
  "aboutJob",
  "count",
];

const objectKeys = [
  "_id",
  "companyName",
  "title",
  "location",
  "imageUrl",
  "type",
  "salary",
  "redirectLink",
  "requiredExperience",
  "skills",
  "createdAt",
  "updatedAt",
  "aboutJob",
  "count",
];

// to do, check companies, track id, check technolgoies, store id, check location, store id, date, title, and all set

export async function importCuvetteFileInDb() {
  // deleteJobs();
  runScrapingRoutine();
  // createOrGetTechnologies(["React", "Node", "Express", "MongoDB", "GraphQL"]);
}

async function runScrapingRoutine() {
  const cwd = process.cwd() + "\\src\\app\\lib\\scraper\\out\\cuvetteJobs.json";
  const file = await fs.readFile(cwd, "utf-8");
  const json = JSON.parse(file);
  const data = json["data"];
  for (let i = 0; i < 100; i++) {
    const job = data[i];
    const isJobInDb = await doesCuvetteJobAlreadyExists(job["_id"]);
    console.log("Job in DB: ", isJobInDb, job["_id"]);
    if (isJobInDb !== null) {
      console.log("Job already exists, i = ", i);
      continue;
    }
    const companyData = await getOrCreateCompany(job);
    const technologies = extractTechnologiesFromJob(job["skills"]);
    const technologyIds = await createOrGetTechnologies(technologies);
    const createdAt = job["createdAt"];
    const title = job["title"];
    const jobCreated = await createJob({
      jobTitle: title,
      jobLink: job["redirectLink"],
      companyId: companyData.id,
      technologiesId: technologyIds,
      jobPostDate: new Date(createdAt),
      jobAddedDate: new Date(),
      LocationBackupString: job["location"],
      source: "Cuvette",
      sourceUniqueIdentifier: job["_id"],
    });
    console.log(
      "Job Created: ",
      jobCreated.jobTitle,
      "Company: ",
      companyData.companyName,
      "i is : ",
      i,
      "Totalis : ",
      data.length,
      "Job id: ",
      jobCreated.id
    );
    console.log("---------------------------------------------");
  }
}

async function generateCuvetteImageUrl(url: string): Promise<string> {
  if (url.startsWith("data:image")) {
    const blob = transformBase64ToBlob(url);
    const random = randomUUID();
    const path = `clogos/${random}.jpeg`;
    const imgUrl = await uploadImage("companylogos", path, blob);
    return imgUrl;
  }
  return url;
}

function extractTechnologiesFromJob(technologiesStr: string): string[] {
  return technologiesStr.split(",").map((e) => e.trim());
}

async function createOrGetTechnologies(techList: string[]) {
  const technologyIds = [];
  for (let i = 0; i < techList.length; i++) {
    const tech = techList[i];
    const techFromDb = await findTechnology(tech);
    if (techFromDb !== null) {
      technologyIds.push(techFromDb.id);
      console.log(tech + " already exists");
      continue;
    }
    const createdTech = await createTechnology({ name: tech, type: null });
    console.log("Created Tech: ", createdTech.name);
    technologyIds.push(createdTech.id);
  }
  return technologyIds;
}

async function doesCuvetteJobAlreadyExists(jobId: string): Promise<Job | null> {
  const jobFound = await prisma.job.findFirst({
    where: {
      source: { equals: "Cuvette" },
      sourceUniqueIdentifier: { equals: jobId },
    },
  });
  return jobFound;
}

async function getOrCreateCompany(cuvetteJobObject): Promise<Company> {
  const company = cuvetteJobObject["companyName"];
  const companyFromDb = await findCompany(company, { ignoreCasing: true });
  if (companyFromDb === null) {
    console.log("Company not found");
    const logoURL = await generateCuvetteImageUrl(cuvetteJobObject["imageUrl"]);
    const companyData = await createCompany(company, logoURL);
    return companyData;
  }
  return companyFromDb;
}

// return {
//   id: "1",
//   companyName: "Test",
//   logoUrl: "Test",
//   createdAt: new Date(),
//   updatedAt: new Date(),
// };

async function deleteJobs() {
  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const jobs = await prisma.job.findMany({
    where: { jobAddedDate: { gt: sevenDaysAgo } },
    include: { companyName: true },
  });
  const jobIds = jobs.map((job) => {
    return job.id;
  });
  const companyIds = jobs.map((job) => {
    return job.companyName.id;
  });
  await prisma.jobTechnologies.deleteMany({
    where: {
      jobId: {
        in: jobIds,
      },
    },
  });
  await prisma.job.deleteMany({ where: { id: { in: jobIds } } });
  await prisma.company.deleteMany({ where: { id: { in: companyIds } } });
}
