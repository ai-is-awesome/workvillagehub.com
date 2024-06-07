import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  return (
    <div className="border border-solid border-gray-300 px-8 py-8">
      {props.children}
    </div>
  );
};
