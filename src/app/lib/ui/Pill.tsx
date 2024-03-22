import { cn } from "@/lib/utils";
import classNames from "classnames";
import React from "react";

export const Pill = ({ children, className, ...restOfProps }) => {
  const classes = classNames(
    "text-gray-800 hover:bg-gray-200 bg-white px-4 py-1 rounded-full text-sm",
    className
  );
  return <button className={cn(classes)}>{children}</button>;
};
