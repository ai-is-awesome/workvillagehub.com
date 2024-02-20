import { cookies } from "next/headers";
import { createSupabaseServerClient } from "./supabaseServerClient";

async function handleSignInWithGoogle(response) {
  const supabase = createSupabaseServerClient(cookies);
  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: "google",
    token: response.credential,
    nonce: "NONCE", // must be the same one as provided in data-nonce (if any)
  });
}

export { handleSignInWithGoogle };
