import Image from "next/image";
import React from "react";
import profilePic from "../../../../../public/icon-3.png";
export const MobileTopBar = () => {
  return (
    <div className="flex justify-between items-center lg:hidden">
      <Image src={profilePic} alt="F" height={50} />
      <p>Piyush Lamba</p>
    </div>
  );
};
