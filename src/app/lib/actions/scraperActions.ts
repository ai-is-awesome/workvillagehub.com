"use server";
import { promises as fs } from "fs";
import createSupabaseClient from "../supabase/supabaseClient";
import { createSupabaseServerClient } from "../supabase/supabaseServerClient";
import { cookies } from "next/headers";
import { transformBase64ToBlob } from "../utils/utils";
import { randomUUID } from "crypto";
import { uploadImage } from "../supabase/storage";
import { createCompany, findCompany } from "./companyActions";
import getTechnology, { createTechnology } from "./technologyActions";
import createJob from "./Job";

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
  console.log("Running on server");
  const cwd = process.cwd() + "\\src\\app\\lib\\scraper\\out\\cuvetteJobs.json";
  const file = await fs.readFile(cwd, "utf-8");
  const json = JSON.parse(file);
  const data = json["data"];
  for (let i = 0; i < 10; i++) {
    const job = data[i];
    console.log(Object.keys(job));
    const company = job["companyName"];
    const companyFromDb = await findCompany(company, { ignoreCasing: true });
    if (companyFromDb === null) {
      console.log("Company not found");
    }
    const logoURL = await generateCuvetteImageUrl(job["imageUrl"]);
    const companyData = await createCompany(company, logoURL);
    const technologies = extractTechnologiesFromJob(job["skills"]);
    const technologyIds = await createOrGetTechnologies(technologies);
    const createdAt = job["createdAt"];
    const title = job["title"];
    createJob({
      jobTitle: title,
      jobLink: job["redirectLink"],
      companyId: companyData.id,
      technologiesId: technologyIds,
    });
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
    const techFromDb = await getTechnology();
    const techId = techFromDb.find((e) => e.name === tech);
    if (techId === undefined) {
      const createdTech = await createTechnology({ name: tech, type: null });
      technologyIds.push(createdTech.id);
    } else {
      technologyIds.push(techId.id);
    }
  }
}
