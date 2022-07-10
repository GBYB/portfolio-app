import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/head.css";
import bar from "./../../assets/bar.svg";
const Head = () => {
  // const [isBar, setisBar] = useState(<FontAwesomeIcon icon={faBars} />);
  const [isBar, setisBar] = useState(<img src={bar} alt="bar" />);

  const [isClicked, setisClicked] = useState(true);
  const display = () => {
    let node = document.getElementsByClassName("mobile__head");
    if (isClicked) {
      console.log("hi");
      node[0].style.display = "flex";
      setisClicked(false);
      node = document.getElementsByClassName("mobile");
      node = document.querySelector("#bar");
      node.style.stroke = "white";

      // setisBar(<FontAwesomeIcon icon={faBars} />);
    } else {
      console.log("bye");
      node[0].style.display = "none";
      setisClicked(true);
      node = document.getElementsByClassName("mobile");
      node = document.querySelector("#bar");
      node.style.stroke = "#7f181b";
      // setisBar(<FontAwesomeIcon icon={faBars} />);
    }
  };

  return (
    <div className="head">
      <div className="desktop">
        <div className="list">
          <div id="home">
            <h2>Home</h2>
          </div>
          <div id="project">
            <h2>Projects</h2>
          </div>
          <div id="contact">
            <h2>Contact</h2>
          </div>
        </div>
        <div className="empty"></div>
      </div>
      <div className="mobile">
        <div className="bar" onClick={display}>
          <svg
            id="bar"
            width="40"
            height="28"
            viewBox="0 0 40 28"
            fill="#7f181b"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#7f181b"
          >
            <path d="M3 3H37" strokeWidth={5} strokeLinecap="round" />
            <path d="M3 13.5238H37" strokeWidth={5} strokeLinecap="round" />
            <path d="M3 24.5873H37" strokeWidth={5} strokeLinecap="round" />
          </svg>
        </div>
        <div className="mobile__head">
          {" "}
          <div id="home">
            <h3>Home</h3>
          </div>
          <div id="project">
            <h3>Projects</h3>
          </div>
          <div id="contact">
            <h3>Contact</h3>
          </div>
          {/* <h2>Title</h2> */}
        </div>
        <div className="mobile__body">
          <div id="home">
            <h3>Home</h3>
          </div>
          <div id="project">
            <h3>Projects</h3>
          </div>
          <div id="contact">
            <h3>Contact</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Head;
