import React from "react";
import { Sidebar } from "./components/Sidebar";

export const Layout = (props: React.PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <div className="flex justify-center flex-1 my-20"> */}
      <div className=" flex-1">{props.children}</div>
    </div>
  );
};
