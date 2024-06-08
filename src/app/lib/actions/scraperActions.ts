"use server";
import { promises as fs } from "fs";
import createSupabaseClient from "../supabase/supabaseClient";
import { createSupabaseServerClient } from "../supabase/supabaseServerClient";
import { cookies } from "next/headers";
import { transformBase64ToBlob } from "../utils/utils";
import { randomUUID } from "crypto";
import { uploadImage } from "../supabase/storage";
import { findCompany } from "./companyActions";

interface CuvetteJob {}

export async function importCuvetteFileInDb() {
  console.log("Running on server");
  const cwd = process.cwd() + "\\src\\app\\lib\\scraper\\out\\cuvetteJobs.json";
  const file = await fs.readFile(cwd, "utf-8");
  const json = JSON.parse(file);
  const data = json["data"];
  for (let i = 0; i < 10; i++) {
    const job = data[i];
    const company = job["companyName"];
    const companyFromDb = await findCompany(company, { ignoreCasing: true });
    if (companyFromDb === null) {
      console.log("Company not found");
    }
    const logoURL = await generateCuvetteImageUrl("");
  }
  const imgURL = json["data"][5]["imageUrl"];
  const blob = transformBase64ToBlob(imgURL);
  const random = randomUUID();
  const path = `clogos/${random}.jpeg`;
  const result = await uploadImage("companylogos", path, blob);
  console.log(result);
  console.log(await findCompany("nike", { ignoreCasing: true }));

  // const { data, error } = await createSupabaseServerClient(cookies())
  //   .storage.from("companylogos")
  //   .upload("clogos/img3.jpeg", blob);
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
