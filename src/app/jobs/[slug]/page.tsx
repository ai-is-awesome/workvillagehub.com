"use client";
import { AuthContext } from "@/app/lib/hooks/AuthContext";
import useRequest from "@/app/lib/hooks/useRequest";
import { Layout } from "@/app/lib/ui/Layout";
import { LoginWithGoogleModal } from "@/app/lib/ui/Modals/LoginWithGoogleModal";
import { Pill } from "@/app/lib/ui/Pill";
import { Button } from "@/app/lib/ui/buttonShad";
import { Loader } from "@/app/lib/ui/components/Loader";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function Page({ params }: { params: { slug: string } }) {
  const { data, error, isLoading, fetchData } = useRequest({
    url: "/api/jobs/getJobById",
    method: "post",
    data: { jobId: parseInt(params.slug) },
  });

  const auth = useContext(AuthContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [jobLink, setJobLink] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const jobApplyHandler = async () => {
    if (!auth.user.isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    // Stuck here, how to use useRequest hook inside a callback? Or my pattern is just wrong
    // const { data, error } = useRequest({
    //   url: "/api/jobs/getJobLink",
    //   method: "post",
    //   data: { jobId: parseInt(params.slug) },
    // });

    if (jobLink === null) {
      const response = await axios.post("/api/jobs/getJobLink", {
        jobId: parseInt(params.slug),
      });
      setJobLink(response.data.jobLink);
      window.open(response.data.jobLink, "_blank");
    } else {
      window.open(jobLink, "_blank");
    }
  };

  if (data) {
    return (
      <Layout>
        {showLoginModal && (
          <LoginWithGoogleModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
          />
        )}
        <div className="lg:mx-40 lg:my-20 mx-4 mt-4">
          {/* <div>Page: {params.slug}</div> */}
          <h1 className="font-bold lg:text-[2rem] text-[1.5rem] tracking-tight">
            {data.job.jobTitle}
          </h1>
          <p className="font-bold lg:text-[1.2rem]">
            {data.job.companyName.companyName}
          </p>
          <p className="mb-3  ">3,00,000 INR - 8,00,000 INR</p>
          <div className="flex gap-2 my-4">
            <Pill className={"bg-brandMain text-white"}>Java</Pill>
            <Pill className={"bg-brandMain text-white"}>Java</Pill>
          </div>
          <Button className="bg-brandMain" onClick={jobApplyHandler}>
            Apply Now
          </Button>
          <div className="mb-8"></div>
          {data && <MDEditor.Markdown source={data.job.jobDescription} />}
        </div>
      </Layout>
    );
  }
}
