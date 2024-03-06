import React from "react";
import "./Header.css";
import ARKLogo from "../../assets/ARKLogo.png";
import Menu from "../Menu/Menu";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={ARKLogo} className="logo-img" />
        </div>
        <div className="menu-container">
          <Menu number={1} menu="About" />
          <Menu number={2} menu="Services" />
          <Menu number={3} menu="Projects" />
          <Menu number={4} menu="Team" />
          <Menu number={5} menu="Blog" />

        </div>
        <button className="nav-menu">Menu</button>
      </div>

      <hr />
    </div>
  );
}
