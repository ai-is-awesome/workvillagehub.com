"use client";

import { FormEvent, useState } from "react";
import { Button } from "../../Button";

interface CreateJobState {
  jobTitle: string;
  jobUrl: string;
  companyId: string;
  technologiesId: string;
  locationId: string;
}
const CreateJob = () => {
  const [state, setState] = useState<CreateJobState>({
    jobTitle: "",
    jobUrl: "",
    companyId: "",
    technologiesId: "",
    locationId: "",
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
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
          <Button type="submit">Submit Job</Button>
        </form>
      </div>
    </>
  );
};

export default CreateJob;
