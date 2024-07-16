"use client";

import { AuthContext } from "@/app/lib/hooks/AuthContext";
import React, { useContext } from "react";
import Modal from "../Modal";

export const JobLinkButton = () => {
  const auth = useContext(AuthContext);

  const onClickHandler = () => {};

  return (
    <div>
      <Modal isOpen={false} onClose={() => true}></Modal>
      <button onClick={onClickHandler}>Apply</button>;
    </div>
  );
};
