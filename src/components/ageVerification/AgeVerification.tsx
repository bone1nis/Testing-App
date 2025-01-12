import { ReactElement } from "react";

import "./ageVerification.scss";

const AgeVerification = (): ReactElement => {
  return (
    <div className="age-verification">
      <div className="container">
        <div className="age-verification__wrapper">
          <h2 className="age-verification__title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            cupiditate reprehenderit porro eligendi, odit animi laudantium sunt
            id accusantium. Minus magni quam dolor obcaecati mollitia quos
            itaque numquam incidunt vitae!
          </h2>
          <img
            src="/Testing-App/resources/age.png"
            alt="Age"
            className="age-verification__img"
          />
          <p className="age-verification__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            quaerat ut dolor quo consequatur corrupti ipsum officiis
            reprehenderit explicabo quia magnam sunt incidunt expedita illo
            tenetur quod deserunt inventore? Ipsum.
          </p>
          <h5 className="age-verification__subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            fugit officiis veniam, nesciunt iure perspiciatis quasi deserunt,
            ratione iusto ad atque tempora maiores! Ut, voluptatum eius et ipsa
            sed fugiat!
          </h5>
          <h5 className="age-verification__subtitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio in
            adipisci qui? Sunt suscipit blanditiis saepe minus soluta veritatis
            sint, sit officiis, ab perspiciatis possimus, eveniet molestias
            libero ratione quas.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
