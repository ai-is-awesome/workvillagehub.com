import { handleSignInWithGoogle } from "@/app/lib/supabase/supabase";

export async function POST(request: Request) {
  await handleSignInWithGoogle(request);
}
