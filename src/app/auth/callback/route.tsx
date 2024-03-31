import prisma from "@/app/lib/prisma/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/app/lib/supabase/supabaseServerClient";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const supabase = createSupabaseServerClient(cookies());
  if (!code) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  const { error, data } = await supabase.auth.exchangeCodeForSession(code);
  console.log(data.user.email, error);

  if (error || !data.user) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  //   if (!error) {
  //     // change this to wherever you want to redirect the user after authentication completes
  //     return NextResponse.redirect("http://localhost:3000/");
  //   }

  const user = data.user;

  if (user && user.email) {
    const supabaseId = user?.id;
    const prismaUser = await prisma.user.findFirst({ where: { supabaseId } });
    if (prismaUser) {
      console.log("User already exists so no onboard");
      //   return Response.json(
      //     { data: prismaUser, message: "User already exists" },
      //     { status: 200 }
      //   );
      return NextResponse.redirect("http://localhost:3000/");
    } else {
      const prismaUser = await prisma.user.create({
        data: {
          supabaseId: user.id,
          emailAddress: user.email,
          isEmailVerified: user.email_confirmed_at ? true : false,
          roleId: 2,
        },
      });
      console.log("Creating user");
      //   return Response.json(
      //     { data: prismaUser, message: "User created" },
      //     { status: 201 }
      //   );
      return NextResponse.redirect("http://localhost:3000/");
    }
  } else {
    // return Response.json(
    //   { error: "User not found in supabase" },
    //   { status: 404 }
    // );
    return NextResponse.redirect("http://localhost:3000/");
  }
}
