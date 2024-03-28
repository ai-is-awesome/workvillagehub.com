"use client";

import { FormEvent, useState } from "react";
import { Button } from "../../Button";
import createJob from "@/app/lib/actions/Job";
import { getIdFromString, removeUndefinedKeys } from "@/app/lib/utils/utils";
import { AddJobDescription } from "./AddJobDescription";

interface CreateJobState {
  jobTitle: string;
  jobUrl: string;
  companyId: string;
  technologiesId: string;
  locationId: string;
  descriptionMarkdown: string;
}
const CreateJob = () => {
  const [state, setState] = useState<CreateJobState>({
    jobTitle: "",
    jobUrl: "",
    companyId: "",
    technologiesId: "",
    locationId: "",
    descriptionMarkdown: "",
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const obj = removeUndefinedKeys({
      jobTitle: state.jobTitle,
      companyId: getIdFromString(state.companyId),
      jobLink: state.jobUrl,
      jobDescription: state.descriptionMarkdown,
      technologiesId: state.technologiesId
        ? transformTechnologiesId(state.technologiesId)
        : undefined,
    });

    createJob(obj).then((res) => console.log(res));
  };

  const transformTechnologiesId = (technologies: string) => {
    return technologies
      .replace(" ", "")
      .split(",")
      .map((tech) => getIdFromString(tech));
  };

  return (
    <>
      <div>
        <p>Create Job</p>
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <div className="flex flex-row gap-2">
            <label>Enter Job Title</label>
            <input
              className="px-2 py-1 bg-gray-300 rounded-md"
              type="text"
              value={state.jobTitle}
              onChange={(e) => {
                setState({ ...state, jobTitle: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label>Enter the job url</label>
            <input
              className="px-2 py-1 bg-gray-300 rounded-md"
              type="text"
              value={state.jobUrl}
              onChange={(e) => {
                setState({ ...state, jobUrl: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label>Enter the company ID</label>
            <input
              className="px-2 py-1 bg-gray-300 rounded-md"
              type="text"
              value={state.companyId}
              onChange={(e) => {
                setState({ ...state, companyId: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-row gap-2">
            <label>Add technologies ID</label>
            <input
              value={state.technologiesId}
              onChange={(e) => {
                setState({ ...state, technologiesId: e.target.value });
              }}
              className="px-2 py-1 bg-gray-300 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-row gap-2">
            <label>Add location ID</label>
            <input
              value={state.locationId}
              onChange={(e) => {
                setState({ ...state, locationId: e.target.value });
              }}
              className="px-2 py-1 bg-gray-300 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Add Job Description</label>
            <AddJobDescription
              value={state.descriptionMarkdown}
              onChange={(markdown) =>
                setState({ ...state, descriptionMarkdown: markdown })
              }
            />
          </div>
          <Button type="submit">Submit Job</Button>
        </form>
      </div>
    </>
  );
};

export default CreateJob;
