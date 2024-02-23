import { Job } from "@/app/lib/types/types";
import React from "react";

const JobCard = ({ jobTitle, company, locationString, technologies }: Job) => {
  return (
    <div className="bg-gray-100 hover:bg-slate-200 px-4 py-4 cursor-pointer min-w-[400px] rounded-sm">
      <div className="flex flex-col gap-2">
        <p className="font-bold">{jobTitle}</p>
        <div>
          <p className="text-gray-600 text-sm">{company}</p>
          <p className="text-gray-600 text-sm">{locationString}</p>
        </div>
        {technologies && (
          <div className="flex gap-2">
            {technologies.map((tech) => (
              <p
                className="text-gray-600 hover:bg-gray-100 bg-white px-2 py-1 rounded-full text-sm "
                key={tech}
              >
                {tech}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
