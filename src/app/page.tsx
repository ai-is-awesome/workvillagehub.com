"use client";
import JobCardList from "@/web/packages/ui/components/jobCardList";
import Jobcard from "@/web/packages/ui/components/jobcard";
import Pagination from "@/web/packages/ui/pagination";

import Image from "next/image";
import { useEffect, useState } from "react";
import createSupabaseClient from "./lib/supabase/supabaseClient";

export default function Home() {
  const [page, setPage] = useState(1);
  const jobData = [
    {
      jobTitle: "Full Stack Developer",
      company: "Google",
      locationString: "Bangalore",
      technologies: ["React", "Node", "MongoDb"],
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Google",
      locationString: "Bangalore",
      technologies: ["React", "Node", "MongoDb"],
    },

    {
      jobTitle: "Full Stack Developer",
      company: "Google",
      locationString: "Bangalore",
      technologies: ["React", "Node", "MongoDb"],
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Google",
      locationString: "Bangalore",
      technologies: ["React", "Node", "MongoDb"],
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Google",
      locationString: "Bangalore",
      technologies: ["React", "Node", "MongoDb"],
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Google",
      locationString: "Bangalore",
      technologies: ["React", "Node", "MongoDb"],
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Google",
      locationString: "Bangalore",
      technologies: ["React", "Node", "MongoDb"],
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Google",
      locationString: "Bangalore",
      technologies: ["React", "Node", "MongoDb"],
    },
    {
      jobTitle: "Full Stack Developer",
      company: "Google",
      locationString: "Bangalore",
      technologies: ["React", "Node", "MongoDb"],
    },
  ];

  const paginationData = {
    totalPages: 10,
    currentPage: page,
    onChange: (p) => setPage(p),
  };

  const supabase = createSupabaseClient();

  useEffect(() => {
    const user = supabase.auth.getUser().then((user) => {
      console.log("resp : ", user);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {/* <Jobcard {...jobData[0]} /> */}

      <JobCardList>
        {jobData.map((data) => (
          <Jobcard key={data.jobTitle} {...data} />
        ))}
      </JobCardList>
      <Pagination {...paginationData} />
    </main>
  );
}
