import { ReactElement, useEffect, useState } from "react";

import Cookies from "js-cookie";

import "./cookieBanner.scss";

const CookieBanner = (): ReactElement | null => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccept = Cookies.get("cookiesAccepted");

    if (!cookiesAccept) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 7 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <h2 className="cookie-banner__title">
        To ensure the website works correctly, we use Cookies. This allows us to
        change settings and preferences. To continue using the site, you must
        accept the cookie agreement.
      </h2>
      <div className="cookie-banner__btns">
        <button
          onClick={handleAccept}
          className="cookie-banner__btn cookie-banner__btn-accept"
        >
          Accept
        </button>
        <a
          href="https://ru.wikipedia.org/wiki/Cookie"
          className="cookie-banner__btn cookie-banner__btn-decline"
        >
          Detail
        </a>
      </div>
    </div>
  );
};

export default CookieBanner;
