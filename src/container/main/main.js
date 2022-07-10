import React from "react";
import Footer from "../footer/footer";
import Head from "../header/head";
import Home from "../home/home";
import { Welcome } from "../welcome/welcome";
import "./style/main.css";
const Main = () => {
  return (
    <div className="container">
      <div className="foot">
        <Footer />
      </div>
      <div className="main">
        <Head />
        <Welcome />
        <Home />
        <h1>main</h1> <h1>main</h1> <h1>main</h1>
        <h1>main</h1>
        <h1>main</h1>
        <h1>main</h1>
      </div>
    </div>
  );
};

export default Main;
