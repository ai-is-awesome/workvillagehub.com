type variables = {
  NEXT_PUBLIC_SUPABASE_URL: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  env: string;
  DB_URL: string;
};

export function getEnvironmentVariables(): variables {
  const env = process.env.env;
  console.log("Env is : ", env, process.env.NEXT_PUBLIC_SUPABASE_URL_PROD!);
  if (env === "prod") {
    console.log("retuning prod env vars");
    return {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      env: process.env.env!,
      DB_URL: process.env.PRISMA_DB_URL!,
    };
  } else {
    return {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      env: process.env.env!,
      DB_URL: process.env.PRISMA_DB_URL!,
    };
  }
}
