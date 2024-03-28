import React from "react";
import MDEditor from "@uiw/react-md-editor";

interface props {
  value: string;
  onChange: (value: string) => void;
}

export const AddJobDescription: React.FC<props> = ({ value, onChange }) => {
  return (
    <div>
      <MDEditor value={value} onChange={onChange} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
    </div>
  );
};
