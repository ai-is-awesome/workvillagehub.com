// Transforms the api data to client safe data

import { Job } from "../types/types";
import { getDateString } from "./utils";

export const transformApiJobs = (job): Job => {
  console.log("Job received in transform is ; ", job);
  return {
    jobTitle: job.jobTitle,
    company: job.company,
    locationString: getDateString(job.jobAddedDate),
    technologies: job.technologies,
  };
};
