import React from "react";
import MDEditor from "@uiw/react-md-editor";

export const AddJobDescription: React.FC = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");

  const handleEditorChange = (string: string) => {
    setValue(string);
  };

  return (
    <div>
      <MDEditor value={value} onChange={handleEditorChange} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
    </div>
  );
};
