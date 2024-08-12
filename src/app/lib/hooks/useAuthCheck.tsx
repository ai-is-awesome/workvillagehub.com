import { useState } from "react";

export function useAuthCheck(
  originalClick: (event: React.MouseEvent<HTMLElement>) => void
) {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = false;
  const handleClick = (event) => {
    if (isLoggedIn) {
      originalClick(event);
    } else {
      setShowModal(true);
    }
  };

  const AuthModal = () => {
    showModal ? <div>Auth Modal</div> : null;
  };

  return [handleClick, AuthModal];
}
