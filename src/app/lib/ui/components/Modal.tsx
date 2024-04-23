"use client";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  modalHeading: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  if (props.isOpen) {
    return (
      <div
        style={{
          position: "fixed",
          top: "20%",
          left: "50%",
          // transform: "translate(-50%, -50%)",
          transform: "translateX(-50%)",
          padding: "1em",
          zIndex: 1000,
        }}
        className="shadow-lg bg-gray-100   left-1/2 p-4 w-1/3 min-h-[30%] rounded-md"
      >
        <button className="absolute right-[1rem]" onClick={props.onClose}>
          <IoIosCloseCircle fontSize={"1.5rem"} />
        </button>
        <h2 className="text-center text-xl tracking-tight">
          {props.modalHeading}
        </h2>
        {props.children}
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
