"use client";

import { AuthContext } from "@/app/lib/hooks/AuthContext";
import React, { useContext, useState } from "react";
import Modal from "../Modal";
import { Button } from "../../buttonShad";
import { LoginWithGoogleModal } from "../../Modals/LoginWithGoogleModal";
import useRequest from "@/app/lib/hooks/useRequest";

export const ApplyNowButton = ({ id }: { id: number }) => {
  const auth = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [jobLink, setJobLink] = useState(null);
  const { isLoading, data, fetchData } = useRequest({
    data: { jobId: id },
    method: "post",
    url: "/api/jobs/getJobLink",
  });

  const onClickHandler = async () => {
    if (!auth.user.isLoggedIn) {
      setModal(true);
      return;
    }

    if (jobLink === null) {
      const d = await fetchData();
      setJobLink(d.jobLink);
      window.open(d.jobLink, "_blank");
    } else {
      window.open(jobLink, "_blank");
    }
  };

  return (
    <div>
      <LoginWithGoogleModal
        isOpen={modal}
        onClose={() => {
          setModal(false);
        }}
      />
      <Button
        className="self-end  border-solid border-brandMain hover:bg-brandMain hover:text-white bg-gray-100 text-black border-[.7px] w-full"
        onClick={onClickHandler}
        loading={isLoading}
        disabled={isLoading}
      >
        Apply Now
      </Button>
    </div>
  );
};
