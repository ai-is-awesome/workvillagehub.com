import Image from "next/image";
import React from "react";
import profilePic from "../../../../../public/icon-4.png";
export const MobileTopBar = () => {
  return (
    <div className="flex justify-between items-center lg:hidden mb-4 px-2">
      <Image src={profilePic} alt="F" height={50} />
      <p className="rounded-full bg-brandMain text-white px-4 py-2">P</p>
    </div>
  );
};
