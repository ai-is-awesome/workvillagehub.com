import prisma from "@/app/lib/prisma/prisma";
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "../supabase/supabaseServerClient";

interface currentUserReturnType {
  data: any | null;
  error: string | null;
}

const getCurrentUser = async (): Promise<currentUserReturnType> => {
  const supabase = createSupabaseServerClient(cookies());
  const resp = await supabase.auth.getUser();

  if (resp.data.user) {
    const prismaUser = await prisma.user.findFirst({
      where: { emailAddress: resp.data.user.email },
    });
    return { data: prismaUser, error: null };
  } else {
    return { data: null, error: "Unable to find user" };
  }
};

export default getCurrentUser;
