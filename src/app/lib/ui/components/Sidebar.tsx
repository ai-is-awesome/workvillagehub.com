import React from "react";
import { Button } from "../buttonShad";
import { FcGoogle } from "react-icons/fc";

export const Sidebar = () => {
  return (
    <div className="bg-gray-100 px-10 min-h-screen">
      <p className="text-2xl my-4 font-black">Work Village Hub</p>
      <div className="w-1/2 mx-auto"></div>
      {/* <Button className="bg-brandMain text-white">CLICK</Button> */}
      <div className="flex items-center bg-white px-4">
        <FcGoogle className="text-4xl" />
        <button className=" w-full py-4 ">
          <a className="font-semibold cursor-pointer">Continue with Google</a>
        </button>
      </div>
    </div>
  );
};
