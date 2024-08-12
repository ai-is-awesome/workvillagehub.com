import { useContext, useState } from "react";
import { LoginWithGoogleModal } from "../Modals/LoginWithGoogleModal";
import { AuthContext } from "../../hooks/AuthContext";

const WithAuth = (OriginalComponent) => {
  const Component = (props) => {
    const auth = useContext(AuthContext);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const onClickHandler = (e) => {
      e.preventDefault();
      if (!auth.user.isLoggedIn) {
        setShowLoginModal(true);
        return;
      } else if (props.onClick) {
        props.onClick(e);
      }
    };

    return (
      <>
        <LoginWithGoogleModal
          isOpen={showLoginModal}
          onClose={() => {
            setShowLoginModal(false);
          }}
        />
        <OriginalComponent
          {...props}
          isLoggedIn={auth.user.isLoggedIn}
          onClick={(e) => onClickHandler(e)}
        />
      </>
    );
  };

  return Component;
};

export default WithAuth;
