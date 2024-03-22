import { getJobsByPagination } from "../actions/Job";
import prisma from "@/app/lib/prisma/prisma";

export const mockJobData = [
  {
    jobTitle: "Full Stack Developer",
    company: "Google",
    locationString: "Bangalore",
    technologies: ["React", "Node", "MongoDb"],
    id: 1,
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Google",
    locationString: "Bangalore",
    technologies: ["React", "Node", "MongoDb"],
    id: 2,
  },

  {
    jobTitle: "Full Stack Developer",
    company: "Google",
    locationString: "Bangalore",
    technologies: ["React", "Node", "MongoDb"],
    id: 3,
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Google",
    locationString: "Bangalore",
    technologies: ["React", "Node", "MongoDb"],
    id: 4,
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Google",
    locationString: "Bangalore",
    technologies: ["React", "Node", "MongoDb"],
    id: 5,
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Google",
    locationString: "Bangalore",
    technologies: ["React", "Node", "MongoDb"],
    id: 6,
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Google",
    locationString: "Bangalore",
    technologies: ["React", "Node", "MongoDb"],
    id: 7,
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Google",
    locationString: "Bangalore",
    technologies: ["React", "Node", "MongoDb"],
    id: 8,
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Google",
    locationString: "Bangalore",
    technologies: ["React", "Node", "MongoDb"],
    id: 9,
  },
];

export const databaseDump = {
  location: {
    createNew: [{ city: "New Delhi" }, { city: "Remote" }],
  },
  technologies: {
    createNew: ["React JS", "Node JS", "MongoDB", "Express JS"],
  },
  jobs: {
    createNew: [{ jobTitle: "Software Engineer" }],
  },
};

export const createDuplicates = async () => {
  // const result = await prisma.job.findUnique({ where: { id: 5 } });
  // let count = 0;
  // if (result === null) {
  //   return "";
  // }
  // while (count < 200) {
  //   console.log("Count is : ", count);
  //   await prisma.job.create({
  //     data: {
  //       jobTitle: result.jobTitle,
  //       companyId: result.companyId,
  //       jobDescription: result.jobDescription,
  //       jobLink: result.jobLink,
  //       jobPostDate: result.jobPostDate,
  //       locationId: result.locationId,
  //       numberOfDetailedClicks: 0,
  //       numberOfTimesJobLinkIsClicked: 0,
  //     },
  //   });
  //   count++;
  // }
  // return result;
};
