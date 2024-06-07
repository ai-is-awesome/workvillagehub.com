"use server";

import { cookies } from "next/headers";
import { createSupabaseServerClient } from "./supabaseServerClient";

export async function uploadImage(bucketName, filePath, blob) {
  const supabase = createSupabaseServerClient(cookies());
  const resp = await supabase.storage.from(bucketName).upload(filePath, blob);

  if (resp.error) {
    throw new Error(resp.error.message);
  }
  const { data, error } = supabase.storage
    .from(bucketName)
    .getPublicUrl(filePath);

  return data.publicUrl;
}
