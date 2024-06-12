// Transforms the api data to client safe data

import { Job } from "../types/types";
import { getDateString } from "./utils";

export const transformApiJobs = (job): Job => {
  // console.log("Job received in transform is ; ", job);
  return {
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
};

export const transformLocation = (location) => {
  return {
    city: location.City.cityName,
    country: location.Country.countryName,
    id: location.id,
  };
};
