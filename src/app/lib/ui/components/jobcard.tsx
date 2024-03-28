import { Job } from "@/app/lib/types/types";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { Pill } from "../Pill";

const JobCard = ({
  jobTitle,
  company,
  locationString,
  technologies,
  id,
  addedOnPlatformDate,
}: Job) => {
  return (
    <a
      href={`/jobs/${id}`}
      className="bg-gray-100 text-brandMain hover:bg-slate-200 px-4 py-4 cursor-pointer min-w-[400px] rounded-sm"
    >
      <div className="flex flex-col gap-2">
        <a className="font-bold hover:underline" href={`/jobs/${id}`}>
          {jobTitle}
        </a>
        <div className="">
          <div className="flex items-center gap-1 my-1">
            <FaBuilding />
            <p className="text-gray-600 text-sm font-semibold">{company}</p>
          </div>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            <FaLocationDot />
            {locationString}
          </p>
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
              <Pill className={"bg-brandMain text-white"} key={tech}>
                {tech}
              </Pill>
            ))}
          </div>
        )}
      </div>
      <div>{addedOnPlatformDate}</div>
    </a>
  );
};

export default JobCard;
