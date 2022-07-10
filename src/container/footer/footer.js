import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import "./styles/footer.css";
import vector from "./../../assets/closed-mail.svg";
// import group from "./../../assets/open-mail.svg";
import link from "./../../assets/in.svg";
import git from "./../../assets/git.svg";
const Footer = () => {
  // const [mail, setMail] = useState(
  //   <FontAwesomeIcon id="mail" icon={faEnvelope} />
  // );
  // const [mail, setMail] = useState(
  //   <img className="links" src={vector} alt="group1" id="mail" />
  // );
  // const open = (e) => {
  //   e.preventDefault();
  //   setMail(<img className="links" src={group} alt="group1" id="mail" />);
  // };

  // const close = (e) => {
  //   e.preventDefault();
  //   // setMail(<FontAwesomeIcon id="mail" icon={faEnvelope} />);
  //   setMail(<img className="links" src={vector} alt="group1" id="mail" />);
  // };

  return (
    <div className="footer">
      <div>
        <a href="#mail">
          <img id="mail" className="links" src={vector} alt="mail" />
          {/* <img id="open" className="links" src={group} alt="mail" /> */}
        </a>
      </div>
      <div>
        <a href="https://github.com/GBYB">
          {/* <i className="fa-brands fa-github" id="git" /> */}
          <img id="git" className="links" src={git} alt="git" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/gilles-abou-abdo-9a0880229/">
          {/* <i className="fa-brands fa-linkedin" id="in" /> */}
          <img id="in" className="links" src={link} alt="linkedin" />
        </a>
      </div>
      {/* <div onMouseOver={open} onMouseOut={close}> {mail}</div>*/}
      {/* <FontAwesomeIcon
        onMouseOver={open()}
        onMouseOut={close()}
        className="icons"
        id="mail"
        icon={faEnvelope}
      /> */}
    </div>
  );
};
export default Footer;
