import React, { CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Logo from "../../../../../public/icon-4.png";
import Image from "next/image";
export const Loader = () => {
  const override: CSSProperties = {
    color: "gray",
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <Image
          src={Logo}
          width={"80"}
          className="m-[-5px]"
          alt="work village hub"
        />
        <ScaleLoader height={30} width={6} color="#073b4c" />
      </div>
    </div>
  );
};
