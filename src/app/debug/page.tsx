"use client";

import { useEffect } from "react";
import isAdmin from "../lib/actions/isAdmin";
import { LoginWithGoogleButton } from "../lib/ui/Buttons/LoginWithGoogleButton";
import { TechnologiesSelect } from "../lib/ui/Dropdown/TechnologiesSelect";
import Modal from "../lib/ui/components/Modal";
import WithAuth from "../lib/ui/components/withAuth";

const Page: React.FunctionComponent = () => {
  // const admin = await isAdmin();
  // if (!admin) {
  //   return <div>Whoops, {"you're"} on the wrong page</div>;
  // }
  // console.log("rendering");
  useEffect(() => {}, []);
  const AuthBtn = WithAuth(() => {
    return <div>HELLo</div>;
  });

  return (
    <div>
      <p className="text-center text-2xl py-8 font-bold">
        Welcome to the debug page
      </p>

      <div className="w-2/3 mx-auto py-16 px-8 shadow-md">
        <AuthBtn />
      </div>
    </div>
  );
};

export default Page;
