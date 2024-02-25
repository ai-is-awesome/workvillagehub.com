"use client";

import React from "react";
import { Button } from "../../Button";
import CreateJob from "../job/createJob";

export const AdminSelectUI = () => {
  const [selectedMode, setSelectedMode] = React.useState("create/asset");
  const components = {
    create: <CreateJob />,
    company: <div>Create a new company</div>,
    role: <div>Create a new Role</div>,
    asset: <div>Upload a new asset</div>,
  };

  return (
    <>
      <div className="border border-solid border-gray-300 px-8 py-8">
        <h1 className="text-center text-xl mb-4">Create</h1>
        <div className="flex flex-row gap-4">
          <Button className="bg-gray-300 ">Create a new job</Button>
          <Button className="bg-gray-300">Create a new company</Button>
          <Button className="bg-gray-300">Create a new Role</Button>
          <Button> Upload a new asset</Button>
        </div>
      </div>
      <div>{selectedMode === "create/asset" && <div>fwefew</div>}</div>
    </>
  );
};
