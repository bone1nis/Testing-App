import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "react-modal";

import "./ageVerificationBanner.scss";

const AgeVerificationBanner = (): ReactElement | null => {
  const [showBanner, setShowBanner] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified");

    if (!ageVerified) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ageVerified", "true");
    setShowBanner(false);

    navigate("/");
  };

  const handleDecline = () => {
    setShowBanner(false);
    navigate("/age-verification");
  };

  if (!showBanner) return null;

  return (
    <Modal
      isOpen={showBanner}
      onRequestClose={handleDecline}
      className="age-verification-banner"
      overlayClassName="age-verification-banner__overlay"
    >
      <h2 className="age-verification-banner__title">Are you over 18?</h2>
      <div className="age-verification-banner__btns">
        <button
          onClick={handleAccept}
          className="age-verification-banner__btn age-verification-banner__btn-accept"
        >
          Yes
        </button>
        <button
          onClick={handleDecline}
          className="age-verification-banner__btn age-verification-banner__btn-decline"
        >
          No
        </button>
      </div>
    </Modal>
  );
};

export default AgeVerificationBanner;
