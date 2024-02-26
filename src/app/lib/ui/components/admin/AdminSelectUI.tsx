"use client";

import React from "react";
import { Button } from "../../Button";
import CreateJob from "./CreateJob";
import { CreateCompany } from "./CreateCompany";
import GetCompany from "./GetCompany";
import { RenderDbSchema } from "./GetDbItem";
import getCompanies from "@/app/lib/actions/getCompanies";
import getTechnology from "@/app/lib/actions/getTechnology";

export const AdminSelectUI = () => {
  const [selectedMode, setSelectedMode] = React.useState("create/asset");
  const components = [
    { state: "create/job", component: <CreateJob /> },
    { state: "create/company", component: <CreateCompany /> },
    { state: "get/company", component: <GetCompany /> },
    {
      state: "get/technology",
      component: <RenderDbSchema cb={getTechnology} />,
    },
  ];

  const renderedComponent = components.find(
    (obj) => obj.state === selectedMode
  );

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="border border-solid border-gray-300 px-8 py-8">
          <h1 className="text-center text-xl mb-4">Create</h1>
          <div className="flex flex-row gap-4">
            <Button
              className="bg-gray-300"
              onClick={() => {
                setSelectedMode("create/job");
              }}
            >
              Create a new job
            </Button>
            <Button
              className="bg-gray-300"
              onClick={() => {
                console.log("Clicked");
                setSelectedMode("create/company");
              }}
            >
              Create a new company
            </Button>
            <Button className="bg-gray-300">Create a new Role</Button>
            <Button> Upload a new asset</Button>
          </div>
        </div>
        <div className="border border-solid border-gray-300 px-8 py-8">
          <h1 className="text-center text-xl mb-4">Get</h1>
          <div className="flex flex-row gap-4">
            <Button className="bg-gray-300">Get latest jobs</Button>
            <Button
              className="bg-gray-300"
              onClick={() => {
                setSelectedMode("get/technology");
              }}
            >
              Get Technologies
            </Button>
            <Button
              className="bg-gray-300"
              onClick={() => {
                console.log("Clicked on button get company");
                setSelectedMode("get/company");
              }}
            >
              Get companies
            </Button>
            <Button> Upload a new asset</Button>
          </div>
        </div>
      </div>

      {renderedComponent && (
        <div className="my-12">{renderedComponent.component}</div>
      )}
    </>
  );
};
