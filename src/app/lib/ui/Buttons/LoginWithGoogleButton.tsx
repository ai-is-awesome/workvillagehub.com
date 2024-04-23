import React from "react";
import { FcGoogle } from "react-icons/fc";
import createSupabaseClient from "../../supabase/supabaseClient";

export const LoginWithGoogleButton = () => {
  const domainName = "http://localhost:3000";
  const handler = async () => {
    const supabase = createSupabaseClient();
    supabase.auth.signInWithOAuth({ provider: "google" });

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: domainName + "/auth/callback",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  return (
    <div className="flex items-center bg-white px-4">
      <FcGoogle className="text-4xl" />
      <button className=" w-full py-4 " onClick={handler}>
        <a className="font-semibold cursor-pointer">Continue with Google</a>
      </button>
    </div>
  );
};
