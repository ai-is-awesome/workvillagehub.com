import React from "react";
import Modal from "../components/Modal";
import { LoginWithGoogleButton } from "../Buttons/LoginWithGoogleButton";

interface LoginWithGoogleModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectTo?: string;
}
export const LoginWithGoogleModal: React.FC<LoginWithGoogleModalProps> = (
  props
) => {
  return (
    <Modal
      onClose={props.onClose}
      modalHeading="Login to continue"
      isOpen={props.isOpen}
    >
      <div className="w-1/2 mx-auto mt-8">
        <LoginWithGoogleButton redirectTo={props.redirectTo} />
      </div>
    </Modal>
  );
};
