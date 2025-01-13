import { ReactElement } from "react";
import { NavLink } from "react-router";

import age from "../../assets/images/age.png"
import rus from "../../assets/images/rus.avif"

import "./appHeader.scss";

const AppHeader = (): ReactElement => {
  return (
    <header className="header">
      <div className="container">
      <div className="header__content">
        <img src={rus} alt="rus" className="header__icon-img" />
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
        <img src={age} alt="rus" className="header__icon-img" />
      </div>
      </div>
    </header>
  );
};

export default AppHeader;
