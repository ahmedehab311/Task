import React from "react";
import logo from "../../images/logo.svg";
import icon1 from "../../images/iconact2.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
import icon4 from "../../images/icon4.svg";
import icon5 from "../../images/tarding.svg";

import "./sideMenu.css";
function sideMenu() {
  return (
    <>
      <nav className="sidebar ">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="icons">
          <li>
            <img src={icon1} alt="" />
            <p>Alerts</p>
          </li>
          <li>
            <img src={icon2} alt="" />
            <p>Training</p>
          </li>
          <li>
            <img src={icon3} alt="" />
            <p>Automation</p>
          </li>
          <li>
            <img src={icon4} alt="" />
            <p>Portfolio</p>
          </li>
          <li>
            <img src={icon5} alt="" />
            <p>Trading</p>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default sideMenu;
