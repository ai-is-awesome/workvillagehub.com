import prisma from "@/web/packages/prisma/prisma";
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "@/app/lib/supabase/supabaseServerClient";

export async function POST(request: Request) {
  const supabase = createSupabaseServerClient(cookies());
  const supabaseObject = await supabase.auth.getUser();
  const user = supabaseObject.data.user;

  if (user && user.email) {
    const supabaseId = user?.id;
    const prismaUser = await prisma.user.findFirst({ where: { supabaseId } });
    if (prismaUser) {
      return Response.json(
        { data: prismaUser, message: "User already exists" },
        { status: 200 }
      );
    } else {
      const prismaUser = await prisma.user.create({
        data: {
          supabaseId: user.id,
          emailAddress: user.email,
          isEmailVerified: user.email_confirmed_at ? true : false,
          roleId: 2,
        },
      });
      return Response.json(
        { data: prismaUser, message: "User created" },
        { status: 201 }
      );
    }
  } else {
    return Response.json(
      { error: "User not found in supabase" },
      { status: 404 }
    );
  }
}
