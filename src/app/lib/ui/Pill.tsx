import { cn } from "@/lib/utils";
import classNames from "classnames";
import React from "react";

export const Pill = ({ children, className, ...restOfProps }) => {
  const classes = classNames(
    "hover:bg-gray-200 bg-white px-2 py-[3px] rounded-lg text-sm ",
    className
  );
  return <button className={cn(classes)}>{children}</button>;
};
