import React from "react";
import getCurrentUser from "../lib/serverqueries/getCurrentUser";
import { Button } from "../lib/ui/Button";
import CreateJob from "../lib/ui/components/job/createJob";
import { AdminSelectUI } from "../lib/ui/components/admin/AdminSelectUI";

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

  let selectedComponent = <CreateJob />;
  return (
    <div className=" w-1/2 mx-auto py-20">
      <h1 className="text-xl font-bold">Welcome to admin page!</h1>

      <AdminSelectUI />
    </div>
  );
};

export default Page;
