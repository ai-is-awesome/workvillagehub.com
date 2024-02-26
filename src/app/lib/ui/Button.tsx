import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { className, children, ...restOfTheProps } = props;
  return (
    <button
      className={`px-2 py-2 bg-gray-300  ${className}`}
      style={{ width: "max-content" }}
      {...restOfTheProps}
    >
      {children}
    </button>
  );
};
