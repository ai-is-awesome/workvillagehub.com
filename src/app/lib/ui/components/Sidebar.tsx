import React, { useContext } from "react";
import { Button } from "../buttonShad";
import { FcGoogle } from "react-icons/fc";
import clsx from "clsx";
import { AuthContext } from "../../hooks/AuthContext";
import { log } from "console";

export const Sidebar = ({ className }: { className?: string }) => {
  const classes = clsx("flex-grow-1", "bg-gray-100 px-10 min-h-screen");
  const auth = useContext(AuthContext);

  const loggedInJSX = (
    <div className="flex justify-center">
      <div className="">
        <p className="">Welcome, </p>
        <p className="font-bold">Piyush Lamba</p>
        <Button className="bg-red-500 my-4" onClick={auth.signOut}>
          Log out
        </Button>
      </div>
    </div>
  );

  return (
    <div
      className={
        "min-w-[300px] bg-white border border-gray-100 px-10 min-h-screen hidden lg:block "
      }
    >
      <div className="my-4">
        <a
          className="text-2xl  font-black text-brandMain cursor-pointer"
          href="/"
        >
          Work Village Hub
        </a>
      </div>

      <div className="w-1/2 mx-auto"></div>
      {/* <Button className="bg-brandMain text-white">CLICK</Button> */}
      {auth.user.isLoggedIn ? (
        loggedInJSX
      ) : (
        <div className="flex items-center bg-white px-4">
          <FcGoogle className="text-4xl" />
          <button className=" w-full py-4 ">
            <a className="font-semibold cursor-pointer">Continue with Google</a>
          </button>
        </div>
      )}
    </div>
  );
};
