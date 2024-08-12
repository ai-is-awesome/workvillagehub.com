import { Job } from "@/app/lib/types/types";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { Pill } from "../Pill";
import { Button } from "../buttonShad";
import Link from "next/link";
import { ApplyNowButton, JobLinkButton } from "./Buttons/applyNowButton";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import WithAuth from "./withAuth";

const JobCard = ({
  jobTitle,
  company,
  locationString,
  technologies,
  id,
  addedOnPlatformDate,
  addedOnSourceDate,
}: Job) => {
  const handleJobLinkClick = (e) => {
    e.preventDefault();
    console.log("Job Link Clicked");
  };

  const ApplyButton = (props) => {
    return (
      <Button
        asChild
        className="self-end  border-solid border-brandMain hover:bg-brandMain hover:text-white bg-gray-100 text-black border-[.7px] w-full"
        onClick={props.onClick}
      >
        <Link aria-disabled href={""}>
          Apply Now
        </Link>
      </Button>
    );
  };
  const onClick = () => {};
  // const ApplyNowButton = WithAuth(() => <ApplyButton onClick={onClick} />);

  return (
    <div
      // href={`/jobs/${id}`}
      // target="_blank"
      className="bg-white min-h-[230px]  hover:bg-slate-200 px-4 py-4 cursor-pointer min-w-[400px] sm:min-w-[200px] rounded-lg border-[1.8px] border-gray-100"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex flex-col gap-1">
            <a
              className="font-bold text-lg hover:underline"
              target="_blank"
              href={`/jobs/${id}`}
            >
              {jobTitle}
            </a>
            <div className="">
              <div className="flex items-center gap-1 mb-1">
                <FaBuilding />
                <p className="text-black text-sm font-semibold">{company}</p>
              </div>

              {locationString && (
                <p className="text-gray-600 text-sm flex items-center gap-1">
                  <FaLocationDot />
                  {locationString}
                </p>
              )}
            </div>
            {technologies && (
              <div className="flex gap-2">
                {technologies.map((tech) => (
                  // <p
                  //   className="text-gray-600 hover:bg-gray-100 bg-white px-2 py-1 rounded-full text-sm "
                  //   key={tech}
                  // >
                  //   {tech}
                  // </p>
                  <Pill
                    className={
                      "border-solid border-[1px] border-brandMain hover:bg-brandMain hover:text-white bg-brandMain text-white  "
                    }
                    key={tech}
                  >
                    {tech}
                  </Pill>
                ))}
              </div>
            )}
          </div>
          <div className="text-gray-600 text-sm mt-4">
            {addedOnSourceDate ? addedOnSourceDate : addedOnPlatformDate}
          </div>
        </div>
        <ApplyNowButton id={id} />
        {/* <JobLinkButton /> */}
      </div>
    </div>
  );
};

export default JobCard;
