import React from "react";
import "./style/project.css";
import acaya from "../../assets/acaya.png";
import yellow_dude from "../../assets/yellow_dude.png";
export const Project = () => {
  return (
    <div className="project">
      <div className="project__content">
        <div className="project__content__title">
          <div className="project__content__title__line">
            <div className="project__content__title__line__element"></div>
          </div>
          <h1 id="title">Projects</h1>
          <div className="project__content__title__line">
            <div className="project__content__title__line__element"></div>
          </div>
        </div>
        <div className="project__content__body">
          <div className="project__content__body__list">
            <div className="project__content__body__list__item">
              <div className="project__content__body__list__item__head">
                <div className="project__content__body__list__item__head__title">
                  <h2>Project name</h2>
                </div>{" "}
                <img src={acaya} alt="acaya" height="64" width="64" />
              </div>
              <div className="project__content__body__list__item__description">
                <p>Project description</p>
              </div>
            </div>
          </div>
        </div>
        <img id="yellow_dude" src={yellow_dude} alt="yellow_dude"></img>
      </div>
      <div className="project__style">
        <div className="project__style__top">
          <div className="project__style__top__rect_1"></div>
          <div className="project__style__top__rect_2">
            <div className="project__style__top__rect_2_rect"></div>
            <div className="project__style__top__rect_2_circ_red"></div>
            <div className="project__style__top__rect_2_circ_red"></div>
            <div className="project__style__top__rect_2_circ"></div>
            <div className="project__style__top__rect_2_circ_red"></div>
          </div>
        </div>
        <div className="project__style__bottom">
          <div className="project__style__bottom__rect_1">
            <div className="project__style__bottom__rect_1_rect"></div>
          </div>
          <div className="project__style__bottom__rect_2">
            <div className="project__style__bottom__rect_2_rect"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
