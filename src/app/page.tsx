"use client";
import JobCardList from "@/web/packages/ui/components/jobCardList";
import Jobcard from "@/web/packages/ui/components/jobcard";
import Pagination from "@/web/packages/ui/pagination";

import Image from "next/image";
import { useEffect, useState } from "react";
import createSupabaseClient from "./lib/supabase/supabaseClient";
import useAuth from "./lib/hooks/useAuth";
import { mockJobData } from "./lib/utils/mockData";
import axios from "axios";
import { Job } from "@/web/packages/prisma/generated/prisma-client-js";
import useRequest from "./lib/hooks/useRequest";

export default function Home() {
  const [page, setPage] = useState(1);

  const userData = useAuth();

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
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (data) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        {/* <Jobcard {...jobData[0]} /> */}

        <div>{userData.isLoggedIn && userData.userResponseObject?.email}</div>
        <JobCardList>
          {data.map((data) => (
            <Jobcard key={data.jobTitle} {...data} />
          ))}
        </JobCardList>
        <Pagination {...paginationData} />
      </main>
    );
  }
}
