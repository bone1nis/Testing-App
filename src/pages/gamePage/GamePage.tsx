import { ReactElement } from "react";

import "./gamePage.scss";

const GamePage = (): ReactElement => {
  return (
    <>
      <div className="game">
        <div className="container">
          <div className="game__wrapper">
            <iframe
              src="https://esporte-br77.com/game-dir/index.html"
              width="800"
              height="600"
              className="game__iframe"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
