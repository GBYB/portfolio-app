import React, { useState } from "react";
import Footer from "../footer/footer";
import Head from "../header/head";
import Home from "../home/home";
import Project from "../project/project";
import Welcome from "../welcome/welcome";
import "./style/main.css";
const Main = () => {
  // const [title, setTitle] = useState("");
  // const home_over = () => {
  //   console.log("home");
  //   setTitle("home");
  //   if (document.getElementById("title_mobile") !== null) {
  //     document.getElementById("title_mobile").innerText = { title };
  //   }
  // };
  // const project_over = () => {
  //   console.log("project");
  //   setTitle("project");

  //   if (document.getElementById("title_mobile") !== null) {
  //     document.getElementById("title_mobile").innerText = { title };
  //   }
  // };
  // const welcome_over = () => {
  //   console.log("welcome");
  //   setTitle("welcome");
  //   if (document.getElementById("title_mobile") !== null) {
  //     document.getElementById("title_mobile").innerText = { title };
  //   }
  // };
  // for (let i = 0; i < document.getElementsByClassName("welcome").length; i++) {
  //   document
  //     .getElementsByClassName("welcome")
  //     [i].addEventListener("onmouseover", welcome_over, false);
  // }
  // for (let i = 0; i < document.getElementsByClassName("home").length; i++) {
  //   document
  //     .getElementsByClassName("home")
  //     [i].addEventListener("onmouseover", home_over, false);
  // }
  // for (let i = 0; i < document.getElementsByClassName("project").length; i++) {
  //   document
  //     .getElementsByClassName("project")
  //     [i].addEventListener("onmouseover", project_over, false);
  // }

  // const contact_over = () => {
  //   console.log("contact");
  //   if (document.getElementById("title_mobile") !== null) {
  //     document.getElementById("title_mobile").innerText = "contact";
  //   }
  // };
  //console.log(document.getElementsByClassName("home"));
  //console.log(title);
  return (
    <div className="container">
      <div className="foot">
        <Footer />
      </div>
      <div className="main">
        <Head />
        <Welcome />
        <Home />
        <Project />
        <h1>main</h1> <h1>main</h1> <h1>main</h1>
        <h1>main</h1>
        <h1>main</h1>
        <h1>main</h1>
      </div>
    </div>
  );
};

export default Main;
