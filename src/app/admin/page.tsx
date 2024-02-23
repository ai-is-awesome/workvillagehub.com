import React from "react";
import getCurrentUser from "../lib/serverqueries/getCurrentUser";

const Page: React.FunctionComponent = async () => {
  // async component
  const resp = await getCurrentUser();
  if (resp.error) {
    return <div>Whoops, get off this private land!</div>;
  }
  if (resp.data.roleId === 2) {
    return (
      <div>
        Okay, so this routes works and youve discovered it. Wonderful stuff but
        please lets go back to the{" "}
        <a href="/" className="text-blue-500 font-bold">
          Home Page
        </a>{" "}
        and find some cool jobs!
      </div>
    );
  }
};

export default Page;
