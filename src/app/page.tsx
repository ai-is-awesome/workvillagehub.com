"use client";
import JobCardList from "@/app/lib/ui/components/jobCardList";
import Jobcard from "@/app/lib/ui/components/jobcard";
import Pagination from "@/app/lib/ui/pagination";

import { useEffect, useState, Suspense } from "react";
import useAuth from "./lib/hooks/AuthContext";
import axios from "axios";
import { Job } from "@/app/lib/prisma/generated/prisma-client-js";
import useRequest from "./lib/hooks/useRequest";
import { transformApiJobs } from "./lib/utils/transform";
import { useRouter, useSearchParams } from "next/navigation";
import { getJobsByPagination } from "./lib/actions/Job";
import { Layout } from "./lib/ui/Layout";
import { MobileTopBar } from "./lib/ui/components/MobileTopBar";
import { Loader } from "./lib/ui/components/Loader";

function Home() {
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const { user, signOut } = useAuth();
  const router = useRouter();
  const url = "/api/jobs/getLatestJobs";
  const { data, error, isLoading, fetchData } = useRequest({
    url: url,
    method: "post",
    data: { page: 1, limit: 14 },
  });

  const paginationData = {
    totalPages: 10,
    currentPage: page,
    onChange: (p) => setPage(p),
  };

  useEffect(() => {
    fetchData();
    if (searchParams.get("code")) {
      axios
        .get("/auth/callback", { code: searchParams.get("code") })
        .then((res) => {
          console.log("Res: ", res);
          router.push("/");
        });
    }
  }, []);

  if (isLoading || user.status === "loading") {
    return <Loader />;
  }

  if (data) {
    const transformedData = data.map((job) => transformApiJobs(job));
    return (
      <Layout>
        <main className="lg:mx-40 lg:my-24">
          {/* <Jobcard {...jobData[0]} /> */}
          <MobileTopBar />
          <JobCardList>
            {transformedData.map((data: Job) => (
              <Jobcard key={data.id} {...data} />
            ))}
          </JobCardList>
          <Pagination {...paginationData} />
        </main>
      </Layout>
    );
  } else {
    return <div className="text-black bg-green-700">Nothing Found here...</div>;
  }
}

export default function HomeWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
