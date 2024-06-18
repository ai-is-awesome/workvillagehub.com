// Transforms the api data to client safe data

import { Job } from "../types/types";
import { getDateString } from "./utils";

export const transformApiJobs = (job): Job => {
  const transformedJob = {
    jobTitle: job.jobTitle,
    company: job.companyName.companyName,
    technologies: job.technologies.map((tech) => tech.technology.name),
    addedOnPlatformDate: getDateString(job.jobAddedDate),
    addedOnSourceDate: getDateString(job.jobPostDate),
    id: job.id,
    locationString: job.Location
      ? job.Location.City.cityName + ", " + job.Location.Country.countryName
      : null,
  };
  console.log("tf", transformedJob);
  return transformedJob;
};

export const transformLocation = (location) => {
  return {
    city: location.City.cityName,
    country: location.Country.countryName,
    id: location.id,
  };
};
