import React from "react";
import JobCard from "./jobcard";
type JobCardListInterface = {
  children?: React.ReactNode;
};

const JobCardList = ({ children }: JobCardListInterface) => {
  // Grid of 2 columns
  return (
    <div className="lg:grid-cols-2 grid-cols-1 grid gap-x-[2rem] gap-y-[1rem] p-0 lg:p-4 bg-gray-50">
      {children}
    </div>
  );
};

export default JobCardList;
