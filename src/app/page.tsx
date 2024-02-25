"use client";
import JobCardList from "@/app/lib/ui/components/jobCardList";
import Jobcard from "@/app/lib/ui/components/jobcard";
import Pagination from "@/app/lib/ui/pagination";

import Image from "next/image";
import { useEffect, useState } from "react";
import createSupabaseClient from "./lib/supabase/supabaseClient";
import useAuth from "./lib/hooks/useAuth";
import { mockJobData } from "./lib/utils/mockData";
import axios from "axios";
import { Job } from "@/app/lib/prisma/generated/prisma-client-js";
import useRequest from "./lib/hooks/useRequest";
import { transformApiJobs } from "./lib/utils/transform";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const { user, signOut } = useAuth();
  const router = useRouter();

  const jobData = mockJobData;
  const url = "/api/jobs/getLatestJobs";
  const { fetchData, isLoading, data } = useRequest({
    url: url,
    method: "post",
  });

  const paginationData = {
    totalPages: 10,
    currentPage: page,
    onChange: (p) => setPage(p),
  };

  useEffect(() => {
    fetchData();
    if (searchParams.get("code")) {
      axios.post("/api/user/onboardUser").then((res) => {
        console.log("Res: ", res);
        router.push("/");
      });
    }
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (data) {
    const transformedData = data.map((job) => transformApiJobs(job));
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        {/* <Jobcard {...jobData[0]} /> */}

        {user.isLoggedIn && (
          <>
            <div> {user.userResponseObject?.email}</div>
            <button
              className="bg-red-500 text-white px-2 py-2 rounded-md"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </>
        )}

        <JobCardList>
          {jobData.map((data: Job) => (
            <Jobcard key={data.id} {...data} />
          ))}
        </JobCardList>
        <Pagination {...paginationData} />
      </main>
    );
  }
}
