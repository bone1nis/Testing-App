import { ReactElement } from "react";
import { Link } from "react-router";

import AgeVerification from "../../components/ageVerification/AgeVerification";

import girl from "../../assets/images/girl.avif"
import age from "../../assets/images/age.png"

import "./mainPage.scss";

const MainPage = (): ReactElement => {
  return (
    <>
      <AgeVerification />
      <div className="promotional-banner">
        <div className="container">
          <div className="promotional-banner__wrapper">
            <img
              src={girl}
              alt="rus"
              className="promotional-banner__img"
            />
            <div className="promotional-banner__info">
              <h4 className="promotional-banner__title">Title</h4>
              <p className="promotional-banner__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis sed quidem vitae, aperiam perspiciatis quod,
                quaeratblanditiis quia eaque autem architecto saepe, sint ipsum
                accusantium corporis? Quo nam eius quaerat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="game-banner">
        <div className="container">
          <div className="game-banner__wrapper">
            <h2 className="game-banner__title">Title</h2>
            <p className="game-banner__subtitle">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              aspernatur atque asperiores, fuga nisi illo voluptatibus quasi
              reprehenderit dolores beatae expedita officiis? Consequuntur est
              dolore ad dolorum laborum, nemo reprehenderit.
            </p>
            <Link to="/game" className="game-banner__btn">
              To game
            </Link>
          </div>
        </div>
      </div>
      <div className="advantages">
        <div className="container">
          <h2 className="advantages__title">advantages</h2>
          <div className="advantages__content">
            <div className="advantages__section">
              <h4 className="advantages__subtitle">Subtitle</h4>
              <p className="advantages__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, minima saepe commodi architecto a sint dolores rem
                dolorem accusantium hic, beatae autem. Non voluptas, veritatis
                aperiam magni est cupiditate repudiandae?
              </p>
            </div>
            <div className="advantages__section">
              <h4 className="advantages__subtitle">Subtitle</h4>
              <p className="advantages__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, minima saepe commodi architecto a sint dolores rem
                dolorem accusantium hic, beatae autem. Non voluptas, veritatis
                aperiam magni est cupiditate repudiandae?
              </p>
            </div>
            <div className="advantages__section">
              <h4 className="advantages__subtitle">Subtitle</h4>
              <p className="advantages__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, minima saepe commodi architecto a sint dolores rem
                dolorem accusantium hic, beatae autem. Non voluptas, veritatis
                aperiam magni est cupiditate repudiandae?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="about__wrapper">
            <h2 className="about__title">Title</h2>
            <p className="about__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate ea quaerat voluptas quo, vitae in praesentium. Autem
              reiciendis similique commodi possimus, sapiente placeat in ipsa
              quas deleniti natus atque quaerat?
            </p>
            <h4 className="about__subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              maiores saepe, repudiandae eligendi quam facere hic dicta ex a
              pariatur sed natus quae consequuntur quibusdam exercitationem
              ipsum temporibus deserunt? Dolore?
            </h4>
            <h4 className="about__subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in,
              consequuntur eveniet ipsam voluptate aspernatur assumenda dolore
              molestias eligendi, saepe ratione vero, voluptatum quae dolor sint
              nam modi error! Distinctio?
            </h4>
            <img src={age} alt="age" className="about__img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
