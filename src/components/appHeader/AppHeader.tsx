import { ReactElement } from "react";
import { NavLink } from "react-router";

import "./appHeader.scss";

const AppHeader = (): ReactElement => {
  return (
    <header className="header">
      <div className="header__content">
        <img src="/resources/rus.avif" alt="rus" className="header__icon-img" />
        <nav className="header__nav">
          <NavLink to="/" className="header__link">
            Main
          </NavLink>
          <NavLink to="/age-verification" className="header__link">
            Age Verification
          </NavLink>
          <NavLink to="/game" className="header__link">
            Game
          </NavLink>
          <NavLink to="/privacy-policy" className="header__link">
            Privacy Policy
          </NavLink>
          <NavLink to="/cookie-privacy" className="header__link">
            Cookie Privacy
          </NavLink>
          <NavLink to="/terms-and-conditions" className="header__link">
            Terms and conditions
          </NavLink>
          <NavLink to="/blog" className="header__link">
            Blog
          </NavLink>
        </nav>
        <img src="/resources/age.png" alt="rus" className="header__icon-img" />
      </div>
    </header>
  );
};

export default AppHeader;
