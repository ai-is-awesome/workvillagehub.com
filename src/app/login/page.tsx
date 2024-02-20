"use client";

import { useEffect, useState } from "react";
import createSupabaseClient from "../lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    const supabase = createSupabaseClient();
    const user = supabase.auth.getUser().then((data) => {
      if (data.data.user) {
        router.push("/");
      }
    });
  }, [router]);
  const handler = async () => {
    const supabase = createSupabaseClient();
    supabase.auth.signInWithOAuth({ provider: "google" });

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="min-h-screen bg-white">
      <h1>Login</h1>
      <div
        id="g_id_onload"
        data-client_id="<client ID>"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleSignInWithGoogle"
        data-nonce=""
        data-auto_select="true"
        data-itp_support="true"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
      <form onSubmit={handler}>
        <input type="text" className="bg-gray-100" />
        <button>Login with Google</button>
      </form>
    </div>
  );
};

export default Page;
