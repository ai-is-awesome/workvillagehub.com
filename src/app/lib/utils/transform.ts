// Transforms the api data to client safe data

import { Job } from "../types/types";
import { getDateString } from "./utils";

export const transformApiJobs = (job): Job => {
  console.log("Job received in transform is ; ", job);
  return {
    jobTitle: job.jobTitle,
    company: job.companyName.companyName,
    locationString: "New Delhi, India",
    technologies: job.technologies.map((tech) => tech.technology.name),
    addedOnPlatformDate: getDateString(job.jobAddedDate),
  };
};
