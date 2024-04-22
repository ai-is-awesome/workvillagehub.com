"use client";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modelHeading: string;
}

const Modal: React.FC = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true);
  if (isOpen) {
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
        className="shadow-lg bg-gray-100   left-1/2 p-4 w-1/2 min-h-[50%]"
      >
        <button className="absolute right-[1rem]">X</button>
        <h2 className="text-center text-lg font-semibold tracking-wide">
          {props.modelHeading}{" "}
        </h2>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
