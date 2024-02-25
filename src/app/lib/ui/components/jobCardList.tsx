import React from "react";
import JobCard from "./jobcard";
type JobCardListInterface = {
  children?: React.ReactNode;
};

const JobCardList = ({ children }: JobCardListInterface) => {
  // Grid of 2 columns
  return (
    <div className="grid-cols-2 grid gap-x-[2rem] gap-y-[1rem]">{children}</div>
  );
};

export default JobCardList;
