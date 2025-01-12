import { ReactElement } from "react";
import { NavLink } from "react-router";

import "./appFooter.scss";

const AppFooter = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src="/Testing-App/resources/rus.avif" alt="rus" className="footer__icon-img" />
        <nav className="footer__nav">
          <NavLink to="/Testing-App/" className="footer__link">
            Main
          </NavLink>
          <NavLink to="/Testing-App/age-verification" className="footer__link">
            Age Verification
          </NavLink>
          <NavLink to="/Testing-App/game" className="footer__link">
            Game
          </NavLink>
          <NavLink to="/Testing-App/privacy-policy" className="footer__link">
            Privacy Policy
          </NavLink>
          <NavLink to="/Testing-App/cookie-privacy" className="footer__link">
            Cookie Privacy
          </NavLink>
          <NavLink to="/Testing-App/terms-and-conditions" className="footer__link">
            Terms and conditions
          </NavLink>
          <NavLink to="/Testing-App/blog" className="footer__link">
            Blog
          </NavLink>
        </nav>
        <img src="/Testing-App/resources/age.png" className="footer__icon-img" />
      </div>
      <div className="footer__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eligendi,
          ab eveniet ratione tempora ipsa, animi hic in saepe quis incidunt
          sequi, odit ducimus exercitationem consectetur iusto. Voluptas, dolor!
          Est.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
