import { ReactElement } from "react";
import { NavLink } from "react-router";

import age from "../../assets/images/age.png"
import rus from "../../assets/images/rus.avif"

import "./appFooter.scss";

const AppFooter = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="container">
      <div className="footer__content">
        <img src={rus} alt="rus" className="footer__icon-img" />
        <nav className="footer__nav">
          <NavLink to="/" className="footer__link">
            Main
          </NavLink>
          <NavLink to="/age-verification" className="footer__link">
            Age Verification
          </NavLink>
          <NavLink to="/game" className="footer__link">
            Game
          </NavLink>
          <NavLink to="/privacy-policy" className="footer__link">
            Privacy Policy
          </NavLink>
          <NavLink to="/cookie-privacy" className="footer__link">
            Cookie Privacy
          </NavLink>
          <NavLink to="/terms-and-conditions" className="footer__link">
            Terms and conditions
          </NavLink>
          <NavLink to="/blog" className="footer__link">
            Blog
          </NavLink>
        </nav>
        <img src={age} className="footer__icon-img" />
      </div>
      <div className="footer__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eligendi,
          ab eveniet ratione tempora ipsa, animi hic in saepe quis incidunt
          sequi, odit ducimus exercitationem consectetur iusto. Voluptas, dolor!
          Est.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default AppFooter;
