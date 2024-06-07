import React from "react";
import { Sidebar } from "./components/Sidebar";
import { cn } from "@/lib/utils";

export const Layout = (props: React.PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <div className="flex justify-center flex-1 my-20"> */}
      <div className=" flex-1">{props.children}</div>
    </div>
  );
};

interface CenterProps {
  className?: string;
  children: React.ReactNode;
}

export const Center = (props: CenterProps) => {
  const name = cn("flex flex-col items-center flex-1", props.className);
  return <div className={name}>{props.children}</div>;
};
