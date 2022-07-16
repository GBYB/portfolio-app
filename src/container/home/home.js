import React from "react";
import Head from "../header/head";
import { Welcome } from "../welcome/welcome";
import "./style/home.css";
import border_glitch from "./../../assets/glitch-border1.png";

const Home = () => {
  let skillsArr = [
    "Assembly",
    "C++/C",
    "CSS",
    "HTML",
    "Java",
    "Javascript",
    "TypeScript",
    "Python",
  ];
  let bioArr = [
    "Software engineer graduate",
    "Working as a web developer",
    "Keen for building practical and advanced applications",
    "Aiming to become a full-time intern",
  ];
  const items_skills = skillsArr.map((element, id) => (
    <li key={id}>{element}</li>
  ));
  const items_bio = bioArr.map((element, id) => <li key={id}>{element}</li>);
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content__title">
          <div className="home__content__title__line">
            <div className="home__content__title__line__element"></div>
          </div>
          <h1 id="title">Gilles Abou Abdo</h1>
          <div className="home__content__title__line">
            <div className="home__content__title__line__element"></div>
          </div>
        </div>
        <div className="body">
          <div className="bio">
            <h1 className="body__title">Biography</h1>
            <ul>{items_bio}</ul>
          </div>
          <div className="skills">
            <h1 className="body__title">Skills</h1>
            <ul>{items_skills}</ul>
          </div>
        </div>
        <img id="border-glitch" src={border_glitch} alt="glitch"></img>
      </div>
      <div className="home__style">
        <div className="home__style__top">
          <div className="home__style__top__rect_1"></div>
          <div className="home__style__top__rect_2">
            <div className="home__style__top__rect_2_rect"></div>
            <div className="home__style__top__rect_2_circ_red"></div>{" "}
            <div className="home__style__top__rect_2_circ"></div>
            <div className="home__style__top__rect_2_circ_red"></div>{" "}
            <div className="home__style__top__rect_2_circ_red"></div>
          </div>
        </div>
        <div className="home__style__bottom">
          <div className="home__style__bottom__rect_1">
            <div className="home__style__bottom__rect_1_rect"></div>
          </div>
          <div className="home__style__bottom__rect_2">
            <div className="home__style__bottom__rect_2_rect"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
