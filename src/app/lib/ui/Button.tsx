import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`px-2 py-2 bg-gray-300  ${props.className}`}
      style={{ width: "max-content" }}
    >
      {props.children}
    </button>
  );
};
