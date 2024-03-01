import React from "react";

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputText: string;
}

export const TextInputAdmin: React.FC<props> = (props) => {
  return (
    <>
      <div className="flex flex-row">
        <label className="mx-4 text-lg">{props.inputText}</label>
        <input
          {...props}
          className="px-2 py-1 bg-gray-300 rounded-md"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
};
