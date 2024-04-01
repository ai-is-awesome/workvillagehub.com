import { createBrowserClient } from "@supabase/ssr";
import { getEnvironmentVariables } from "../utils/environment_variables";

const { NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL, env } =
  getEnvironmentVariables();

const createSupabaseClient = () => {
  // return createBrowserClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  // );
  console.log("using env: ", env, "in supabse", NEXT_PUBLIC_SUPABASE_URL);
  return createBrowserClient(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};

export default createSupabaseClient;
