"use client";
import React, { useState } from "react";
import { Button } from "../../Button";
import { createCompany } from "@/app/lib/actions/companyActions";

export const CreateCompany = () => {
  const [state, setState] = useState({ companyName: "", companyLogoURL: "" });

  return (
    <div>
      <p className="text-xl font-bold text-center my-4">Create Company</p>
      <form
        action={() => createCompany(state.companyName, state.companyLogoURL)}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              className="px-2 py-1 bg-gray-300 rounded-md"
              name="companyName"
              autoComplete="off"
              onChange={(e) =>
                setState({ ...state, companyName: e.target.value })
              }
              value={state.companyName}
            />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="logoURL">Logo URL(Optional)</label>
            <input
              type="text"
              className="px-2 py-1 bg-gray-300 rounded-md"
              name="companyName"
              autoComplete="off"
              onChange={(e) =>
                setState({ ...state, companyLogoURL: e.target.value })
              }
              value={state.companyLogoURL}
            />
          </div>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};
