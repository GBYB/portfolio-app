import React from "react";
import yellow_dude from "./../../assets/yellow_dude.png";
import red_dude from "./../../assets/red_dude.png";
import border_glitch from "./../../assets/glitch-border1.png";

import "./styles/welcome.css";
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__content">
        <div className="welcome__content__title">
          <div className="welcome__content__title__line">
            <div className="welcome__content__title__line__element"></div>
          </div>
          <h1 id="title">Hey There!</h1>
          <div className="welcome__content__title__line">
            <div className="welcome__content__title__line__element"></div>
          </div>
        </div>
        <div className="welcome__content__body">
          <div className="welcome__content__body__left">
            <div className="welcome__content__body__left__about">
              <h1>Welcome, I am Gilles Abou abdo.</h1>
              <h2>
                I am a Software Engineer based in Lebanon. I focus on clean and
                efficient code. Focusing now on developing websites with the
                latest technology.
              </h2>
            </div>
            <img id="yellow_dude" src={yellow_dude} alt="yellow_dude"></img>
          </div>
          <div className="welcome__content__body__right">
            <img id="red_dude" src={red_dude} alt="red_dude"></img>
          </div>
        </div>
        <div className="welcome__content__mobile">
          <div className="welcome__content__mobile__top">
            <h1>Welcome, I am Gilles Abou abdo.</h1>
          </div>
          <img id="red_dude" src={red_dude} alt="red_dude"></img>
          <div className="welcome__content__mobile__bottom">
            <h2>
              I am a Software Engineer based in Lebanon. I focus on clean and
              efficient code. Focusing now on developing websites with the
              latest technology.
            </h2>
          </div>
        </div>
        <img id="border-glitch" src={border_glitch} alt="glitch"></img>
      </div>
      <div className="welcome__style">
        <div className="welcome__style__top">
          <div className="welcome__style__top__rect_1"></div>
          <div className="welcome__style__top__rect_2">
            <div className="welcome__style__top__rect_2_rect"></div>
            <div className="welcome__style__top__rect_2_circ"></div>{" "}
            <div className="welcome__style__top__rect_2_circ_red"></div>
            <div className="welcome__style__top__rect_2_circ_red"></div>{" "}
            <div className="welcome__style__top__rect_2_circ_red"></div>
          </div>
        </div>
        <div className="welcome__style__bottom">
          <div className="welcome__style__bottom__rect_1">
            <div className="welcome__style__bottom__rect_1_rect"></div>
          </div>
          <div className="welcome__style__bottom__rect_2">
            <div className="welcome__style__bottom__rect_2_rect"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
