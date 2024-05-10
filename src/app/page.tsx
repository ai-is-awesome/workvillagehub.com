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
import { getJobsByPagination, searchJobs } from "./lib/actions/Job";
import { Layout } from "./lib/ui/Layout";
import { MobileTopBar } from "./lib/ui/components/MobileTopBar";
import { Loader } from "./lib/ui/components/Loader";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { Button } from "./lib/ui/buttonShad";
import filterJobs from "./lib/actions/filterJobs";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { TechnologiesSelect } from "./lib/ui/Dropdown/TechnologiesSelect";
import { LocationSelect } from "./lib/ui/Dropdown/LocationSelect";

function LandingSection() {
  return (
    <div
      className="py-20 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7) ), url('https://unsplash.com/photos/dIMJWLx1YbE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29ya3xlbnwwfHx8fDE3MTI5MTk4NzB8MA&force=true&w=2400')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:flex lg:flex-col lg:items-center">
        <div className="lg:w-1/2">
          <h1 className="lg:text-5xl text-4xl font-bold text-center">
            Get your Next Remote Job faster
          </h1>
        </div>
        <div>
          <p className="lg:w-[60%] w-[80%] mx-auto my-4">
            Work Village Hub helps you get the best curated jobs from the top
            companies in the world. Happy Job Hunting!
          </p>
        </div>
      </div>
      <div className="px-20 py-4 ">
        <div className="w-full flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Full Stack Engineer..."
            className="text-black py-4 px-2 rounded-md lg:w-2/3 w-full tracking-wider font-semibold"
          />
          <Button className="my-4 bg-green-500">Search</Button>
        </div>
        <div className="w-[65%] mx-auto"></div>
      </div>
    </div>
  );
}

function CenterHomeLayout(props) {
  const classes = cn("lg:mx-40 lg:my-24", props.className);
  return <div className={classes}>{props.children}</div>;
}

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
    searchJobs("frontend").then((jobs) => {
      console.log("Seaerch: ", jobs);
    });
  }, []);

  if (isLoading || user.status === "loading") {
    if (isLoading) {
      return (
        <div>
          <p>Loading data</p>
          <Loader />;
        </div>
      );
    } else {
      <div>
        <p>Loading Auth</p>
        <Loader />;
      </div>;
    }
  }

  if (data) {
    const transformedData = data.map((job) => transformApiJobs(job));
    return (
      <Layout>
        <main>
          <CenterHomeLayout className="lg:my-0">
            {/* <Jobcard {...jobData[0]} /> */}
            <MobileTopBar />
          </CenterHomeLayout>
          <div className="mb-12">
            <LandingSection />
          </div>
          <CenterHomeLayout>
            <div className="bg-gray-100 px-8 py-12 ">
              <div className="flex justify-around">
                <TechnologiesSelect />
                <LocationSelect />
              </div>
            </div>
          </CenterHomeLayout>
          <CenterHomeLayout>
            <JobCardList>
              {transformedData.map((data: Job) => (
                <Jobcard key={data.id} {...data} />
              ))}
            </JobCardList>
            <Pagination {...paginationData} />
          </CenterHomeLayout>
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
