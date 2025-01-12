import { ReactElement } from "react";
import { NavLink } from "react-router";

import "./appHeader.scss";

const AppHeader = (): ReactElement => {
  return (
    <header className="header">
      <div className="header__content">
        <img src="/Testing-App/resources/rus.avif" alt="rus" className="header__icon-img" />
        <nav className="header__nav">
          <NavLink to="/Testing-App/" className="header__link">
            Main
          </NavLink>
          <NavLink to="/Testing-App/age-verification" className="header__link">
            Age Verification
          </NavLink>
          <NavLink to="/Testing-App/game" className="header__link">
            Game
          </NavLink>
          <NavLink to="/Testing-App/privacy-policy" className="header__link">
            Privacy Policy
          </NavLink>
          <NavLink to="/Testing-App/cookie-privacy" className="header__link">
            Cookie Privacy
          </NavLink>
          <NavLink to="/Testing-App/terms-and-conditions" className="header__link">
            Terms and conditions
          </NavLink>
          <NavLink to="/Testing-App/blog" className="header__link">
            Blog
          </NavLink>
        </nav>
        <img src="/Testing-App/resources/age.png" alt="rus" className="header__icon-img" />
      </div>
    </header>
  );
};

export default AppHeader;
